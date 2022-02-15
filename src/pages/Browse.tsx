import { BrowseContent } from '../components/BrowseContent';
import { LargePoster } from '../components/LargePoster';




export const Browse = () => {
  

  return (
    <div className='browse'>
      <LargePoster
        imagePoster={
          './images/browse-poster.jpg'
        }
        logoPoster='./images/browse-logo.png'
      />
      <BrowseContent />
    </div>
  );
};
