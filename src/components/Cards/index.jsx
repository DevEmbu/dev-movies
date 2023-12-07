import { getImagesCardsTopFilmes } from '../../pages/utils/getImages'
import {ContainerCards} from './styles'

function PostsCards({ item }){

    return(
        <ContainerCards>
            <img src={getImagesCardsTopFilmes(item.poster_path || item.profile_path || '/' ) } />
            <h3>{item.original_title || item.name}</h3>

        </ContainerCards>
    )

}
export default PostsCards