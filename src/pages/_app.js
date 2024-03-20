import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Index } from "../Index";
import Providers from "../Providers";
import { i18nextInit } from "../i18n/i18next";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  i18nextInit(locale);
  return (
    <>
      <Providers>
        <Index>
          <Head>
            <title>WAR - Official Website</title>
            <meta name="description" content="world Animal Registry" />
            <link rel="icon" href="/war.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Script
            src={`https://static.hotjar.com/c/hotjar-3730160.js?sv=6`}
            strategy="afterInteractive"
          />
          <Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>
          <Component {...pageProps} />
        </Index>
      </Providers>
    </>
  );
}

export default MyApp;
