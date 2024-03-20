import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DefaultButton } from '../../atoms/DefaultButton/DefaultButton'
import { HelpUs } from '../HelpUs/HelpUs'
import classes from './JoinView.module.scss'
import Link from 'next/link'

export const JoinView = () => {
    const { t } = useTranslation()
    return (
        <>
            <div
                className={classes.joinView}
            >
                <div className={classes.frametop}></div>
                <div
                    className={classes.joinView__Container}
                >
                    <h2>{t("Join us")}</h2>
                    <div
                        className={classes.joinView__text}
                    >
                        <p>{t("Most countries in the world already have laws that support pet identification as part of responsible animal ownership. However, many of them do not have entities responsible for the registry, nor a decentralized and safe system to use")}.
                        </p>
                        <p>
                            {t("Our project not only seeks to identify and register, we also seek to create a strong community that faces and takes action against the current situation of animals in a state of abandonment, extinction, mistreatment, hunting, productive abuse, illegal trafficking, etc")}.
                        </p>
                        <p>
                            {t("That is why we work with different registration entities in the world")}.
                        </p>
                    </div>
                    <div className={classes.joinView__grid}>
                        <div>
                            <Image
                                src="/img/join-us/image_01.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                            />
                            <h3>{t("Endangered animal")}</h3>
                        </div>
                        <div>
                            <Image
                                src="/img/join-us/image_02.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                            />
                            <h3>{t("Poaching")}</h3>
                        </div>
                        <div>
                            <Image
                                src="/img/join-us/image_05.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                            />
                            <h3>{t("Animal abuse")}</h3>
                        </div>
                        <div>
                            <Image
                                src="/img/join-us/image_04.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                            />
                            <h3>{t("Illegal traffic")}</h3>
                        </div>
                        <div>
                            <img
                                src="https://media.discordapp.net/attachments/730810037693579304/1062836077863387167/hombre-ordenando-vaca_1205-313.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                                style={{ objectFit: 'cover', height: '100%', width: '100%', maxHeight: '172px', maxWidth: '283px' }}
                            />
                            <h3>{t("animal exploitation")}</h3>
                        </div>
                        <div>
                            <Image
                                src="/img/join-us/image_06.png"
                                alt="Picture of the author"
                                width={300}
                                height={150}
                            />
                            <h3>{t("Abandonment status")}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <HelpUs />
            <div
                className={classes.joinView__button}
            >
                <Link
                    href="/request"
                    className='text-white bg-sky-500 font-semibold text-lg py-2 rounded-xl shadow-lg max-w-sm mx-auto px-7 mt-2 capitalize'
                >
                    {t("Register with us")}
                </Link>
                <div className={classes.framebottom}></div>
            </div>
        </>
    )
}
