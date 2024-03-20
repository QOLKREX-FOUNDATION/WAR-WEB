import Link from 'next/link';
import React from 'react'
import classes from "./card-register.module.scss";

export const CardRegister = () => {
    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <div className={classes.card__header}>
                    <Link
                        href="/"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                        Volver al inicio
                    </Link>
                    <img
                        src="/img/huella.png"
                        alt="logo"
                    />
                </div>
                <div className={classes.card__microship}>
                    <p>Ingrese el código del microship:</p>
                    <label htmlFor="cod_microchip">
                        <input id="cod_microchip" type="text" placeholder='Cod. Microchip' />
                        <button
                            type="button"
                            className={classes.card__button}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </label>
                    <button
                        className={classes.card__microship__button}
                    >
                        Connect Wallet
                    </button>
                </div>
                <div className={classes.card__logo}>
                    <img
                        src="./img/logo-war.webp"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}
