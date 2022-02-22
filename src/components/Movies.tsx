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
  const [film, setFilm] = useState<IFilm[] | null>([]);
  const [movies, setMovies] = useState<IFilm[] | null>([]);
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

  // Поиск фильма для вывода в открывающемся блоке
  const handleOpenDescription = (id: number) => {
    // Если есть fetchMovie, то происходит поиск нужного фильма, чтобы отобразить данные
    // в появляющимся блоке с описанием
    if (fetchMovie) {
      let filmData = movies!.filter((e) => e.id === id);
      setFilm(filmData);
    }

    // Если нет fetchMovie, то поиск идет среди фильмов, которые были переданы в rowMovies
    else {
      let filmData = rowMovies!.filter((e) => e.id === id);
      setFilm(filmData);
    }

    // открывает блок после клика и запроса данных
    setVisible((visible) => (visible = true));
  };

  return (
    <div className='row-films'>
      {variant === 'slider' ? (
        <CardsSlider
          genres={genres}
          handleClick={handleOpenDescription}
          films={movies!}
          title={title}
        />
      ) : (
        <CardsRow films={rowMovies!} handleClick={handleOpenDescription} />
      )}

      {visible ? (
        <DownCardDescription film={film!} setVisible={setVisible} />
      ) : null}
    </div>
  );
};
