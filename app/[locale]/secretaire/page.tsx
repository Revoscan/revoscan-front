'use client'

import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    ColumnDef,
    flexRender,
    SortingState,
} from '@tanstack/react-table';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Input from "@/components/input";

// Types
enum StatutDemandeRdv {
    EN_ATTENTE = 'En attente',
    CONFIRME = 'Confirmé',
    ANNULE = 'Annulé',
    TERMINE = 'Terminé',
    REFUSE = 'Refusé',
}

type DemandeRdv = {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    dateDemande: string;
    dateSouhaitee: string;
    statut: StatutDemandeRdv;
};

// Fake data
const demandesRdv: DemandeRdv[] = [
    {
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'jean.dupont@example.com',
        telephone: '0600000000',
        dateDemande: '2025-07-21',
        dateSouhaitee: '2025-07-25',
        statut: StatutDemandeRdv.EN_ATTENTE,
    },
    {
        nom: 'Martin',
        prenom: 'Claire',
        email: 'claire.martin@example.com',
        telephone: '0611111111',
        dateDemande: '2025-07-20',
        dateSouhaitee: '2025-07-27',
        statut: StatutDemandeRdv.CONFIRME,
    },
    {
        nom: 'Durand',
        prenom: 'Pierre',
        email: 'durand.pierre@example.com',
        telephone: '0622222222',
        dateDemande: '2025-07-19',
        dateSouhaitee: '2025-07-30',
        statut: StatutDemandeRdv.TERMINE,
    }
];

function getChipColorFromStatut(
    statut: StatutDemandeRdv
): "success" | "warning" | "danger" | "primary" | "default" | "secondary" | undefined {
    switch (statut) {
        case StatutDemandeRdv.CONFIRME:
            return "success";
        case StatutDemandeRdv.EN_ATTENTE:
            return "warning";
        case StatutDemandeRdv.ANNULE:
        case StatutDemandeRdv.REFUSE:
            return "danger";
        case StatutDemandeRdv.TERMINE:
            return "primary";
        default:
            return "default";
    }
}

export default function AdminPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedRdv, setSelectedRdv] = useState<DemandeRdv | null>(null);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState('');

    const columns: ColumnDef<DemandeRdv>[] = [
        {
            accessorKey: 'dateDemande',
            header: 'Date de demande',
        },
        {
            accessorKey: 'nom',
            header: 'Nom',
        },
        {
            accessorKey: 'prenom',
            header: 'Prénom',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'telephone',
            header: 'Téléphone',
        },
        {
            accessorKey: 'dateSouhaitee',
            header: 'Date RDV souhaitée',
        },
        {
            id: 'statut',
            header: 'Statut',
            cell: ({ row }) => (
                <Chip color={getChipColorFromStatut(row.original.statut)}>
                    {row.original.statut}
                </Chip>
            ),
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => (
                <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={() => handleEdit(row.original)}
                >
                    Éditer
                </button>
            ),
        },
    ];

    const table = useReactTable({
        data: demandesRdv,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const handleEdit = (rdv: DemandeRdv) => {
        setSelectedRdv(rdv);
        onOpen();
    };

    return (
        <div className="p-8 bg-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Demandes de rendez-vous</h1>

            <div className='bg-black w-full md:w-1/2 rounded-md mx-auto p-4 mb-8'>
                <Input label='Rechercher' placeholder='Filtrer les demandes...' type='text' value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)}/>
            </div>

            <table className="min-w-full border border-gray-200 rounded shadow-sm text-black">
                <thead className="bg-gray-100">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className="px-4 py-2 text-left border-b cursor-pointer select-none"
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                <span className="ml-1 text-sm">
                    {{
                        asc: '▲',
                        desc: '▼',
                    }[header.column.getIsSorted() as string] ?? ''}
                  </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr
                        key={row.id}
                        className={`${
                            row.original.statut === StatutDemandeRdv.TERMINE ||
                            row.original.statut === StatutDemandeRdv.ANNULE
                                ? 'text-gray-500 bg-gray-100'
                                : ''
                        }`}
                    >
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="px-4 py-2 border-b">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Éditer la demande</ModalHeader>
                            <ModalBody>
                                {selectedRdv ? (
                                    <div className="space-y-2">
                                        <p><strong>Nom:</strong> {selectedRdv.nom}</p>
                                        <p><strong>Prénom:</strong> {selectedRdv.prenom}</p>
                                        <p><strong>Email:</strong> {selectedRdv.email}</p>
                                        <p><strong>Téléphone:</strong> {selectedRdv.telephone}</p>
                                        <p><strong>Date de demande:</strong> {selectedRdv.dateDemande}</p>
                                        <p><strong>Date souhaitée:</strong> {selectedRdv.dateSouhaitee}</p>
                                    </div>
                                ) : (
                                    <p>Aucune demande sélectionnée.</p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>Fermer</Button>
                                <Button color="primary" onPress={onClose}>Sauvegarder</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
