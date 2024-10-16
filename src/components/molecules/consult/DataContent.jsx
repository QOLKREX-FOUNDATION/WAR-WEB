import Image from "next/image";
import { useEffect, useState } from "react";
import { imageURI } from "../../../config/constants/endpoints";
import classes from "../../organisms/Consult/consult.module.scss";

export const ContentMongoPet = ({ dataPet }) => {

  const [loader, setLoader] = useState(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  console.log("dataPet", dataPet)
  console.log(isNaN(Number(dataPet.pet?.userName)))

  return (
    <div className={classes.consult__content}>
      <div className={classes.consult__contentBg}></div>
      {dataPet.pet?.name != undefined && <h1>{dataPet.pet?.name}</h1>}
      {dataPet.pet?.usuario_empresa != undefined && (
        <h1>{dataPet.pet?.usuario_empresa}</h1>
      )}

      <div>
        <div className={classes.consult__contentImg}>

          <div>
            {
              dataPet.pet?.chip != undefined ?
                <Image
                  src={`${ imageURI }${ dataPet?.pet.chip }.png`}
                  layout="responsive"
                  width={60}
                  height={75}
                  href="image-dog"
                  alt="pet"
                />
                :
                <Image
                  src={"/img/img-nofound.png"}
                  layout="responsive"
                  width={60}
                  height={75}
                  href="image-dog"
                  alt="not found"
                />
            }

          </div>

          <div>
            {dataPet.type == "RENIAN" && (
              <>
                <lord-icon
                  src="https://cdn.lordicon.com/hgpfwhzk.json"
                  colors="primary:#000000,secondary:#ffae00"
                  trigger="none"
                ></lord-icon>
                <p>Esta mascota debe actualizar sus datos.</p>
              </>
            )}
          </div>
        </div>

        <div className={classes.consult__contentInfo}>
          <div className={classes.consult__contentInfo__cards}>
            <div>
              <div className={classes.consult__contentInfo__cardsImg}>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/sruywmtf.json"
                    trigger="none"
                    colors="primary:#000000,secondary:#dd0000"
                    style={{
                      width: "165px",
                      height: "165px",
                      opacity: ".7",
                    }}
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__contentInfo__cardsText}>
                <h4>Microchip:</h4>
                {dataPet.pet?.chip != undefined && (
                  <span>{dataPet.pet?.chip}</span>
                )}
                {dataPet.pet?.usuario_cargo != undefined && (
                  <span>{dataPet.pet?.usuario_cargo}</span>
                )}
              </div>
            </div>

            <div>
              <div className={classes.consult__contentInfo__cardsImg}>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/zkzytvcr.json"
                    trigger="none"
                    colors="primary:#000000,secondary:#dd0000"
                    style={{
                      width: "165px",
                      height: "165px",
                      opacity: ".7",
                    }}
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__contentInfo__cardsText}>
                <h4>Registrado por:</h4>
                {dataPet.pet?.userAddress != undefined && (
                  // si dataPet.pet?.userName es un number que no se muestra en la vista
                  isNaN(Number(dataPet.pet?.userName)) ?
                    <span></span>
                    :
                    <span>{
                      dataPet.pet?.userAddress
                    }</span>
                )}
                {!dataPet.pet?.userAddress && <span>No definido</span>}
                <br />
                {
                  dataPet.pet?.userName && (
                    <span>{`${ dataPet.pet?.userName.substring(0, 20) }...`}</span>
                  )
                }
              </div>
            </div>
          </div>

          <div className={classes.consult__contentInfo__general}>
            <div className={classes.consult__contentInfo__generalTable}>
              <div>
                <h5>Propietario:</h5>
                {dataPet.pet?.adopterName &&
                  dataPet.pet?.adopterLastName != undefined && (
                    <span>
                      {dataPet.pet?.adopterName} {dataPet.pet?.adopterLastName}
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
                <h5>Raza:</h5>
                {dataPet.pet?.race != undefined && (
                  <span>{dataPet.pet?.race}</span>
                )}
                {dataPet.pet?.usuario_telefax != undefined && (
                  <span>{dataPet.pet?.usuario_telefax}</span>
                )}
              </div>

              <div>
                <h5>Nacimiento:</h5>
                {dataPet.pet?.date != undefined && (
                  <span>{dataPet.pet?.date}</span>
                )}
                {dataPet.pet?.usuario_empresa_sector != undefined && (
                  <span>{dataPet.pet?.usuario_empresa_sector}</span>
                )}
              </div>

              <div>
                <h5>Fecha de adopcion:</h5>
                {dataPet.pet?.date != undefined && (
                  <span>{dataPet.pet?.date}</span>
                )}
                {dataPet.pet?.usuario_registrado != undefined && (
                  <span>{dataPet.pet?.usuario_registrado}</span>
                )}
              </div>

              <div>
                <h5>Pais:</h5>
                {dataPet.pet?.country != undefined && (
                  <span>{dataPet.pet?.country}</span>
                )}
                {dataPet.pet?.usuario_ciudad != undefined && (
                  <span>{dataPet.pet?.usuario_ciudad}</span>
                )}
              </div>

              <div>
                <h5>Sexo:</h5>
                {dataPet.pet?.gender != undefined && (
                  <span>{dataPet.pet?.gender}</span>
                )}
                {dataPet.pet?.usuario_url != undefined && (
                  <span>{dataPet.pet?.usuario_url}</span>
                )}
              </div>

              <div>
                <h5>Color:</h5>
                {dataPet.pet?.colour != undefined && (
                  <span>{dataPet.pet?.colour}</span>
                )}
                {dataPet.pet?.usuario_interes != undefined && (
                  <span>{dataPet.pet?.usuario_interes}</span>
                )}
              </div>

              <div>
                <h5>Esterilizado:</h5>
                {dataPet.pet?.sterilized != undefined && (
                  <span>{dataPet.pet?.sterilized}</span>
                )}
                {dataPet.pet?.usuario_esteril != undefined && (
                  <span>
                    {dataPet.pet?.usuario_esteril == "ESTERILIZADO"
                      ? "SI"
                      : "NO"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentWeb3Pet = ({ pets }) => {
  const [dataPetWeb3, setDataWeb3Pet] = useState();

  const resultData = async () => {
    if (pets.length == 1) {
      setDataWeb3Pet(pets[0]);
    }
    // if(pets.length > 1){
    //   let filterData = pets.filter((data) => {
    //     return data.chip == 'aqui ira el chip identificador';
    //   })
    // }
  };

  useEffect(() => {
    resultData();
  }, [pets]);
  console.log(dataPetWeb3)
  return (
    <div className={classes.consult__content}>
      <div className={classes.consult__contentBg}></div>
      <h1>{dataPetWeb3?.name}</h1>
      <div>
        <div className={classes.consult__contentImg}>
          <div className="border border-red-600">
            <img
              //src={`https://res.cloudinary.img/worldanireg/image/upload/v1678899125/images/image/${ dataPetWeb3?.image }.png`}
              src={`https://ipfs.io/ipfs/${ dataPetWeb3?.image }`}
              layout="responsive"
              width={60}
              height={75}
              href="image-dog"
              alt="image-dog"
            />
          </div>
        </div>

        <div className={classes.consult__contentInfo}>
          <div className={classes.consult__contentInfo__cards}>
            <div>
              <div className={classes.consult__contentInfo__cardsImg}>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/sruywmtf.json"
                    trigger="none"
                    colors="primary:#000000,secondary:#dd0000"
                    style={{
                      width: "165px",
                      height: "165px",
                      opacity: ".7",
                    }}
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__contentInfo__cardsText}>
                <h4>Microchip:</h4>
                <span>{dataPetWeb3?.chip}</span>
              </div>
            </div>

            <div>
              <div className={classes.consult__contentInfo__cardsImg}>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/zkzytvcr.json"
                    trigger="none"
                    colors="primary:#000000,secondary:#dd0000"
                    style={{
                      width: "165px",
                      height: "165px",
                      opacity: ".7",
                    }}
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__contentInfo__cardsText}>
                <h4>Registrado por:</h4>
                <span>{dataPetWeb3?.userAddress}</span>
              </div>
              <br />
              {
                dataPetWeb3?.userName && (
                  // si dataPet.pet?.userName es un number que no se muestra en la vista
                  isNaN(Number(dataPet.pet?.userName)) ?
                    <span></span>
                    :
                    <span>{`${ dataPet.pet?.userName.substring(0, 20) }...`}</span>
                )
              }
            </div>
          </div>

          <div className={classes.consult__contentInfo__general}>
            <div className={classes.consult__contentInfo__generalTable}>
              <div>
                <h5>Propietario:</h5>
                <span>
                  {dataPetWeb3?.adopterName} {dataPetWeb3?.adopterLastName}
                </span>
              </div>

              <div>
                <h5>Raza:</h5>
                <span>{dataPetWeb3?.race}</span>
              </div>

              <div>
                <h5>Nacimiento:</h5>
                <span>{dataPetWeb3?.date}</span>
              </div>

              <div>
                <h5>Fecha de adopcion:</h5>
                <span>{dataPetWeb3?.dateAdoption}</span>
              </div>

              <div>
                <h5>Pais:</h5>
                <span>{dataPetWeb3?.country}</span>
              </div>

              <div>
                <h5>Sexo:</h5>
                <span>{dataPetWeb3?.gender}</span>
              </div>

              <div>
                <h5>Color:</h5>
                <span>{dataPetWeb3?.colour}</span>
              </div>

              <div>
                <h5>Esterilizado:</h5>
                <span>{dataPetWeb3?.sterilized}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
