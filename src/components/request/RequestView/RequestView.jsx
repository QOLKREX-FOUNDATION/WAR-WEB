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
import Swal from "sweetalert2";

const countriesAcepeted = [
  { label: "COLOMBIA", value: "CO" },
  { label: "ECUADOR", value: "EC" },
  { label: "CHILE", value: "CL" },
  { label: "PERU", value: "PE" },
  { label: "MEXICO", value: "MX" },
  { label: "HONDURAS", value: "HN" },
  { label: "ESPANA", value: "ES" },
];
const countriesAcepetedWithoutChip = [
  { label: "PERU", value: "PE" },
  { label: "HONDURAS", value: "HN" },
];

export const RequestView = () => {
  const [step, setStep] = useState(1);
  const [hasChip, setHasChip] = useState(null);
  const [showQuestion, setShowQuestion] = useState(true);
  const [planPrice, setPlanPrice] = useState({
    label: "SOLO REGISTRO 8usd",
    value: "SOLO REGISTRO S/.25",
  });
  const [isLoading, setIsLoading] = useState(false);
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
      const res = await fetch(`${API.war}request/register-user-war-chip`, {
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

  const handleChangeHasChip = (value) => {
    const hasChipValue = value === "yes";
    console.log(hasChipValue);
    setHasChip(hasChipValue);

    const price = hasChipValue
      ? {
          label: "SOLO REGISTRO 8usd",
          value: "SOLO REGISTRO S/.25",
        }
      : {
          label: "REGISTRO COMPLETO 17usd",
          value: "REGISTRO COMPLETO S/.60",
        };
    setPlanPrice(price);

    setValue("typeService", price.value);

    console.log(hasChipValue);
    setShowQuestion(false);
  };

  const handleSendSRV = async () => {
    try {
      setIsLoading(true);
      const recaptchaValue = recaptchaRef.current.getValue();
      console.log("verify", recaptchaValue);
      if (!recaptchaValue) {
        toast.error("Por favor complete el captcha", {
          theme: "colored",
        });
        return;
      }
      console.log("send srv");
      console.log(
        watch("country"),
        watch("person"),
        watch("email"),
        watch("phone"),
        watch("document"),
        watch("documentNumber")
      );
      const data = {
        country: watch("country"),
        person: watch("person"),
        email: watch("email"),
        phone: watch("phone"),
        document: watch("document"),
        document_number: watch("documentNumber"),
      };
      console.log(data);
      // const resp = await fetch(`${API.war}request/register-user-war-srv`, {
      const resp = await fetch(`${API.war}request/register-user-war-srv`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      Swal.fire({
        title: "¡Enviado!",
        text: "Se ha enviado la solicitud de registro, revisa tu correo electrónico para más información.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setIsLoading(false);
      reset();
      console.log(resp);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

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
          <div className="w-full flex flex-col items-center lg:flex-row justify-center px-5 md:px-14 gap-20">
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
            <div className="flex flex-col lg:flex-row justify-start items-start lg:pb-0 max-w-xl lg:max-w-3xl w-full rounded-2xl h-auto md:min-h-[700px] mb-10 border">
              {/* Left Panel */}
              <div className="flex flex-col items-center py-5 px-4 lg:w-1/3 bg-[#00a99d] h-auto md:min-h-[790px] rounded-l-2xl">
                {showQuestion && (
                  <>
                    <Image
                      src="/img/request/image-02.webp"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                    <h2 className="text-xl font-bold text-white text-center lg:text-left pb-4">
                      ¡Bienvenido al World Animal Registry (W.A.R.)!
                    </h2>
                    <Image
                      src="/img/request/recurso-116.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                    <div className="flex flex-col text-white px-4 text-justify">
                      <p className="mt-5">
                        ¡Registra a tu mascota ahora y únete a nuestra comunidad
                        global comprometida con la seguridad y el bienestar de
                        todos los animales!
                      </p>
                      <br />
                      <p>
                        Obten su certificado de adopción, su carné de
                        identificación y un identificador virtual único que
                        puede imprimir o colocar en su collar.
                      </p>
                      {/* <div className="flex flex-col gap-3 mt-5">
                        <label
                          htmlFor="yes"
                          className="flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            id="yes"
                            value="yes"
                            className="mr-2"
                            onChange={handleChangeHasChip}
                          />
                          <span>{t("Yes")}</span>
                        </label>
                        <label htmlFor="no" className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="no"
                            value="no"
                            className="mr-2"
                            onChange={handleChangeHasChip}
                          />
                          <span>{t("No")}</span>
                        </label>
                      </div> */}
                    </div>
                  </>
                )}
                {!showQuestion && (
                  <>
                    <Image
                      src="/img/request/image-02.webp"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                    <h2 className="text-xl font-bold text-white text-center pb-4">
                      {t("THE REGISTRY OF WILD AND DOMESTIC ANIMALS")}
                    </h2>
                    <Image
                      src="/img/request/recurso-116.webp"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                    <div className="flex flex-col text-white px-4 mt-4">
                      {hasChip ? (
                        <div className="flex flex-col gap-4">
                          <h2 className="text-2xl font-bold text-[#fff] text-center">
                            ¿Tu mascota ya tiene un chip de identificación?
                          </h2>
                          <p className="text-justify font-normal">
                            Estamos comprometidos en garantizar la seguridad y
                            protección de tu compañero peludo. Si tu mascota ya
                            tiene un chip, regístralo con nosotros. ¡Es fácil y
                            rápido!
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          <h2 className="text-2xl font-bold text-[#fff] text-center ">
                            ¿Tu mascota no tiene un chip?
                          </h2>
                          <p className="text-justify font-normal">
                            ¡No te preocupes! El registro en el W.A.R. es una de
                            las mejores decisiones que puedes tomar para
                            asegurar que tu mascota esté protegida y pueda ser
                            identificada rápidamente. ¡Regístrala ahora!
                          </p>
                        </div>
                      )}

                      {/* <h2 className="text-2xl font-bold">
                        {t("Complete Registration")}:
                      </h2> */}
                      <p>-----------------------------</p>
                      <ul className="font-semibold">
                        {
                          hasChip && (
                            <>
                              <li className="list-disc">
                                {t("Identification microchip")}
                              </li>
                              <li className="list-disc">
                                {t("Registration in the W.A.R system")}
                              </li>
                              <li className="list-disc">
                                {t("Adoption certification")}
                              </li>
                            </>
                          )
                          // <>
                          //   <li className="list-disc">
                          //     {t("Registration in the W.A.R system")}
                          //   </li>
                          //   <li className="list-disc">
                          //     {t("Adoption certification")}
                          //   </li>
                          //   <li className="list-disc">
                          //     {t("Veterinary consultation")}
                          //     <br />
                          //     <span className="text-sm">
                          //       (
                          //       {t(
                          //         "Main office headquarters Jesús María - Lima Peru"
                          //       )}
                          //       )
                          //     </span>
                          //   </li>
                          // </>
                        }
                        {/* <li className="list-disc">
                          {t("Veterinary consultation")}
                          <br />
                          <span className="text-sm">
                            ({t("Main office headquarters Jesús María - Lima Peru")}
                            )
                          </span>
                        </li> */}
                      </ul>
                      {/* <p>-----------------------------</p> */}
                    </div>
                  </>
                )}
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
              {/* end of left panel */}
              {
                showQuestion && (
                  <div className="flex flex-col w-full lg:w-2/3 h-auto py-8 md:py-20 md:min-h-[790px] relative">
                    <h2 className="text-2xl font-bold text-[#000] text-center mb-8">
                      Elige una opción para continuar con el registro de tu
                      mascota
                    </h2>
                    <div className="flex flex-col items-center justify-center py-8 gap-3 w-full h-full px-5 rounded-r-2xl mb-5">
                      <button
                        type="button"
                        className="bg-[#29abe2] text-white rounded-xl font-bold px-4 mr-2 py-3 drop-shadow-lg hover:drop-shadow-xl transition duration-500 ease-in-out hover:opacity-80 flex items-center justify-center w-full h-auto group"
                        onClick={() => handleChangeHasChip("yes")}
                        value="yes"
                      >
                        <div className="flex gap-5 items-center">
                          <div>
                            <h2 className="text-2xl font-bold text-[#fff] text-center">
                              ¿Tu mascota ya tiene un chip de identificación?
                            </h2>
                            <p className="text-justify font-normal">
                              Estamos comprometidos en garantizar la seguridad y
                              protección de tu compañero peludo. Si tu mascota
                              ya tiene un chip, regístralo con nosotros. ¡Es
                              fácil y rápido!
                            </p>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="w-20 h-20 fill-current text-white font-normal flex md:hidden group-hover:flex"
                          >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-col items-center gap-3 w-full h-full py-3 px-5 rounded-r-2xl">
                      <button
                        type="button"
                        className="bg-[#29abe2] text-white rounded-xl font-bold px-4 mr-2 py-3 drop-shadow-lg hover:drop-shadow-xl transition duration-500 ease-in-ou hover:opacity-80 w-full group"
                        onClick={() => handleChangeHasChip("no")}
                        value="no"
                      >
                        <div className="flex gap-5 items-center">
                          <div>
                            <h2 className="text-2xl font-bold text-[#fff] text-center ">
                              ¿Tu mascota no tiene un chip?
                            </h2>
                            <p className="text-justify font-normal">
                              ¡No te preocupes! El registro en el W.A.R. es una
                              de las mejores decisiones que puedes tomar para
                              asegurar que tu mascota esté protegida y pueda ser
                              identificada rápidamente. ¡Regístrala ahora!
                            </p>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="w-24 h-24 fill-current text-white flex md:hidden group-hover:flex"
                          >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </div>
                      </button>
                      <h2 className="mt-auto text-sm flex gap-1 absolute right-50 bottom-5 text-center">
                        Para cualquier consulta, unete a nuestro grupo de
                        <a
                          href="https://t.me/WorldAnimalRegistry"
                          target="_blank"
                          className="text-[#29abe2]"
                          rel="noreferrer"
                        >
                          Telegram
                        </a>
                      </h2>
                    </div>
                  </div>
                ) // end of right panel
              }
              {/* form */}
              {!showQuestion && (
                <div className="flex flex-col w-full lg:w-2/3 relative h-full md:min-h-[790px]">
                  <form
                    ref={refForm}
                    onSubmit={handleSubmit(onSubmit)}
                    className=" flex flex-col items-center gap-3 w-full h-full py-8 px-5 rounded-r-2xl"
                  >
                    {hasChip && (
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
                    )}
                    {/* step 1 form */}
                    <div
                      className={`w-full flex flex-col py-3 gap-3 ${
                        step === 1
                          ? "opacity-100 z-10"
                          : "opacity-0 -z-20 absolute overflow-hidden w-0"
                      } ${!hasChip && "pt-7"}`}
                    >
                      <h2>{t("Identification")}</h2>
                      <ReactSelectComponent
                        name={t("country")}
                        property="country"
                        options={
                          hasChip
                            ? countriesAcepeted.sort((a, b) =>
                                a.label > b.label ? 1 : -1
                              )
                            : countriesAcepetedWithoutChip.sort((a, b) =>
                                a.label > b.label ? 1 : -1
                              )
                        }
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
                        name={`${t("Phone number")} (${
                          watch("phone")?.length
                        })`}
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
                          {
                            label: "DNI (Documento de identidad)",
                            value: "DNI",
                          },
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

                      {hasChip && (
                        <ReactSelectComponent
                          name={t("Type Service")}
                          property="typeService"
                          isDisabled
                          options={[
                            {
                              label: "REGISTRO COMPLETO 17usd",
                              value: "REGISTRO COMPLETO S/.60",
                            },
                            // { label: "SOLO REGISTRO 8.5usd", value: "SOLO REGISTRO S/.25" },
                            {
                              label: "SOLO REGISTRO 8usd",
                              value: "SOLO REGISTRO S/.25",
                            },
                          ]}
                          values={register}
                          value={planPrice}
                          watch={watch}
                          setValue={setValue}
                          error={errors}
                          // required
                        />
                      )}
                      {hasChip && (
                        <>
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
                          <button
                            type="button"
                            className="bg-[#29abe2] text-white rounded-xl h-10 font-bold capitalize"
                            onClick={() => {
                              setShowQuestion(true);
                              setHasChip(null);
                            }}
                          >
                            {t("back")}
                          </button>
                          <h2 className="mt-auto text-sm flex gap-1 absolute right-50 bottom-0 text-center">
                            Para cualquier consulta, unete a nuestro grupo de
                            <a
                              href="https://t.me/WorldAnimalRegistry"
                              target="_blank"
                              className="text-[#29abe2]"
                              rel="noreferrer"
                            >
                              Telegram
                            </a>
                          </h2>
                        </>
                      )}
                      {
                        !hasChip && (
                          <>
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              size="normal"
                              sitekey={
                                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                              }
                              onChange={onReCAPTCHAChange}
                            />
                            <button
                              type="button"
                              className="bg-[#29abe2] text-white rounded-xl h-10 font-bold capitalize disabled:opacity-50"
                              onClick={handleSendSRV}
                              disabled={
                                watch("country") === "" ||
                                watch("email") === "" ||
                                watch("phone") === "" ||
                                watch("document") === "" ||
                                watch("documentNumber") === "" ||
                                isLoading === true
                              }
                            >
                              {t("send")}
                            </button>
                            <button
                              type="button"
                              className="bg-[#29abe2] text-white rounded-xl h-10 font-bold capitalize"
                              onClick={() => {
                                setShowQuestion(true);
                                setHasChip(null);
                              }}
                            >
                              {t("back")}
                            </button>
                            <h2 className="mt-auto text-sm flex gap-1 absolute right-50 bottom-0 text-center">
                              Para cualquier consulta, unete a nuestro grupo de
                              <a
                                href="https://t.me/WorldAnimalRegistry"
                                target="_blank"
                                className="text-[#29abe2]"
                                rel="noreferrer"
                              >
                                Telegram
                              </a>
                            </h2>
                          </>
                        ) // end of step 1 form
                      }
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
                                watch("typeService") ==
                                "REGISTRO COMPLETO S/.60"
                                  ? `${API.war}payment/war-create-order`
                                  : `${API.war}payment/war-create-order-2`
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
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

// /*
// <div className="flex flex-col items-center py-5 px-4 lg:w-1/3 bg-[#00a99d] min-h-[790px] rounded-l-2xl">
//                 <Image
//                   src="/img/request/image-02.webp"
//                   alt="Picture of the author"
//                   width={50}
//                   height={50}
//                   className="object-cover"
//                 />
//                 <h2 className="text-xl font-bold text-white text-center lg:text-left pb-4">
//                   {t("THE REGISTRY OF WILD AND DOMESTIC ANIMALS")}
//                 </h2>
//                 <Image
//                   src="/img/request/recurso-116.webp"
//                   alt="Picture of the author"
//                   width={150}
//                   height={150}
//                   className="object-cover"
//                 />
//                 <div className="flex flex-col text-white px-4 ">
//                   <p>
//                     ¿Tu mascota ya tiene un chip de identificación? ¡Entonces es
//                     el momento perfecto para registrarla en el World Animal
//                     Registry (W.A.R.) y asegurar su bienestar de por vida! En
//                     los países donde operamos, ofrecemos un servicio:
//                   </p>
//                   {/* <h2 className="text-2xl font-bold">
//                     {t("Complete Registration")}:
//                   </h2> */}
//                   <p>-----------------------------</p>
//                   <ul className="font-semibold">
//                     <li className="list-disc">
//                       {t("Identification microchip")}
//                     </li>
//                     <li className="list-disc">
//                       {t("Registration in the W.A.R system")}
//                     </li>
//                     <li className="list-disc">{t("Adoption certification")}</li>
//                     {/* <li className="list-disc">
//                       {t("Veterinary consultation")}
//                       <br />
//                       <span className="text-sm">
//                         ({t("Main office headquarters Jesús María - Lima Peru")}
//                         )
//                       </span>
//                     </li> */}
//                   </ul>
//                   <p>-----------------------------</p>
//                 </div>
//                 {/* <div className="flex flex-col text-white px-4 ">
//                   <h2 className="text-2xl font-bold">
//                     {t("Registration Only")}:
//                   </h2>
//                   <p>-----------------------------</p>
//                   <ul className="font-semibold">
//                     <li className="list-disc">
//                       {t("Registration in the W.A.R system")}
//                     </li>
//                     <li className="list-disc">{t("Adoption certification")}</li>
//                     <li className="list-disc">
//                       {t("Veterinary consultation")}
//                       <br />
//                       <span className="text-sm">
//                         ({t("Main office headquarters Jesús María - Lima Peru")}
//                         )
//                       </span>
//                     </li>
//                   </ul> */}
//                 {/* <p>-----------------------------</p> */}
//                 {/* </div> */}
//               </div>

// */
