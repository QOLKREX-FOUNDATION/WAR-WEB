import classes from "./banner.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { Link } from "react-scroll";
import { Flip } from "react-reveal";
import { MainContainer, DefaultButton } from "../../";
import { use, useContext, useRef } from "react";
import { SlideContext } from "../../../context";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  const { swiperRef } = useContext(SlideContext);
  return (
    <section className={classes.banner}>
      <Flip top>
        <div>

          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            ref={swiperRef}
          >
            <SwiperSlide>
              <div className={classes.banner__first}>
                <div className={classes.banner__pixels}></div>

                <main>
                  <div className={classes.banner__firstWar}>
                    <div>
                      {/* <Image
                        src="/svg/war-logo.svg"
                        layout="responsive"
                        width={60}
                        height={45}
                        href="war-logo"
                      // priority
                      /> */}
                    </div>
                  </div>

                  <div className={classes.banner__firstText}>
                    <div>
                      <h3>{t("What's the W.A.R.?")}</h3>
                      <h5>
                        {t("Association formed by civil registry entities of pets")}.
                      </h5>
                    </div>
                  </div>

                  <div className={classes.banner__firstImage}>
                    <div>
                      <Image
                        src="/img/banner/banner2/logo_war.png"
                        layout="responsive"
                        width={42}
                        height={60}
                        href="image"
                        alt="war-logo"
                      />
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__second}>
                <div className={classes.banner__pixels}></div>

                <main>
                  <div className={classes.banner__secondText}>
                    <h2>{t("Pet care service")}</h2>
                    <div>
                      <h5>
                        {t("It helps scientists and wildlife protectors to monitor the population and distribution of wild species, which is essential for the conservation of biodiversity.")}
                      </h5>
                    </div>
                  </div>
                  <div className={classes.banner__secondImage}>
                    <div>
                      <Image
                        src="/img/banner/banner1/animales.png"
                        layout="responsive"
                        width={70}
                        height={65}
                        href="image"
                      // priority
                      />
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__third}>
                <div className={classes.banner__pixels}></div>
                <main>
                  <div className={classes.banner__thirdText}>
                    <h5>{t("Be part of the world animal registry")}</h5>
                    <div>
                      <h3>
                        {t("Helps owners keep track of their pets and identify them individually by tracking vaccinations")}
                      </h3>
                    </div>


                  </div>

                  <div className={classes.banner__thirdImage}>
                    <div>
                      <Image
                        src="/img/banner/banner5/laptop.png"
                        layout="responsive"
                        width={50}
                        height={65}
                        href="image"
                      // priority
                      />
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__fourth}>
                <div className={classes.banner__pixels}></div>
                <main>
                  <div className={classes.banner__fourthText}>
                    <h5>{t("Livestock registration")}</h5>
                    <div>
                      <h3>
                        {t("In addition, it can help improve the quality of the animals by monitoring the bloodline and selecting the most suitable animals for reproduction.")}
                      </h3>
                    </div>


                  </div>

                  <div className={classes.banner__fourthImage}>
                    <div>
                      <Image
                        src="/img/banner/banner3/ganaderia.png"
                        layout="responsive"
                        width={50}
                        height={65}
                        href="image"
                      // priority
                      />
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__fifth}>
                <div className={classes.banner__pixels}></div>
                <main>
                  <div className={classes.banner__fifthText}>
                    <h5>{t("Wild animal identification record")}</h5>
                    <div>
                      <h3>
                        {t("It helps scientists and wildlife protectors to monitor the population and distribution of wild species, which is essential for the conservation of biodiversity.")}
                      </h3>
                    </div>


                  </div>

                  <div className={classes.banner__fifthImage}>
                    <div>
                      <Image
                        src="/img/banner/banner4/silvestres.png"
                        layout="responsive"
                        width={50}
                        height={65}
                        href="image"
                      // priority
                      />
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Flip>
    </section>
  );
};
