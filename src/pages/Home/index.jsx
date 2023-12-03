import api from '../services/Api' // importando a API 


function Home(){

    //Aqui vou chamar a API la na pasta service, onde montei a base do servidor.
 async function getMovies(){
    const data = await api.get('/movie/popular')

    console.log(data)
  }
   getMovies()
    
    return (
        <div>
            <h1>Home</h1>
            <p>Essa é a Home</p>
            <p>Modulo II React: styled-components - EG </p>
        </div>
    )
}
export default Home 