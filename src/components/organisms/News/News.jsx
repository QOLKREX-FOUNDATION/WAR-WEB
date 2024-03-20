import Image from "next/image";
import classes from "./news.module.scss";
import Zoom from "react-reveal/Zoom";
import { MainContainer, DefaultModal, DefaultButton } from "../../";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useModal } from "../../../hook/useModal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Bounce } from "react-reveal";
import Link from "next/link";

export const News = () => {
  const { t } = useTranslation();
  const { openDefaultModal, setOpenDefaultModal } = useModal();

  return (
    <>
      <div className={classes.frametop}></div>
      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>
            Coming soon in <span>W.A.R.</span>
          </h1>
        </DefaultModal>
      )}
      <section className={classes.news} id="news">
        <MainContainer>
          <div className={classes.news__container}>
            <Zoom cascade>
              <div className={classes.news__text}>
                <h1>{t("Last news")}</h1>
                <p>
                  {t("What is currently happening? Find out about the latest events related to the animal world")}
                </p>
              </div>
            </Zoom>
            <Carousel />
          </div>
        </MainContainer>
        {/* <div>
          <DefaultButton
            name="ver todas las noticias"
            onClick={() => setOpenDefaultModal(true)}
          />
        </div> */}
      </section>
    </>
  );
};

const Carousel = () => {
  const [news, setNews] = useState([]);

  const getInfo = async () => {
    if (news == "") {
      try {
        const rsp = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@worldanimalregistry/feed`
        );
        const data = await rsp.json();
        setNews(data.items);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    getInfo();
  }, [news]);

  return (
    <>
      <main className={`${ classes.carousel }`}>
        {
          news.length > 0 && (
            <Swiper
              slidesPerView="auto"
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                767: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              {news != "" &&
                news?.map((article, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Bounce
                        left
                      >
                        <div className={classes.news__slide}>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <div className={classes.news__card}>
                              <div className={classes.news__cardImage}>
                                <img src={article.thumbnail} alt={article.title} />
                              </div>

                              <div className={classes.news__cardContent}>
                                <h6>{article.author}</h6>
                                <h3>{article.title}</h3>
                                <p>{article.content.replace(/<[^>]*>/g, "")}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </Bounce>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )
        }
      </main>
    </>
  );
};
