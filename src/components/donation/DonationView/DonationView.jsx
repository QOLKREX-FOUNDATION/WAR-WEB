import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import styles from "./donation-view.module.scss";

const TEXT_CARD_1 =
  "Recuperar a los animales silvestres de traficantes es crucial para conservar la biodiversidad y proteger especies en peligro. También garantiza el bienestar de estos animales, respeta valores éticos y morales, y reduce riesgos para la salud humana. Además, fomenta la educación y concienciación sobre la conservación y contribuye a combatir actividades delictivas relacionadas con el tráfico de fauna y flora. En resumen, rescatar a la vida silvestre es una inversión en el futuro de nuestro planeta y en la coexistencia sostenible de todas las formas de vida en la Tierra.";

const TEXT_CARD_2 =
  "Construir nuestro refugio de animales silvestres es esencial. Los casos de rescate de animales en manos de traficantes siguen aumentando, y necesitamos un espacio seguro para su recuperación y rehabilitación. Tu apoyo en donaciones es crucial para hacerlo realidad. Este refugio no solo proporcionará un entorno adecuado para curar a estos animales heridos y traumatizados, sino que también servirá como centro de cuarentena para evitar la propagación de enfermedades a la vida silvestre existente. Al contribuir, estás directamente involucrado en la preservación de la biodiversidad y la promoción del bienestar de estos seres vulnerables. Tu generosidad hace posible este refugio y contribuye a la protección de la vida silvestre. ¡Gracias por ser parte de esta importante misión de conservación!";

