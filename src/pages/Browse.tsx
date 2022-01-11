
import { BrowseContent } from '../components/BrowseContent'
import { BrowsePoster } from '../components/BrowsePoster'

interface Props {
    
}

export const Browse = (props: Props) => {
    return (
        <div className='browse'>
            <BrowsePoster />
            <BrowseContent />
        </div>
    )
}
