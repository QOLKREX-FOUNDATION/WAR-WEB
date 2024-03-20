import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const WrapperLink = ({ title, children }) => {
    const { t } = useTranslation();
    return (
        <div className='w-full flex flex-col relative min-w-[150px] z-10'>
            <a
                className='text-lg font-bold cursor-pointer text-[#00a99d] flex justify-between items-center w-full px-4 py-2 hover:bg-[#4dcdc5] hover:text-white transition-all duration-300 ease-in-out dropdown__link'
            >
                <span className='capitalize'>
                    {t(`${ title }`)}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>

            <div className={`dropdown__content bg-[#4dcdc5] py-2 z-20`}>
                {children}
            </div>
        </div>
    )
}
