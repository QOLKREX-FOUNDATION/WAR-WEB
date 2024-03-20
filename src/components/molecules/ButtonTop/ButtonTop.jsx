import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import classes from './ButtonTop.module.scss'

export const ButtonTop = () => {
    const [hidden, setHidden] = useState(true);
    const { t } = useTranslation();
    const handlScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setHidden(false)
            } else {
                setHidden(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            {
                !hidden && (
                    <button
                        title={t('Scroll to top')}
                        className={classes.BtnTop} onClick={handlScrollTop}>
                        <svg width="260" height="229" viewBox="0 0 260 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="40.4438" cy="91.1723" rx="29.5" ry="42.5" transform="rotate(-16.656 40.4438 91.1723)" fill="#D9D9D9" />
                            <ellipse cx="98.5" cy="42.5" rx="29.5" ry="42.5" fill="#D9D9D9" />
                            <ellipse cx="168.5" cy="42.5" rx="29.5" ry="42.5" fill="#D9D9D9" />
                            <ellipse cx="217.5" cy="89.5" rx="29.5" ry="42.5" transform="rotate(18.7441 217.5 89.5)" fill="#D9D9D9" />
                            <circle cx="128" cy="159" r="70" fill="#D9D9D9" />
                        </svg>
                    </button>
                )
            }
        </>
    )
}
