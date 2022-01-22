
import { FC } from 'react';
import { IFilm } from '../../interfaces';

export const DownDetails: FC<IFilm> = ({
  title,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className='row-films__large_content large-content-filter'>
      <div className='row-films__header_content'>
        <h2>{title}</h2>
        <div className='row-films__large_description'>
          <span>{vote_average}</span>
          <p>{release_date}</p>
          <p>драма, мелодрама</p>
          <p>18+</p>
        </div>
        <h3>{overview?.slice(0, 184) + '...'}</h3>
      </div>
    </div>
  );
};
