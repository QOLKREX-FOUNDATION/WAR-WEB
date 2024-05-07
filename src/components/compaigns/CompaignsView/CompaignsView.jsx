import React, { useState } from "react";
import { DefaultModal } from "../../containers/modals/DefaultModal/DefaultModal";
import { Fade, Zoom } from "react-reveal";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

// Swiper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CompaignsView = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="">
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>
            Coming soon in <span>W.A.R.</span>
          </h1>
        </DefaultModal>
      )}
      <div className=""></div>
      <div className="flex flex-col justify-center px-10 gap-3 py-10">
        <Zoom top big>
          <h2 className="text-center font-semibold text-2xl text-[#0ea5e9]">
            {t("Campaigns - Donations")}
          </h2>
        </Zoom>
        <div className="flex justify-center">
          <Fade left cascade>
            <div className="flex gap-5 justify-center max-w-5xl">
              <Swiper
                slidesPerView="auto"
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
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
                <SwiperSlide>
                  <div className="w-80 h-full bg-[#cfefed] px-5 py-3 rounded-2xl">
                    <Link
                      href="/compaigns/vicuid"
                      // target='_blank'
                      // rel='noreferrer noopener'
                      // to="vicuid"
                      className="hover:cursor-pointer"
                    >
                      <Image
                        src="/img/donation/image_01.png"
                        width={333}
                        height={230}
                        alt="image"
                      />
                    </Link>
                    <div className="flex flex-col gap-3 py-2">
                      <h3 className="font-semibold text-[#0ea5e9]">
                        {t("VicuID Project")}
                      </h3>
                      <p className="max-h-72 overflow-hidden">
                        {t(
                          "The Give your vicuña a name campaign is an initiative that aims to promote the care and conservation of the vicuña, a species of camelid that lives in the high mountains of the Andes. The campaign seeks to raise awareness among the population about the importance of preserving this species and promoting its conservation through the creation of an emotional bond between people and vicuñas. By participating in this campaign, people can propose a name for a vicuña, allowing them to feel more connected and committed to its protection."
                        )}
                      </p>
                      <a
                        href="/compaigns/vicuid"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block mx-auto hover:cursor-pointer"
                      >
                        {t("See more")}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-80 h-full bg-[#cfefed] px-5 py-3 rounded-2xl">
                  <Link
                      href="/compaigns/mascotassinhogar"
                      // target='_blank'
                      // rel='noreferrer noopener'
                      // to="vicuid"
                      className="hover:cursor-pointer"
                    >
                      <Image
                        src="/img/donation/sinhogar-banner.png"
                        width={333}
                        height={230}
                        alt="image"
                        className="min-h-[193px]"
                        style={{
                            objectPosition: "10% center"
                        }}
                      />
                    </Link>
                    <div className="flex flex-col gap-3 py-2">
                      <h3 className="font-semibold text-[#0ea5e9]">
                        {t("Homeless Pets Campaign")}
                      </h3>
                      <p className="max-h-72 overflow-hidden">
                        {t(
                          "We are raising funds to provide identification microchips to pets found on the streets or in shelters. With your support, we can purchase identification microchips and donate them to shelters and rescue organizations"
                        )} <br />
                        {t(
                          "Additionally, we will provide microchip scanners to ensure these pets are properly identified and have a better chance of finding a loving home. Your donation will make a difference in the lives of these pets in need. Join us in helping to build a safer and happier future for them! 📷 Additionally, we have exciting news for all our supporters!"
                        )}

                      </p>
                      <a
                        onClick={() => setOpenModal(true)}
                        className="block mx-auto hover:cursor-pointer mt-auto"
                      >
                        {t("See more")}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-80 h-full bg-[#cfefed] px-5 py-3 rounded-2xl">
                    <Link
                      href="/compaigns/"
                      // target='_blank'
                      // rel='noreferrer noopener'
                      // to="vicuid"
                      className="hover:cursor-pointer"
                    >
                      <Image
                        src="/img/donation/image_03.png"
                        width={333}
                        height={230}
                        alt="image"
                      />
                    </Link>
                    <div className="flex flex-col gap-3 py-2">
                      <h3 className="font-semibold text-[#0ea5e9]">Jaguar</h3>
                      <p className="max-h-72 overflow-hidden">
                        {t(
                          "The South American Jaguar Donation Campaign is an initiative that aims to raise funds to support the conservation and well-being of this endangered species. The South American jaguar is an emblematic animal of South America and is considered a symbol of strength and power. However, it has been endangered due to habitat degradation and poaching. The donation campaign can include various activities, such as the sale of commemorative products, fundraising events and awareness campaigns through social networks and other means of communication. All proceeds from this campaign go to projects for the conservation and protection of the South American jaguar and its habitat."
                        )}
                      </p>
                      <a
                        className="block mx-auto hover:cursor-pointer"
                        onClick={() => setOpenModal(true)}
                      >
                        {t("See more")}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Fade>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
