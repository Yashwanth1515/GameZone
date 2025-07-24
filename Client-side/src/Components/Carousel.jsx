import React from 'react'
import {SwiperSlide,Swiper} from 'swiper/react';
import {Navigation,Pagination,Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gta from '../assets/gta-5.jpg';
import gta6 from '../assets/gta-6.jpg';
import callofduty from '../assets/callofduty.jpg'
import reddead from '../assets/Redead.jpg';
import assin from '../assets/assin.jpg'

const Carousel = () => {
  return (
    <>
      <center><h1 style={{color:'#720e9e',fontFamily:'Times New Roman'}}>Top Games</h1></center>
      <Swiper navigation={true} 
      pagination={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      modules={[Navigation,Pagination,Autoplay]}
      style={{ width: '1200px', height: '400px' }}
      slidesPerView={2}
      centeredSlides={true}
      spaceBetween={30}
    >
        <SwiperSlide>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}src={gta} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover',}} src={gta6} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}src={callofduty} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={reddead} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={assin} alt=""  />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
