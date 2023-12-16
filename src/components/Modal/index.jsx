
import { useEffect, useState } from 'react'
import { Background, Container } from './styles'
import api from '../../pages/services/Api'

//FUNÇÃO QUE CRIA O MODAL D FILME
function Modal({movieId}){
  const [movies, setMovies] = useState()

  //ESSA FUNÇÃO VAI NA API E BUSCA O FILME
  useEffect(() => { 
    async function getTopMovies(){
      const {data: {results}
            } = await api.get(`/movie/${movieId}/videos`)
      setMovies(results[0])
    console.log(results[0])
 }
   getTopMovies()
  }, [])

//AQUI VAI RETORNAR  O FUNDO E O FILME
    return(
      <Background>
        {movies && (
          <Container> 
        <iframe 
              src={`https://www.youtube.com/embed/${movies.key}`}
              width="100%"
              height="500px"
              title="Youtube Video Player"     
        > </iframe>
                   
      </Container>
      )}
      </Background>
    )
}
export default Modal