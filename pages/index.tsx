import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';


const Home: NextPage = () => {
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

export default Home
