
import api from '../services/Api'


//ESSA FUNÇÃO CHAMA O BCKGROUND DO SITE
export async function getMovies(){
    const { data: {results}
          } = await api.get('/movie/popular')
          
   return results[1]
}

//FUNÇÃO QUE VAI CHAMAR OS FILMES TOPS
export async function getTopMovies(){
    const {data: {results}
          } = await api.get('/movie/top_rated')
    return results
  
}

//FUNÇÃO QUE VAI CHAMAR AS LISTAS DE SERIS MAIS
export async function getTopSeries(){
    const {data: {results}
          } = await api.get('/tv/top_rated')
       
     return results  
}

//FUNÇÃO QUE IRÁ CHAMAR AS SERIES POPULARES DO FILME
export async function getSeriesPopular(){
    const {data: {results}
          } = await api.get('/tv/popular')
    
      return results
}

//FUNÇÃO QUE VAI MOSTRAR OS ARTISTAS POPULARES DO FILME
export async function getPersonPopular(){
    const {data: {results}
          } = await api.get('/person/popular')
          
          return results
}

//Aqui vou chamar a API la na pasta service, onde montei a base do servidor.
//ESSA FUNÇÃO VAI NA API E BUSCA O FILME
export async function getMovieVideos(movieId){
    const {data: {results}
          } = await api.get(`/movie/${movieId}/videos`)
    
     return results[0]

}
//PRECISA ARRUMAR ESSAS CHAMADAS
export async function getMovieCredits(movieId){
    const {data: {results}
          } = await api.get(`/movie/${movieId}/cerdits`)

          return results

}
export async function getMovieDetail(movieId){
    const {data: {results }
          } = await api.get(`/movie/${movieId}/details`)

          return results
}

export async function getMovieSimilar(movieId){
    const {data: {results}
          } = await api.get(`/movie/${movieId}/similar`)

          return results
}

