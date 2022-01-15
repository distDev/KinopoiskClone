import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FC } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import { Link } from 'react-router-dom';

interface ISliceRow {
  handleClick: any;
  films: IFilm[];
}

export const SliderFilms: FC<ISliceRow & ISliceOptions> = ({
  films,
  title,
  handleClick,
}) => {
  const { id }: any = films;

  return (
    <div className='row-films-rows'>
      <Link to={`/category/${id}`} className='row-films__title'>
        {title}
      </Link>
      <Swiper spaceBetween={15} slidesPerView={3.5}>
        {films.map((e) => (
          <SwiperSlide
            key={e.id}
            className='row-films__slide'
            onClick={() => handleClick(e.id)}
          >
            <p className={e.rating <= 7 ? 'low-rating' : 'hight-rating'}>
              {e.rating}
            </p>
            <img src={e.img} alt='' />
            <Link to={`/films/${e.id}`}></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
