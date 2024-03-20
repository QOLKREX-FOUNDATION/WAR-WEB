import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { SlideContext } from "../../../context";
import classes from "./home-container.module.scss";

export const HomeContainer = ({ children }) => {
  const { pathname } = useRouter();
  useEffect(() => {
    console.log(pathname)
  }, [])
  return (
    <div className={classes.home}>
      <Frames />
      {/* <Header /> */}
      <Logo />
      <MenuTop />
      <Decorate />
      {
        pathname === "/" && (
          <Menu />
        )
      }
      <MenuMobile />
      {children}
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className={classes.home__logo}>
      <div>
        <Image
          src="/img/logo-war.webp"
          layout="responsive"
          width={50}
          height={50}
          alt="logo"
        />
      </div>
    </Link>
  );
};

const Frames = () => {
  return (
    <>
      <div className={classes.home__top}></div>
      <div className={classes.home__bottom}></div>
    </>
  );
};

const Header = () => {
  return (
    <div className={classes.home__header}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Decorate = () => {
  const { t } = useTranslation();
  const { swiperRef } = useContext(SlideContext);

  return (
    <>
      <div className={classes.home__indicators}>
        <div className={classes.home__indicatorsItem}>
          <div>
            <Image
              src="/img/home-view/circle_01.png"
              layout="responsive"
              width={50}
              height={50}
              alt="decoration"
            />
          </div>
          <div className={classes.home__indicatorsItemRotate}>
            <div>
              <Image
                src="/img/home-view/circle_02.png"
                layout="responsive"
                width={50}
                height={50}
                alt="decoration"
              />
            </div>
          </div>
          <h1>
            <CountUp end={1000} duration={3} />+
          </h1>
          <h4>{t("Registered pets")}</h4>
        </div>
        <div className={classes.home__indicatorsItem}>
          <div>
            <Image
              src="/img/home-view/circle_01.png"
              layout="responsive"
              width={50}
              height={50}
              alt="decoration"
            />
          </div>
          <div className={classes.home__indicatorsItemRotate}>
            <div>
              <Image
                src="/img/home-view/circle_02.png"
                layout="responsive"
                width={50}
                height={50}
                alt="decoration"
              />
            </div>
          </div>
          <h1>
            <CountUp end={500} duration={3} />+
          </h1>
          <h4>{t("Users")}</h4>
        </div>

        <div className={classes.home__indicatorsItem}>
          <div>
            <Image
              src="/img/home-view/circle_01.png"
              layout="responsive"
              width={50}
              height={50}
              alt="decoration"
            />
          </div>
          <div className={classes.home__indicatorsItemRotate}>
            <div>
              <Image
                src="/img/home-view/circle_02.png"
                layout="responsive"
                width={50}
                height={50}
                alt="decoration"
              />
            </div>
          </div>
          <h1>
            <CountUp end={30} duration={3} />+
          </h1>
          <h4>{t("Registered Entities")}</h4>
        </div>
      </div>

      <div className={classes.home__pets}>
        <div>
          <Image
            src="/img/home-view/pet_01.png"
            layout="responsive"
            width={50}
            height={50}
            alt="decoration"
          />
        </div>
        <div>
          <Image
            src="/img/home-view/pet_02.png"
            layout="responsive"
            width={50}
            height={50}
            alt="decoration"
          />
        </div>
      </div>

      <div className={classes.home__ornaments}>
        <div className={classes.home__ornamentsFoots}>
          <div>
            <Image
              src="/img/banner/decoration/huellas.png"
              layout="responsive"
              width={100}
              height={60}
              alt="decoration"
            />
          </div>
        </div>

        <div className={classes.home__ornamentsCenter}>
          <div className={classes.home__ornamentsCenterHueso}>
            <div>
              <Image
                src="/img/banner/decoration/delfin_iz.png"
                layout="responsive"
                width={50}
                height={30}
                alt="decoration"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
          <div className={classes.home__ornamentsCenterSniper}>
            <div>
              <Image
                src="/img/sniper.png"
                layout="responsive"
                width={50}
                height={50}
                alt="decoration"
              />
            </div>
          </div>
          <div className={classes.home__ornamentsCenterHueso}>
            <div>
              <Image
                src="/img/banner/decoration/delfin_der.png"
                layout="responsive"
                width={50}
                height={30}
                alt="decoration"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
            </div>
          </div>
        </div>

        <div className={classes.home__ornamentsFoots}>
          <div>
            <Image
              src="/img/banner/decoration/huellas.png"
              layout="responsive"
              width={100}
              height={60}
              alt="decoration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  return (
    <div className={classes.home__menu}>
      <div>
        <a
          href="/consulta"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h4>{t("WORLD RECORD")}</h4>
          <Image
            src="/img/home-view/header-frame_01.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div>
        <a
          href="#news"
          rel="noreferrer noopener"
        >
          <h4>{t("NEWS")}</h4>
          <Image
            src="/img/home-view/header-frame_02.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div>
        <a
          href="#faq"
          rel="noreferrer noopener"
        >
          <h4
            className={
              locale === "es" ?
                classes.home__menuFaqEs :
                classes.home__menuFaqEn
            }
          >{t("Faq")}</h4>
          <Image
            src="/img/home-view/header-frame_03.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div>
        <a
          href="#contact"
          rel="noreferrer noopener"
        >
          <h4>{t("CONTACT")}</h4>
          <Image
            src="/img/home-view/header-frame_04.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
const MenuTop = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.home__menutop}>
      <div>
        <Link
          href="/donation"
          rel="noreferrer noopener"
        >
          <h4>{t("Registration Campaign")}</h4>
          <Image
            src="/img/home-view/header-frame_05.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <Link
          href="/join-us"
          rel="noreferrer noopener"
        >
          <h4>{t("Join us")}</h4>
          <Image
            src="/img/home-view/header-frame_06.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://world-animal-registry.gitbook.io/world-animal-registry/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h4>war wiki</h4>
          <Image
            src="/img/home-view/header-frame_07.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        <Link
          href="/about"
          rel="noreferrer noopener"
        >
          <h4>{t("About Us")}</h4>
          <Image
            src="/img/home-view/header-frame_08.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}

const MenuMobile = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.home__menumobile}>
      <button
        onClick={() => setOpen(!open)}
      >
        {
          open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )
        }
      </button>
      {
        open && (
          <div className={classes.home__menumobile__container}>
            <div>
              <Link
                href="/donation"
                rel="noreferrer noopener"
              >
                <h4>{t("Registration Campaign")}</h4>
              </Link>
            </div>
            <div>
              <Link
                href="/join-us"
                rel="noreferrer noopener"
              >
                <h4>{t("Join us")}</h4>
              </Link>
            </div>
            <div>
              <Link
                href="https://world-animal-registry.gitbook.io/world-animal-registry/"
                rel="noreferrer noopener"
              >
                <h4>war wiki</h4>
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                rel="noreferrer noopener"
              >
                <h4>{t("About Us")}</h4>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
}