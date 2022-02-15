import {
  faBookmark,
  faInfoCircle,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Button } from './UI/Button';

interface ILargePoster {
  imagePoster: string;
  logoPoster: string;
}

export const LargePoster: FC<ILargePoster> = ({ imagePoster, logoPoster }) => {
  return (
    <div className='browse__poster'>
      <img className='browse__poster_img' src={imagePoster} alt='' />
      <div className='browse__logo'>
        <img src={logoPoster} alt='' />
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
