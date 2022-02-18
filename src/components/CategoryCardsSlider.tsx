import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryCards } from '../interfaces';

interface ICategoryCardsSlider {
  caregories: ICategoryCards[]
}

export const CategoryCardsSlider: FC<ICategoryCardsSlider> = ({ caregories }) => {
  return (
    <div className='row-films'>

      <div className='row-films-rows'>
        <h2 className='row-films__title'>Жанры</h2>
        <Swiper spaceBetween={15} slidesPerView={5}>
          {caregories.slice(0, 10).map((e) => (
            <SwiperSlide key={e.id} className='row-films__slide_category'>
              <img src={e.backdrop_path} alt='image' />
              <Link to={`/category/${e.id}`}></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
