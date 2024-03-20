import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from './helpus.module.scss'

export const HelpUs = () => {
    const { t } = useTranslation();
    return (
        <div
            className={classes.helpUs}
        >
            <div className={classes.frametop}></div>
            <div
                className={classes.helpUs__Container}
            >
                <h2>{t("With your help we can change")}</h2>
                <div
                    className={classes.helpUs__text}
                >
                    <h2>
                        {t("What are register entities?")}
                    </h2>
                    <p>
                        {t("They are all those institutions that have the ability to apply the microchip and upload the records in the Web 3 — W.A.R. , all formally under the provisions of each country")}.
                    </p>
                    <p>
                        {t("There are 3 essential requirements to become a WAR ally")}:
                    </p>
                </div>
                <div className={classes.helpUs__grid}>
                    <div>
                        <div>
                            <Image
                                src="/img/join-us/help-us/image_01.png"
                                alt="Picture of the author"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <h3>{t("Step")} 1</h3>
                            <p>{t("Being a company, NGO, government entity dedicated to registering animals")}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="/img/join-us/help-us/image_02.png"
                                alt="Picture of the author"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <h3>{t("Step")} 2</h3>
                            <p>{t("Be part of our foundation")}.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="/img/join-us/help-us/image_03.png"
                                alt="Picture of the author"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <h3>{t("Step")} 3</h3>
                            <p>{t("Have the platform training certificate")}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
