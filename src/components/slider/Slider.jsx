import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";


const Slider = (props) => {

  const slides = props.images
  const slidesVideo = props.video

  return (
    <Swiper
    hashNavigation={{
      watchState: true,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation, HashNavigation]}
    loop={true}
    className="mySwiper w-full aspect-video lg:w-8/12 lg:max-h-[500px] bg-brandBlack">

      {slidesVideo.length === 0 ? (console.log('No hay videos')) : (slidesVideo.map((x, key) => (
        <SwiperSlide key={key}>
          <iframe 
          src={x}
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media" preload="auto"
          className='w-10/12 h-full m-auto'></iframe>
{/*           <video src={x} type="video/mp4"
           autoPlay={true} loop={false} muted={true} controls={false} className='h-full m-auto'/> */}
        </SwiperSlide>
      )))}

      {slides.length === 0 ? (console.log('No hay imagenes')) : (slides.map((x, key) => (
        <SwiperSlide key={key}>
        <img 
        src={x}
        alt='img'/>
        </SwiperSlide>
      )))}

    </Swiper>
  )
}

export default Slider