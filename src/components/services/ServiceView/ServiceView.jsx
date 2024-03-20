import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const ServiceView = () => {
    const { t } = useTranslation()
    return (
        <div className='flex items-center w-full min-h-[72vh]'>
            <div className="w-full flex flex-col items-center lg:flex-row justify-center px-14 gap-20">
                <div className="flex relative max-w-xl">
                    <Image
                        src="/img/services/recurso-154.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                    <Image
                        src="/img/services/recurso-153.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover absolute top-0 left-0"
                    />
                    <Image
                        src="/img/services/recurso-155.webp"
                        alt="Picture of the author"
                        width={150}
                        height={100}
                        className="object-cover absolute top-10 -right-10 scale-75"
                    />
                </div>
                <div className="flex justify-center pb-10 lg:pb-0">
                    <div className="flex flex-col items-center py-3">
                        <h2
                            className="text-4xl font-bold text-[#29abe3] text-center pb-4"
                        >
                            {t("Users")} / {t("owners")}
                        </h2>
                        <p className='max-w-md text-center'>
                            {
                                t("We cordially invite you to join our adoption program and take advantage of all the services we offer. We are committed to finding loving homes for pets in need and promoting their well-being. As an adopter, you will have the opportunity to give a home to an animal and you will receive our support and assistance throughout the process. Join us and make a difference in the life of a defenseless being!")
                            }
                        </p>
                        <Link
                            href='/contact'
                            className='text-white bg-sky-500 font-semibold text-lg py-2 rounded-xl shadow-lg max-w-sm mx-auto px-7 capitalize mt-4'
                        >
                            {
                                t("contact us")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
