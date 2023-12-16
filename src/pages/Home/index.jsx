import Button from '../../components/Button'
import Modal from '../../components/Modal'
import api from '../services/Api' // importando a API 
import { getImagesCardsTopFilmes } from '../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useState, useEffect } from 'react'
//import {getMovies, getTopMovies, getTopSeries, getSeriesPopular, getPersonPopular} from '../services/Api'

function Home(){
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [seriesPopular, setSeriesPopular] = useState()
    const [personPopular, setPersonPopular] = useState()


 useEffect( () => { 
    //Aqui vou chamar a API la na pasta service, onde montei a base do servidor.
    //ESSA FUNÇÃO CHAMA O BCKGROUND DO SITE
    async function getMovies(){
    const { data: {results}
          } = await api.get('/movie/popular')

          
   setMovie(results[5])
   //console.log(results)
  }

  //FUNÇÃO QUE VAI CHAMAR OS FILMES TOPS
  async function getTopMovies(){
       const {data: {results}
             } = await api.get('/movie/top_rated')
       setTopMovies(results)
     //console.log(results)
  }

  //FUNÇÃO QUE VAI CHAMAR AS LISTAS DE SERIS MAIS POPULARES
    async function getTopSeries(){
       const {data: {results}
             } = await api.get('/tv/top_rated')
          //console.log(results)
         setTopSeries(results)      
    }

  //FUNÇÃO QUE IRÁ CHAMAR AS SERIES POPULARES DO FILME
    async function getSeriesPopular(){
      const {data: {results}
            } = await api.get('/tv/popular')
      // console.log(results)
        setSeriesPopular(results)
    }
  //FUNÇÃO QUE VAI MOSTRAR OS ARTISTAS POPULARES DO FILME
  async function getPersonPopular(){
      const {data: {results}
            } = await api.get('/person/popular')
            
            setPersonPopular(results)
           // console.log(results)
  }
   

  
   getMovies()
   getTopMovies()
   getTopSeries()
   getSeriesPopular()
   getPersonPopular()

   }, [])  


    return (
        <>
        {movie && (
        <Background fundo={getImagesCardsTopFilmes(movie.backdrop_path) }>
         <Modal movieId={movie.id}/>
         <Container>

          <Info> 

            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Modulo III React: Criando o Modal de Filmes </p>
                    
                <ContainerButtons>
                  <Button red>Assista Agora</Button>
                  <Button >Assista o Trailer</Button>                    
                </ContainerButtons>
          
          </Info>
          <Poster>
            <img src={getImagesCardsTopFilmes(movie.poster_path) } alt='capa-do-filme' />
          </Poster>
         </Container>
        </Background>
        )}
         
        </>
    )
        }
export default Home