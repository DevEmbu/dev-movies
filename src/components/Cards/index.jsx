import { getImagesCardsTopFilmes } from '../../pages/utils/getImages'
import {ContainerCards} from './styles'

function PostsCards({item}){

    return(
        <ContainerCards>
{/* Aqui vai chamar os cards e o card dos Artitas populares(profile_path ou vai ficar vazio, caso não tenha cards para mostrar) */}
            <img src={getImagesCardsTopFilmes(item.poster_path || item.profile_path || '') } />
            <h3>{item.original_title || item.name}</h3>

        </ContainerCards>
    )

}
export default PostsCards