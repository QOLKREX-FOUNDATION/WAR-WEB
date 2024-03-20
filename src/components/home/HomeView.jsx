import {
  Banner,
  WelcomeAd,
  SectionCards,
  AboutSection,
  Functionality,
  OurMission,
  News,
  Donation,
  Partnerships,
  Contact,
  Back,
  HomeContainer,
  ButtonTop,
  Faq,
  Shop,
} from "..";

import { SlideProvider } from "../../context";

import { ContactHead } from "../organisms/Header/components/ContactHead/ContactHead";

import { ApplicationField } from "../organisms/ApplicationField/ApplicationField";

export const HomeView = () => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <SlideProvider>
        <HomeContainer>
          <ContactHead />
          <Banner />
        </HomeContainer>
      </SlideProvider>
      <WelcomeAd />
      <SectionCards />
      <AboutSection />
      <Functionality />
      <Shop />
      <OurMission />
      <Faq />
      <ApplicationField />
      <News />
      <Donation />
      <Partnerships />
      <Contact />
      <Back />
      <ButtonTop />
    </div>
  );
};
