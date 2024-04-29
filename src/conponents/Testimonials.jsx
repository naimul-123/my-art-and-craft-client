import React, { useEffect, useState } from 'react';
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
    EffectCoverflow,
} from 'swiper/modules';

import Slider from './Slider';
import TestimonialCard from './TestimonialCard';
import PropTypes from 'prop-types';
const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/testimonials`)
            .then(res => res.json())
            .then(data => setTestimonialsData(data))
            .catch(error => console.log(error.message))
    })

    return (
        <div className=' container p-0 sm:p-4 md:p-6 lg:p-12 ' id='feedback'>
            <div className=' mx-auto max-w-sm my-16 text-center'  >
                <p className=' text-blue-800 inline-flex gap-6 '>

                    <span className='text-2xl'>Our Clients</span>{' '}
                </p>
                <h2 className='font-bold text-3xl md:text-5xl'>Testimonial</h2>

            </div>
            <div>
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
                    className='mySwiper'>
                    {testimonialsData &&
                        testimonialsData.map((testimonial, idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialCard testimonial={testimonial}></TestimonialCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;