import {
  faBookmark,
  faInfoCircle,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from './UI/Button';

export const BrowsePoster = () => {
  return (
    <div className='browse__poster'>
      <img
        className='browse__poster_img'
        src='./images/browse-poster.jpg'
        alt=''
      />
      <div className='browse__logo'>
        <img src='./images/browse-logo.png' alt='' />
      </div>
      <div className='browse__btns'>
        <Button variant='orange'>
          <FontAwesomeIcon icon={faPlay} />
          Смотреть трейлер
        </Button>
        <Button variant='normal'>
          <FontAwesomeIcon icon={faInfoCircle} /> О фильме
        </Button>
        <Button variant='normal'>
          <FontAwesomeIcon icon={faBookmark} />
        </Button>
      </div>
    </div>
  );
};
