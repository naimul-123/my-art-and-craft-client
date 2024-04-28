import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import required modules
import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from 'swiper/modules';

import Slider from './Slider';


const Hero = () => {
    const [curoseldata, setCuroselData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const dataLaoder = () => {
            fetch(`http://localhost:3000/curosel`)
                .then(res => res.json())
                .then(data => {
                    setCuroselData(data)
                    setLoading(false)
                })
                .catch(err => console.log(err.message))
        }

        dataLaoder();

    })

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center"><span className="loading loading-lg loading-spinner text-secondary "></span></div>
    }

    else return (
        <>
            <Swiper
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className='mySwiper'>
                {curoseldata &&
                    curoseldata.map((singleData) => (
                        <SwiperSlide key={singleData._id}>
                            <Slider singleData={singleData}></Slider>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default Hero;
