import React from 'react'
import { useTranslation } from 'react-i18next';
import { Bounce } from 'react-reveal';
import Link from 'next/link';
import Image from 'next/image';
export const FooterLayout = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="flex justify-center pt-5 lg:px-4 px-7 gap-14 bg-[#fafafa]">
                <div className="flex flex-wrap justify-start lg:justify-around gap-9 w-full max-w-6xl pt-8">
                    {/* arreglar con los links de la vista original */}
                    <Bounce cascade>
                        <ul className='flex flex-col'>
                            <li>
                                <h2 className='text-xl font-semibold relative border-top'>{t("Services")}</h2>
                            </li>
                            <div className="flex flex-col gap-5 mt-5 h-56">
                                <li className='uppercase hover:underline'>
                                    <Link href='/donation'>
                                        {t("Registration Campaign")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link
                                        href='/join-us'
                                    >
                                        {t("Join us")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link
                                        href="https://world-animal-registry.gitbook.io/world-animal-registry/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {t("war wiki")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link
                                        href="https://world-animal-registry.gitbook.io/world-animal-registry/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className='capitalize'
                                    >
                                        {t("About Us")}
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Bounce>
                    {/*  */}
                    <Bounce cascade>
                        <ul className='flex flex-col'>
                            <li>
                                <h2 className='text-xl font-semibold relative border-top'>{t("Navigation")}</h2>
                            </li>
                            <div className="flex flex-col gap-5 mt-5 h-56">
                                <li className='uppercase hover:underline'>
                                    <Link href="/consulta">
                                        {t("WORLD RECORD")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link
                                        Link
                                        href="#news"
                                        rel="noreferrer noopener"
                                    >
                                        {t("News")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link href='/contact'>
                                        {t("CONTACT")}
                                    </Link>
                                </li>
                                <li className='uppercase hover:underline'>
                                    <Link href='/directory'>
                                        {t("directory")}
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Bounce>
                    {/*  */}
                    <Bounce cascade>
                        <div className='flex flex-col'>
                            <div>
                                <h2 className='text-xl font-semibold relative border-top mb-3'>{t("Follow us")}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Link
                                    href="https://www.facebook.com/World-Animal-Registry-110574308218058/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all duration-300'
                                >
                                    <svg className=' fill-white'
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://twitter.com/WorldAniReg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all duration-300'
                                >
                                    <svg className=' fill-white'
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/worldanimalregistry/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all duration-300'
                                >
                                    <svg className=''
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                        <path d="M16.5 7.5l0 .01"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@worldanimalregistry"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all duration-300'
                                >
                                    <svg className=''
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </Bounce>
                    <Bounce cascade>
                        <div className='w-64 flex items-center flex-col relative -top-10'>
                            <div className="w-full h-48 relative">
                                <Image
                                    src="/img/logo-war.webp"
                                    // layout="responsive"
                                    width={200}
                                    height={200}
                                    alt="image"
                                    className='object-cover w-full h-full scale-75 absolute'
                                />
                            </div>
                            <p className='text-center text-[.8rem] pt-5 relative -top-8'>
                                {t("The World Animal Registry is an organization decentralized international agency that works to formalize the registration of animals, to strengthen the responsible animal ownership system worldwide")}.
                            </p>
                        </div>
                    </Bounce>
                    {/*  */}
                    {/* <div className='flex flex-col'>
                        <div>
                            <h2 className='text-xl font-semibold relative border-top'>
                                {
                                    t("Subscribe for more news")
                                }
                            </h2>
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Correo electronico"
                                className='bg-gray-100 px-4 py-3 rounded-lg w-full'
                            />
                            <button
                                className='bg-sky-500 hover:bg-sky-300 transition-all duration-300 text-white px-4 py-3 font-semibold rounded-lg'
                            >
                                {t("Subscribe")}
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>


            <div className="flex justify-center bg-[#00a99d] flex-wrap gap-8 px-5 py-4">
                <div className="max-w-6xl flex justify-between gap-4">
                    <Link
                        className="text-white hover:text-gray-300 transition-all duration-300 font-bold"
                        href="/"
                    >
                        Copyrigth @ 2023 {t("All rights reserved")}
                    </Link>
                    <h2
                        className="text-white hover:text-gray-300 transition-all duration-300 font-bold"
                    >
                        {" "}
                        {
                            t("Designed by ")
                        }
                        Qolkrex Fundation
                    </h2>

                </div>
            </div>
        </>
    )
}
