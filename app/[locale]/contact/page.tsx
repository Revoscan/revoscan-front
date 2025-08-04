'use client'
import React from "react";
import Image from "next/image";
import Input from "@/components/input";
import PhoneInput from 'react-phone-input-2'
import "../../../styles/react-phone-input.css";
import {Button} from "@/components/button";
import {useTranslations} from "next-intl";

export default function ExpertisePage() {
    const t = useTranslations('ContactPage');
    const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(undefined);

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-[50vh] px-8 bg-black'>
                <h1 className="text-center inline text-[2.3rem] lg:text-5xl z-1 text-[#BABABA] leading-[110%] tracking-normal">
                    {t.rich('title', {
                        blanc: (chunks) => <span className='text-white'>{chunks}</span>
                    })}
                </h1>
            </div>
            <section className="flex flex-col items-center justify-center bg-black text-white pb-32 mask-b-from-90% mask-to-transparent">
                <ul className='flex flex-col justify-center items-center md:flex-row gap-8 md:gap-12 mb-8 z-1'>
                    <li className='flex gap-4 items-center'>
                        <Image aria-hidden={true} width={20} height={20} src="/picto-contact-01.svg" alt=""/>
                    Rue Jean-Violette 3, 1405, Genève
                </li>
                <li className='flex gap-2 items-center'>
                    <Image aria-hidden={true} width={30} height={30} src="/picto-contact-02.svg" alt=""/>
                    +41 22 344 44 42
                </li>
                <li className='flex gap-2 items-center'>
                    <Image aria-hidden={true} width={20} height={20} src="/picto-contact-03.svg" alt=""/>
                    info@revoscan.ch
                </li>
            </ul>

            <form action="" className=' z-1'>
                <div className='flex flex-col md:flex-row gap-4 mt-8 w-full z-1'>
                    <Input label='Votre prénom' placeholder='ex: John' type='text' required={true}/>

                    <Input label='Votre nom' placeholder='ex: Doe' type='text' required={true}/>
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-4 w-full z-1'>
                    <Input label='Votre email' placeholder='ex: example@gmail.com' type='email' required={true}/>

                    <label className="w-full flex flex-col gap-2 mt-4 z-1">
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
                                marginTop: '.5rem'
                            }}
                            dropdownStyle={{color: '#100a18'}}
                            inputStyle={{background: 'transparent', color: 'white', border: 'none', width: '90%'}}
                            buttonStyle={{backgroundColor: 'transparent', color: 'white', border: 'none'}}
                        />
                    </label>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mt-4 w-full z-1'>
                    <textarea name="" id="" cols={30} rows={10}
                              className="rounded-lg shadow-[inset_0_0_4px_rgba(255,255,255,0.6)] px-4 py-2 mt-2 w-full mt-8"
                              placeholder="Votre message ici... "
                    ></textarea>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mt-4 w-full z-1'>
                    <Button
                        type='submit'
                        className='mx-auto'
                    >
                        Valider
                    </Button>
                </div>
            </form>
        </section>
        </>
    );
}