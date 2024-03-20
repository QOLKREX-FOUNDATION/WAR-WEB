import React from 'react'
import Image from "next/image";
import { ContactHead } from "../Header/components/ContactHead/ContactHead";
import classes from "./header-register.module.scss";
import { Link } from 'react-scroll';

export const HeaderRegister = () => {
    return (
        <div className={classes.register}>
            <Link
                href='/'
                className={classes.register__logo}>
                <div>
                    <Image
                        src="/img/logo-war.webp"
                        layout="responsive"
                        width={50}
                        height={50}
                    />
                </div>
            </Link>
            <ContactHead />
        </div>
    )
}
