
import { getMovie } from '../../pages/services/getData'
import { useEffect, useState } from 'react'
import { BackgroundModal, ContainerModal } from './styles'

import { IoMdCloseCircleOutline } from "react-icons/io"


//FUNÇÃO QUE CRIA O MODAL D FILME
function Modal({ movieId, setShowModal }){
  const [movie, setMovie] = useState()
  
  //ESSA FUNÇÃO VAI NA API E BUSCA O FILME
  useEffect(() => { 
    async function getMovies(){
     
      console.log(setMovie(await getMovie(movieId)))
          
    }
    
      getMovies()
  }, [])

//AQUI VAI RETORNAR   O VIDEO
    return(
      <BackgroundModal >               
        
        {movie && (
          <ContainerModal onClick={() => setShowModal(flase)}>
            
            {/* Quando clicar nesse icone(X) vai fechar o video*/}
          <div className='fechar' onClick={() => setShowModal()}>
          <IoMdCloseCircleOutline />
          </div>
            
        <iframe 
              src={`https://www.youtube.com/embed/${movie.key}`}
              width="100%"
              height="400px"
              title="Youtube Video Player"     
        > </iframe>
                   
      </ContainerModal>
      )}
      
      </BackgroundModal>
    )
}
export default Modal