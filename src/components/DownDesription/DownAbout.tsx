import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import { IBookmarks, IFilm } from '../../interfaces';
import { myBookmarksUser } from '../../store/bookmarkStore';

import { Button } from '../UI/Button';

export const DownAbout: FC<IFilm> = observer( ({
  title,
  vote_average,
  release_date,
  overview,
  id,
  backdrop_path,
}) => {
  const [checked, setChecked] = useState(false);
  // const getChecked = (id: any): any => {
  //   myBookmarksUser.bookmarks.find((e) => e.id === id)
  //     ? setChecked(true)
  //     : setChecked(false);
  // };

  // Сохранение в закладки
  const handleSaveBookmark = (id: any) => {
    myBookmarksUser.bookmarks.find((e) => e.id === id)
      ? handleRemoveBookmark(id)
      : myBookmarksUser.AddBookmark({
          id: id,
          backdrop_path: backdrop_path,
          vote_average: vote_average,
        });
    
  };

  // удаление из закладок
  const handleRemoveBookmark = (id: any) => {
    myBookmarksUser.RemoveBookmarks({
      id: id,
    });
   
  };

  return (
    <div className='row-films__large_content'>
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
      <div className='row-films__btns'>
        <Button variant='orange'>
          <FontAwesomeIcon icon={faPlay} />
          Смотреть трейлер
        </Button>
        <Button
          variant='normal'
          onClick={
            checked
              ? () => handleRemoveBookmark(id)
              : () => handleSaveBookmark(id)
          }
        >
          {myBookmarksUser.bookmarks.find((e) => e.id === id) ? (
            <FontAwesomeIcon icon={faBookmark} className='orange' />
          ) : (
            <FontAwesomeIcon icon={faBookmark} />
          )}
        </Button>
      </div>
    </div>
  );
})
