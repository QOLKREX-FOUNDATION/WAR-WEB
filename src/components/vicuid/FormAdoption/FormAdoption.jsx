import Link from 'next/link';
import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';
import { mailApi } from '../../../../api';
import { useCountry, useDocuments } from '../../../hook/inputs';
import { useUbigeo } from '../../../hook/useUbigeo';
import { adopterVicuInit } from '../../../utils';
import { ModalFile } from '../../atoms/inputs/ModalFile/ModalFile';
import { ModalInputComponent } from '../../molecules/ModalInputComponent/ModalInputComponent';
import { ReactSelectComponent } from '../../molecules/ReactSelectComponent/ReactSelectComponent';
import classes from './form-adoption.module.scss'

export const FormAdoption = () => {
    const [showPayment, setShowPayment] = useState(true);
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const recaptchaRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        alert(`Hey, ${ email }`);
        recaptchaRef.current.reset();
    }

    const onSubmit = (data) => {
        setLoading(true);
        const form = new FormData();
        form.append("adopter", JSON.stringify(data));
        form.append("image", data.image[0]);
        form.append("entity", "W.A.R");
        // console.log(data)

        const recaptchaValue = recaptchaRef.current.getValue();
        // console.log("verify", recaptchaValue)
        if (!recaptchaValue) {
            toast.error("Por favor complete el captcha", {
                theme: "colored",
            });
            return;
        }

        mailApi.post("/", form)
            .then(({ data }) => {
                if (data.ok) {
                    toast.success("Enviado Correctamente, Te avisaremos por interno", {
                        theme: "colored",
                    });
                    reset();
                } else {
                    toast.error("No se pudo enviar correctamente, intento de nuevo", {
                        theme: "colored",
                    });
                }
                setLoading(false);
            })
            .catch((e) => {
                toast.error("No se pudo enviar correctamente, intento de nuevo", {
                    theme: "colored",
                });
                setLoading(false);
            });
    }

    const handleVerify = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log("verify", recaptchaValue)
        // recaptchaRef.current.execute();
    }

    const { countries } = useCountry();
    const { documents, handleDocuments } = useDocuments();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        getValues,
        reset,
    } = useForm({
        defaultValues: adopterVicuInit,
    });

    const {
        departments,
        provinces,
        districts,
        handleDepartaments,
        handleProvinces,
        handleDistricts,
    } = useUbigeo();

    useEffect(() => {
        handleDocuments(
            setValue,
            watch("country"),
            "NATURAL"
        );
    }, [watch("country")]);

    useEffect(() => {
        handleDepartaments();
    }, []);
    useEffect(() => {
        handleProvinces(watch("department"));
    }, [watch("department")]);

    useEffect(() => {
        handleDistricts(watch("province"));
    }, [watch("province")]);

    const { t } = useTranslation();

    return (
        <div
            className={classes.formAdoption}
        >
            <h2>{t("Adoption Form")}</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* identificaction */}
                <div>
                    <h2>
                        {t("Identificación")}
                    </h2>
                    <hr />
                    <div>
                        <ReactSelectComponent
                            name={t("country")}
                            property="country"
                            options={countries}
                            values={register}
                            watch={watch}
                            setValue={setValue}
                            error={errors}
                            required
                        />
                        {/* <p>
                            {errors.country && errors.country.message}
                        </p> */}
                    </div>

                    <div>
                        <ModalInputComponent
                            name={t("document number")}
                            type="number"
                            property="documentNumber"
                            values={register}
                            error={errors}
                            required
                        />
                    </div>

                    <div>
                        <ReactSelectComponent
                            name={t("document types")}
                            property="document"
                            options={documents}
                            values={register}
                            watch={watch}
                            setValue={setValue}
                            error={errors}
                            required
                        />
                    </div>


                </div>
                {/* Informe general */}
                <div>
                    <h2>
                        {t("General information")}
                    </h2>
                    <hr />
                    <div>
                        <ModalInputComponent
                            name={t("name")}
                            property="name"
                            values={register}
                            error={errors}
                            required
                        />
                    </div>
                    <div>
                        <ModalInputComponent
                            name={t("second name")}
                            property="secondName"
                            values={register}
                            error={errors}
                        />
                    </div>
                    <div>
                        <ModalInputComponent
                            name={t("surname")}
                            property="lastName"
                            values={register}
                            error={errors}
                            required
                        />

                    </div>
                    <div>
                        <ModalInputComponent
                            name={t("second surname")}
                            property="mLastName"
                            values={register}
                            error={errors}
                        />

                    </div>

                    <div>
                        <ModalInputComponent
                            name={t("cell phone")}
                            property="phone"
                            values={register}
                            error={errors}
                            required
                        />

                    </div>

                    <div>
                        <ModalInputComponent
                            name={t("date of birth")}
                            type="date"
                            property="date"
                            values={register}
                            error={errors}
                            required
                        />
                    </div>

                    <div>

                        <ModalInputComponent
                            name={t("email")}
                            property="email"
                            type="email"
                            values={register}
                            error={errors}
                            required
                        />

                    </div>
                    <div>
                        <ReactSelectComponent
                            name={t("gender")}
                            property="gender"
                            options={[
                                { label: t("MAN"), value: "MAN" },
                                { label: t("WOMAN"), value: "WOMAN" },
                            ]}
                            values={register}
                            watch={watch}
                            setValue={setValue}
                            error={errors}
                            required
                        />
                    </div>
                    {
                        watch("country") === "PE" && (
                            <>
                                <div>
                                    <ReactSelectComponent
                                        name={t("departamento")}
                                        property="department"
                                        options={departments}
                                        values={register}
                                        watch={watch}
                                        setValue={setValue}
                                        error={errors}
                                        required
                                    />
                                </div>
                                <div>
                                    <ReactSelectComponent
                                        name={t("province")}
                                        property="province"
                                        options={provinces}
                                        values={register}
                                        watch={watch}
                                        setValue={setValue}
                                        error={errors}
                                        required
                                    />


                                </div>
                                <div>
                                    <ReactSelectComponent
                                        name={t("district")}
                                        property="district"
                                        options={districts}
                                        values={register}
                                        watch={watch}
                                        setValue={setValue}
                                        error={errors}
                                        required
                                    />
                                </div>
                            </>
                        )
                    }
                    <div>
                        <ModalInputComponent
                            name={t("address")}
                            property="direction"
                            values={register}
                            error={errors}
                            required
                        />
                    </div>

                </div>
                {/* adopta vicuña */}
                <div>
                    <h2>{t("Adopt your vicuna")}</h2>
                    <hr />
                    <div>
                        <ModalInputComponent
                            name={t("Vicuna Name")}
                            property="vicunaName"
                            values={register}
                            error={errors}
                            required
                        />
                    </div>
                    <div>

                    </div>
                    <div className={classes.formAdoption__title}>
                        <h3>
                            {t("You can be part of this campaign by sending your collaboration in the following accounts")}
                        </h3>
                    </div>
                    <div
                        className={classes.formAdoption__payment}
                    >
                        <div>
                            <button
                                type='button'
                                onClick={() => setShowPayment(true)}
                            >
                                💳
                                FIAT
                            </button>
                            <button
                                type='button'
                                onClick={() => setShowPayment(false)}
                            >
                                🪙
                                CRYPTO
                            </button>
                        </div>
                        {
                            showPayment ?
                                <Fade>
                                    <div>
                                        {/* PAGO FIAT */}
                                        <Link
                                            href="https://api.openpay.pe/occ/B1ZH0kCV7UHx"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Hacer un depósito $10
                                        </Link>
                                        <p>Prueba del Pago</p>
                                        <ModalFile
                                            name="Subir captura de depósito"
                                            values={register}
                                            watch={watch}
                                            property="image"
                                            error={errors}
                                            required
                                        />
                                    </div>
                                </Fade>

                                :
                                <Fade>
                                    <div>
                                        {/* PAGO CRYPTO */}
                                        <h3>{t("Deposit method")}</h3>
                                        <p>TX (CELO)</p>
                                        <p>0x7B9B14218998c7A90C1F28F13025c0F1d6678c95</p>
                                        <ModalFile
                                            name={t("Upload transaction capture")}
                                            values={register}
                                            watch={watch}
                                            property="image"
                                            error={errors}
                                            required
                                        />
                                        <p>{t("Paste the transaction hash here")}</p>
                                        <div>
                                            <div>
                                                <img src="/img/vicuid/payment-methods/image_01.png" alt="" />
                                                <p>Celo   FIRU - CUSD - CELO</p></div>
                                            {/* <div>
                                                <img src="/img/vicuid/payment-methods/image_02.png" alt="" />
                                                <p>Moonriver   USDC - USDT - FIRU - MOVR</p></div> */}
                                            <div>
                                                <img src="/img/vicuid/payment-methods/image_03.png" alt="" />
                                                <p>BSC   BUSD - USDT - BNB</p></div>
                                            <div>
                                                <img src="/img/vicuid/payment-methods/image_04.png" alt="" />
                                                <p>Polygon   USDC - USDT - MATIC </p></div>
                                        </div>
                                    </div>
                                </Fade>

                        }
                    </div>
                    {/* captcha */}

                    {/* <button
                        type="button"
                        onClick={handleVerify}
                        className={classes.formAdoption__button}
                    >
                        No soy un robot
                    </button> */}

                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="normal"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={onReCAPTCHAChange}
                        onClick={handleVerify}
                    />

                    <div
                        className={classes.formAdoption__acept}
                    >
                        <label htmlFor="acept">
                            <input
                                type="checkbox"
                                id="acept"
                                {...register("acept", {
                                    required: {
                                        value: true,
                                        message: t("You must accept the terms and conditions"),
                                    },
                                })}
                            />
                            {t("I accept that the adoption is symbolic and collaborative for the protection of the Vicuñas")}
                        </label>
                        <p>
                            {errors.acept && errors.acept.message}
                        </p>
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-sky-400 w-96 h-12 rounded-md text-white font-bold hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {t("Send")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
