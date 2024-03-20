import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Fade, Slide } from 'react-reveal'
import classes from './application-field.module.scss'
export const ApplicationField = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className={classes.frametop}></div>
            <div
                className={classes.applicationField}
            >
                <Fade
                    top
                    big
                >
                    <h2>{t("Application Field")}</h2>
                </Fade>
                <div
                    className={classes.applicationField__container}
                >
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_1.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("Traceability of productive wild animals")}</h3>
                        </div>
                    </Slide>
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_2.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("Traceability of productive wild animals")}</h3>
                        </div>
                    </Slide>
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_3.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("Livestock production inspection")}</h3>
                        </div>
                    </Slide>
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_4.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("biological research")}</h3>
                        </div>
                    </Slide>
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_5.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("Sheep production monitoring")}</h3>
                        </div>
                    </Slide>
                    <Slide top>
                        <div>
                            <Image
                                src="/img/application-field/image_6.png"
                                width={250}
                                height={160}
                                alt="image"
                            />
                            <h3>{t("Medical history")}</h3>
                        </div>
                    </Slide>
                </div>
            </div>
        </>
    )
}
