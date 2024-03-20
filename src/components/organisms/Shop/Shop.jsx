import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Bounce } from 'react-reveal'
import classes from './shop.module.scss'

export const Shop = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.shop}>
            <div>
                <Bounce left>
                    <h1>{t("Do you need more FIRU's to register?")}</h1>
                </Bounce>
                <Bounce right>
                    <p>
                        {t("Here you can find more firus")}
                    </p>
                    <Image
                        src="/img/news/firu.png"
                        alt="animals"
                        width={300}
                        height={150}
                        title="Animals"
                    />
                    <Link
                        href="http://p2p.worldanimalregistry.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Let's go for more firus")}
                    </Link>
                </Bounce>
            </div>
        </div>
    )
}
