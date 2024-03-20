import React from "react";
import { Copyright } from "./components/Copyright/Copyright";
import Image from "next/image";
import classes from "./footer.module.scss";
import { animateScroll as scroll } from "react-scroll";
import { MainContainer } from "../../";
import { useTranslation } from "react-i18next";
import { Bounce, Fade, Slide, Zoom } from "react-reveal";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation()
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <Bounce
            left>
            <div className={classes.footer__description}>
              <div
                className={classes.footer__descriptionImage}
                onClick={toggleHome}
              >
                <Image
                  src="/img/logo-war.webp"
                  layout="responsive"
                  width={80}
                  height={30}
                  alt="image"
                />
              </div>
              <p>
                {t("The World Animal Registry is an organization decentralized international agency that works to formalize the registration of animals, to strengthen the responsible animal ownership system worldwide")}.
              </p>
              <div
                className={classes.footer__descriptionSocial}
              >
                <p>{t("Social network")}</p>
                <Link
                  href="https://www.youtube.com/@worldanimalregistry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" fill="white" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/World-Animal-Registry-110574308218058/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/footer/facebook.png"
                    width={20}
                    height={20}
                    alt="image"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/worldanimalregistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/footer/instagram.png"
                    width={20}
                    height={20}
                    alt="image"
                  />
                </Link>
                <Link
                  href="https://t.me/WorldAnimalRegistry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/footer/telegram.png"
                    width={20}
                    height={20}
                    alt="image"
                  />
                </Link>
                <Link
                  href="https://twitter.com/WorldAniReg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/footer/twitter.png"
                    width={20}
                    height={20}
                    alt="image"
                  />
                </Link>
              </div>
            </div>
          </Bounce>
          <Bounce
            right>
            <div className={classes.footer__contact}>
              {/* <h3>{t("Contact us")}</h3> */}
              <Zoom
                delay={150}>
                <ul>
                  <li>
                    <Link href="/vicuid">
                      <p>{t("Registration campaigns")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/join-us">
                      <p>{t("Join us")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://world-animal-registry.gitbook.io/world-animal-registry/">
                      <p>W.A.R wiki</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <p>{t("About us")}</p>
                    </Link>
                  </li>
                </ul>
              </Zoom>
              <Zoom
                delay={250}>
                <ul>
                  <li>
                    <Link href="/consulta">
                      <p>{t("World record")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#news">
                      <p>{t("News")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#faq">
                      <p>{t("Faq")}</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/#contact">
                      <p>{t("Contact")}</p>
                    </Link>
                  </li>
                </ul>
              </Zoom>
              <Zoom
                delay={350}>
                <ul>
                  <li>
                    <h3>
                      {t("contact us")}
                    </h3>
                  </li>

                  <li>
                    <Link href="/">
                      <div>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="white" />
                        </svg>

                      </div>
                      <p>1900 N BAYSHORE DR SUITE 1A #136-1611
                        MIAMI, FL 33132</p>
                    </Link>
                  </li>

                  {/* <li>
                    <Link href="/">
                      <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="white" />
                        </svg>

                      </div>
                      <p>(+51) 759-4451</p>
                    </Link>
                  </li> */}

                  <li>
                    <Link href="/">
                      <div>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 0.89 19.1 0 18 0Z" fill="white" />
                        </svg>
                      </div>
                      <p>pets@worldanimalregistry.org</p>
                    </Link>
                  </li>

                </ul>
              </Zoom>
            </div>
          </Bounce>
        </div>
      </footer>
      <Copyright />
    </>
  );
};