export const DonationView = () => {
  const { t } = useTranslation();
  const [donationModal, setDonationModal] = useState(false);
  const [showMoreCards, setShowMoreCards] = useState({
    show: false,
    title: "",
    content: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const message = queryParams.get("message");
    if (message === "success") {
      Swal.fire(
        "¡Gracias por tu donación!",
        "Tu donación ha sido exitosa",
        "success"
      ).then(() => {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      });
    }
    if (message === "reject") {
      Swal.fire("¡Lo sentimos!", "Tu donación ha sido rechazada", "error").then(
        () => {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
      );
    }
  }, []);

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(
        "https://firulaix-api-nodejs.vercel.app/api/donate-payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.donationName,
            lastName: data.donationLastName,
            email: data.donationEmail,
            dni: data.donationDNI,
            amount: data.amount,
            currency: "USD",
            donationUrl: window.location.href,
          }),
        }
      );
      const resp = await response.json();
      // console.log(resp);
      window.location.href = resp.init_point;
    } catch (error) {
      console.log(error);
    }
  };

  const openShowMoreCards = (title, content) => {
    setShowMoreCards({
      show: true,
      title,
      content,
    });
  };
  const closeShowMoreCards = () =>
    setShowMoreCards({ show: false, title: "", content: "" });

  return (
    <>
      {donationModal && (
        <div
          id="donation-modal"
          className="fixed w-screen h-screen grid place-items-center bg-black/30 top-0 z-[99999]"
        >
          <div className="w-1/2 max-w-[500px] bg-white rounded-lg p-8 overflow-y-auto max-sm:w-[95%]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Nombre */}
              <div className="flex flex-col">
                <label htmlFor="donationName">Nombre:</label>
                <input
                  type="text"
                  name="donationName"
                  id="donationName"
                  className="border border-gray-300 rounded-lg p-2"
                  {...register("donationName", {
                    required: "El nombre es requerido",
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/i,
                      message: "Nombre invalido",
                    },
                  })}
                />
                {errors.donationName && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.donationName?.message}
                  </span>
                )}
              </div>
              {/* Apellido */}
              <div className="flex flex-col">
                <label htmlFor="donationLastName">Apellido:</label>
                <input
                  type="text"
                  name="donationLastName"
                  id="donationLastName"
                  className="border border-gray-300 rounded-lg p-2"
                  {...register("donationLastName", {
                    required: "El apellido es requerido",
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/i,
                      message: "Apellido invalido",
                    },
                  })}
                />
                {errors.donationLastName && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.donationLastName?.message}
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="donationEmail">Email:</label>
                <input
                  type="email"
                  name="donationEmail"
                  id="donationEmail"
                  className="border border-gray-300 rounded-lg p-2"
                  {...register("donationEmail", {
                    required: "El email es requerido",
                    pattern: { value: /^\S+@\S+$/i, message: "Email invalido" },
                  })}
                />
                {errors.donationEmail && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.donationEmail?.message}
                  </span>
                )}
              </div>
              {/* DNI */}
              <div className="flex flex-col">
                <label htmlFor="donationDNI">DNI:</label>
                <input
                  type="number"
                  name="donationDNI"
                  id="donationDNI"
                  className="border border-gray-300 rounded-lg p-2"
                  {...register("donationDNI", {
                    required: "El DNI es requerido",
                    maxLength: { value: 8, message: "El DNI es muy largo" },
                    minLength: { value: 8, message: "El DNI es muy corto" },
                    pattern: { value: /^[0-9]+$/i, message: "Solo números" },
                  })}
                />
                {errors.donationDNI && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.donationDNI?.message}
                  </span>
                )}
              </div>
              {/* Cantidad */}
              <div className="flex flex-col">
                <label htmlFor="amount">Cantidad</label>
                <div className="flex w-full relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="flex-1 border border-gray-300 rounded-lg p-2 pl-7"
                    {...register("amount", {
                      required: "La cantidad es requerida",
                      min: { value: 5, message: "El monto mínimo es 5" },
                    })}
                  />
                </div>
                {errors.amount && (
                  <span className="text-red-500 text-xs italic mt-2">
                    {errors.amount?.message}
                  </span>
                )}
              </div>
              <button
                className="bg-[#075B66] text-white uppercase py-2 px-8 rounded-2xl w-full text-[20px] font-bold mt-8 cursor-pointer transition-opacity hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                // onClick={btnDonation}
                // disabled={!isValidForm}
              >
                Donar
              </button>
              <button
                className="bg-red-700 text-white uppercase py-2 px-8 rounded-2xl w-full text-[20px] font-bold cursor-pointer transition-opacity hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setDonationModal(false)}
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      )}
      {/* <div className="min-h-screen bg-[url(/img/donation/bg-donation.jpg)] bg-cover bg-center flex flex-col gap-20 py-20 font-Montserrat relative"> */}
      <div className="min-h-screen flex flex-col items-center gap-20 py-20 font-Montserrat relative">
        <div className="absolute w-full h-full inset-0 bg-[url(/img/donation/bg-donation.jpg)] blur-[10px] bg-cover bg-center -z-10"></div>
        <iframe
          // width="560"
          className="w-full max-w-screen-lg px-2 aspect-video"
          // height="315"
          src="https://www.youtube.com/embed/vgffQhS64XY?si=YKaOmMYYUJLUPolj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="flex flex-col items-center gap-5 z-10">
          <h1 className="text-[#075B66] text-7xl max-md:text-6xl tracking-wider uppercase font-bold font-BebasNeue text-center">
            Rescata y cuida animales silvestres
          </h1>
          <p className="w-[80%] max-w-6xl text-center text-lg font-normal">
            Somos una ONG que buscamos el bienestar de los animales. Ya hemos
            tenido varios rescates y contribuido al cuidado para luego
            liberarlos a su habitad natural
          </p>
          <button
            className="bg-[#075B66] text-white uppercase py-4 px-12 rounded-2xl hover:opacity-70 transition-opacity text-2xl"
            onClick={() => setDonationModal(true)}
          >
            Donación
          </button>
        </div>

        <div className="flex justify-center max-lg:flex-col gap-24 max-lg:gap-32 max-lg:justify-center max-lg:items-center px-10 max-md:px-1 mt-20">
          <div className="w-[90%] max-w-[560px] bg-white relative flex items-end justify-center rounded-xl px-8 pb-8">
            <figure className="w-[200px] h-[200px] rounded-full overflow-hidden absolute -top-[100px]">
              <img
                src="/img/donation/card-4.jpg"
                alt="image"
                className="block w-full h-full object-cover"
                // className="block w-full h-full object-cover
              />
            </figure>
            <div className="flex flex-col justify-between items-center mb-10 pt-[120px] gap-6">
              <h2 className="text-[#075B66] uppercase font-bold text-3xl">
                ¡Rescatemos Juntos!
              </h2>
              <p className="text-justify px-4 text-lg">
                Tu donación salva vidas silvestres. Ayuda a rescatar y proteger
                a estas criaturas valientes. ¡Únete a nuestra misión de
                salvamento hoy mismo! 🌿🐾
                <span className="text-blue-600">#SalvandoVidasSalvajes</span>
              </p>
              <button
                className="bg-[#075B66] text-white uppercase py-2 px-8 rounded-2xl w-[80%] text-[20px] font-bold mt-8 transition-opacity hover:opacity-70"
                onClick={() => openShowMoreCards("Rescate", TEXT_CARD_1)}
              >
                Rescate
              </button>
            </div>
          </div>
          <div className="w-[90%] max-w-[560px] bg-white relative flex items-end justify-center rounded-xl px-8 pb-8">
            <figure className="w-[200px] h-[200px] rounded-full overflow-hidden absolute -top-[100px]">
              <img
                src="/img/donation/card-3.jpg"
                alt="image"
                className="block w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col justify-center items-center mb-10 pt-[120px] gap-4">
              <h2 className="text-[#075B66] uppercase font-bold text-3xl">
                ¡CONSTRUYAMOS JUNTOS!
              </h2>
              <p className="text-justify px-4 text-lg">
                Con tu donación, construimos espacios seguros para los animales
                rescatados. Contribuye a su bienestar y liberación futura.
                ¡Únete a nuestra causa y edifiquemos juntos un futuro más
                brillante para ellos! 🌿🐾
                <span className="text-blue-600">
                  #ConstruyendoParaLaVidaSilvestre
                </span>
              </p>
              <button
                className="bg-[#075B66] text-white uppercase py-2 px-8 rounded-2xl w-[80%] text-[20px] font-bold mt-8 transition-opacity hover:opacity-70"
                onClick={() => openShowMoreCards("Refugio", TEXT_CARD_2)}
              >
                Refugio
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMoreCards.show && (
        <ModalViewMore
          title={showMoreCards.title}
          content={showMoreCards.content}
          closeModal={closeShowMoreCards}
        />
      )}
    </>
  );
};

