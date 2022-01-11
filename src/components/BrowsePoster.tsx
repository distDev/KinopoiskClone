import { faBookmark, faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface Props {
    
}

export const BrowsePoster = (props: Props) => {
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
          <button className='browse__btns_play'>
            <FontAwesomeIcon icon={faPlay} />
            Смотреть трейлер
          </button>
          <button className='browse__btns_about'>
            <FontAwesomeIcon icon={faInfoCircle} /> О фильме
          </button>
          <button className='browse__btns_bookmark'>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
    );
}
