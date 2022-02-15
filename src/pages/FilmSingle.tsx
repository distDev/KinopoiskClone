
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowseContent } from '../components/BrowseContent';
import { LargePoster } from '../components/LargePoster';


export const FilmSingle = () => {

    let { id }:any = useParams()

    useEffect(() => {
        
    }, [])
    

  return (
    <div className='browse'>
      <LargePoster
        imagePoster={'./images/browse-poster.jpg'}
        logoPoster='./images/browse-logo.png'
      />
      <BrowseContent />
    </div>
  );
};
