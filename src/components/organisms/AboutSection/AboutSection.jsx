import { useState } from "react";
import classes from "./about-section.module.scss";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(false);
  const [stylesButton, setStylesButton] = useState({
    background: "auto",
    color: "auto",
    border: "auto",
  });

  const openVideo = () => {
    setState(true);
    setStylesButton(null);
  };

  return (
    <>
      <section className={classes.about}>
        <MainContainer>
          <div className={classes.about__container}>
            <div className={classes.about__text}>
              <h2>{t("Global animal identification and traceability system")}</h2>
              <p>
                {t("It is essential to provide identification and traceability of live animals, ensuring responsible ownership in the case of companion animals and the traceability of products of animal origin, links can be established that allow tracking throughout animal production, in the field of the food chain, wool production or simply the care and conservation of the existence of endangered animals.")}.
              </p>
            </div>

            <div className={classes.about__image}>
              <Image
                src="/img/dog-decorate.png"
                layout="responsive"
                width={50}
                height={50}
              />
            </div>

            <div className={classes.about__player}>
              <Bounce right>
                <div className={classes.about__playerVideo}>
                  {stylesButton && (
                    <div
                      onClick={openVideo}
                      style={stylesButton}
                      className={classes.about__playerVideoPreview}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/ujphzprf.json"
                        trigger="loop-on-hover"
                        colors="primary:#000000,secondary:#00b6a8"
                        style={{ width: "75px", height: "75px" }}
                      ></lord-icon>
                    </div>
                  )}

                  {state === true && (
                    <ReactPlayer url="https://youtu.be/FMcfUAHfAdA" />
                  )}
                </div>
              </Bounce>

              <p>
                {t("The registration of the animals is managed through a network of transactions in a blockchain technology - web3, guaranteeing an immutable record and impossible to falsify.")}.
              </p>
              <div className={classes.about__playerFondo}></div>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
