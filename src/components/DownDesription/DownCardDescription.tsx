import { async } from '@firebase/util';
import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ICast, IFilm } from '../../interfaces';
import { Button } from '../UI/Button';
import { DownAbout } from './DownAbout';
import { DownDetails } from './DownDetails';

interface IDownFilm {
  film: IFilm[];
}

// Нижний блок с подобным описанием фильма, который рендерится при клике на фильм
export const DownCardDescription: FC<IDownFilm> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'detail'>('about');
  const [castData, setCastData] = useState<ICast>();
  const id = film.map((e) => e.id).join('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ea5b366a34443d7e6951eaa51580be36&language=en-US`
      );
      setCastData(res.data);
    };

    fetchData();
  }, [id]);

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
            <DownAbout
              vote_average={e.vote_average}
              backdrop_path={e.backdrop_path}
              title={e.title}
              overview={e.overview}
              id={e.id}
            />
          ) : (
            <DownDetails
              title={e.title}
              vote_average={e.vote_average}
              vote_count={e.vote_count}
              overview={e.overview}
              backdrop_path={e.backdrop_path}
              castData={castData!}
            />
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
