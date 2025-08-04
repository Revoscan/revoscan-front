import {apiPost} from "@/utils/api.client";

export async function bookAppointment() {
    await apiPost(
        '/booking',
        {
            nom: 'Toto',
            prenom: 'Titi',
            email: 'example@gmail.com',
            telephone: '+33612345678',
            date: '2026-04-21',
            heure: '14:30',
            langue: 'fr',
            sexe: 'homme',
        },
        'acessToken'
    )
}