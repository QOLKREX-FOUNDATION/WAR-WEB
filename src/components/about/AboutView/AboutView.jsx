// import ReactPlayer from 'react-player'
// import { Bounce } from 'react-reveal'
// import { AboutPartners } from '../AboutPartners/AboutPartners'
// import { AboutSlider } from '../AboutSlider/AboutSlider'
// import classes from './aboutView.module.scss'
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AboutView = () => {
    const { t } = useTranslation();
    const [state, setState] = useState(false);
    const [stylesButton, setStylesButton] = useState({
        background: "auto",
        color: "auto",
        border: "auto",
    });

    const openVideo = () => {
        setState(true);
        setStylesButton(null);
    };
    return (
        <>
            <div className="flex w-full justify-center px-4">
                <div className='flex lg:min-h-[72vh] h-full w-full max-w-7xl px-4 '>
                    <div className="w-full flex flex-wrap xl:flex-nowrap justify-between items-center relative">
                        <div className="w-full py-3 absolute">
                            <Image
                                src="/img/about/recurso-152.webp"
                                alt="Picture of map"
                                width={500}
                                height={500}
                                className='w-full block mx-auto'
                            />
                        </div>
                        <div className="w-full flex justify-center ">
                            <div className="w-full flex flex-col lg:max-w-4xl h-auto xl:h-full py-16 px-5 gap-5 z-10">
                                <div className="flex flex-col text-center items-center">
                                    <h2 className='text-green-600 font-semibold text-xl'>
                                        {t("About us ")}
                                    </h2>
                                    <p className='text-[#29abe2] text-center font-semibold text-sm max-w-md'>
                                        {
                                            t("Our blockchain platform offers a modern and secure approach to animal registration. Join us and take animal management to the next level.")
                                        }
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {/* fundadores */}
                                    <div className="flex flex-wrap">
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/peru.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-149.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Chirstian Suárez</h2>
                                            <h3 className='text-[#29aeec]'>{t("Vice President")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/peru.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-148.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Julián Rojas</h2>
                                            <h3 className='text-[#29aeec]'>{t("President")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/peru.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-150.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Esther Leiva</h2>
                                            <h3 className='text-[#29aeec]'>{t("Secretary")}</h3>
                                        </div>
                                    </div>

                                    {/* emabjadores */}
                                    <div className="flex flex-wrap justify-center gap-y-2">
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/ecuador.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Ecuador</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/colombia.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Colombia</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/mexico.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>México</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/bolivia.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Bolivia</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/honduras.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-168.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Honduras</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/guatemala.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>Guatemala</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                        <div className="flex flex-col items-center hover:shadow-xl py-2 rounded-2xl transition relative">
                                            <Image
                                                src="/img/countries/el-salvador.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-10 absolute bottom-14 right-2'
                                            />
                                            <Image
                                                src="/img/about/recurso-151.webp"
                                                alt="people"
                                                width={200}
                                                height={200}
                                                className='w-48'
                                            />
                                            <h2 className='font-semibold text-[#00a99f]'>El Salvador</h2>
                                            <h3 className='text-[#29aeec]'>{t("Ambassador")}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div
                className={classes.aboutView}
            >
                <div className={classes.aboutView__container}>
                    <div>
                        <h2>{t("About us")}</h2>
                        <ul>
                            <li>
                                {t("For years we have witnessed the deterioration of the animal situation around the world: from the lack of empathy, irresponsibility, abandonment, to the cruelty that is shown to animals. As the years passed, we tried to find a way to progressively slow down the impact of the increase in animals in a state of abandonment, mistreatment, extinction and excess productivity")}.
                            </li>
                            <li>
                                {t("What did we need?: a form of measurement that is supported by the formalization of the responsible owners of each animal. This is how the World Animal Registry was created. We are a decentralized international organization that works to formalize the registration of animals, to strengthen the responsible animal ownership system worldwide")}.
                            </li>
                            <li>
                                {t("We created a system that is impossible to hack! The registration of the animals of the World Animal Registry is managed through a data network in a blockchain system — web3, guaranteeing an immutable record that is impossible to falsify. In the system, the owner is the sole owner of the pet and its data. We work by creating a digital wallet and a unique identification address, thus ensuring the confidentiality and immutability of the data uploaded to our platform.")}
                            </li>
                        </ul>
                    </div>

                    <div className={classes.aboutView__player}>
                        <Bounce right>
                            <div className={classes.aboutView__playerVideo}>
                                {stylesButton && (
                                    <div
                                        onClick={openVideo}
                                        style={stylesButton}
                                        className={classes.aboutView__playerVideoPreview}
                                    >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/ujphzprf.json"
                                            trigger="loop-on-hover"
                                            colors="primary:#000000,secondary:#00b6a8"
                                            style={{ width: "75px", height: "75px" }}
                                        ></lord-icon>
                                    </div>
                                )}

                                {state === true && (
                                    <ReactPlayer url="https://www.youtube.com/watch?v=W-yP0CYFSaU&feature=emb_title" />
                                )}
                            </div>
                        </Bounce>

                        <p>
                            {t("El registro de los animales se gestiona a través de una red de transacciones en una tecnología blockchain – web3,                garantizando un registro inmutable e imposible de falsificar")}.
                        </p>
                        <div className={classes.aboutView__playerFondo}></div>
                    </div>
                </div>
            </div>
            <AboutSlider
                title={t("Our Objective")}
                content={t("It is to have a world civil registry to promote responsible ownership, better animal care, improve a system of productive animals respecting their nature, traceability over time whether genealogical, production or clinical.")}
                images={[
                    "/img/our-objetives/image_01.png",
                    "/img/our-objetives/image_02.png",
                    "/img/our-objetives/image_03.png",
                    "/img/our-objetives/image_04.png",
                    "/img/our-objetives/image_05.png",
                    "/img/our-objetives/image_06.png",
                ]}
            />
            <AboutSlider
                title={t("Our vision")}
                content={t("It is to register all companion animals, wild, captive and farm animals.")}
                images={[
                    "/img/our-vision/image_01.png",
                    "/img/our-vision/image_02.png",
                    "/img/our-vision/image_03.png",
                    "/img/our-vision/image_04.png",
                    "/img/our-vision/image_05.png",
                    "/img/our-vision/image_06.png",
                ]}
            />
            <AboutPartners /> */}
        </>
    )
}
