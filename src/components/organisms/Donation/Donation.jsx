import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade, Zoom } from 'react-reveal'
import { useModal } from '../../../hook/useModal'
import { DefaultModal } from '../../containers/modals/DefaultModal/DefaultModal'
import classes from './donation.module.scss'

export const Donation = () => {
    const { t } = useTranslation();
    const { openModal, setOpenModal } = useModal();
    return (
        <>
            <div className={classes.frametop}></div>
            <div
                className={classes.donation}
            >
                {openModal && (
                    <DefaultModal setOpenModal={setOpenModal}>
                        <h1>
                            Coming soon in <span>W.A.R.</span>
                        </h1>
                    </DefaultModal>
                )}
                <div className={classes.donation__container}>
                    <Zoom
                        top
                        big
                    >
                        <h2>{t("Campaigns - Donations")}</h2>
                    </Zoom>
                    <div className={classes.donation__containerCards}>
                        <Fade
                            left
                        >
                            <div>
                                <Link
                                    href="/vicuid"
                                >
                                    <Image
                                        src="/img/donation/image_01.png"
                                        width={333}
                                        height={230}
                                        alt="image"
                                    />
                                </Link>
                                <div>
                                    <h3>{t("Adopt a vicuna")}</h3>
                                    <p>
                                        {
                                            t("The Give your vicuña a name campaign is an initiative that aims to promote the care and conservation of the vicuña, a species of camelid that lives in the high mountains of the Andes.")
                                        }
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        < Fade left>
                            <div>
                                <a
                                    onClick={() => setOpenModal(true)}
                                >
                                    <Image
                                        src="/img/donation/image_02.png"
                                        width={333}
                                        height={230}
                                        alt="image"
                                    />
                                </a>
                                <div>
                                    <h3>{t("Adopt Your Spectacled Bear Campaign")}</h3>
                                    <p>
                                        {
                                            t("It is an effort to protect the spectacled bear species.This campaign focuses on the conservation of the natural ecosystems of spectacled bears, as well as education and awareness about the importance of protecting this endangered species. The funds raised through this campaign are used for research, conservation and civil registry projects, as well as for the protection of the bears' natural habitats.")
                                        }
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade
                            left>
                            <div>
                                <a
                                    onClick={() => setOpenModal(true)}
                                >
                                    <Image
                                        src="/img/donation/image_03.png"
                                        width={333}
                                        height={230}
                                        alt="image"
                                    />
                                </a>
                                <div>
                                    <h3>{t("Adopt an Amazon Jaguar Campaign")}</h3>
                                    <p>
                                        {
                                            t("The funds raised can be used for projects such as the creation of nature reserves, the monitoring of the jaguar population, and the implementation of measures to prevent poaching and deforestation. This also includes the protection of their natural habitats, their identification and the study of their genealogy.")
                                        }
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className={classes.framebottom}></div>
            </div>
        </>
    )
}
