import React from 'react'
import { Bounce } from 'react-reveal';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import classes from './AboutSlider.module.scss';

export const AboutSlider = ({
    title = "Title",
    content = "Content",
    images = [],
}) => {
    return (
        <div
            className={classes.about__slider}
        >
            <div className={classes.frametop}></div>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={`${ classes.carousel }`}>
                {/* <Bounce left> */}
                {
                    images.length > 0 && (
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
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                        >
                            {images != "" &&
                                images?.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={classes.news__slide}>
                                                <img
                                                    src={image}
                                                    alt={"image slide"}
                                                    width={350}
                                                    height={300}
                                                    title="image slide"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    )
                }
                {/* </Bounce> */}
            </div>
        </div>
    )
}
