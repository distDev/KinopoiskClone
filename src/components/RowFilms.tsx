import React, { FC } from 'react'
import { IRowFilms } from '../interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const RowFilms:FC<IRowFilms> = ({title, start, end}) => {
  return (
    <div className='row-films'>
      <h2 className='row-films__title'>{title}</h2>
      <Swiper
        spaceBetween={15}
        slidesPerView={3.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='row-films__slide'></SwiperSlide>
        <SwiperSlide className='row-films__slide'></SwiperSlide>
        <SwiperSlide className='row-films__slide'></SwiperSlide>
        <SwiperSlide className='row-films__slide'></SwiperSlide>
      </Swiper>
    </div>
  );
};