const ModalViewMore = ({ title, content, closeModal }) => {
  const modalRef = useRef(null);

  // Cerrar el modal cuando se hace clic en cualquier parte fuera del contenido
  const closeOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  return (
    <div
      className={`${styles.modalOverlay} fixed inset-0 z-50 flex items-center justify-center`}
    >
      <div
        ref={modalRef}
        className={`${styles.modal} flex flex-col items-center bg-white/90 p-6 max-w-md mx-auto rounded-md shadow-md  gap-4 ${styles["animate-zoom-out"]}`}
      >
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
        <button
          onClick={closeModal}
          className="mt-4 px-8 bg-[#075B66] text-white p-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useTranslation } from 'react-i18next'
// import { Fade, Zoom } from 'react-reveal'
// import { Link } from 'react-scroll'
// import { useModal } from '../../../hook/useModal'
// import { DefaultModal } from '../../containers/modals/DefaultModal/DefaultModal'
// import classes from './donation-view.module.scss'

// export const DonationView = () => {
//     const { t } = useTranslation();
//     const router = useRouter();
//     // const { openModal, setOpenModal } = useModal();

//     // const showMore = (button, paragraph, height) => {
//     //     const more = document.querySelector(`.more-${ paragraph }`)
//     //     const btn = document.querySelector(`.btn-${ button }`)
//     //     if (btn.innerHTML === 'Ver más') {
//     //         more.style.overflow = 'visible'
//     //         more.style.height = `${ height }px`
//     //         more.style.webkitLineClamp = 'auto',
//     //             more.style.display = 'block'
//     //         btn.innerHTML = 'Ver menos'
//     //         console.log("hidden")
//     //         return;
//     //     }
//     //     more.style.height = '90px'
//     //     more.style.overflow = 'hidden'
//     //     more.style.webkitLineClamp = '5'
//     //     more.style.display = '-webkit-box'
//     //     btn.innerHTML = 'Ver más'
//     //     console.log("visible")

//     // }

//     return (
//         <>
//             <div className="w-full flex items-center flex-col lg:flex-row min-h-[70vh] ">

//                 <div className="w-1/2 flex justify-center">
//                     <div className="flex flex-col items-center gap-3 max-w-md ">
//                         <h2 className='text-[#00a99d] font-bold text-2xl'>DONA AQUÍ</h2>
//                         <p className='text-[#29abe2] font-bold text-lg'>
//                             Tu donación mensual nos ayuda a garantizar
//                             los derechos de los animales en estado
//                             vulnerable.
//                         </p>
//                         <div className="w-full flex gap-3 py-2">
//                             <label className='w-1/2'>
//                                 <input type='radio' name='donation' className='hidden peer/draft' value="dontaion_unique"></input>
//                                 <span className='hover:cursor-pointer border border-[#29abe2] py-2 px-2 text-[#00a99d] peer-checked/draft:text-white peer-checked/draft:bg-[#29abe2] font-semibold block w-full text-center'>
//                                     DONACIÓN ÚNICA
//                                 </span>
//                             </label>
//                             <label className='w-1/2'>
//                                 <input type='radio' name='donation' className='hidden peer/draft' value="dontaion_monthly"></input>
//                                 <span className='hover:cursor-pointer border border-[#29abe2] py-2 px-2 text-[#00a99d] peer-checked/draft:text-white peer-checked/draft:bg-[#29abe2] font-semibold block w-full text-center'>
//                                     DONACIÓN MENSUAL
//                                 </span>
//                             </label>
//                         </div>
//                         <p>
//                             Elige un monto de donación
//                         </p>
//                         <div className="w-full flex gap-2 flex-wrap py-2 ">
//                             <label className='w-32'>
//                                 <input type='radio' name='payment' className='hidden peer/donation' value="opt1"></input>
//                                 <span className='hover:cursor-pointer border border-[#29abe2] py-2 px-3 text-[#00a99d] peer-checked/donation:text-white peer-checked/donation:bg-[#29abe2] font-semibold block w-full text-center'>
//                                     S/. 30.00
//                                 </span>
//                             </label>
//                             <label className='w-32'>
//                                 <input type='radio' name='payment' className='hidden peer/donation' value="opt2"></input>
//                                 <span className='hover:cursor-pointer border border-[#29abe2] py-2 px-2 text-[#00a99d] peer-checked/donation:text-white peer-checked/donation:bg-[#29abe2] font-semibold block w-full text-center'>
//                                     S/. 60.00
//                                 </span>
//                             </label>
//                             <label className='w-32'>
//                                 <input type='radio' name='payment' className='hidden peer/donation' value="opt3"></input>
//                                 <span className='hover:cursor-pointer border border-[#29abe2] py-2 px-2 text-[#00a99d] peer-checked/donation:text-white peer-checked/donation:bg-[#29abe2] font-semibold block w-full text-center'>
//                                     S/. 90.00
//                                 </span>
//                             </label>
//                         </div>
//                         <label className='w-full text-center px-2 py-2 border border-[#29abe2] text-[#29abe2] font-bold'>
//                             S/. 60.00
//                             {/* <input type='radio' className='hidden' value="opt3"></input> */}
//                         </label>
//                         <button
//                             className='w-full btn bg-[#29abe2] text-white py-2 px-4 rounded-md hover:bg-[#29abe2] hover:text-white'
//                         >
//                             DONAR
//                         </button>
//                         <p>
//                             Se cargará el monto todos los meses a tu tarjeta.
//                             Tu donación es deducible de impuestos.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-1/2 h-full ">
//                     <Image
//                         src="/img/donation/recurso-154.webp"
//                         width={900}
//                         height={900}
//                         alt="image"
//                         className='h-[80vh] w-full object-cover'
//                     />
//                 </div>
//             </div>
//         </>
//     )
// }
