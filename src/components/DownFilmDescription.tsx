import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { IFilm } from '../interfaces';
import { Button } from './UI/Button';

interface IDownFilm {
  film: IFilm[];
}

// Нижний блок с подобным описанием фильма, который рендерится при клике на фильм
export const DownFilmDescription: FC<IDownFilm> = ({ film }) => {
  return (
    <>
      {film.map((e) => (
        <div className='row-films__large' key={e.id}>
          <div className='row-films__large_content'>
            <div className='row-films__header_content'>
              <h2>Французский вестник</h2>
              <div className='row-films__large_description'>
                <span>7.2</span>
                <p>2021</p>
                <p>драма, мелодрама</p>
                <p>18+</p>
              </div>
              <h3>
                После смерти главреда журналисты выпускают последний номер. Уэс
                Андерсон признается в любви старой прессе
              </h3>
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
          <img src={e.img} alt='' />
        </div>
      ))}
    </>
  );
};
