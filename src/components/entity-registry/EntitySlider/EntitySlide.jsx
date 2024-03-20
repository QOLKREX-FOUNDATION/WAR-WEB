import Image from 'next/image';
import React from 'react'
import { Bounce } from 'react-reveal';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";


export const EntitySlide = () => {
    return (
        <>
            {
                <Swiper
                    slidesPerView="auto"
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        320: {
                            slidesPerView: 4,
                        },
                        480: {
                            slidesPerView: 4,
                        },
                        1000: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Autoplay]}
                >

                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_01.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_02.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_03.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_04.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_05.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bounce
                            left
                        >
                            <Image
                                src="/img/entity/image_06.webp"
                                alt="Picture of the author"
                                width={80}
                                height={80}
                                className="object-cover"
                            />

                        </Bounce>
                    </SwiperSlide>


                </Swiper>
            }
        </>
    )
}
