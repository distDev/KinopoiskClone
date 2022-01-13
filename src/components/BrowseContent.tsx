import React, { useState } from 'react'
import { slideData } from '../data';

import { RowFilms } from './RowFilms';



export const BrowseContent = () => {

    const [films, setFilms] = useState(slideData)

    return (
      <div className='swipe-container '>
        <RowFilms title={'Рекомендуемое'} films={films} start={1} end={7} />
        <RowFilms title={'Драма'} films={films} start={1} end={7} />
        <RowFilms title={'Боевики'} films={films} start={1} end={7} />
        <RowFilms title={'Новинки'} films={films} start={1} end={7} />
      </div>
    );
}
