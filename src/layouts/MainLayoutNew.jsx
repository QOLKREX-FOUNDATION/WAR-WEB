import Head from 'next/head'
import React from 'react'
import { WrapperLink } from '../components/Preview/components/WrapperLink'
import Link from 'next/link'
import Image from 'next/image'
import { ButtonTop } from '../components/molecules/ButtonTop/ButtonTop'
import { HeaderLayout } from '../components/Preview/components/HeaderLayout'
import { useTranslation } from 'react-i18next'
import { Bounce } from 'react-reveal'
import { FooterLayout } from '../components/Preview/components/FooterLayout'
import { WhatsAppButton } from '../components/Preview/components/WhatsAppButton'

export const MainLayoutNew = ({ children, title = "W.A.R", description }) => {

    return (
        <div
            style={{ overflow: "hidden", position: "relative" }}
        >
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* fredoka font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap" rel="stylesheet"></link>
                {/* Hotjar Tracking Code */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function(h,o,t,j,a,r){
                            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                            h._hjSettings={hjid:3730160,hjsv:6};
                            a=o.getElementsByTagName('head')[0];
                            r=o.createElement('script');r.async=1;
                            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                            a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    `,
                }} />
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-W82ZVY0SRJ"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-W82ZVY0SRJ');
                    `,
                }} />
                {/* Meta Pixel Code */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1077192663410145');
                        fbq('track', 'PageView');
                    `,
                }} />
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1077192663410145&ev=PageView&noscript=1" />
                </noscript>
                {/* End Meta Pixel Code */}
            </Head>
            {/* nav */}
            <HeaderLayout />
            {
                children
            }
            {/* Footer */}
            <FooterLayout />
            <ButtonTop />
            <WhatsAppButton />
        </div>
    )
}
