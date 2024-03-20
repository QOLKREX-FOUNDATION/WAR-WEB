import Image from "next/image";
import classes from "./functionality.module.scss";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export const Functionality = () => {
  const { t } = useTranslation()
  const { locale } = useRouter();
  return (
    <>
      <section className={classes.functionality} id="microchip">
        <div className={classes.frametop}></div>
        <MainContainer>
          <div className={classes.functionality__container}>
            <h2
              className={classes.functionality__containerTitle1}
            >{t("How is the registration process?")}</h2>
            <div>
              <div className={classes.functionality__text}>
                <span>{t("The process is quite simple and fast")}!</span>
                <p>
                  {t("First we verify that the pet does not have a identification, then we insert the microchip of permanent identification on the back of the pet, this device has a unique number worldwide")}.
                </p>
                <p>
                  {t("This number is detected by a microchip reader, it is entered  into our Pet Registration System on the Web3 (Blockchain) by  attaching the characteristics of the pets, their health information and data of the legal owner")}.
                </p>
              </div>

              <div className={classes.functionality__image}>
                <Bounce right>
                  <div>
                    {
                      locale === "es" ?
                        <Image
                          src="/img/mission/proceso-de-registro.png"
                          layout="responsive"
                          width={500}
                          height={600}
                          alt="microchip-how"
                        />
                        :
                        <Image
                          src="/img/mission/en/proceso-de-registro_en.png"
                          layout="responsive"
                          width={500}
                          height={600}
                          alt="microchip-how"
                        />
                    }
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
          <div className={classes.functionality__divider}></div>
          <div className={classes.functionality__container}>
            <h2
              className={classes.functionality__containerTitle2}
            >{t("Steps for civil registration of animals on our platform")}</h2>
            <div>
              <div className={classes.functionality__image}>
                <Bounce right>
                  <div>
                    {
                      locale === "es" ?
                        <Image
                          src="/img/mission/chip.png"
                          layout="responsive"
                          width={500}
                          height={600}
                          alt="microchip-how"
                        />
                        :
                        <Image
                          src="/img/mission/en/chip_en.png"
                          layout="responsive"
                          width={500}
                          height={600}
                          alt="microchip-how"
                        />
                    }
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
