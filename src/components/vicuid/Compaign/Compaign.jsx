import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './compaign.module.scss'

export const Compaing = () => {
    const { t } = useTranslation();
    return (
        <div
            className={classes.compaign}
        >
            {/* <div>
                <div>
                    <h3>Método de depósito</h3>
                    <p>TX (CELO)</p>
                    <p>0x7B9B14218998c7A90C1F28F13025c0F1d6678c95</p>
                    <input type="text" />
                    <p>Pega el hash de la transacción aquí</p>
                    <div>
                        <div>
                            <img src="/img/vicuid/payment-methods/image_01.png" alt="" />
                            <p>Celo   FIRU - CUSD - CELO</p></div>
                        <div>
                            <img src="/img/vicuid/payment-methods/image_02.png" alt="" />
                            <p>Moonriver   USDC - USDT - FIRU - MOVR</p></div>
                        <div>
                            <img src="/img/vicuid/payment-methods/image_03.png" alt="" />
                            <p>BSC   BUSD - USDT - BNB</p></div>
                        <div>
                            <img src="/img/vicuid/payment-methods/image_04.png" alt="" />
                            <p>Polygon   USDC - USDT - MATIC </p></div>
                    </div>
                </div>
                <div>
                    <Link
                        href="https://api.openpay.pe/occ/T5KT3HUtyuiJ"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Realiza tu donación
                    </Link>
                </div>
            </div> */}
            <div
                className={classes.compaign__certificates}
            >
                <div>
                    <h3>{t("Adoption Certificate")}</h3>
                    <img
                        className={classes.compaign__certificates__image1}
                        src="/img/vicuid/certificates/certificate_02.jpg" alt="certificate" />
                </div>
                <div>
                    <h3>NFT</h3>
                    <img
                        className={classes.compaign__certificates__image2}
                        src="/img/vicuid/certificates/image_02.png" alt="NFT" />
                </div>
            </div>
        </div>
    )
}
