import Button from '../../components/Button'
import api from '../services/Api' // importando a API 
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useState, useEffect } from 'react'

function Home(){
    const [movie, setMovie] = useState()


 useEffect( () => { 
    //Aqui vou chamar a API la na pasta service, onde montei a base do servidor.
 async function getMovies(){
    const { data: {results}
          } = await api.get('/movie/popular')

   setMovie(results[14])
   //console.log(results)
  }
   getMovies()

   }, [])  


    return (
        <>
        {movie && (
        <Background fundo={ `https://image.tmdb.org/t/p/original${movie.poster_path}` }>
         <Container>

          <Info> 

            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Modulo III React: Buscando Filmes na API </p>
                    
                <ContainerButtons>
                  <Button red>Assista Agora</Button>
                  <Button >Assista o Trailer</Button>                    
                </ContainerButtons>
          
          </Info>
          <Poster>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='capa-do-filme' />
          </Poster>
         </Container>
        </Background>
        )}
        </>
    )
}
export default Home 