import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './need.module.scss'

export const Need = () => {
    const { t } = useTranslation();
    return (
        <div
            className={classes.need}
        >
            <h2>
                {t("What do we need for the VicuID campaign?")}
            </h2>
            <div>
                <p>
                    {t("Introduction: Vicuñas are wild animals from the high Andean areas and are part of our fauna and require better care. They provide us with a very fine and very expensive product in the textile market")}.
                </p>
                <p>
                    {t("Identification: With the help of the Ondores de Junín community and our Firulaix platform, we set ourselves the goal of identifying 5000 Vicuñas through an annual activity called Chacu")}.
                </p>
            </div>
            <div
                className={classes.need__images}
            >
                <img
                    src="/img/vicuid/need/image_01.png"
                    alt="need-1"
                    width={350}
                    height={470}
                />
                <img
                    src="/img/vicuid/need/image_02.png"
                    alt="need-1"
                    width={350}
                    height={470}
                />
                <img
                    src="/img/vicuid/need/image_03.png"
                    alt="need-1"
                    width={350}
                    height={470}
                />
            </div>
        </div>
    )
}
