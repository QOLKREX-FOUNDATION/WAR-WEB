import React, { useEffect, useRef, useState } from 'react'
import { Bounce } from 'react-reveal';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Image from 'next/image';

export const News = () => {
    const [news, setNews] = useState([]);
    const swiperRef = useRef(null);

    const getInfo = async () => {
        if (news == "") {
            try {
                const rsp = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@worldanimalregistry/feed`
                );
                const data = await rsp.json();
                setNews(data.items);
            } catch (err) {
                console.error(err);
            }
        }
    };

    useEffect(() => {
        getInfo();
        // console.log(news)
    }, [news]);
    return (
        <>
            <section className="py-10 relative">

                {
                    news.length > 0 && (
                        <Swiper
                            slidesPerView="auto"
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            // navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                480: {
                                    slidesPerView: 1,
                                },
                                1000: {
                                    slidesPerView: 3,
                                }
                            }}
                            modules={[Autoplay, Pagination]}
                            className="px-4 py-10"
                            ref={swiperRef}
                        >
                            {news != "" &&
                                news?.map((article, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Bounce
                                                left
                                            >
                                                <div className="flex flex-col items-end justify-center h-[450px] bg-[#cfefed] px-10 py-5 mx-4 rounded-xl max-w-sm md:max-w-none">
                                                    <a
                                                        href={article.link}
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        className='flex flex-col gap-5  h-full'
                                                    >
                                                        <div className=" flex flex-col h-full gap-4 justify-between">
                                                            <div className="">
                                                                <img src={article.thumbnail} alt={article.title} className='max-w-sm' />
                                                            </div>
                                                            <h3 className='text-lg font-bold text-[#01a99d]'>{article.title}</h3>
                                                            <h6 className='text-sm text-[#0ea5e9] font-semibold'>{article.author}</h6>
                                                            <p className='max-h-32 overflow-hidden text-sm text-[#0ea5e9] font-semibold'>{(article.content.replace(/<[^>]*>/g, "")).substring(0, 180) + ' ...'}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Bounce>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    )
                }
                <div className='w-10 absolute top-60 -right-10'>
                    <Image
                        className='hover:cursor-pointer'
                        src="/img/slides/arrow_2.png"
                        width={50}
                        height={30}
                        alt="decoration"
                        onClick={() => {
                            // console.log('swiperRef', swiperRef)
                            swiperRef.current.swiper.slideNext();
                        }}
                    />
                </div>
                <div className='w-10 absolute top-60 -left-10 rotate-180 '>
                    <Image
                        className='hover:cursor-pointer transition'
                        src="/img/slides/arrow_2.png"
                        width={50}
                        height={30}
                        alt="decoration"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    />
                </div>
            </section>
        </>
    )
}
