import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ReactSelectComponent } from "../../molecules/ReactSelectComponent/ReactSelectComponent";
import { ModalInputComponent } from "../../molecules/ModalInputComponent/ModalInputComponent";
import { useUbigeo } from "../../../hook/useUbigeo";
import {
  useCountry,
  useDocuments,
  usePerson,
  useType,
} from "../../../hook/inputs";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { DefaultModal } from "../../containers/modals/DefaultModal/DefaultModal";
import { useModal } from "../../../hook/useModal";
import { useTranslation } from "react-i18next";
import { ModalForm } from "../ModalForm";
import { useRouter } from "next/router";
import { MessageStatus } from "../MessageStatus";
import { API } from "../../../config";

const countriesAcepeted = [
  { label: "COLOMBIA", value: "CO" },
  { label: "ECUADOR", value: "EC" },
  { label: "CHILE", value: "CL" },
  { label: "PERU", value: "PE" },
  { label: "MEXICO", value: "MX" },
];

export const RequestView = () => {
  const [step, setStep] = useState(1);
  const { openModal, setOpenModal } = useModal();
  const { t } = useTranslation();
  const router = useRouter();
  const query = router.query;

  // form data
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      country: "PE",
      person: "NATURAL",
      email: "",
      phone: "",
      type: "dni",
      typeService: "",
      image: "",
      document: "",
      documentNumber: "",
      paymentMethod: "tarjeta",
      // department: "",
      // province: "",
      // district: "",
      // address: "",
    },
    mode: "onBlur",
  });

  const { countries } = useCountry();
  const { persons } = usePerson();
  const { types } = useType();
  const { documents, handleDocuments } = useDocuments();
  const recaptchaRef = useRef(null);
  const refForm = useRef(null);
  const [showForm, setshowForm] = useState(true);

  const handlePaymentMethod = async () => {
    // const resp= await fetch('https://firulaix-api-nodejs.vercel.app/api/request/payment-methods');

    setshowForm(true);

    // const url = watch("typeService") == "REGISTRO COMPLETO S/.60" ? 'http://localhost:5000/api/payment/create-order' : 'http://localhost:5000/api/payment/create-order-2';
    // try {
    //     const resp = await fetch(`${ url }`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
    //     const data = await resp.json();
    //     console.log(data)
    //     window.open(data.data.init_point, "_blank");
    // } catch (error) {
    //     console.log(error)
    // }
  };

  const handleNextStep = () => {
    // if (errors) return;
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    // if (errors) return;
    setStep(step - 1);
    // console.log(watch("image"), watch("country"), watch("person"), watch("type"), watch("document"), watch("typeService"), watch("documentNumber"))
  };

  const onSubmit = async (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    console.log("verify", recaptchaValue);
    if (watch("paymentMethod") === "transferencia") {
      if (!recaptchaValue) {
        toast.error("Por favor complete el captcha", {
          theme: "colored",
        });
        return;
      }
    }

    const formData = new FormData();
    formData.append("country", data.country);
    // formData.append("person", data.person);
    formData.append("person", "NATURAL");
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("type", data.type);
    formData.append("document", data.document);
    formData.append("document_number", data.documentNumber);
    formData.append("type_service", data.typeService);
    formData.append("image", data.image);

    // console.log(data)
    try {
      // 'http://localhost:5000/api/request/register-user'
      // const res = await fetch('https://firulaix-api-test.vercel.app/api/request/register-user', {
      const res = await fetch(`${API.war}request/register-user`, {
        method: "POST",
        body: formData,
      });
      const response = await res.json();
      console.log(response);
      if (response.ok) {
        setOpenModal(true);
        reset();
        recaptchaRef.current.reset();
        setStep(1);
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
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setValue("image", e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setValue("image", "");
  };

  const {
    departments,
    provinces,
    districts,
    handleDepartaments,
    handleProvinces,
    handleDistricts,
  } = useUbigeo();

  useEffect(() => {
    if (watch("country") == "")
      setValue("country", localStorage.getItem("countryCode") ?? "PE");
  }, [countries]);

  useEffect(() => {
    handleDepartaments();
  }, []);

  useEffect(() => {
    handleProvinces(watch("department"));
  }, [watch("department")]);

  useEffect(() => {
    handleDistricts(watch("province"));
  }, [watch("province")]);

  useEffect(() => {
    handleDocuments(setValue, watch("country"), watch("person"));
  }, [watch("country")]);

  useEffect(() => {
    setValue("typeService", "SOLO REGISTRO S/.25");
  }, []);

  // useEffect(() => {
  //     console.log(query)
  //     console.log(Object.keys(query).length)
  //     console.log(refForm.current)
  //     if (query.status === "approved") {
  //         // en esta ruta se debe mostrar el mensaje de pago exitoso
  //         // se consulta el estado del pago en la base de datos

  //         // router.push("/request/success", {
  //         //     query: {
  //         //         status: query.status,
  //         //         payment_id: query.payment_id,
  //         //     }
  //         // })

  //         // SEND EMAIL
  //         // console.log(refForm.current)
  //         // if (refForm.current !== null) {
  //         //     // submit the form imperatively as fallback
  //         //     console.log("submit")
  //         //     // refForm.current.submit();
  //         //     onSubmit();
  //         // }
  //     }
  // }, [query])

  console.log(watch("paymentMethod"));

  console.log(countries);
  /*
    [{ label: 'COLOMBIA', value: 'CO' },
    { label: 'ECUADOR', value: 'EC' },
    { label: 'PERU', value: 'PE' },
    { label: 'CHILE', value: 'CL' },
    { label: 'MEXICO', value: 'MX' },]
*/

  return (
    <>
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>{t("Mail sent successfully")}!</h1>
        </DefaultModal>
      )}
      {/* {
                query.status !== "" &&
                <MessageStatus />
            } */}
      <>
        <div className="flex items-center w-full min-h-[72vh]">
          <div className="w-full flex flex-col items-center lg:flex-row justify-center px-14 gap-20">
            <div className="flex relative max-w-2xl">
              <Image
                src="/img/request/recurso-159.webp"
                alt="Picture of the author"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/img/entity/recurso-157.webp"
                alt="Picture of the author"
                width={500}
                height={500}
                className="object-cover absolute top-0 left-0"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-start lg:pb-0 max-w-xl lg:max-w-3xl w-full rounded-2xl min-h-[700px] mb-10">
              <div className="flex flex-col items-center py-5 px-4 lg:w-1/3 bg-[#00a99d] min-h-[790px] rounded-l-2xl">
                <Image
                  src="/img/request/image-02.webp"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  className="object-cover"
                />
                <h2 className="text-xl font-bold text-white text-center lg:text-left pb-4">
                  {t("THE REGISTRY OF WILD AND DOMESTIC ANIMALS")}
                </h2>
                <Image
                  src="/img/request/recurso-116.webp"
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  className="object-cover"
                />
                <div className="flex flex-col text-white px-4 ">
                  <p>
                    ¿Tu mascota ya tiene un chip de identificación? ¡Entonces es
                    el momento perfecto para registrarla en el World Animal
                    Registry (W.A.R.) y asegurar su bienestar de por vida! En
                    los países donde operamos, ofrecemos un servicio:
                  </p>
                  {/* <h2 className="text-2xl font-bold">
                    {t("Complete Registration")}:
                  </h2> */}
                  <p>-----------------------------</p>
                  <ul className="font-semibold">
                    <li className="list-disc">
                      {t("Identification microchip")}
                    </li>
                    <li className="list-disc">
                      {t("Registration in the W.A.R system")}
                    </li>
                    <li className="list-disc">{t("Adoption certification")}</li>
                    {/* <li className="list-disc">
                      {t("Veterinary consultation")}
                      <br />
                      <span className="text-sm">
                        ({t("Main office headquarters Jesús María - Lima Peru")}
                        )
                      </span>
                    </li> */}
                  </ul>
                  <p>-----------------------------</p>
                </div>
                {/* <div className="flex flex-col text-white px-4 ">
                  <h2 className="text-2xl font-bold">
                    {t("Registration Only")}:
                  </h2>
                  <p>-----------------------------</p>
                  <ul className="font-semibold">
                    <li className="list-disc">
                      {t("Registration in the W.A.R system")}
                    </li>
                    <li className="list-disc">{t("Adoption certification")}</li>
                    <li className="list-disc">
                      {t("Veterinary consultation")}
                      <br />
                      <span className="text-sm">
                        ({t("Main office headquarters Jesús María - Lima Peru")}
                        )
                      </span>
                    </li>
                  </ul> */}
                {/* <p>-----------------------------</p> */}
                {/* </div> */}
              </div>
              {/* form */}
              <div className="flex flex-col w-full lg:w-2/3 border">
                <form
                  ref={refForm}
                  onSubmit={handleSubmit(onSubmit)}
                  className=" flex flex-col items-center gap-3 w-full h-full py-10 px-5 rounded-r-2xl"
                >
                  <div className="flex">
                    <button
                      type="button"
                      className={`text-white w-12 h-12 rounded-full font-bold ${
                        step === 1 ? "bg-[#29abe2]" : "bg-[#4ab9e9]"
                      }`}
                    >
                      1
                    </button>
                    <div className="w-10 h-2 bg-white mt-4"></div>
                    <button
                      type="button"
                      className={`text-white w-12 h-12 rounded-full font-bold ${
                        step === 2 ? "bg-[#29abe2]" : "bg-[#4ab9e9]"
                      }`}
                    >
                      2
                    </button>
                  </div>
                  {/* step 1 form */}
                  <div
                    className={`w-full flex flex-col py-3 gap-3 ${
                      step === 1
                        ? "opacity-100 z-10"
                        : "opacity-0 -z-20 absolute overflow-hidden w-0"
                    }`}
                  >
                    <h2>{t("Identification")}</h2>
                    <ReactSelectComponent
                      name={t("country")}
                      property="country"
                      options={countriesAcepeted.sort((a, b) =>
                        a.label > b.label ? 1 : -1
                      )}
                      values={register}
                      watch={watch}
                      setValue={setValue}
                      error={errors}
                      required
                    />
                    <ModalInputComponent
                      name={t("Email")}
                      type="email"
                      property="email"
                      values={register}
                      error={errors}
                      required
                    />

                    <ModalInputComponent
                      name={`${t("Phone number")} (${watch("phone").length})`}
                      type="number"
                      property="phone"
                      values={register}
                      error={errors}
                      required
                    />

                    {/* <ReactSelectComponent
                                            name={t("kind of person")}
                                            property="person"
                                            options={persons}
                                            values={register}
                                            watch={watch}
                                            setValue={setValue}
                                            error={errors}
                                            required
                                        /> */}

                    <ReactSelectComponent
                      name={t("Type Document")}
                      property="document"
                      options={[
                        { label: "DNI (Documento de identidad)", value: "DNI" },
                        { label: "CE", value: "CE" },
                        { label: "PASAPORTE", value: "PASAPORTE" },
                      ]}
                      values={register}
                      watch={watch}
                      setValue={setValue}
                      error={errors}
                      required
                    />

                    <ModalInputComponent
                      name={`${t("Number Document")} (${
                        watch("documentNumber").length
                      })`}
                      type="number"
                      property="documentNumber"
                      values={register}
                      error={errors}
                      required
                    />

                    {/* <ReactSelectComponent
                      name={t("Type Adopter")}
                      property="type"
                      options={types}
                      values={register}
                      watch={watch}
                      setValue={setValue}
                      error={errors}
                      required
                    /> */}
                    {/* {
                      <div className="relative -top-2 left-1">
                        {watch("type") === "ADOPTER" && (
                          <span className="text-sm text-gray-600">
                            (Dueño de la mascota)
                          </span>
                        )}
                        {watch("type") === "SHELTER" && (
                          <span className="text-sm text-gray-600">
                            (Institución de muchas mascotas)
                          </span>
                        )}
                        {watch("type") === "RESCASTITE" && (
                          <span className="text-sm text-gray-600">
                            (Colaborador de rescate animal)
                          </span>
                        )}
                        {watch("type") === "BREEDER" && (
                          <span className="text-sm text-gray-600">
                            (Comerciante de mascotas pedigree)
                          </span>
                        )}
                      </div>
                    } */}

                    <ReactSelectComponent
                      name={t("Type Service")}
                      property="typeService"
                      isDisabled
                      options={[
                        // { label: "REGISTRO COMPLETO 17usd", value: "REGISTRO COMPLETO S/.60" },
                        // { label: "SOLO REGISTRO 8.5usd", value: "SOLO REGISTRO S/.25" },
                        {
                          label: "SOLO REGISTRO 8usd",
                          value: "SOLO REGISTRO S/.25",
                        },
                      ]}
                      values={register}
                      value={{
                        label: "SOLO REGISTRO 8usd",
                        value: "SOLO REGISTRO S/.25",
                      }}
                      watch={watch}
                      setValue={setValue}
                      error={errors}
                      // required
                    />
                    {
                      <div className="relative -top-2 left-1">
                        {watch("typeService") === "REGISTRO COMPLETO S/.60" && (
                          <span className="text-sm text-gray-600">
                            (Incluye: Microchip de identificación, Registro en
                            el sistema de W.A.R, Certificación de adopción,
                            Consulta veterinaria)
                          </span>
                        )}
                        {watch("typeService") === "SOLO REGISTRO S/.25" && (
                          <span className="text-sm text-gray-600">
                            (Incluye: Registro en el sistema de W.A.R,
                            Certificación de adopción, Consulta veterinaria)
                          </span>
                        )}
                      </div>
                    }
                    <button
                      type="button"
                      className="bg-[#29abe2] text-white rounded-xl h-10 font-bold disabled:opacity-50"
                      onClick={handleNextStep}
                      disabled={
                        watch("email") === "" ||
                        watch("phone") === "" ||
                        watch("country") === "" ||
                        watch("person") === "" ||
                        watch("document") === "" ||
                        watch("documentNumber") === "" ||
                        watch("type") === "" ||
                        watch("typeService") === ""
                      }
                    >
                      {t("Continue")}
                    </button>
                  </div>
                  {/* step 2 form */}
                  <div
                    className={`flex flex-col gap-3 w-full ${
                      step === 1
                        ? "opacity-0 -z-20 absolute overflow-hidden w-0"
                        : "opacity-100 z-10"
                    }`}
                  >
                    <div className="flex flex-col">
                      <h2 className="text-lg font-semibold">
                        {t("Payment information")}
                      </h2>
                      {/* transferncia */}
                      {/* <div className="flex flex-col justify-between">
                                                <label htmlFor="tranferencia">
                                                    <input
                                                        type="radio"
                                                        id="tranferencia"
                                                        value="transferencia"
                                                        className="mr-2"
                                                        {...register("paymentMethod", {
                                                            required: "Este campo es requerido",
                                                        })}
                                                    />
                                                    {t("Tranfer")} ({t("Bank")} BBVA)
                                                </label>
                                                <p className="bg-gray-200 p-3 rounded-lg">
                                                    {
                                                        t("Make your payment directly into our bank account. Please use your order number as a payment reference. Your order will not be processed until the amount has been received in our account")
                                                    }.
                                                </p>
                                            </div>

                                            {
                                                // watch('paymentMethod') === 'transferencia' &&

                                                <div className={`${ watch('paymentMethod') === 'transferencia' ? 'flex flex-col z-10' : 'hidden -z-10' }`}>
                                                    <div className="mt-4"></div>
                                                    <ReCAPTCHA
                                                        ref={recaptchaRef}
                                                        size="normal"
                                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                                        onChange={onReCAPTCHAChange}
                                                    />
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="font-bold">{t("Pay by Transfer")}</h2>
                                                        <div className="flex gap-2">
                                                            <p>
                                                                {t("Account number")} :
                                                            </p>
                                                            <p className='font-bold'>
                                                                {" "} 0011-0153-4701000814-69
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <p>
                                                                {t("CCI Interbank Account")}:
                                                            </p>
                                                            <p className='font-bold'>
                                                                {" "} 011-153-000100081469-47
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <label htmlFor="photo" className='bg-gray-400 px-5 py-2 flex justify-center items-center gap-2 rounded-xl hover:cursor-pointer max-w-xs text-white'>
                                                                <span>
                                                                    {t("Enter photo of the transfer")}
                                                                </span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                                </svg>

                                                            </label>
                                                            <input id="photo" type="file" className='bg-gray-400 px-5 py-2 flex justify-center items-center gap-2 rounded-xl hover:cursor-pointer max-w-xs'
                                                                onChange={handleImage}
                                                            ></input>
                                                            {
                                                                watch("image") && (
                                                                    <div className="flex gap-2">
                                                                        <p>
                                                                            {watch("image").name}
                                                                        </p>
                                                                        <img src={watch("image")} alt="" className="w-28 h-28 rounded-xl" />
                                                                        <button
                                                                            type='button'
                                                                            className="bg-red-600 px-4 text-white rounded-xl font-bold h-10"
                                                                            onClick={handleDeleteImage}
                                                                        >
                                                                            x
                                                                        </button>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 mt-4">
                                                        {

                                                            watch("image") !== '' && watch("recaptcha") !== ''
                                                            && watch("country") !== '' && watch("person") !== ''
                                                            && watch("type") !== '' && watch("document") !== '' && watch("typeService") !== '' && watch("documentNumber") !== ''
                                                            && (
                                                                <button
                                                                    type='submit'
                                                                    className="bg-[#29abe2] text-white rounded-xl h-10 font-bold w-full capitalize"
                                                                >
                                                                    {t("send")}
                                                                </button>
                                                            )
                                                        }
                                                    </div>
                                                </div>

                                            } */}

                      {/* tarjeta */}
                      <div className="flex flex-col justify-between pt-3 pb-3">
                        <label htmlFor="tarjeta">
                          <input
                            type="radio"
                            id="tarjeta"
                            value="tarjeta"
                            className="mr-2"
                            // defaultChecked
                            {...register("paymentMethod", {
                              required: "Este campo es requerido",
                            })}
                            onClick={handlePaymentMethod}
                          />
                          {t(
                            "Tarjeta de Crédito Visa, Master Card, American Express, Diners"
                          )}
                          {/* (comisión de S/3.33) */}
                        </label>
                        <p className="bg-gray-200  p-3 rounded-lg">
                          {t(
                            "Our payment gateway is intuitive and easy to use. Simply select ('New Card') as your payment method when making your registration request. Next, enter your card details, including the number, expiration date, and security code. Once you verify the information, you can confirm your transaction and receive a thank you notification."
                          )}
                          .
                        </p>
                      </div>
                    </div>

                    {watch("paymentMethod") === "tarjeta" && (
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold">{t("Pay by Card")}</h2>
                        {/* <button
                                                    type='button'
                                                    className="bg-[#29abe2] text-white rounded-xl h-10 font-bold"
                                                    onClick={handlePaymentMethod}
                                                >
                                                    {t("Go to Cash Payment")}
                                                </button> */}
                        {/* <div className="flex flex-col gap-3">
                                                <label htmlFor="photo" className='bg-gray-400 px-5 py-2 flex justify-center items-center gap-2 rounded-xl hover:cursor-pointer max-w-xs text-white'>
                                                    <span>
                                                        {t("Enter photo of the transfer")}
                                                    </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                    </svg>

                                                </label>
                                                <input id="photo" type="file" className='bg-gray-400 px-5 py-2 flex justify-center items-center gap-2 rounded-xl hover:cursor-pointer max-w-xs'
                                                    onChange={handleImage}
                                                ></input>
                                                {
                                                    watch("image") && (
                                                        <div className="flex gap-2">
                                                            <p>
                                                                {watch("image").name}
                                                            </p>
                                                            <img src={watch("image")} alt="" className="w-28 h-28 rounded-xl" />
                                                            <button
                                                                type='button'
                                                                className="bg-red-600 px-4 text-white rounded-xl font-bold h-10"
                                                                onClick={handleDeleteImage}
                                                            >
                                                                x
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                            </div> */}
                      </div>
                    )}

                    {/* pago con tarjeta */}

                    {/* {
                                            watch('paymentMethod') === 'tarjeta' &&
                                            (
                                                <>
                                                    <div className="flex gap-2">
                                                        {
                                                            (
                                                                watch("recaptcha") !== ''
                                                                && watch("country") !== '' && watch("person") !== ''
                                                                && watch("type") !== '' && watch("document") !== '' && watch("typeService") !== '' && watch("documentNumber") !== ''
                                                                && (
                                                                    <button
                                                                        type='submit'
                                                                        className="bg-[#29abe2] text-white rounded-xl h-10 font-bold w-full capitalize"
                                                                    >
                                                                        {t("send")}
                                                                    </button>
                                                                )
                                                            )
                                                        }
                                                    </div>
                                                </>
                                            )
                                        } */}
                  </div>
                </form>
                {step === 2 && (
                  <>
                    <div className="flex justify-center">
                      {watch("paymentMethod") === "tarjeta" &&
                        watch("country") !== "" &&
                        watch("person") !== "" &&
                        watch("type") !== "" &&
                        watch("document") !== "" &&
                        watch("typeService") !== "" &&
                        watch("documentNumber") !== "" &&
                        showForm && (
                          <ModalForm
                            info={{
                              country: watch("country"),
                              person: watch("person"),
                              email: watch("email"),
                              phone: watch("phone"),
                              type: watch("type"),
                              typeService: watch("typeService"),
                              image: watch("image"),
                              document: watch("document"),
                              documentNumber: watch("documentNumber"),
                              paymentMethod: watch("paymentMethod"),
                            }}
                            url={
                              watch("typeService") == "REGISTRO COMPLETO S/.60"
                                ? `${API.war}payment/create-order`
                                : `${API.war}payment/create-order-2`
                            }
                          />
                        )}
                    </div>
                    <div className="flex justify-center px-5">
                      <button
                        type="button"
                        className="bg-[#29abe2] text-white rounded-xl h-10 font-bold w-full capitalize"
                        onClick={handlePrevStep}
                      >
                        {t("back")}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
