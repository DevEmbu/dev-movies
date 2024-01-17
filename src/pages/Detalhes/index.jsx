import { useEffect, useState } from 'react'
import { getMovieVideos, getMovieCredits, getMovieDetail, getMovieSimilar } from '../services/getData'
import { Background, Container } from './styles' 
import { useParams } from 'react-router-dom'
import { getImagesCardsTopFilmes } from '../utils/getImages'

function Detalhes(){
    const { id } = useParams()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieDetail, setMovieDatail] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
   useEffect(() => {
    async function getAllData(){ 
                         
          Promise.all([                  
            getMovieVideos(id),
            getMovieCredits(id),
            getMovieDetail(id),
            getMovieSimilar(id)

          ])
          .then(([videos, credits, detail, similar ]) => { 
              setMovieVideos(videos)
              setMovieCredits(credits)
              setMovieDatail(detail)
              setMovieSimilar(similar)
            
            })
            .catch((error) => console.error(error))
              
        }
      getAllData()
     }, [])
    return(
        <>
        {/* Background não está funcionando */}
        {movie && <Background fundo={getImagesCardsTopFilmes(movie.backdrop_path)} />}
          <Container>
            <div>Iremos precisar de algumas chamadas:</div>

          </Container>

        </>
    )
}
export default Detalhes