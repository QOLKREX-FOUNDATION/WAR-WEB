import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player'
import { Bounce } from 'react-reveal'
import { Compaing } from '../Compaign/Compaign'
import { FormAdoption } from '../FormAdoption/FormAdoption'
import { Need } from '../Need/Need'
import { Process } from '../Process/Process'
import classes from './vicuid-view.module.scss'

export const VicuIdView = () => {
    const { t } = useTranslation();
    const [state, setState] = useState(false);
    // const videoRef = useRef(null);
    const [stylesButton, setStylesButton] = useState({
        background: "auto",
        color: "auto",
        border: "auto",
    });

    const openVideo = () => {
        setState(true);
        setStylesButton(null);
    };
    useEffect(() => {
        openVideo();
    }, [])

    // Función para iniciar la reproducción del video cuando esté visible
    // const handleVideoIntersection = (entries) => {
    //     if (entries[0].isIntersecting) {
    //         videoRef.current.play();
    //     }
    // };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(handleVideoIntersection);
    //     observer.observe(videoRef.current);

    //     return () => {
    //         observer.unobserve(videoRef.current);
    //     };
    // }, []);

    return (
        <>
            <div
                className={classes.vicuid}
            >
                <div className={classes.frametop}></div>
                <h2>{t("VicuID Campaign")}</h2>
                <div className={classes.vicuid__player}>
                    <Bounce right>
                        <div className={classes.vicuid__playerVideo}>
                            {/* <div className="shadow-2xl shadow-black h-full md:aspect-video">
                                <video autoplay={true} muted={true} loop controls
                                    className='object-cover z-0 md:aspect-video'
                                    ref={videoRef}
                                >
                                    <source src="../../video/vicuid.mp4" type="video/mp4" />
                                </video>
                            </div> */}


                            <div className="shadow-2xl shadow-black h-full md:aspect-video">
                                {state === true && (
                                    <>
                                        <ReactPlayer url="https://www.youtube.com/watch?v=bCKud0T_sFM&ab_channel=WorldAnimalRegistry"
                                            height={"100%"}
                                            width={"100%"}
                                            controls={true}
                                            volume={.5}
                                            playing={true}
                                            loop={true}
                                            fallback={<div>Loading...</div>}
                                            muted={true}
                                            style={{
                                                aspectRatio: "16/9",
                                                objectFit: "cover",
                                            }}
                                            config={{
                                                youtube: {
                                                    playerVars: {
                                                        // showinfo: 0,
                                                        // controls: 0,
                                                        // modestbranding: 1,
                                                        // rel: 0,
                                                        // fs: 0,
                                                        // cc_load_policy: 0,
                                                        // iv_load_policy: 3,
                                                        // autohide: 0,
                                                        // disablekb: 1,
                                                        // playsinline: 1,
                                                        // enablejsapi: 1,
                                                        origin: "https://www.youtube.com",
                                                    },
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </Bounce>
                </div>

            </div>
            <Need />
            <Process />
            <FormAdoption />
            <Compaing />
        </>
    )
}
