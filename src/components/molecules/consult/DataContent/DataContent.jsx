import Image from "next/image";
import { useEffect } from "react";
import classes from "./data-content.module.scss";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { usePetState } from "../../../../hook/consult/usePetState";
import { statusColor, statusSelect, sterilizedSelect } from "../status";
import { useColours, useCountry, useSpecie } from "../../../../hook/inputs";
import { formatDate, stringToDate } from "../../../../utils/date";
import { Vaccines } from "./Vaccines/Vaccines";
import { useState } from "react";
import { DefaultButton } from "../../../atoms/buttons/DefaultButton/DefaultButton";
import { imageURI } from "../../../../config/constants/endpoints";
import { useRaces } from "../../../../hook/useRaces";
import { useRouter } from "next/router";
import { formaterUserName } from "../../../../utils/formatedSearch";
import { useTranslation } from "react-i18next";
// import { URL_RENIAN } from "../../../../config/constants/endpoints";

const marcas = {
  1: "virbac",
  2: "vencomax",
  3: "zoetis",
  4: "nobivac",
};

// dataPet => Mongo
export const ContentMongoPet = ({ dataPet }) => {
  const { obtainPetState, petState, colorState } = usePetState(dataPet);
  const { races, species } = useSpecie(dataPet.pet?.type, dataPet.pet);
  const { countries } = useCountry();
  const { colours } = useColours();
  const [openVaccines, setOpenVaccines] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const URL_RENIAN = "https://consultwar.renian.foundation/images";
  console.log(dataPet);
  //const URL_RENIAN = "https://res.cloudinary.com/worldanireg/image/upload/v1678899125/images";
  const { t, i18n } = useTranslation();
  console.log(dataPet.pet.type);
  console.log(i18n.language);

  useEffect(() => {
    obtainPetState();
    console.log("dataPet", dataPet);
  }, [petState]);
  // console.log(dataPet)

  useEffect(() => {
    if (dataPet.type === "RENIAN") {
      const temp = [];
      const marca = "";
      dataPet?.vaccines.map((vaccine) => {
        const illness = [];
        if (vaccine.parvovirus > 0) {
          // illness.push(marcas[vaccine.parvovirus]);
          illness.push("Parvovirus");
        }
        if (vaccine.distemper > 0) {
          // illness.push(marcas[vaccine.distemper]);
          illness.push("Distemper");
        }
        if (vaccine.hepatitis > 0) {
          // illness.push(marcas[vaccine.hepatitis]);
          illness.push("Hepatitis");
        }
        if (vaccine.leptospira > 0) {
          // illness.push(marcas[vaccine.leptospira]);
          illness.push("Leptospira");
        }
        if (vaccine.parainfluenza > 0) {
          // illness.push(marcas[vaccine.parainfluenza]);
          illness.push("Parainfluenza");
        }
        if (vaccine.rabia > 0) {
          // illness.push(marcas[vaccine.rabia]);
          illness.push("Rabia");
        }
        if (vaccine.rinotraqueitis > 0) {
          // illness.push(marcas[vaccine.rinotraqueitis]);
          illness.push("Rinotraqueitis");
        }
        if (vaccine.panleucopenia > 0) {
          // illness.push(marcas[vaccine.panleucopenia]);
          illness.push("Panleucopenia");
        }
        if (vaccine.calicivirus > 0) {
          // illness.push(marcas[vaccine.calicivirus]);
          illness.push("Calicivirus");
        }
        temp.push({
          type: vaccine.tipo_visita === "vacuna" ? "VACCINES" : "DEWORMING",
          product: vaccine.clase_desp ? vaccine.clase_desp : marca,
          observation: vaccine.vacuna_observaciones,
          date: vaccine.vac_fecha_puesta,
          next: vaccine.vac_fecha_expiracion,
          image: vaccine.vacu_comprobante,
          illness: illness,
        });
      });

      console.log(temp);
      setVaccines({
        name: dataPet.pet.usuario_empresa,
        date: stringToDate(dataPet.pet.usuario_empresa_sector),
        chipDate: dataPet.pet.usuario_registrado,
        vaccines: temp,
      });
    } else {
      setVaccines(dataPet.pet);
    }
  }, [dataPet?.vaccines]);

  //	? `https://consultwar.renian.foundation/public/images/image/${ dataPet?.pet.chip }.jpg`
  //	//: `${ URL_RENIAN }/petimg/${ dataPet?.pet.usuario_foto }`
  //	: `${ URL_RENIAN }/petimg/${ dataPet?.pet.chip }.jpg`
  //	? `${ imageURI }${ dataPet?.pet.chip }.png`

  const [src, setSrc] = useState(
    dataPet.pet.chip
      ? `${imageURI}${dataPet.pet.chip}.png`
      : `${URL_RENIAN}/petimg/${dataPet?.pet.usuario_foto}`
    // ? `${ imageURI }${ dataPet.pet.chip }.png`
    // :
    // dataPet.pet.chip ?
    // 	`${ URL_RENIAN }/petimg/${ dataPet?.pet.usuario_foto }`
    // 	:
    // 	`https://ipfs.io/ipfs/${ dataPet?.pet.image }`
  );

  // console.log(dataPet)
  // console.log(
  // 	`${ imageURI }${ dataPet.pet.chip }.png`,
  // 	`${ URL_RENIAN }/petimg/${ dataPet?.pet.usuario_foto }`,
  // 	`https://ipfs.io/ipfs/${ dataPet?.pet.image }`
  // );

  // console.log(species)

  return (
    <>
      <div className={classes.content}>
        <div className={classes.contentBg}></div>
        <div>
          <div>
            <div className={classes.contentImg}>
              {dataPet.pet?.name != undefined && <h1>{dataPet.pet?.name}</h1>}
              {dataPet.pet?.usuario_empresa != undefined && (
                <h1>{dataPet.pet?.usuario_empresa}</h1>
              )}
              <div>
                <div>
                  {
                    // dataPet?.pet.chip ? (
                    <img
                      src={`${
                        dataPet.type === "RENIAN" ? dataPet.pet.image : src
                      }`}
                      layout="responsive"
                      width={60}
                      height={70}
                      href="image-dog"
                      alt="image-dog"
                      onError={
                        dataPet?.pet
                          ? () => {
                              console.log("error");
                              setSrc(
                                `https://ipfs.io/ipfs/${dataPet?.pet.image}`
                              );
                            }
                          : () => {
                              console.log("error not found");
                              setSrc("/img/img-nofound.png");
                            }
                        // dataPet?.pet.chip ?
                        // 	() => setSrc(`https://ipfs.io/ipfs/${ dataPet?.pet.usuario_foto }`)
                        // 	:
                        // 	dataPet?.pet.usuario_foto
                        // 		? () => setSrc(`${ URL_RENIAN }/petimg/${ dataPet?.pet.usuario_foto }`)
                        // 		:
                        // 		dataPet?.pet.image ?
                        // 			() => setSrc(`https://ipfs.io/ipfs/${ dataPet?.pet.usuario_foto }`)
                        // 			:
                        // 			() => setSrc("/img/img-nofound.png")
                      }
                    />
                    // )
                    // : (
                    // 	<Image
                    // 		src={src}
                    // 		layout="responsive"
                    // 		width={60}
                    // 		height={70}
                    // 		href="image-dog"
                    // 		alt="image-dog"
                    // 		onError={() => setSrc("/img/img-nofound.png")}
                    // 	/>
                    // )
                  }
                </div>
                {petState && (
                  <div className={classes.contentImgStatus}>
                    <Tooltip
                      position="bottom"
                      theme="light"
                      animation="scale"
                      open
                      html={
                        <div className={classes.contentImgStatusTooltip}>
                          Estado:{" "}
                          <span style={{ color: colorState }}>{petState}</span>
                        </div>
                      }
                    >
                      <div style={{ background: colorState }}></div>
                    </Tooltip>
                  </div>
                )}
              </div>

              {dataPet.type == "RENIAN" && (
                <div className={classes.contentImgUpdate}>
                  <lord-icon
                    src="https://cdn.lordicon.com/hgpfwhzk.json"
                    colors="primary:#ffae00,secondary:#ffae00"
                    trigger="loop"
                  ></lord-icon>
                  <p>{t("This pet must update its information")}.</p>
                </div>
              )}
            </div>
            {(dataPet.pet.status === "ADOPTION" ||
              dataPet.pet.status == "ACTIVE" ||
              dataPet.pet.status == "GALLERY") && (
              <div className="flex items-center gap-3 py-3 px-2 text-orange-600 border-2 border-orange-600 rounded-2xl">
                <div className="w-44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">
                    {/* Si deseas cambiar el estado de tu mascota de activo a perdido o robado <b>¡Comunícate con RENIAN!</b> De inmediato modificaremos su estado y colocaremos tu número de contacto. */}
                    Si deseas cambiar el estado de tu mascota de activo a
                    perdido o robado <b>¡Comunícate con RENIAN!</b> De inmediato
                    modificaremos su estado y colocaremos tu número de contacto.
                  </span>
                </div>
              </div>
            )}
            {(dataPet.pet.status === "LOST" ||
              dataPet.pet.status === "STOLEN") && (
              <div className="flex items-center gap-3 py-3 px-2 text-orange-600 border-2 border-orange-600 rounded-2xl">
                <div className="w-44 flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col ">
                  <span className="text-base">
                    {/* Si deseas cambiar el estado de tu mascota de activo a perdido o robado <b>¡Comunícate con RENIAN!</b> De inmediato modificaremos su estado y colocaremos tu número de contacto. */}
                    Mis dueños me es tan buscando, puedes llamar a este número:
                  </span>
                  <a
                    className="bg-blue-600 text-white justify-center px-4 py-2 rounded-2xl font-semibold mt-3 gap-2"
                    href={`tel: +${dataPet.adopter.phone}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <span>{dataPet?.adopter?.phone}</span>
                  </a>
                  {/* <span>
										contactarce a : 996844856
									</span> */}
                </div>
              </div>
            )}
            {dataPet.pet.status === "DEAD" && (
              <div className="flex items-center gap-3 py-3 px-2 text-purple-600 border-2 border-purple-600 rounded-2xl">
                <div className="w-44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">
                    Lamento profundamente la pérdida de tu querida mascota. En
                    estos momentos difíciles, recordemos con cariño los hermosos
                    momentos que compartimos con ella. Su amor y compañía
                    siempre permanecerán en nuestros corazones.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className={classes.contentInfo}>
            <div className={classes.contentInfo__cards}>
              <div>
                <div className={classes.contentInfo__cardsText}>
                  <h4>Microchip:</h4>
                  {dataPet.pet?.chip != undefined && (
                    <span>{dataPet.pet?.chip}</span>
                  )}
                  {dataPet.pet?.usuario_cargo != undefined && (
                    <span>{dataPet.pet?.usuario_cargo}</span>
                  )}
                </div>

                <div className={classes.contentInfo__cardsImg}>
                  <div>
                    <Image
                      src="/img/chip-consult.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="chip-image"
                      alt="chip-image"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className={classes.contentInfo__cardsText}>
                  <h4>{t("Registered by")}:</h4>
                  {dataPet.pet?.userAddress != undefined && (
                    <span>{`${dataPet.pet?.userAddress.substring(
                      0,
                      10
                    )}...`}</span>
                  )}
                  {!dataPet.pet?.userAddress && (
                    <span>{t("Not specified")}</span>
                  )}
                  <br />
                  {dataPet.pet?.userName && (
                    <span>{`${formaterUserName(dataPet.pet?.userName).substring(
                      0,
                      20
                    )}...`}</span>
                  )}
                </div>

                <div className={classes.contentInfo__cardsImg}>
                  <div>
                    <Image
                      src="/img/registry-consult.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="chip-image"
                      alt="Chip Image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.contentInfo__general}>
              <div className={classes.contentInfo__generalTable}>
                <div>
                  <h5>{t("Owner")}:</h5>
                  {dataPet.pet?.adopterName &&
                    dataPet.pet?.adopterLastName != undefined && (
                      <span>
                        {dataPet.type === "RENIAN" ? (
                          dataPet.pet?.adopterName
                        ) : (
                          <>
                            {dataPet.adopter?.name} {dataPet.adopter?.lastName}
                          </>
                        )}
                      </span>
                    )}
                  {dataPet.pet?.usuario_nombre &&
                    dataPet.pet?.usuario_apellidos != undefined && (
                      <span>
                        {dataPet.pet?.usuario_nombre}{" "}
                        {dataPet.pet?.usuario_apellidos}
                      </span>
                    )}
                </div>

                <div>
                  <h5>{t("Breed")}:</h5>
                  {dataPet.pet?.race != undefined && (
                    <span>
                      {dataPet.type === "RENIAN" ? (
                        dataPet.pet?.race
                      ) : (
                        <>
                          {races.map((race) => {
                            console.log(race.value);

                            console.log(dataPet.pet?.race);
                            return (
                              race.value.toUpperCase().trim() ===
                                dataPet.pet?.race.toUpperCase().trim() &&
                              race.label
                            );
                          })}
                        </>
                      )}
                    </span>
                  )}
                  {dataPet.pet?.usuario_telefax != undefined && (
                    <span>{dataPet.pet?.usuario_telefax}</span>
                  )}
                </div>
                <div>
                  <h5>{t("Type")}:</h5>
                  <span>
                    {species.map((specie) => {
                      // console.log(specie)
                      // console.log(specie.value, dataPet.pet?.type)
                      //  specie.value === dataPet.pet?.type && specie.label
                      if (specie.value === dataPet.pet?.type) {
                        return specie.label;
                      }
                    })}
                  </span>
                </div>

                <div>
                  <h5>{t("Birth")}:</h5>
                  {dataPet.pet?.date != undefined && (
                    <span>{formatDate(dataPet.pet?.date)}</span>
                  )}
                  {dataPet.pet?.usuario_empresa_sector != undefined && (
                    <span>{dataPet.pet?.usuario_empresa_sector}</span>
                  )}
                </div>

                <div>
                  <h5>{t("Adoption date")}:</h5>
                  {dataPet.pet?.date != undefined && (
                    <span>{formatDate(dataPet.pet?.dateAdoption)}</span>
                  )}
                  {dataPet.pet?.usuario_registrado != undefined && (
                    <span>{dataPet.pet?.usuario_empresa_sector}</span>
                  )}
                </div>

                <div>
                  <h5>{t("Country")}:</h5>
                  {dataPet.pet?.country != undefined && (
                    <span>
                      {" "}
                      {countries.map(
                        (values) =>
                          values.value == dataPet.pet?.country && values.label
                      )}
                    </span>
                  )}
                  {dataPet.pet?.usuario_ciudad != undefined && (
                    <span>{dataPet.pet?.usuario_ciudad}</span>
                  )}
                </div>

                <div>
                  <h5>{t("Gender")}:</h5>
                  {dataPet.pet?.gender != undefined && (
                    <span>
                      {dataPet.type === "RENIAN" ? (
                        dataPet.pet?.gender === "MACHO" ? (
                          t("Male")
                        ) : (
                          t("Female")
                        )
                      ) : (
                        <>
                          {dataPet.pet?.gender === "MALE" && t("Male")}{" "}
                          {dataPet.pet?.gender === "FEMALE" && t("Female")}
                        </>
                      )}
                    </span>
                  )}
                  {dataPet.pet?.usuario_url != undefined && (
                    <span>{dataPet.pet?.usuario_url}</span>
                  )}
                </div>

                <div>
                  <h5>{t("Color")}:</h5>
                  {dataPet.type === "RENIAN" ? (
                    <span>{dataPet.pet?.colour}</span>
                  ) : (
                    <>
                      {dataPet.pet?.colour != undefined && (
                        <span>
                          {dataPet.pet.colour.split(",").map((colour) =>
                            colours?.map(
                              (color) =>
                                color.value === colour && (
                                  <>
                                    <span key={color.value}>
                                      {color.label}.{" "}
                                    </span>
                                  </>
                                )
                            )
                          )}
                        </span>
                      )}
                    </>
                  )}
                  {dataPet.pet?.usuario_interes != undefined && (
                    <span>{dataPet.pet?.usuario_interes}</span>
                  )}
                </div>

                <div>
                  <h5>{t("Neutered")}:</h5>

                  {dataPet.type === "RENIAN" ? (
                    <>
                      {
                        <span>
                          {dataPet.pet?.sterilized === "ESTERILIZADO"
                            ? "SI"
                            : "NO"}
                        </span>
                      }
                    </>
                  ) : (
                    <>
                      {dataPet.pet?.sterilized != undefined && (
                        <span>{sterilizedSelect[dataPet.pet?.sterilized]}</span>
                      )}
                    </>
                  )}
                  {/* {dataPet.pet?.sterilized != undefined && (
										<span>
											{dataPet.pet?.sterilized == "ESTERILIZADO"
												? "SI"
												: "NO"}
										</span>
									)} */}
                </div>
                {dataPet.pet.status === "LOST" && (
                  <div>
                    <h5>Teléfono:</h5>
                    {dataPet.type === "RENIAN" ? (
                      <>{<span>{dataPet?.adopter.phone}</span>}</>
                    ) : (
                      <>
                        <span>{dataPet?.adopter.phone}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.button}>
        <DefaultButton
          name={openVaccines ? t("Hide Vaccinations") : t("View Vaccinations")}
          background={"rgb(255, 191, 0)"}
          onClick={() => setOpenVaccines(!openVaccines)}
        />
      </div>
      {openVaccines && <Vaccines pets={vaccines} type={dataPet.type} />}
    </>
  );
};

export const ContentWeb3Pet = ({ pet, dataPet, getInfo, status }) => {
  console.log(pet);
  console.log(dataPet);
  // const { races } = useSpecie(pet.type, pet);
  const { locale } = useRouter();
  const { getRace, race } = useRaces();
  console.log(race);
  const { countries } = useCountry();
  const { colours } = useColours();
  const { openVaccines, setOpenVaccines } = useState(false);
  const { races, species } = useSpecie(pet?.type);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getInfo(pet.chip);
  }, [pet.chip]);

  // useEffect(() => {
  // 	getRace({
  // 		type: pet.type,
  // 		race: pet.race,
  // 	});
  // }, []);

  return (
    <>
      <div className={classes.content}>
        <div className={classes.contentBg}></div>
        <div>
          <div>
            <div className={classes.contentImg}>
              <h1>{pet?.name}</h1>
              <div>
                <div>
                  <img
                    src={`https://ipfs.io/ipfs/${pet?.image}`}
                    alt="image-dog"
                  />
                </div>
                <div className={classes.contentImgStatus}>
                  <Tooltip
                    position="bottom"
                    theme="light"
                    animation="scale"
                    open
                    html={
                      <div className={classes.contentImgStatusTooltip}>
                        Estado:{" "}
                        <span style={{ color: statusColor(status) }}>
                          {statusSelect["es-Es"][status]}
                        </span>
                      </div>
                    }
                  >
                    <div style={{ background: statusColor(status) }}></div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.contentInfo}>
            <div className={classes.contentInfo__cards}>
              <div>
                <div className={classes.contentInfo__cardsText}>
                  <h4>Microchip:</h4>
                  <span>{pet?.chip}</span>
                </div>

                <div className={classes.contentInfo__cardsImg}>
                  <div>
                    <Image
                      src="/img/chip-consult.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="chip-image"
                      alt="Chip Image"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className={classes.contentInfo__cardsText}>
                  <h4>{t("Registered by")}:</h4>
                  <span>{`${pet?.userAddress.substring(0, 10)}...`}</span>
                  <br />
                  {pet?.userName && (
                    <span>{`${formaterUserName(pet?.userName).substring(
                      0,
                      20
                    )}...`}</span>
                  )}
                </div>
                <div className={classes.contentInfo__cardsImg}>
                  <div>
                    <Image
                      src="/img/registry-consult.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="chip-image"
                      alt="registry  Consult"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.contentInfo__general}>
              <div className={classes.contentInfo__generalTable}>
                <div>
                  <h5>{t("Owner")}:</h5>
                  <span>
                    {dataPet.adopter?.adopterName}{" "}
                    {dataPet.adopter?.adopterLastName}
                  </span>
                </div>

                <div>
                  <h5>Raza:</h5>
                  <span>
                    {races.map(
                      (race) => race.value === pet?.race && race.label
                    )}
                  </span>
                </div>

                <div>
                  <h5>Nacimiento:</h5>
                  <span>{formatDate(pet?.date)}</span>
                </div>

                <div>
                  <h5>Fecha de adopcion:</h5>
                  <span>{formatDate(pet?.dateAdoption)}</span>
                </div>

                <div>
                  <h5>Pais:</h5>
                  <span>
                    {countries.map(
                      (values) => values.value == pet.country && values.label
                    )}
                  </span>
                </div>

                <div>
                  <h5>Sexo:</h5>
                  <span>
                    {pet?.gender === "MALE" && "MACHO"}{" "}
                    {pet?.gender === "FEMALE" && "HEMBRA"}
                  </span>
                </div>

                <div>
                  <h5>Color:</h5>
                  <span>
                    {pet.colour
                      .split(",")
                      .map((colour) =>
                        colours?.map(
                          (values) =>
                            values.value == colour && (
                              <span key={values.value}>{values.label} </span>
                            )
                        )
                      )}
                  </span>
                </div>

                <div>
                  <h5>Esterilizado:</h5>
                  <span>{sterilizedSelect[pet?.sterilized]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Vaccines pets={pet} />
    </>
  );
};
