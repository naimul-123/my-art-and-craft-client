import { useEffect, useState } from 'react';
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

import TestimonialCard from './TestimonialCard';

import { Fade } from 'react-awesome-reveal';
const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState()

    useEffect(() => {
        fetch(`https://assignment-10-server-irb98dscl-naimuls-projects-ee8c232f.vercel.app/testimonials`)
            .then(res => res.json())
            .then(data => setTestimonialsData(data))
            .catch(error => console.log(error.message))
    })

    return (
        <div className=' container p-0 sm:p-4 md:p-6 lg:p-12 ' id='feedback'>
            <div className=' mx-auto max-w-sm my-16 text-center'  >


                <Fade duration={3000} direction='left' delay={0} cascade damping={0}>
                    <p className=' text-blue-800 inline-flex gap-6 '>

                        <span className='text-2xl'>Our Clients</span>{' '}
                    </p>
                    <h2 className='font-bold text-3xl md:text-5xl'>Testimonial</h2>
                </Fade>
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