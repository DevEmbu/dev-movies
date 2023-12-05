import Button from '../../components/Button'
import Slider from '../../components/Sliders'
import api from '../services/Api' // importando a API 
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useState, useEffect } from 'react'

function Home(){
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()


 useEffect( () => { 
    //Aqui vou chamar a API la na pasta service, onde montei a base do servidor.
    //ESSA FUNÇÃO CHAMA O BCKGROUND DO SITE
    async function getMovies(){
    const { data: {results}
          } = await api.get('/movie/popular')

   setMovie(results[14])
   //console.log(results)
  }

  //FUNÇÃO QUE VAI CHAMAR OS FILMES TOPS
  async function getTopMovies(){
       const {data: {results}
             } = await api.get('/movie/top_rated')
       setTopMovies(results)
    // console.log(results)
  }


  
   getMovies()
   getTopMovies()

   }, [])  


    return (
        <>
        {movie && (
        <Background fundo={ `https://image.tmdb.org/t/p/original${movie.poster_path}` }>
         <Container>

          <Info> 

            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Modulo III React: CARROSSEL SWIPER </p>
                    
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
         {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}
export default Home 