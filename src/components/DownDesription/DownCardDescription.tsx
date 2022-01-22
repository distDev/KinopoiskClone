import { async } from '@firebase/util';
import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ICast, IFilm } from '../../interfaces';
import { Button } from '../UI/Button';

interface IDownFilm {
  film: IFilm[];
  
}

// Нижний блок с подобным описанием фильма, который рендерится при клике на фильм
export const DownCardDescription: FC<IDownFilm> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'detail'>('about');
  const [castData, setCastData] = useState<ICast>();
  const id = film.map((e) => e.id).join('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ea5b366a34443d7e6951eaa51580be36&language=en-US`
      );
      setCastData(res.data)
    }

    fetchData()
  }, [id])

  console.log(castData);

  return (
    <>
      {film.map((e) => (
        <div className='row-films__large' key={e.id}>
          <div className='row-films__tab-menu'>
            <button
              onClick={() => setActiveTab('about')}
              className={activeTab === 'about' ? 'selected' : ''}
            >
              О фильме
            </button>
            <button
              onClick={() => setActiveTab('detail')}
              className={activeTab === 'detail' ? 'selected' : ''}
            >
              Детали
            </button>
          </div>
          {activeTab === 'about' ? (
            <div className='row-films__large_content'>
              <div className='row-films__header_content'>
                <h2>{e.title}</h2>
                <div className='row-films__large_description'>
                  <span>{e.vote_average}</span>
                  <p>{e.release_date}</p>
                  <p>драма, мелодрама</p>
                  <p>18+</p>
                </div>
                <h3>{e.overview?.slice(0, 184) + '...'}</h3>
              </div>
              <div className='row-films__btns'>
                <Button variant='orange'>
                  <FontAwesomeIcon icon={faPlay} />
                  Смотреть трейлер
                </Button>
                <Button variant='normal'>
                  <FontAwesomeIcon icon={faBookmark} />
                </Button>
              </div>
            </div>
          ) : (
            <div className='row-films__large_content large-content-filter'>
              <div className='row-films__detail_container'>
                <div className='row-films__about'>
                  <h2>{e.title}</h2>
                  <span
                    className={
                      e.vote_average <= 7 ? 'low-rating' : 'hight-rating'
                    }
                  >
                    {e.vote_average}
                  </span>
                  <p className='row-films__vote_count'>
                    {e.vote_count + ' Оценок'}
                  </p>
                  <p className='row-films__overview '>{e.overview}</p>
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
                    {castData!.crew.filter(
                      (e) => e.known_for_department === 'Directing'
                    ).map((e) => (
                      <li>{e.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <img
            src={'https://image.tmdb.org/t/p/original' + e.backdrop_path}
            alt=''
          />
        </div>
      ))}
    </>
  );
};
