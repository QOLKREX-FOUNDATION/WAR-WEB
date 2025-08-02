import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WrapperLink } from "./WrapperLink";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Bounce } from "react-reveal";

export const HeaderLayout = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const { pathname, locale, route, push } = useRouter();

  const handleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    // i18n.changeLanguage(newLanguage);
    push(pathname, pathname, { locale: newLanguage });
  };

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const handleLanguageMobile = () => {
    const path = ``;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[1520px] lg:px-20">
          <section className="w-full hidden lg:flex justify-between text-[#00a99d] font-semibold pt-3 pb-1 gap-4 md:px-14 px-4 flex-wrap ">
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-sm">+1(786) 7405799</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span className="text-sm">pets@worldanimalregistry.org</span>
              </p>
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm">
                  1900 N BAYSHORE DR SUITE 1A #136-1611 MIAMI, FL 33132
                </span>
              </p>
            </div>
          </section>
          <div className="hidden lg:flex w-full h-2 border-b-2 border-[#00a99d] max-w-full mx-auto px-10 "></div>
        </div>
      </div>
      <nav className="flex items-center justify-between py-3 relative h-32 lg:px-14 px-4 bg-[#f2f2f2] z-20">
        <Bounce left>
          <Link
            href="/preview"
            className="md:w-56 w-32 2xl:scale-125 2xl:hover:scale-150 transform transition-all duration-500 ease-in-out relative top-7"
          >
            <Image
              src="/img/logo-war.webp"
              alt="logo"
              width={150}
              height={150}
              className="bject-cover md:w-56 w-32 scale-90 "
            />
          </Link>
        </Bounce>

        <Bounce right>
          <ul className="lg:flex flex-wrap relative hidden px-10 uppercase">
            <li className="h-10">
              <div className="group">
                <button className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out w-36 flex items-center justify-between uppercase">
                  {t("About Us")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <ul
                  className="
                                w-36
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
                >
                  <li>
                    <Link
                      href="/what-is-war"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("What's the W.A.R.?")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/directory"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("directory")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="h-10">
              <div className="group">
                <button className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out w-36 flex items-center justify-between uppercase">
                  {t("Services")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <ul
                  className="
                                w-48
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
                >
                  <li>
                    <Link
                      href="/adopter-and-owner"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("owner adopters")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/entity-registry"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("Register Entities")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="h-10">
              <div className="group">
                <button className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out w-36 flex items-center justify-between uppercase">
                  {t("Register")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <ul
                  className="
                                w-48
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
                >
                  <li>
                    <Link
                      href="/request"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("Registration Request")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consult"
                      className="px-4 py-1 hover:text-white font-semibold hover:opacity-100 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
                    >
                      {t("Check Registration")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="h-10">
              {/* <WrapperLink
                            title={'Services'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink> */}
              <Link
                href="/join-us"
                className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
              >
                {t("Join us")}
              </Link>
            </li>
            <li className="h-10">
              {/* <WrapperLink
                            title={'Registers'}
                        >
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                            <Link
                                href='/'
                                className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20'
                            >
                                ¿Que es el war?
                            </Link>
                        </WrapperLink> */}
              <Link
                href="https://world-animal-registry.gitbook.io/world-animal-registry/"
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
              >
                {t("war wiki")}
              </Link>
            </li>
            {/* <li className='h-10'>
                            <Link
                                href="/about"
                                className='px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out'
                            >
                                {t("About Us")}
                            </Link>
                        </li> */}
            <li className="h-10">
              <Link
                href="/compaigns"
                rel="noreferrer noopener"
                className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
              >
                {t("Campaigns")}
              </Link>
            </li>
            {/* <li className='h-10'>
                        <Link
                            href="#faq"
                            rel="noreferrer noopener"
                            className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 bg-[#4dcdc5] rounded-md'
                        >
                            {t("Faq")}
                        </Link>
                    </li> */}
            <li className="h-10">
              <Link
                href="/contact"
                className="px-4 py-1 hover:text-white font-semibold z-20 hover:bg-[#4dcdc5] text-[#4dcdc5] transition-all duration-100 ease-in-out"
              >
                {t("CONTACT")}
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex flex-wrap gap-2">
            {locale == "es" ? (
              <button
                onClick={handleLanguage}
                className="bg-[#00a99d] text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 flex items-center gap-1"
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
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                {t("Spanish")}
              </button>
            ) : (
              <button
                onClick={handleLanguage}
                className="bg-[#00a99d] text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 flex items-center gap-1"
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
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                {t("English")}
              </button>
            )}
            <Link
              href="https://registro.worldanimalregistry.org/login"
              rel="noreferrer noopener"
              target="_blank"
              className="bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-32 text-sm py-2 flex items-center justify-center gap-1"
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {t("My session")}
            </Link>
          </div>
          <button
            onClick={handleMenu}
            className="bg-gray-300 rounded-md h-14 w-14 flex items-center justify-center fixed z-30 top-12  right-8 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* mobile */}
          <div
            className={`flex flex-col fixed bg-[#4dcdc5] px-5 right-0 w-full z-20 pt-8 pb-4 ${
              toggle ? "h-screen top-0" : "h-0 pb-0 pt-0 -top-14"
            } transition-all duration-500 lg:hidden overflow-hidden gap-4`}
          >
            {/* <h2>{t("us")}</h2> */}
            {/* <Link
                            href='/donation'
                            className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase'
                        >
                            {t("Registration Campaign")}
                        </Link> */}
            <div className="group w-full">
              <button className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase w-full text-start">
                {t("Registration Campaign")}
              </button>
              <ul
                className="
                                w-full
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
              >
                <li>
                  <Link
                    href="/what-is-war"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("What's the W.A.R.?")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/directory"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("directory")}
                  </Link>
                </li>
              </ul>
            </div>
            <hr />

            <div className="group w-full">
              <button className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase w-full text-start">
                {t("Services")}
              </button>
              <ul
                className="
                                w-full
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
              >
                <li>
                  <Link
                    href="/adopter-and-owner"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("owner adopters")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entity-registry"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("Register Entities")}
                  </Link>
                </li>
              </ul>
            </div>
            <hr />

            {/* <Link
                            href='/join-us'
                            className='px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase'
                        >
                            {t("Join us")}
                        </Link> */}
            <div className="group w-full">
              <button className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase w-full text-start">
                {t("Register")}
              </button>
              <ul
                className="
                                w-full
                                absolute
                                z-30
                                hidden
                                transition
                                group-hover:block
                                group-hover:bg-[#f2f2f2]
                                group-hover:text-white
                            "
              >
                <li>
                  <Link
                    href="/request"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("Registration Request")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consult"
                    className="px-4 py-1 hover:text-[#4dcdc5]  font-semibold hover:opacity-100 hover:bg-white text-[#4dcdc5] transition-all duration-100 ease-in-out"
                  >
                    {t("Check Registration")}
                  </Link>
                </li>
              </ul>
            </div>
            <hr />

            {/* <h2>{t("News")}</h2> */}
            <Link
              href="https://world-animal-registry.gitbook.io/world-animal-registry/"
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase"
            >
              {t("war wiki")}
            </Link>
            <hr />

            {/* <h2>{t("Contact us")}</h2> */}
            <Link
              href="/about"
              className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase"
            >
              {t("About Us")}
            </Link>
            <hr />
            <Link
              href="/consulta"
              className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase"
            >
              {t("WORLD RECORD")}
            </Link>
            <hr />
            <Link
              href="/compaigns"
              rel="noreferrer noopener"
              className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase"
            >
              {t("Campaigns")}
            </Link>
            <hr />
            <Link
              href="/contact"
              className="px-4 py-1 text-white hover:bg-white hover:text-[#4dcdc5] font-semibold z-20 uppercase"
            >
              {t("CONTACT")}
            </Link>
            <hr />
            <div className="flex flex-wrap gap-2 py-2">
              {locale == "es" ? (
                <button
                  onClick={handleLanguage}
                  className="bg-[#00a99d] text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 flex items-center gap-1"
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  {t("Spanish")}
                </button>
              ) : (
                <button
                  onClick={handleLanguage}
                  className="bg-[#00a99d] text-white font-semibold px-4 rounded-md md:h-10 md:w-28 text-sm h-8 flex items-center gap-1"
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  {t("English")}
                </button>
              )}
              <Link
                href="https://registro.worldanimalregistry.org/login"
                rel="noreferrer noopener"
                target="_blank"
                className="bg-sky-500 text-white font-semibold px-4 rounded-md md:h-10 md:w-32 text-sm py-2 flex items-center justify-center gap-1"
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                {t("My session")}
              </Link>
            </div>
            <section className="flex justify-between text-white font-semibold py-1.5 gap-4 md:px-14 px-4 flex-wrap">
              <p className="flex gap-2">
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
                <span>+1(786) 7405799</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <p className="flex gap-2">
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
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>

                  <span>inFo@renian.org</span>
                </p>
                <p className="flex gap-2">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Av. Francisco Javier Mariategui 1030 - JesusMria
                </p>
              </div>
            </section>
          </div>
        </Bounce>
      </nav>
    </>
  );
};
