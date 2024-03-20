import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './process.module.scss'

export const Process = () => {
    const { t } = useTranslation();
    const { locale } = useRouter();
    return (
        <div
            className={classes.process}
        >
            <h2>{t("Process to register your vicuña")}</h2>
            {
                locale === "es" ? (
                    <Image
                        src="/img/vicuid/process.png"
                        alt="process-1"
                        width={550}
                        height={900}
                        title="Proceso para registrar a tu vicuña"
                    />
                ) : (
                    <Image
                        src="/img/vicuid/english/process.png"
                        alt="process-1"
                        width={550}
                        height={900}
                        title="Proceso para registrar a tu vicuña"
                    />
                )
            }
        </div>
    )
}
