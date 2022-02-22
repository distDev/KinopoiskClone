import { IFilm } from '../interfaces';

interface ICardFilm {
  handleClick: (id: number) => void;
}

const CardFilm = ({
  id,
  backdrop_path,
  vote_average,
  handleClick,
}: IFilm & ICardFilm) => {
  return (
    <>
      <div
        key={id!.toString()}
        className='card-film'
        onClick={() => handleClick(id!)}
      >
        <p className={vote_average! <= 7 ? 'low-rating' : 'hight-rating'}>
          {vote_average}
        </p>
        <img
          src={'https://image.tmdb.org/t/p/original' + backdrop_path}
          alt=''
        />
      </div>
    </>
  );
};

export default CardFilm;
