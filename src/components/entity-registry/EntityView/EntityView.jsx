import Image from 'next/image'
import React from 'react'
import { EntitySlide } from '../EntitySlider/EntitySlide'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export const EnityView = () => {
    const { t } = useTranslation()
    return (
        <div className='flex items-center w-full min-h-[72vh]'>
            <div className="w-full flex flex-col items-center lg:flex-row justify-center px-14 gap-20">
                <div className="flex relative max-w-xl">
                    <Image
                        src="/img/entity/recurso-156.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                    <Image
                        src="/img/entity/recurso-157.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover absolute top-0 left-0"
                    />
                </div>
                <div className="flex flex-col justify-start items-start pb-10 lg:pb-0">
                    <div className="flex flex-col items-center py-3">
                        <h2
                            className="text-4xl font-bold text-[#29abe3] text-center pb-4"
                        >
                            {t("Registering Entities")}
                        </h2>
                        <p className='max-w-md text-center'>
                            {t("Join and become a registrar for the War website! We want to invite all veterinarians to become part of our platform and give them the opportunity to register their adopters and their beloved pets.")}
                        </p>
                    </div>
                    <div className=" flex justify-center gap-3">
                        <Link
                            href='/request'
                            className='flex items-center border h-14 px-8 rounded-3xl bg-[#29abe2] text-white font-bold'>
                            {t("Contact us")}
                        </Link>
                        <button className='flex items-center border h-14 px-8 rounded-3xl gap-2 font-bold'>
                            <span>{
                                t("Play video")
                            }</span>
                            <div className="bg-[#00a99d] w-10 flex justify-center py-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white fill-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>

                            </div>
                        </button>
                    </div>
                    <div className="mt-10 flex h-20 max-w-md">
                        <EntitySlide />
                    </div>
                </div>
            </div>
        </div>
    )
}
