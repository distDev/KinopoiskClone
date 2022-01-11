import React from 'react'
import { RowFilms } from './RowFilms';

interface Props {
    
}

export const BrowseContent = (props: Props) => {
    return (
      <div className='swipe-container '>
        <RowFilms title={'Рекомендуемое'} start={1} end={7} />
        <RowFilms title={'Драма'} start={1} end={7} />
        <RowFilms title={'Боевики'} start={1} end={7} />
        <RowFilms title={'Новинки'} start={1} end={7} />
      </div>
    );
}
