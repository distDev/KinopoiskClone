
import api from '../api/api';
import { categoryCardsData } from '../utils/data';
import { CategoryCardsSlider } from './CategoryCardsSlider';
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
        title={'Комедии'}
        variant='slider'
        fetchMovie={api.fetchComedyMovies}
        genres={35}
      />
      <Movies
        title={'Экшен'}
        variant='slider'
        fetchMovie={api.fetchActionMovies}
        genres={35}
      />

      <Movies
        title={'Мультфильмы'}
        variant='slider'
        fetchMovie={api.fetchAnimationMovies}
        genres={35}
      />
      <CategoryCardsSlider caregories={categoryCardsData} />
      <Movies
        title={'Фентези'}
        variant='slider'
        fetchMovie={api.fetchFantasyMovies}
        genres={16}
      />
      <Movies
        title={'Романтические'}
        variant='slider'
        fetchMovie={api.fetchFamilyRomances}
        genres={35}
      />
    </div>
  );
};
