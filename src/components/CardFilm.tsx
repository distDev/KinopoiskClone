
import { IFilm } from '../interfaces';

interface ICardFilm {
  handleClick: any;
}

const CardFilm = ({ id, rating, handleClick, img }: IFilm & ICardFilm) => {
  return (
    <div key={id} className='card-film' onClick={() => handleClick(id)}>
      <p className={rating <= 7 ? 'low-rating' : 'hight-rating'}>{rating}</p>
      <img src={img} alt='' />
    </div>
  );
};

export default CardFilm
