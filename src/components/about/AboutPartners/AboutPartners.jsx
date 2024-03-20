import Image from 'next/image'
import React from 'react'
import classes from './about-partners.module.scss'

export const AboutPartners = () => {
    return (
        <div
            className={classes.about_partners}
        >
            <div className={classes.frametop}></div>
            <h2>Asociados</h2>
            <div className={classes.about_partners__slider}>
                <div>
                    <div>
                        <div>
                            <Image
                                src="/img/partnerships/image_01.png"

                                width={100}
                                height={100}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="/img/partnerships/image_02.png"

                                width={100}
                                height={100}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="/img/partnerships/image_03.png"

                                width={100}
                                height={100}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src="/img/partnerships/image_04.png"

                                width={100}
                                height={100}
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
