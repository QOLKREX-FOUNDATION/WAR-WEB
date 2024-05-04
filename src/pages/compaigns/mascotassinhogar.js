/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { MainLayoutNew } from "../../layouts/MainLayoutNew";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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

  const searchParams = useSearchParams();
  // console.log(searchParams);
  // console.log(searchParams.size);
  const router = useRouter();

  const status = searchParams.get("status");

  // console.log(status);

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
            Campaña Mascotas sin Hogar
          </h1>
          <img src="/img/donation/sinhogar-banner.png" alt="" />
          <h2
            className="text-center my-2 mb-5 custom-h1 text-2xl "
            style={{ fontSize: "24px", padding: "20px 0px 25px 0px" }}
          >
            ¡Ayúdanos a dar identidad y esperanza a las mascotas sin hogar!
          </h2>
          {/* <img src="/img/huella.png" className="w-6 h-6 mb-2" alt="huella" /> */}
          <div className="flex items-center justify-center gap-2">
            {/* <img src="/img/huella.png" className="w-6 h-6 mb-2" alt="huella" /> */}
          </div>
          <p className="text-justify mb-3">
            Estamos recaudando fondos para proporcionar chips de identificación
            a mascotas que se encuentran en la calle o en albergues. Con tu
            apoyo, podremos comprar chips de identificación y donarlos a
            albergues y organizaciones de rescate.
          </p>
          <p className="text-justify">
            Además, proporcionaremos escáneres de lectura de chips para
            asegurarnos de que estas mascotas estén debidamente identificadas y
            tengan una mejor oportunidad de encontrar un hogar amoroso. Tu
            donación marcará la diferencia en la vida de estas mascotas
            necesitadas, ¡únete a nosotros para ayudar a construir un futuro más
            seguro y feliz para ellos! 📷 Además, ¡tenemos una emocionante
            noticia para todos nuestros colaboradores!
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
              Formulario
            </h2>
            <div className="flex flex-col items-center gap-3 w-full ">
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateName">Nombre</label>
                  <input
                    type="text"
                    id="donateName"
                    placeholder="Nombre"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.name}
                    onChange={(e) =>
                      setDonatorInfo({ ...donatorInfo, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateLastname">Apellido</label>
                  <input
                    type="text"
                    id="donateLastname"
                    placeholder="Apellido"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.lastname}
                    onChange={(e) =>
                      setDonatorInfo({
                        ...donatorInfo,
                        lastname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateDocumentType">Tipo de documento</label>
                  <select
                    name="donateDocumentType"
                    id="donateDocumentType"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.documentType}
                    onChange={(e) =>
                      setDonatorInfo({
                        ...donatorInfo,
                        documentType: e.target.value,
                      })
                    }
                  >
                    <option value="dni">DNI</option>
                    <option value="passport">Pasaporte</option>
                    <option value="ce">Carné de Extranjería</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateDocumentNumber">N° de documento</label>
                  <input
                    type="text"
                    id="donateDocumentNumber"
                    placeholder="Número de documento"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.documentNumber}
                    onChange={(e) =>
                      setDonatorInfo({
                        ...donatorInfo,
                        documentNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row w-full md:max-w-[90%] lg:max-w-[75%] justify-between">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donateEmail">Correo Electrónico</label>
                  <input
                    type="email"
                    id="donateEmail"
                    placeholder="Correo Electrónico"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.email}
                    onChange={(e) =>
                      setDonatorInfo({ ...donatorInfo, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <label htmlFor="donatePhone">Teléfono</label>
                  <input
                    type="tel"
                    id="donatePhone"
                    placeholder="Teléfono"
                    className="border-2 border-gray-300 rounded-md px-2 py-1"
                    value={donatorInfo.phone}
                    onChange={(e) =>
                      setDonatorInfo({ ...donatorInfo, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <span className="mt-5 text-sm text-center">
              *Pronto te premiaremos por tus contribuciones
            </span>
            <hr className="w-full border-1 border-gray-300 mb-6" />
            <h2 className="text-2xl">
              ¿QUIERES APOYAR ESTA CAUSA? ¡DONA AHORA!
            </h2>

            <div className="flex w-full items-center gap-4 justify-center">
              <h2 className="">Selecciona la cantidad de Garritas</h2>
              <div className="relative flex  border-2 rounded-xl">
                <span className="absolute -bottom-5 left-1 text-xs flex gap-1">
                  1 Garrita{" "}
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
              <h2>Total a Contribuir: S/{amountToDonate * 10}</h2>
            </div>
            {/* <FormMP
              info={{ amount: amountToDonate * 10 }}
              url="http://localhost:5000/api/payment/war-create-donation-order"
            /> */}
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded mt-5 disabled:opacity-50 shadow-lg"
              disabled={amountToDonate === 0}
              onClick={async () => {
                console.log({ donatorInfo });
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
              Contribuya a nuestra misión
            </button>
            <hr className="w-full border-1 border-gray-300 mt-3" />
            <p className="text-center mt-1">
              Únete a nuestro grupo de
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
