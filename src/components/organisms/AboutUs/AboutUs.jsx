import Image from "next/image";
import classes from "./about-us.module.scss";
import Bounce from "react-reveal/Bounce";
import { MainContainer } from "../../";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={classes.about} id="about">
        <MainContainer>
          <div className={classes.about__container}>
            <div className={classes.about__image}>
              <Bounce left>
                <div>
                  <Image
                    src="/img/about-us.jpg"
                    layout="responsive"
                    width={80}
                    height={80}
                    href="image"
                  />
                </div>
              </Bounce>
            </div>

            <div className={classes.about__text}>
              <h2>{t("About Us")}?</h2>
              <p>
                {t("It is an institution whose main objective is the national registry of animals (considered pets and not pets), which works under a unified inter-institutional platform system, called 'SRM'. WAR works within a framework of Public Policy!. Seeking to significantly minimize the amount of stray animal population in the world, constantly monitoring the health status, and thus educing problems that affect the field of public health in all countries")}
              </p>
            </div>
          </div>
        </MainContainer>
        {/* <div className={classes.framebottom}></div> */}
      </section>
    </>
  );
};
