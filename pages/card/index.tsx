import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Card: React.FC = () => {
  return (
    <Swiper
        spaceBetween={10}
        initialSlide={0}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default Card