import React, { useState } from 'react'
import { Movies } from '../components/Movies';
import ContainerCol from '../components/UI/ContainerCol'
import { catData } from '../data';

interface Props {
    
}

export const Category = () => {

    const [films, setFilms] = useState<any>(catData);

    return (
      <ContainerCol>
        <h1>Категория</h1>
        <div className="content-container">
            {
                films.map((e: any) => (
                    <Movies films={e}  />
                ))
            }
        </div>
      </ContainerCol>
    );
}
