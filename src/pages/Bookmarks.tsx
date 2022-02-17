import { observer } from 'mobx-react-lite';
import React from 'react'
import { Movies } from '../components/Movies';
import ContainerCol from '../components/UI/ContainerCol';
import { IBookmarks } from '../interfaces';
import { myBookmarksUser } from '../store/bookmarkStore';

interface Props {
    
}

export const Bookmarks = observer( (props: Props) => {
   
   const bookmarks: IBookmarks[] = myBookmarksUser.bookmarks

   const size = 4; //размер подмассива
   const subarray = []; //массив в который будет выведен результат.

   for (let i = 0; i < Math.ceil(bookmarks!.length / size); i++) {
     subarray[i] = bookmarks!.slice(i * size, i * size + size);
   }


   return (
     <ContainerCol>
       <h1>Буду смотреть</h1>
       <div className='content-container'>
         {subarray.map((e: any) => (
           <Movies rowMovies={e} />
         ))}
       </div>
     </ContainerCol>
   );
})
