/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { MainLayoutNew } from "../../layouts/MainLayoutNew";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function PetsWithoutHome() {
  const [amountToDonate, setAmountToDonate] = useState(1);
  const [donatorInfo, setDonatorInfo] = useState({
    name: "",
    lastname: "",
    documentType: "dni",
    documentNumber: "",
    email: "",
    phone: "",
  });
  const [totalDonation, setTotalDonation] = useState(0);

  const searchParams = useSearchParams();
  // console.log(searchParams);
  // console.log(searchParams.size);
  const router = useRouter();

  const status = searchParams.get("status");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonatorInfo((prevDonatorInfo) => ({
      ...prevDonatorInfo,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const { name, lastname, documentNumber, email, phone } = donatorInfo;
    return name && lastname && documentNumber && email && phone;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateInputs());
  }, [donatorInfo]);

  useEffect(() => {
    const getTotalAmount = async () => {
      const resp = await fetch(
        `${API.war}campaign/total/1`,
        // `http://localhost:5000/api/campaign/total/0`,
        {
          method: "GET",
        }
      );
      const data = await resp.json();
      setTotalDonation(data.totalAmount);
      console.log(data.totalAmount);
    };
    getTotalAmount()
      .then(() => console.log("Total amount fetched"))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newDonator = async (donator) => {
      const resp = await fetch(
        `${API.war}payment/new-donator`,
        // `http://localhost:5000/api/payment/new-donator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donator),
        }
      );
      const data = await resp.json();
      // console.log(data);
    };
    if (status === "success") {
      const name = searchParams.get("name");
      const lastName = searchParams.get("lastName");
      const email = searchParams.get("email");
      const phone = searchParams.get("phone");
      const amount = searchParams.get("amount");
      const documentType = searchParams.get("documentType");
      const documentNumber = searchParams.get("documentNumber");
      const donator = {
        name,
        lastName,
        documentType,
        documentNumber,
        email,
        phone,
        amount,
        campaign: 0,
      };
      // console.log({donator})
      newDonator(donator)
        .then(() => console.log("Donator created"))
        .catch((err) => console.log(err));
      router.replace("/compaigns/mascotassinhogar", undefined, {
        shallow: false,
      });
      Swal.fire({
        title: "¡Gracias por tu contribución!",
        text: "Pronto te premiaremos por tus contribuciones",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [status, router]);

  return (
    <MainLayoutNew
      title="¡Ayúdanos a dar identidad y esperanza a las mascotas sin hogar!"
      description="Estamos recaudando fondos para proporcionar chips de identificación a mascotas que se encuentran en la calle o en albergues. Con tu apoyo, podremos comprar chips de identificación y donarlos a albergues y organizaciones de rescate. Además, proporcionaremos escáneres de lectura de chips para asegurarnos de que estas mascotas estén debidamente identificadas y tengan una mejor oportunidad de encontrar un hogar amoroso. Tu donación marcará la diferencia en la vida de estas mascotas necesitadas, ¡únete a nosotros para ayudar a construir un futuro más seguro y feliz para ellos! https://youtube.com/shorts/0xTOSugbaQM?si=9vyUm3Jm09FPuSEf 📷 Además, ¡tenemos una emocionante noticia para todos nuestros colaboradores! Únete a nuestro grupo de Telegram https://t.me/WorldAnimalRegistry Adjunta tu comprobante de donación. ¡Tendrás la oportunidad de ponerle nombre a uno de los animales rescatados y ser parte de su increíble viaje hacia la libertad!"
    >
      {/* <div style={{
        backgroundImage: "url('/img/main-frame.png')",
        width: "100%",
      }} /> */}
      <div className="w-full relative">
        <img
          src="/img/main-frame.png"
          alt="frame top"
          className="absolute top-[-2px] left-0 w-full object-cover h-[96px]"
        />
        <div className=" pt-20 pb-10  px-5 md:px-10 max-w-[1280px] mx-auto font-Montserrat relative">
          <h1 className="text-center text-3xl custom-h1">
            {t("Homeless Pets Campaign")}
          </h1>
          <img src="/img/donation/sinhogar-banner.png" alt="" />
          <h2
            className="text-center my-2 mb-5 custom-h1 text-2xl "
            style={{ fontSize: "24px", padding: "20px 0px 25px 0px" }}
          >
            {t("Help us give identity and hope to homeless pets!")}
          </h2>
          {/* <img src="/img/huella.png" className="w-6 h-6 mb-2" alt="huella" /> */}
          <div className="flex items-center justify-center gap-2">
            {/* <img src="/img/huella.png" className="w-6 h-6 mb-2" alt="huella" /> */}
          </div>
          <p className="text-justify mb-3">
            {t(
              "We are raising funds to provide identification microchips to pets found on the streets or in shelters. With your support, we can purchase identification microchips and donate them to shelters and rescue organizations"
            )}
          </p>
          <p className="text-justify">
            {t(
              "Additionally, we will provide microchip scanners to ensure these pets are properly identified and have a better chance of finding a loving home. Your donation will make a difference in the lives of these pets in need. Join us in helping to build a safer and happier future for them! 📷 Additionally, we have exciting news for all our supporters!"
            )}
          </p>
          <div className="flex justify-center mt-7">
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/0xTOSugbaQM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full flex flex-col gap-3 items-center my-8 border py-5 shadow-md rounded-lg mb-5">
            <h2
              className="text-2xl custom-h1"
              style={{ padding: "20px 0 30px 0" }}
            >
              {t("Form")}
            </h2>
            <div className="flex flex-col items-center gap-3 w-full ">
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateName" className="capitalize">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="donateName"
                    placeholder={t("name")}
                    className="border-2 border-gray-300 rounded-md px-2 py-1 placeholder:capitalize"
                    value={donatorInfo.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateLastname" className="capitalize">
                    {t("surname")}
                  </label>
                  <input
                    type="text"
                    id="donateLastname"
                    placeholder={t("surname")}
                    className="border-2 border-gray-300 rounded-md px-2 py-1 placeholder:capitalize"
                    value={donatorInfo.lastname}
                    name="lastname"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateDocumentType">
                    {t("Type Document")}
                  </label>
                  <select
                    id="donateDocumentType"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.documentType}
                    name="documentType"
                    onChange={handleInputChange}
                  >
                    <option value="dni">DNI</option>
                    <option value="passport">Pasaporte</option>
                    <option value="ce">Carné de Extranjería</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateDocumentNumber">
                    {t("Document number")}
                  </label>
                  <input
                    type="text"
                    id="donateDocumentNumber"
                    placeholder="Número de documento"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.documentNumber}
                    name="documentNumber"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateEmail">{t("Email")}</label>
                  <input
                    type="email"
                    id="donateEmail"
                    placeholder={t("Email")}
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donatePhone">{t("Telephone")}</label>
                  <input
                    type="tel"
                    id="donatePhone"
                    placeholder={t("Telephone")}
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <span className="mt-5 text-sm text-center">
              *{t("Soon, we will reward you for your contributions")}
            </span>
            <hr className="w-full border-1 border-gray-300 mb-6" />
            <h2 className="text-2xl uppercase">
              {t("Want to support this cause? Donate now!")}
            </h2>

            <div className="flex w-full items-center gap-4 justify-center">
              <h2 className="">{t("Choose the amount of Paws")}</h2>
              <div className="relative flex  border-2 rounded-xl">
                <span className="absolute -bottom-5 left-1 text-xs flex gap-1">
                  1 {t("Garrita")}{" "}
                  <img
                    src="/img/garrita.png"
                    className="w-3 h-3"
                    alt="garrita"
                  />{" "}
                  = S/10
                </span>
                <button
                  className="py-2 px-5 text-xl"
                  onClick={() =>
                    setAmountToDonate(Math.max(amountToDonate - 1, 0))
                  }
                >
                  -
                </button>
                <input
                  className="max-w-[55px] px-2 py-2 text-center bg-transparent border-none outline-none"
                  type="number"
                  value={amountToDonate}
                  readOnly
                />
                <button
                  className="py-2 px-5 text-xl"
                  onClick={() => {
                    setAmountToDonate(Math.min(amountToDonate + 1, 1000));
                  }}
                >
                  +
                </button>
              </div>
              <h2>
                {t("Total to Contribute")}: S/{amountToDonate * 10}
              </h2>
            </div>
            {/* <FormMP
              info={{ amount: amountToDonate * 10 }}
              url="http://localhost:5000/api/payment/war-create-donation-order"
            /> */}
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded mt-5 disabled:opacity-50 shadow-lg"
              disabled={amountToDonate === 0 || isButtonDisabled}
              onClick={async () => {
                const resp = await fetch(
                  `${API.war}payment/war-create-donation-order`,
                  // `http://localhost:5000/api/payment/war-create-donation-order`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      amount: amountToDonate * 10,
                      lastName: donatorInfo.lastname,
                      campaign: 0,
                      campaignName: "mascotassinhogar",
                      ...donatorInfo,
                    }),
                  }
                );
                const data = await resp.json();
                // setPreferenceId(data.id)
                // Open data.initpoint in a new tab
                if (data.id) {
                  // window.open(data.init_point, '_blank');
                  window.open(data.init_point, "_blank");
                }
              }}
            >
              {t("Contribute to our mission")}
            </button>
            <p className="text-center mt-1 text-sm">
              {totalDonation} {t("Paws Contribution")} = S/{totalDonation * 10}
            </p>
            {/* goal */}
            <hr className="w-full border-1 border-gray-300 mt-3" />
            <p className="text-center mt-1">
              {t("Join our group of")}
              <a
                href="https://t.me/WorldAnimalRegistry"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 mb-2 inline-block ml-1 hover:underline"
              >
                Telegram
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayoutNew>
  );
}
