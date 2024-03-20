import Image from 'next/image'
import React from 'react'
import { useSendForm } from '../../../hook/useSendForm';
import { useForm } from 'react-hook-form';
import { DefaultModal } from '../../containers/modals/DefaultModal/DefaultModal';
import { useModal } from '../../../hook/useModal';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { DefaultButton } from '../../atoms/DefaultButton/DefaultButton';
import { toast } from 'react-toastify';

export const ContactView = () => {

    const recaptchaRef = useRef(null);
    const { t } = useTranslation()
    const { openModal, setOpenModal } = useModal();
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm();
    const regexText = /^[a-zA-Z0-9 ]+$/;

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const { dataSubmit } = useSendForm();

    const onSubmit = (data) => {
        const recaptchaValue = recaptchaRef.current.getValue();
        // console.log("verify", recaptchaValue)
        if (!recaptchaValue) {
            toast.error("Por favor complete el captcha", {
                theme: "colored",
            });
            return;
        }
        console.log(data);
        dataSubmit(data, setOpenModal, reset);
    };

    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        alert(`Hey, ${ email }`);
        recaptchaRef.current.reset();
    }

    return (
        <>
            {openModal && (
                <DefaultModal setOpenModal={setOpenModal}>
                    <h1>{t("Mail sent successfully")}!</h1>
                </DefaultModal>
            )}
            <div className="w-full flex justify-center border">
                <div className='w-full max-w-7xl flex flex-col px-6 lg:flex-row'>
                    <div className="relative max-w-xl">
                        <Image
                            src='/img/contact/recurso-159.webp'
                            alt='contact'
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-3 max-w-2xl lg:w-full justify-center lg:px-4 py-10 lg:py-0"
                    >
                        <h2
                            className='text-[#00a99d] text-4xl font-bold text-center'
                        >
                            {t("Contact us")}
                        </h2>
                        <label
                            htmlFor=""
                            className='border border-[#5ec0e9] py-2 px-2 rounded-2xl'
                        >
                            <h3 className='text-[#00a99d] text-lg w-24 pl-2'>
                                {t("Name")}
                            </h3>
                            <input
                                type="text"
                                placeholder={t("Enter your name")}
                                className='w-full py-2 px-2 bg-transparent'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: t("Required field"),
                                    },
                                    minLength: { value: 3, message: t("The name must have at least 3 characters") },
                                    maxLength: { value: 30, message: t("The name can have a maximum of 30 characters") },
                                    pattern: {
                                        value: regexText,
                                        message: t("Incorrect format"),
                                    },
                                })}
                            />
                        </label>
                        {
                            errors.name && (
                                <span className='text-red-500 text-sm'>
                                    {errors.name.message}
                                </span>
                            )
                        }
                        <label
                            htmlFor=""
                            className='border border-[#5ec0e9] py-2 px-2 rounded-2xl'
                        >
                            <h3 className='text-[#00a99d] text-lg w-24 pl-2'>
                                Email
                            </h3>
                            <input
                                type="text"
                                placeholder={t("Enter your email")}
                                className='w-full py-2 px-2 bg-transparent'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: t("Required field"),
                                    },
                                    pattern: {
                                        value: regexEmail,
                                        message: t("Incorrect format"),
                                    },
                                })}
                            />
                        </label>
                        {
                            errors.email && (
                                <span className='text-red-500 text-sm'>
                                    {errors.email.message}
                                </span>
                            )
                        }
                        <label
                            htmlFor=""
                            className='border border-[#5ec0e9] py-2 px-2 rounded-2xl'
                        >
                            <h3 className='text-[#00a99d] text-lg w-24 pl-2'>
                                {t("Phone")}
                            </h3>
                            <input
                                type="text"
                                placeholder={t("Enter your phone")}
                                className='w-full py-2 px-2 bg-transparent'
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: t("Required field"),
                                    },
                                    minLength: { value: 3, message: t("Nombre muy corto") },
                                    maxLength: { value: 20, message: t("Nombre muy largo") },
                                    pattern: {
                                        value: regexText,
                                        message: t("Incorrect format"),
                                    },
                                })}
                            />
                        </label>
                        {
                            errors.phone && (
                                <span className='text-red-500 text-sm'>
                                    {errors.phone.message}
                                </span>
                            )
                        }
                        <label
                            htmlFor=""
                            className='border border-[#5ec0e9] py-2 px-2 rounded-2xl'
                        >
                            <h3 className='text-[#00a99d] text-lg w-24 pl-2'>
                                {t("Message")}
                            </h3>
                            <textarea name="" id="" cols="30" rows="10"
                                className='w-full px-2 bg-transparent'
                                placeholder={t("Enter your message")}
                                {...register("detail", {
                                    required: {
                                        value: true,
                                        message: t("Required field"),
                                    },
                                })}
                            ></textarea>
                        </label>
                        {
                            errors.detail && (
                                <span className='text-red-500 text-sm'>
                                    {errors.detail.message}
                                </span>
                            )
                        }
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="normal"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                        />
                        {/* <div className="flex justify-center">
                            <p className='text-[#00a99d] text-sm'>
                                {t("I have read and accept the")}
                              
                                    <a className='text-[#00a99d] text-sm'>
                                        {t("privacy policy")}
                                    </a>
                            </p>
                        </div> */}

                        <button
                            type="submit"
                            className='bg-[#00a99d] text-white py-2 px-4 rounded-2xl font-semibold uppercase'
                        >
                            {
                                t("send message")
                            }
                        </button>
                    </form>
                    <div className="w-96 absolute right-0 bottom-10 z-20">
                        <Image
                            src='/img/contact/recurso-160.webp'
                            alt='contact'
                            width={1920}
                            height={1080}
                            className='relative'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
