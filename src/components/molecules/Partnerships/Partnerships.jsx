import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MainContainer } from "../../";
import classes from "./partnerships.module.scss";

export const Partnerships = () => {
  const { t } = useTranslation()
  return (
    <section className={classes.partnerships}>
      <MainContainer>
        <div className={classes.partnerships__container}>
          <div className={classes.partnerships__title}>
            <h2>{t("Associates")}</h2>
          </div>

          <div className={classes.partnerships__slider}>
            <div>
              <div>
                <div>
                  <Image
                    src="/img/partnerships/image_01.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="/img/partnerships/image_02.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="/img/partnerships/image_03.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="/img/partnerships/image_04.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    alt="image"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </MainContainer>
      {/* <div className={classes.framebottom}></div> */}
    </section>
  );
};
