import React from 'react'
import { DefaultModal } from '../../containers/modals/DefaultModal/DefaultModal'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export const WhatIsView = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation('translation')
    return (
        <>
            {
                open &&
                <DefaultModal
                    setOpenModal={setOpen}
                    width='700px'
                >
                    <div className='flex flex-col gap-4 w-full font-fredoka'>
                        <h2 className='text-2xl font-bold text-center'>{t("Promotional Video")}</h2>
                        <div className='flex flex-col gap-4 aspect-video'>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=FMcfUAHfAdA&t=1s"
                                width='100%'
                                height='100%'
                                controls={true}
                                fallback={
                                    <div className='flex items-center justify-center h-full'>
                                        <p className='text-2xl font-bold text-center'>{t("Could not load video")}</p>
                                    </div>
                                }
                                config={{
                                    youtube: {
                                        playerVars: {
                                            autoplay: 1,
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </DefaultModal>
            }
            <div className='flex flex-col lg:flex-row justify-center gap-5 font-fredoka px-5 lg:px-16'>
                <div className="lg:w-full lg:max-w-3xl flex justify-center lg:justify-start lg:pl-10">
                    <div className="flex flex-col py-4 max-w-lg justify-center w-full gap-4">
                        <h2 className='text-2xl text-[#00a9b1] font-semibold'>{
                            t("What is the W.A.R")
                        } (World Animal registry)</h2>
                        <p className='text-[#29aeec] font-semibold'>
                            {t("It is a group of registration entities trained and implemented with infrastructure for civil registration of animals. The W.A.R was created to share an animal civil registration platform created with blockchain technology and adapted to WEB3. Currently the platform called Firulaix is implemented with smart contracts in the CELO network and has its own governance token called FIRU.")}
                        </p>
                        <button className='bg-[#00a99d] hover:bg-[#028980] flex items-center h-12 px-8 rounded-3xl gap-2 font-bold w-64 justify-center mx-auto mt-4'
                            onClick={() => setOpen(true)}
                        >
                            <span className='text-white'>{t("Play video")}</span>
                            <div className="bg-white w-10 flex justify-center py-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#00a99d] fill-[#00a99d]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/img/what-is/recurso-142.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                    <Image
                        src="/img/what-is/recurso-141.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4 pb-10 font-fredoka">
                    <h2 className='text-2xl text-[#23a99d] font-bold'>Parteners</h2>
                    <Image
                        src="/img/what-is/recurso-143.webp"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                    <div className="border-t-2 border-[#23a99d]"></div>
                    <Image
                        src="/img/what-is/recurso-144.webp"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                    <div className="border-t-2 border-[#23a99d]"></div>
                    <Image
                        src="/img/what-is/recurso-145.webp"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                    <div className="border-t-2 border-[#23a99d]"></div>
                    <Image
                        src="/img/what-is/recurso-146.webp"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                    <div className="border-t-2 border-[#23a99d]"></div>
                    <Image
                        src="/img/what-is/recurso-147.webp"
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                </div>
            </div>
        </>
    )
}
