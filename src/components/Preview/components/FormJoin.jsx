import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DefaultModal } from '../../containers/modals/DefaultModal/DefaultModal';
import { useModal } from '../../../hook/useModal';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormJoin = ({
    setOpenModal
}) => {
    const { t } = useTranslation();

    const recaptchaRef = useRef(null);
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            fullName: '',
            phone: '',
            email: '',
            address: '',
            country: '',
            company: '',
            message: ''
        }
    })

    const onSubmit = async (data) => {
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log("verify", recaptchaValue)
        if (!recaptchaValue) {
            toast.error("Por favor complete el captcha", {
                theme: "colored",
            });
            return;
        }

        try {
            // 'http://localhost:5000/api/request/register-entity'
            const res = await fetch('https://firulaix-api-nodejs.vercel.app/api/request/register-entity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const response = await res.json();
            console.log(response);
            if (response.ok) {
                setOpenModal(true);
                reset();
                recaptchaRef.current.reset();
            }
        } catch (error) {
            console.log(error);
        }

    };

    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        // alert(`Hey, ${ email }`);
        // recaptchaRef.current.reset();
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col pb-10 lg:pb-0 overflow-y-auto lg:overflow-y-hidden max-h-[600px]">
                {/* <h2 className='text-lg font-semibold'>
                    {t("Do you want to be a registration entity?")}
                </h2> */}
                {/* <hr className='py-2 mt-2' /> */}
                <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="fullName" className='text-sm font-semibold'>
                            {
                                t("First and last name")
                            }
                        </label>
                        <input id="fullName" type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("fullName", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("This field must contain a maximum of 50 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.fullName && (
                                <span className="text-red-500 text-sm">{errors.fullName.message}</span>
                            )
                        }
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="phone" className='text-sm font-semibold'>{t("Phone number")}</label>
                        <input id="phone" type="text" className='text-black px-3 py-2 rounded-md border border-gray-400'
                            {
                            ...register("phone", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.phone && (
                                <span className="text-red-500 text-sm">{errors.phone.message}</span>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="email" className='text-sm font-semibold'>{t("Email")}</label>
                        <input id="email" type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("email", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("This field must contain a maximum of 50 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )
                        }
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="address" className='text-sm font-semibold'>{t("Address")}</label>
                        <input id="address" type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("address", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("This field must contain a maximum of 50 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.address && (
                                <span className="text-red-500 text-sm">{errors.address.message}</span>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="company" className='text-sm font-semibold'>{t("Company")}</label>
                        <input id="company" type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("company", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("This field must contain a maximum of 50 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.company && (
                                <span className="text-red-500 text-sm">{errors.company.message}</span>
                            )
                        }
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 gap-2">
                        <label htmlFor="country" className='text-sm font-semibold capitalize'>{t("country")}</label>
                        <input id="country" type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("country", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("This field must contain a maximum of 50 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.country && (
                                <span className="text-red-500 text-sm">{errors.country.message}</span>
                            )
                        }
                    </div>
                </div>

                <div div className="flex gap-4 py-2" >
                    <div className="flex flex-col ">
                        <label htmlFor="message" className='text-sm font-semibold'>
                            {
                                t("Tell us about your role or work in the animal ownership system in your country")
                            }
                        </label>
                        <input id='message' type="text" className='text-black px-3 py-2 rounded-md  border border-gray-400'
                            {
                            ...register("message", {
                                required: {
                                    value: true,
                                    message: t("This field is required"),
                                },
                                minLength: {
                                    value: 3,
                                    message: t("This field must contain at least 3 characters"),
                                },
                                maxLength: {
                                    value: 150,
                                    message: t("This field must contain a maximum of 150 characters"),
                                },
                            })
                            }
                        />
                        {
                            errors.message && (
                                <span className="text-red-500 text-sm">{errors.message.message}</span>
                            )
                        }
                    </div>
                </div >
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onReCAPTCHAChange}
                />
                <div className="flex gap-4 py-2">
                    <button
                        className='bg-sky-500 text-white font-semibold py-2 rounded-md w-full'
                    >
                        {
                            t("Submit")}
                    </button>
                </div>
            </form>
        </>
    )
}
