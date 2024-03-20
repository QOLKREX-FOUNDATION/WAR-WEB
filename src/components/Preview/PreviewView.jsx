import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Fredoka } from 'next/font/google';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { WrapperLink } from './components/WrapperLink';
import { DefaultModal } from '../containers/modals/DefaultModal/DefaultModal';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useQuantity } from '../../hook/useQuantity';
import { News } from './components/News';
import { ButtonTop } from '../molecules/ButtonTop/ButtonTop';
import { usePrice } from '../../hook/usePrice';
import { MainLayoutNew } from '../../layouts/MainLayoutNew';
import ReactPlayer from 'react-player';
import { Bounce } from 'react-reveal';
import { FormJoin } from './components/FormJoin';
import { useModal } from '../../hook/useModal';

export const PreviewView = () => {
    const images = [
        "https://thumbs.dreamstime.com/b/banner-feliz-pascua-mascotas-gato-y-perro-primavera-divertidos-gatos-perros-con-orejas-de-conejito-coronas-florales-aisladas-en-214826299.jpg",
        "https://thumbs.dreamstime.com/z/banner-web-blanco-de-gatos-y-perros-juntos-fila-grandes-mirando-la-c%C3%A1mara-en-un-con-espacio-para-texto-168925224.jpg",
        "https://media.istockphoto.com/id/1284989037/es/foto/gatos-y-perros-en-lados-opuestos-de-la-bandera-web.jpg?s=1024x1024&w=is&k=20&c=1cTU_HbmMk-Dg46R--jXFNiKKGXywTVuT1Z7xgh81w4=",
        "https://previews.123rf.com/images/damedeeso/damedeeso1703/damedeeso170300082/73927898-fila-de-grupo-de-diferentes-perros-detr%C3%A1s-de-una-pizarra-en-blanco-banner-pancarta-aislado-sobre.jpg"
    ]

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { t, i18n } = useTranslation();
    const { locale } = useRouter();
    const { price } = usePrice();
    const { openModal, setOpenModal } = useModal();

    const { quantityEntity, quantityPets, quantityAdopters } = useQuantity();

    return (
        <MainLayoutNew>
            {/* arreglar dirección y correo con los de la vista original */}

            {/* <section className="hidden lg:flex justify-between text-[#00a99d] font-semibold py-1.5 gap-4 md:px-14 px-4 flex-wrap">
                <p className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>
                        +511759445
                    </span>
                </p>
                <div className="flex flex-wrap gap-4">
                    <p className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                        <span>
                            pets@worldanimalregistry.org
                        </span>
                    </p>
                    <p className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        1900 N BAYSHORE DR SUITE 1A #136-1611 MIAMI, FL 33132
                    </p>
                </div>
            </section>
            <div
                className='hidden lg:flex w-full h-2 border-b-2 border-[#00a99d] max-w-full mx-auto px-10'
            ></div>
            <nav className='flex items-center justify-between py-3 relative h-40 lg:px-14 px-4'>
                <Image
                    src='/img/logo-war.webp'
                    alt='logo'
                    width={150}
                    height={150}
                    className='bject-cover md:w-56 w-32'
                />

                <ul className='lg:flex flex-wrap gap-4 relative hidden'>
                    <li className='h-10'>
                        <WrapperLink
                            title={'us'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink>
                    </li>
                    <li className='h-10'>
                        <WrapperLink
                            title={'Services'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink>
                    </li>
                    <li className='h-10'>
                        <WrapperLink
                            title={'Registers'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink>
                    </li>
                    <li className='h-10'>
                        <WrapperLink
                            title={'News'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink>
                    </li>
                    <li className='h-10'>
                        <WrapperLink
                            title={'Contact us'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink>
                    </li>
                </ul>
                <div className='hidden lg:flex flex-wrap gap-2'>
                    {
                        locale == "es" ?
                            <button
                                onClick={handleLanguage}
                                className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 '>{t("Spanish")}</button>
                            :
                            <button
                                onClick={handleLanguage}
                                className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 '>{t("English")}</button>
                    }
                    <button className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-32 text-sm py-2'>{t("Start session")}</button>
                </div>
                <button
                    onClick={handleMenu}
                    className='bg-gray-300 rounded-md h-14 w-14 flex items-center justify-center fixed z-30 top-12  right-8 lg:hidden'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className={`flex flex-col fixed bg-[#4dcdc5] px-5 right-0 top-0 w-full z-20 pt-8 pb-4 ${ toggle ? "h-screen" : "h-0 pb-0 pt-0 -top-full" } transition-all duration-500 lg:hidden  overflow-hidden`}>
                    <h2>{t("us")}</h2>
                    <Link
                        href='/'
                        className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                    >
                        ¿Que es el war?
                    </Link>
                    <hr />

                    <h2>{t("Services")}</h2>
                    <Link
                        href='/'
                        className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                    >
                        ¿Que es el war?
                    </Link>
                    <hr />

                    <h2>{t("News")}</h2>
                    <Link
                        href='/'
                        className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                    >
                        ¿Que es el war?
                    </Link>
                    <hr />

                    <h2>{t("Contact us")}</h2>
                    <Link
                        href='/'
                        className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                    >
                        ¿Que es el war?
                    </Link>
                    <hr />
                    <div className='flex flex-wrap gap-2 py-2'>
                        {
                            locale == "es" ?
                                <button
                                    onClick={handleLanguage}
                                    className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 '>{t("Spanish")}</button>
                                :
                                <button
                                    onClick={handleLanguage}
                                    className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 '>{t("English")}</button>
                        }
                        <button className='bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-32 text-sm py-2'>{t("Start session")}</button>
                    </div>
                    <section className="flex justify-between text-white font-semibold py-1.5 gap-4 md:px-14 px-4 flex-wrap">
                        <p className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span>

                                +511759445
                            </span>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <p className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>

                                <span>
                                    inFo@renian.org
                                </span>
                            </p>
                            <p className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                Av. Francisco Javier Mariategui 1030 - JesusMria
                            </p>
                        </div>
                    </section>
                </div>
            </nav> */}
            {/* modal */}
            {
                open &&
                <DefaultModal
                    setOpenModal={setOpen}
                    width='700px'
                >
                    <div className='flex flex-col gap-4 w-full'>
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
            {
                open2 &&
                <DefaultModal
                    setOpenModal={setOpen2}
                    width='700px'
                >
                    <div className='flex flex-col gap-4 w-full'>
                        <h2 className='text-2xl font-bold text-center'>{t("Promotional Video")}2</h2>
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

            {/* swiper */}
            <div className='border relative h-full lg:max-h-[500px] font-fredoka'>
                <Swiper
                    slidesPerView="auto"
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div className="w-full relative min-h-[400px]">
                            <div className="px-5 flex flex-col absolute  lg:w-1/2 items-center justify-center h-full">
                                <div className=" flex flex-col text-start max-w-lg">
                                    <h2 className='text-white text-2xl xl:text-3xl font-bold text-shadow'>
                                        {
                                            t("IDENTIFY ANIMALS INDIVIDUALLY")
                                        }
                                    </h2>
                                    <p className='text-[#333333] text-xl xl:text-2xl font-semibold text-shadow'>
                                        {t("Help assess the")}{" "}
                                        <span className='text-black font-semibold'>
                                            {t("state of conservation")}
                                        </span> {" "}
                                        {t("of the species and to implement the")}{" "}
                                        <span className='text-black font-semibold'>
                                            {
                                                t("protection measures")
                                            }
                                        </span> {" "}
                                        {t("and of")}{" "}
                                        <span className='text-black font-semibold'>
                                            {
                                                t("proper conservation")
                                            }
                                        </span> {" "}.
                                    </p>
                                </div>
                                <div className="w-full max-w-lg flex flex-wrap gap-3 pt-5">
                                    <Link
                                        href='/contact'
                                        className='bg-[#29abe2] hover:bg-[#2393c3] text-white px-4 py-2 rounded-2xl font-semibold'>
                                        {
                                            t("Contact us")
                                        }
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </Link>
                                    <button className='bg-[#29abe2] hover:bg-[#2393c3] flex items-center  h-12 px-8 rounded-3xl gap-2 font-bold'
                                        onClick={() => setOpen(true)}
                                    >
                                        <span className='text-white'>
                                            {
                                                t("Play video")
                                            }
                                        </span>
                                        <div className="bg-white w-10 flex justify-center py-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#00a99d] fill-[#00a99d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>

                                        </div>
                                    </button>
                                </div>
                            </div>
                            <Image
                                src='/img/preview/slider/recurso_slider3.webp'
                                alt='hero'
                                width={1200}
                                height={500}
                                className='object-contain w-full  h-full min-h-[500px]'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative min-h-[400px]">
                            <div className="px-5 flex flex-col absolute  lg:w-1/2 items-center justify-center h-full ">
                                <div className="flex flex-col text-start max-w-lg">
                                    <h2 className='xl:text-3xl text-white text-2xl font-bold text-shadow'>
                                        {
                                            t("WE ARE RESPONSIBLE OWNERSHIP")
                                        }
                                    </h2>
                                    <p className='xl:text-2xl text-[#333333] text-xl font-semibold text-shadow'>
                                        {
                                            t("They also have the right to identification, let's protect them. (Law 30407)")
                                        }
                                    </p>
                                </div>
                                <div className="w-full max-w-lg flex flex-wrap gap-3 pt-5">
                                    <Link
                                        href='/contact'
                                        className='bg-[#29abe2] hover:bg-[#2393c3] text-white px-4 py-2 rounded-2xl font-semibold'>
                                        {
                                            t("Contact us")
                                        }
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </Link>
                                    <button className='bg-[#29abe2] hover:bg-[#2393c3] flex items-center  h-12 px-8 rounded-3xl gap-2 font-bold'
                                        onClick={() => setOpen(true)}
                                    >
                                        <span className='text-white'>
                                            {
                                                t("Play video")
                                            }
                                        </span>
                                        <div className="bg-white w-10 flex justify-center py-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#00a99d] fill-[#00a99d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>

                                        </div>
                                    </button>
                                </div>
                            </div>
                            <Image
                                src='/img/preview/slider/recurso_slider2.webp'
                                alt='hero'
                                width={1200}
                                height={500}
                                className='object-contain w-full  h-full min-h-[500px]'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative min-h-[400px]">
                            <div className="px-5 flex flex-col absolute  lg:w-1/2 items-center justify-center h-full ">
                                <div className="flex flex-col text-start max-w-lg">
                                    <h2 className='xl:text-3xl text-white text-2xl font-bold text-shadow'>
                                        {
                                            t("NO MORE WASTING TIME WITH OUTDATED AND UNSAFE RECORDS")
                                        }
                                    </h2>
                                    <p className='xl:text-2xl text-[#333333] text-xl font-semibold text-shadow'>
                                        {
                                            t("Our blockchain platform offers a modern and secure approach to animal registration. Join us and take animal management to the next level.")
                                        }
                                    </p>
                                </div>
                                <div className="w-full max-w-lg flex flex-wrap gap-3 pt-5">
                                    <Link
                                        href='/contact'
                                        className='bg-[#29abe2] hover:bg-[#2393c3] text-white px-4 py-2 rounded-2xl font-semibold'>
                                        {
                                            t("Contact us")
                                        }
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </Link>
                                    <button className='bg-[#29abe2] hover:bg-[#2393c3] flex items-center  h-12 px-8 rounded-3xl gap-2 font-bold'
                                        onClick={() => setOpen(true)}
                                    >
                                        <span className='text-white'>
                                            {
                                                t("Play video")
                                            }
                                        </span>
                                        <div className="bg-white w-10 flex justify-center py-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#00a99d] fill-[#00a99d]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>

                                        </div>
                                    </button>
                                </div>
                            </div>
                            <Image
                                src='/img/preview/slider/recurso_slider1.webp'
                                alt='hero'
                                width={1200}
                                height={500}
                                className='object-contain w-full  h-full min-h-[500px]'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* cards */}
            <div className="flex flex-col items-center px-10 bg-white py-8 pt-20 font-fredoka">
                <Bounce top>
                    <div className="max-w-5xl flex flex-col items-center">
                        <h2 className='text-xl lg:text-3xl text-[#00a99d] font-semibold text-center px-3'>
                            {t("ARE YOU READY TO BE PART OF A GLOBAL COMMUNITY?")}
                        </h2>
                        <p className='text-center max-w-3xl text-sky-400 font-semibold'>{
                            `${ t("Don't take risks with the registration of your animals. Our registration platform guarantees the integrity and security of the data for each registered animal. Join now and be part of the revolution in animal management!") }`
                        }
                        </p>
                        <div className="py-5 flex justify-center flex-wrap gap-12">
                            <Link
                                href="/consult"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex flex-col justify-center bg-[#cfefed] w-full md:w-72 px-4 py-3 mt-3 rounded-3xl items-center gap-3 h-72 hover:saturate-150 hover:shadow-lg transition">
                                <Image
                                    src='/img/preview/recurso-137.webp'
                                    alt='hero'
                                    width={100}
                                    height={100}
                                    className='object-contain w-28'
                                />

                                <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'> {t("Check the registration of your pets")} </h3>
                            </Link>
                            <Link
                                href="/request"
                                target="_blank"
                                rel="noreferrer noopener"
                                className=" hidden md:flex flex-col items-center">
                                <div className='mt-14'></div>
                                <div className="flex flex-col justify-center gap-4 bg-[#f4f4f4] w-full md:w-72 px-4 py-4 rounded-3xl items-center min-h-[270px] hover:saturate-150 hover:shadow-lg transition">
                                    <Image
                                        src='/img/preview/recurso-138.webp'
                                        alt='hero'
                                        width={150}
                                        height={150}
                                        className='object-contain w-28'
                                    />
                                    <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'>{t("Registration Request")}</h3>
                                    {/* <p className='text-[#29abe3] font-semibold text-center'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vel facere?
                            </p> */}
                                    {/* <button
                                        className='text-[#00a99d] font-semibold flex items-center mt-3 gap-2'
                                    >
                                        <span>{t("See more")}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 pt-1 fill-[#29abe3]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button> */}
                                </div>
                            </Link>

                            <div className="flex md:hidden flex-col bg-[#f4f4f4] w-full md:w-72 px-4 py-4 rounded-3xl items-center min-h-[270px]">
                                <Image
                                    src='/img/preview/recurso-138.webp'
                                    alt='hero'
                                    width={100}
                                    height={100}
                                    className='object-contain w-28'
                                />
                                <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'>{t("Registering Entities")}</h3>
                                {/* <p className='text-[#29abe3] font-semibold text-center'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vel facere?
                            </p> */}
                                <a
                                    className='text-[#00a99d] font-semibold flex items-center mt-3 gap-2'
                                    href="#"
                                >
                                    <span>{t("See more")}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 pt-1 fill-[#29abe3]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </div>

                            <Link
                                href="https://dexscreener.com/celo/0x2dd5e18a4ead1bcb1636eaadc720942f753cc463"
                                target="_black"
                                rel="noreferrer noopener"
                                className="flex flex-col justify-center bg-[#cfefed] w-full md:w-72 px-4 py-4 mt-3 rounded-3xl items-center gap-3 h-72 hover:saturate-150 hover:shadow-lg transition">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="m-auto fill fill-[#29abe3] w-24 h-24" width="24" height="24" viewBox="0 0 24 24" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11 5h2"></path>
                            <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8"></path>
                            <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z"></path>
                            <path d="M12 18v2"></path>
                            <path d="M10 11v.01"></path>
                            <path d="M14 11v.01"></path>
                            <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z"></path>
                            <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z"></path>
                        </svg> */}
                                <Image
                                    src='/img/preview/recurso-139.webp'
                                    alt='hero'
                                    width={250}
                                    height={250}
                                    className='object-contain w-48'
                                />
                                <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'>{t("Price")}</h3>
                                <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'>FIRU / CUSD</h3>
                                <h3 className='text-base lg:text-xl font-semibold text-[#00a99d]'>{price}</h3>
                                {/* <p className='text-[#29abe3] font-semibold text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vel facere?
                        </p> */}
                                {/* <button
                                    className='text-[#00a99d] font-semibold flex items-center pt-3 gap-2'
                                >
                                    <span>
                                        {t("See more")}
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 pt-1 fill-[#29abe3]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </button> */}
                            </Link>
                        </div>
                    </div>
                </Bounce>
            </div>
            {/* info 1 */}
            <div className="justify-center flex flex-wrap px-10 py-16 gap-16 font-fredoka">
                <Bounce top>
                    <div className="relative w-[450px] h-72">
                        <Image
                            src="/img/preview/recurso-164.webp"
                            alt="join"
                            width={500}
                            height={500}
                            className='w-full object-contain'
                        />
                    </div>
                    <div className="flex flex-col max-w-xl gap-5">
                        <h2 className='text-3xl max-w-xs font-bold text-[#29abe2]'>
                            {t("Join this great project")}
                        </h2>
                        <p className='font-semibold text-justify '>
                            {t("Enjoy a fast, reliable, and transparent process. Veterinaries, shelters, public entities, and pet shops, we are here to help you!")}
                        </p>
                        <ul className='text-[#00a99d]'>
                            <li className='font-semibold flex items-center pt-3 gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-[#0071bc">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>

                                <span>
                                    {t("Registered on a Blockchain.")}
                                </span>
                            </li>
                            <li className='font-semibold flex items-center pt-3 gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-[#0071bc">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                                <span>
                                    {t("We register all types of animals.")}
                                </span>
                            </li>
                            <li className='font-semibold flex items-center pt-3 gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-[#0071bc">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                                <span>
                                    {t("We promote responsible ownership.")}
                                </span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap items-center mt-3 gap-3">
                            <Link
                                href="/adopter-and-owner"
                                className='text-white bg-sky-500 font-semibold text-sm py-2 xl:h-10 rounded-3xl shadow-lg max-w-sm px-4 uppercase'
                            >
                                {t("adopters")}{" / "}
                                {t("owners")}
                            </Link>
                            <button className='bg-[#00a99d] hover:bg-[#15817a] flex items-center xl:h-10 px-6 py-2 rounded-3xl gap-2 font-semibold'
                                onClick={() => setOpen2(true)}
                            >
                                <span className='text-white'>
                                    {
                                        t("How to register your pet?")
                                    }
                                </span>
                                <div className="bg-white w-8 flex justify-center py-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-[#00a99d] fill-[#00a99d]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>

                                </div>
                            </button>
                        </div>

                    </div>
                </Bounce>
            </div>
            {/* info 2 */}
            <div className="flex justify-center flex-wrap gap-12 py-3 pb-5 font-fredoka">
                <Bounce left>
                    <div className="flex flex-col items-center text-[#00a99d]">
                        <Image
                            width={64}
                            height={64}
                            alt='icon'
                            src={"/img/preview/icon_01.webp"}
                        />

                        <h2 className='font-bold text-3xl'>{quantityAdopters}+</h2>
                        <p className='font-bold text-center max-w-[150px]'>
                            {t("Adopters")}
                            <br />
                            ({t("Users")})
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-[#00a99d]">
                        <Image
                            width={64}
                            height={64}
                            alt='icon'
                            src={"/img/preview/icon_02.webp"}
                        />
                        <h2 className='font-bold text-3xl'>{quantityEntity}+</h2>
                        <p className='font-bold max-w-[150px] text-center'>{t("Registration entities")}</p>
                    </div>
                </Bounce>
                <Bounce right>
                    <div className="flex flex-col items-center text-[#00a99d]">
                        <Image
                            width={64}
                            height={64}
                            alt='icon'
                            src={"/img/preview/icon_03.webp"}
                        />

                        <h2 className='font-bold text-3xl'>120+</h2>
                        <p className='font-bold text-center max-w-[100px]'>{t("Positive Comments")}</p>
                    </div>
                    <div className="flex flex-col items-center text-[#00a99d]">
                        <Image
                            width={64}
                            height={64}
                            alt='icon'
                            src={"/img/preview/icon_04.webp"}
                        />
                        <h2 className='font-bold text-3xl'>{quantityPets}+</h2>
                        <p className='font-bold text-center max-w-[100px]'>{t("Registered Animals")}</p>
                    </div>
                </Bounce>
            </div>
            {/* info 3 */}
            <Bounce top>
                <div className="flex flex-wrap justify-center items-center py-10 bg-[#ecf7fc] pb-28 font-fredoka">
                    <div className="w-1/2 flex flex-col justify-center max-w-sm">
                        <h2 className='text-[#00a99d] font-bold text-xl'>
                            {t("Testimonials from")}
                            <br />
                            {t("registering entities")}
                        </h2>
                        <p>
                            {t("They are organizations such as veterinaries, pet shops, shelters, and municipalities")}
                        </p>
                    </div>
                    <div className="lg:scale-100 scale-75 lg:w-1/2 lg:min-w-[400px] w-full max-w-[850px] flex justify-center items-center flex-wrap gap-4 px-4 py-5">
                        <Swiper
                            slidesPerView="auto"
                            loop={true}
                            centeredSlides={true}
                            // autoplay={{
                            //     delay: 10000,
                            //     disableOnInteraction: false,
                            // }}

                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 3,
                                },
                                767: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Navigation, Pagination]}
                        >
                            <SwiperSlide >
                                <div className="flex flex-col max-w-[300px] h-60 gap-2 relative pt-5">
                                    <div className="flex pl-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <p className='text-sm text-left'>
                                        {
                                            t("Register all my veterinary pets on the W.A.R platform and they are registered in a secure system worldwide")
                                        }
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14">
                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBMT8YoJDZTYWWbaXOWI-lMYMa68NfvvaV2w3PfvLpa7O8xEea4t0dL7P84G-ho0ckLo&usqp=CAU"
                                            className='rounded-full  object-cover '
                                        /> */}
                                            <Image
                                                src="/img/preview/testimonials/testimonial01.png"
                                                className='rounded-full  object-cover '
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className='font-semibold'>Jorge Dias</h2>
                                            <p>Perú</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide >
                                <div className="flex flex-col max-w-[300px] h-60 gap-2 relative pt-5">
                                    <div className="flex pl-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <p className='text-sm text-left'>
                                        {
                                            t("Without a doubt, a very easy to use platform, It helps me to have better control and follow-up of the animals that I give up for adoption.")
                                        }
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14">
                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBMT8YoJDZTYWWbaXOWI-lMYMa68NfvvaV2w3PfvLpa7O8xEea4t0dL7P84G-ho0ckLo&usqp=CAU"
                                            className='rounded-full  object-cover '
                                        /> */}
                                            <Image
                                                src="/img/preview/testimonials/testimonial03.png"
                                                className='rounded-full  object-cover '
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className='font-semibold'>Pamela Goméz</h2>
                                            <p>Colombia</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide >
                                <div className="flex flex-col max-w-[300px] h-60 gap-2 relative pt-5">
                                    <div className="flex pl-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-500 stroke-yellow-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <p className='text-sm text-left'>
                                        {
                                            t("Stop wasting time with outdated records and unsafe, register your animals at the W.A.R.")
                                        }
                                    </p>
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14">
                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBMT8YoJDZTYWWbaXOWI-lMYMa68NfvvaV2w3PfvLpa7O8xEea4t0dL7P84G-ho0ckLo&usqp=CAU"
                                            className='rounded-full  object-cover '
                                        /> */}
                                            <Image
                                                src="/img/preview/testimonials/testimonial02.png"
                                                className='rounded-full  object-cover '
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className='font-semibold'>Omar Bozzo</h2>
                                            <p>Honduras</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Bounce>
            {/* info 4 contact */}
            {openModal && (
                <DefaultModal setOpenModal={setOpenModal}>
                    <h1>{t("Mail sent successfully")}!</h1>
                </DefaultModal>
            )}
            <div className=" flex justify-center relative font-fredoka h-[620px] lg:h-[240px]">
                {/* form */}
                <div className="absolute flex -top-28 left-1/2 -translate-x-1/2 lg:w-full lg:max-w-4xl">
                    <div className="flex bg-[#00a99d] rounded-2xl px-10 py-2 w-full max-w-6xl gap-4 relative h-auto scale-75 sm:scale-100">
                        <div className="flex items-center flex-col lg:flex-row pb-10 lg:pb-0 gap-3">
                            <div className="flex flex-col gap-3 items-center justify-center px-9">
                                <h2 className='lg:text-2xl text-lg font-semibold text-white text-center'>
                                    {
                                        t("Do you want to be a registration entity?")
                                    }
                                </h2>
                                <p className='text-base text-white'>
                                    {
                                        t("We invite you to be an ambassador of the civil registry of pets")
                                    }
                                </p>
                            </div>
                            <div className="flex flex-col w-[450px] flex-shrink-0 text-white">
                                <FormJoin
                                    setOpenModal={setOpenModal}
                                />
                            </div>
                        </div>

                        {/* text vertical */}
                        {/* <div className="flex flex-col justify-center -rotate-90 absolute -right-10 top-48">
                            <h4 className='text-sm text-center font-semibold text-white '>
                                {
                                    t("Contact us ")
                                }
                            </h4>
                            <h2 className='text-2xl font-semibold text-white w-40'>
                                W.A.R CENTER
                            </h2>
                        </div> */}
                    </div>
                </div>
                {/* form lg */}
                {/* <div className="flex items-center lg:hidden max-w-xs scale-75 lg:scale-100">
                    <div className="flex flex-col justify-center bg-[#00a99d] rounded-2xl px-10 py-2 w-full max-w-6xl gap-4 relative ">
                        <div className="flex items-center flex-col lg:flex-row ">
                            <h2 className='lg:text-2xl text-lg font-semibold text-white'>
                                {
                                    t("We invite you to be an ambassador for civil pet registration!")
                                }
                            </h2>
                            <div className="flex flex-col w-72 flex-shrink-0">
                                <Image
                                    src="/img/preview/slider/image3.png"
                                    alt="animals"
                                    className='w-56 h-full object-contain mx-auto'
                                    width={500}
                                    height={200}
                                />
                                <button
                                    onClick={() => {
                                        setShow(true)
                                    }}
                                    className='text-white bg-sky-500 font-semibold text-sm py-2 rounded-xl shadow-lg max-w-sm mt-1'
                                >
                                    {
                                        t("Join us ")
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h4 className='text-sm text-center font-semibold text-white'>
                                {
                                    t("Contact us ")
                                }
                            </h4>
                            <h2 className='text-2xl font-semibold text-white w-40'>
                                W.A.R CENTER
                            </h2>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* show modal form */}
            {/* {
                show &&
                <>
                    <DefaultModal
                        setOpenModal={setShow}
                    >
                        <FormJoin />
                    </DefaultModal>
                </>
            } */}


            {/* info 5 contact */}
            <Bounce top>
                <div className="flex flex-wrap justify-center py-14 lg:mt-36 mb-20 lg:gap-20 gap-20 px-4 lg:px-10 font-fredoka">
                    <div className="flex flex-col text-[#00a9b4] max-w-md gap-4">
                        <h2 className='text-2xl font-bold'>
                            {t("About")} W.A.R.
                        </h2>
                        <p className='text-black'>
                            {
                                t("For years, we have witnessed the deterioration of the animal situation worldwide: from the lack of empathy, irresponsibility, abandonment, to the cruelty towards animals. As the years passed, we tried to find a way to progressively curb the impact of the increasing number of animals in a state of abandonment, mistreatment, extinction, and overproduction. What were we missing? A measurement system that relies on the formalization of responsible owners for each animal. That's how the World Animal Registry was created. We are a decentralized international organization that works on formalizing the registration of animals to strengthen the responsible animal ownership system worldwide.")
                            }
                        </p>
                        <Link
                            href="/what-is-war"
                            className='bg-sky-500 text-white font-semibold text-xl py-3 rounded-xl block text-center'>
                            {/* {t("Register your veterinary clinic")} */}
                            {t("See more")}
                        </Link>
                    </div>
                    <div className="flex flex-col relative">
                        {/* <img
                        src="https://media.discordapp.net/attachments/839620709517230081/1107718613642780833/image.png"
                        alt="world animal registry"
                    /> */}
                        <div className="flex flex-col relative  scale-[.8] lg:scale-100">
                            {/* arreglar imagen para que salga encajado */}
                            <Image
                                src="/img/preview/about_us.webp"
                                alt="world animal registry"
                                width={200}
                                height={200}
                                className='w-72'
                            />
                            <div className="absolute lg:-bottom-20 -bottom-32 -left-12">
                                <div className="flex bg-[#00a99d] text-white relative w-full max-w-xs py-6 px-5 rounded-xl mt-4">
                                    <div className="flex absolute -top-4 -left-3 bg-[#0071bc] scale-150 p-1 rounded-full -rotate-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z"></path>
                                            <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z"></path>
                                            <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z"></path>
                                            <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z"></path>
                                            <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z"></path>
                                        </svg>
                                    </div>
                                    <p className='text-xl font-semibold'>
                                        {
                                            t("Thousands of registered users on our platform support us")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Bounce>
            {/* info 6 */}
            <Bounce left>
                <div className="flex flex-wrap bg-[#00a99d] items-center justify-center gap-10 space-x-16 lg:py-10 px-4 lg:px-10 xl:h-72 font-fredoka">
                    <div className="lg:relative lg:w-72 lg:h-10">
                        <img
                            src="/img/preview/recurso-140.webp"
                            alt="cat"
                            className='max-w-xl w-12 lg:absolute lg:top-20 lg:-right-24 z-20'
                        />
                        <img
                            src="/img/preview/find_compaing.webp"
                            alt="cat"
                            className='max-w-xl w-72 lg:absolute lg:-top-56 lg:-right-10'
                        />
                        <img
                            src="/img/preview/recurso-140.webp"
                            alt="cat"
                            className='max-w-xl w-12 lg:absolute lg:-top-20 lg:-left-5 absolute left-96'
                        />
                    </div>
                    <div className="w-full flex flex-col text-white max-w-md text-center py-10 lg:py-0">
                        <h2 className='font-bold text-2xl'>
                            {
                                t("FIND CAMPAIGNS NEAR YOU")}
                        </h2>
                        <p className='font-medium'>
                            {
                                t("From the streets of the biggest cities to the most remote corners of the planet, our campaigns around the world are making a difference in the lives of animals. Join us and be a part of this incredible mission.")
                            }
                        </p>
                        <div className="flex flex-wrap gap-1">
                            <Link
                                href='/compaigns'
                                className='text-white bg-sky-500 font-semibold text-lg py-2 rounded-xl shadow-lg max-w-sm mx-auto px-7 mt-2'
                            >
                                {
                                    t("Search Campaigns")}
                            </Link>
                            <Link
                                href='/donate'
                                className='text-white bg-sky-500 font-semibold text-lg py-2 rounded-xl shadow-lg max-w-sm mx-auto px-7 mt-2'
                            >
                                {
                                    t("Make a Donation")}
                            </Link>
                        </div>
                    </div>
                </div>
            </Bounce>
            {/* contact */}
            <Bounce right>
                <div className='flex justify-center items-center px-10 py-14'>
                    <div className="flex flex-wrap md:justify-between justify-center items-center gap-20 w-full md:max-w-3xl mx-auto font-fredoka">
                        <Image
                            src='/img/preview/logo_war.webp'
                            alt='contact'
                            width={200}
                            height={200}
                            className='object-contain w-64 h-64'
                        />
                        <div className="flex flex-col items-center">
                            <h2 className='text-2xl font-bold text-[#00a99d] capitalize'>{t("contact us")}</h2>
                            <p className=' text-center font-semibold max-w-sm text-[#29abe2]'>
                                {
                                    t("For years, we have witnessed the deterioration of the animal situation worldwide: from the lack of empathy, irresponsibility, abandonment, to the cruelty towards animals. As the years passed, we tried to find a way to progressively curb the mistreatment.")
                                }
                            </p>
                            <Link
                                href='/contact'
                                className='text-white bg-sky-500 font-semibold text-lg py-2 rounded-xl shadow-lg max-w-sm mx-auto px-7 mt-2 capitalize'
                            >
                                {
                                    t("contact us")}
                            </Link>
                        </div>
                    </div>
                </div>
            </Bounce>
            {/* news */}
            <Bounce left>
                <div
                    id='news'
                    className="flex justify-center w-full">
                    <div className="flex flex-col justify-center items-center py-10 px-10 max-w-5xl">
                        <h2 className='text-2xl font-bold text-[#00a99d]'>{
                            t("News")
                        }</h2>
                        <div className="flex flex-col items-center justify-center gap-10 py-10">
                            <p className='md:max-w-xl font-semibold text-center text-[#29abe2]'>
                                {
                                    t("From the streets of the largest cities to the most remote corners of the planet, our campaigns worldwide are making a difference in the lives of animals. Join us and be part of this incredible mission.")
                                }
                            </p>
                            <div className="w-full mx-auto flex justify-center">
                                <div className="lg:max-w-5xl md:max-w-md max-w-xs w-full relative ">
                                    <News />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Bounce>
            {/* agregar pie de página */}

        </MainLayoutNew>
    )
}
