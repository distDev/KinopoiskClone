
import api from '../api/api';
import { Movies } from './Movies';

export const BrowseContent = () => {
  return (
    <div className='swipe-container '>
      <Movies
        title={'Рекомендуемое'}
        variant='slider'
        fetchMovie={api.fetchTrending}
      />
      <Movies
        title={'Экшен'}
        variant='slider'
        fetchMovie={api.fetchDramaMovies}
        genres={28}
      />
      <Movies
        title={'Комедии'}
        variant='slider'
        fetchMovie={api.fetchFantasyMovies}
        genres={16}
      />
      <Movies
        title={'Мультфильмы'}
        variant='slider'
        fetchMovie={api.fetchAnimationMovies}
        genres={35}
      />
    </div>
  );
};
