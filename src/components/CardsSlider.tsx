import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FC } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import { Link } from 'react-router-dom';

interface ISliceRow {
  handleClick: any;
  films: IFilm[];
  genres?: number;
  
}

export const CardsSlider: FC<ISliceRow & ISliceOptions> = ({
  films,
  handleClick,
  title,
  genres,
}) => {

  console.log(handleClick);

  return (
    <div className='row-films-rows'>
      <Link to={`/category/${genres}`} className='row-films__title'>
        {title}
      </Link>
      <Swiper spaceBetween={15} slidesPerView={3.5}>
        {films.slice(0, 10).map((e) => (
          <SwiperSlide
            key={e.id}
            className='row-films__slide'
            onClick={() => handleClick(e.id)}
          >
            <p className={e.vote_average <= 7 ? 'low-rating' : 'hight-rating'}>
              {e.vote_average}
            </p>
            <img
              src={'https://image.tmdb.org/t/p/original' + e.backdrop_path}
              alt=''
            />
            <Link to={`/films/${e.id}`}></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
