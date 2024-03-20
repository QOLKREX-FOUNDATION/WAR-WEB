import Head from 'next/head'
import React from 'react'
import { Banner, ButtonTop, Footer, HomeContainer, WelcomeAd } from '../components'
import { ContactHead } from '../components/organisms/Header/components/ContactHead/ContactHead'
import { SlideProvider } from '../context'

export const MainLayout = ({ children, title = "W.A.R", description }) => {
    return (
        <div
            div style={{ overflow: "hidden", position: "relative" }}
        >
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <SlideProvider>
                <HomeContainer>
                    <ContactHead />
                    <Banner />
                </HomeContainer>
            </SlideProvider>
            <WelcomeAd />
            {
                children
            }
            <Footer />
            <ButtonTop />
        </div>
    )
}
