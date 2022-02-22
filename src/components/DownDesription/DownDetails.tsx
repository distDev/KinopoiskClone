import { FC } from 'react';
import { ICast, IFilm } from '../../interfaces';

interface IDowsDetails {
  castData: ICast;
}

export const DownDetails: FC<IFilm & IDowsDetails> = ({
  title,
  vote_average,
  vote_count,
  overview,
  castData,
}) => {
  return (
    <div className='row-films__large_content large-content-filter'>
      <div className='row-films__detail_container'>
        <div className='row-films__about'>
          <h2>{title}</h2>
          <span className={vote_average! <= 7 ? 'low-rating' : 'hight-rating'}>
            {vote_average}
          </span>
          <p className='row-films__vote_count'>{vote_count + ' Оценок'}</p>
          <p className='row-films__overview '>{overview}</p>
        </div>
        <div className='row-films__cast'>
          <ul className='row-films__cast_actors'>
            <li className='row-films__cast_title'>В главных ролях</li>
            {castData!.cast.slice(0, 10).map((e) => (
              <li>{e.name}</li>
            ))}
          </ul>
          <ul className='row-films__cast_actors'>
            <li className='row-films__cast_title'>Режиссеры</li>
            {castData!.crew
              .filter((e) => e.known_for_department === 'Directing')
              .map((e) => (
                <li>{e.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
