import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { Movies } from '../components/Movies';
import ContainerCol from '../components/UI/ContainerCol';
import { IFilm } from '../interfaces';

export const Category = () => {
  const { id }: any = useParams();
  const [movies, setMovies] = useState<IFilm[] | null>([]);

  const size = 4; //размер подмассива
  const subarray = []; //массив в который будет выведен результат.

  for (let i = 0; i < Math.ceil(movies!.length / size); i++) {
    subarray[i] = movies!.slice(i * size, i * size + size);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}${api.fetchFamilyCategory}${id}`
      );
      setMovies(res.data.results);
    };
    fetchData();
  }, [id]);

  return (
    <ContainerCol>
      <h1>Категория</h1>
      <div className='content-container'>
        {subarray.map((e: any) => (
          <Movies rowMovies={e} />
        ))}
      </div>
    </ContainerCol>
  );
};
