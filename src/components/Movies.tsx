import { useEffect, useState } from 'react';
import { IFilm, ISliceOptions } from '../interfaces';
import { DownCardDescription } from './DownDesription/DownCardDescription';
import { CardsRow } from './CardsRow';
import { CardsSlider } from './CardsSlider';
import axios from 'axios';

interface IMovies {
  fetchMovie?: string;
  genres?: number;
  rowMovies?: IFilm[];
}

export const Movies = ({
  title,
  variant,
  fetchMovie,
  genres,
  rowMovies,
}: IMovies & ISliceOptions) => {
  const [film, setFilm] = useState<any>([]);
  const [movies, setMovies] = useState<any>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (fetchMovie) {
      const fetchData = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API}${fetchMovie}`
        );
        setMovies(res.data.results);
      };
      fetchData();
    }
  }, [fetchMovie, film]);

  const handleClick = (id: any) => {
    if (fetchMovie) {
      let filmData = movies.filter((e: any) => e.id === id);
      setFilm(filmData);
    } else {
      let filmData = rowMovies!.filter((e: any) => e.id === id);
      setFilm(filmData);
    }
    setVisible((visible) => !visible);
  };

  return (
    <div className='row-films'>
      {variant === 'slider' ? (
        <CardsSlider
          genres={genres}
          handleClick={handleClick}
          films={movies}
          title={title}
        />
      ) : (
        <CardsRow films={rowMovies!} handleClick={handleClick} />
      )}

      {visible ? <DownCardDescription film={film} /> : null}
    </div>
  );
};
