import Input from "@/components/input";
import Select from "@/components/select";
import PhoneInput from "react-phone-input-2";
import '../../../styles/react-phone-input.css'
import {Button} from "@/components/button";
import React from "react";

export default function InscriptionForm() {
    const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(undefined);

    return (
        <form action="" className='flex flex-col px-8'>
            <Input label='Choisissez une date' placeholder={'ex: 21/04/2026'} type='date' required={true}/>

            <Input label='Choisissez une heure (CET)' placeholder={'ex: 14:30'} type='time' required={true}/>

            <div className='flex flex-col md:flex-row gap-4 mt-8 w-full z-1'>
                <Input label='Votre prénom' placeholder='ex: John' type='text' required={true}/>

                <Input label='Votre nom' placeholder='ex: Doe' type='text' required={true}/>
            </div>

            <div className='flex flex-col md:flex-row gap-4 mt-4 w-full z-1'>
                <Input label='Votre email' placeholder='ex: example@gmail.com' type='email' required={true}/>

                <label className="w-full md:w1/2 flex flex-col gap-2 mt-4 z-2">
                    <span>Votre téléphone{' '}<span className="text-red-500 inline">*</span></span>
                    <PhoneInput
                        country={'fr'}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        onlyCountries={['fr', 'ch', 'be', 'de', 'it', 'es', 'us', 'uk', 'lu']}
                        autoFormat={true}
                        autocompleteSearch={true}
                        containerStyle={{
                            borderRadius: '9999px',
                            boxShadow: 'inset 0 0 4px rgba(255,255,255,0.6)',
                            padding: '.7rem',
                            marginTop: '.5rem',
                            zIndex: 2
                        }}
                        dropdownStyle={{color: '#100a18', zIndex: 2}}
                        inputStyle={{background: '#100a18', color: 'white', border: 'none', zIndex: 2, width: '90%'}}
                        buttonStyle={{background: 'transparent', color: 'white', border: 'none', zIndex: 2}}
                    />
                </label>
            </div>

            <div className='flex flex-col md:flex-row gap-4 my-8 w-full z-1'>
                <Select label='Langue préférée'
                        options={[{value: 'fr', label: 'Français'}, {value: 'en', label: 'English'}]}
                        required={true}/>

                <Select label='Votre sexe'
                        options={[{value: 'homme', label: 'Homme'}, {value: 'femme', label: 'Femme'}]}
                        required={true}/>
            </div>

            <Button
                type='submit'
                className='self-center'
            >
                Valider
            </Button>
        </form>
    )
}