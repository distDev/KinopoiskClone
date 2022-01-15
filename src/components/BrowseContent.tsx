import React, { useState } from 'react'
import { slideData } from '../data';

import { Movies } from './Movies';



export const BrowseContent = () => {

    const [films, setFilms] = useState(slideData)

    return (
      <div className='swipe-container '>
        <Movies title={'Рекомендуемое'} films={films} variant='slider' />
        <Movies title={'Драма'} films={films} variant='slider' />
        <Movies title={'Боевики'} films={films} variant='slider' />
        <Movies title={'Новинки'} films={films} variant='slider' />
      </div>
    );
}
