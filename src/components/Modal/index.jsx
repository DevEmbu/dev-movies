
import { useEffect, useState } from 'react'
import { BackgroundModal, ContainerModal } from './styles'
import api from '../../pages/services/Api'
import { IoMdCloseCircleOutline } from "react-icons/io"


//FUNÇÃO QUE CRIA O MODAL D FILME
function Modal({ movieId, setShowModal }){
  const [movies, setMovies] = useState()

  //ESSA FUNÇÃO VAI NA API E BUSCA O FILME
  useEffect(() => { 
    async function getTopMovies(){
      const {data: {results}
            } = await api.get(`/movie/${movieId}/videos`)
      
          //console.log(results[0])
            setMovies(results[0])
    
 }
   getTopMovies()
  }, [])

//AQUI VAI RETORNAR   O VIDEO
    return(
      <BackgroundModal >
               
        
        {movies && (
          <ContainerModal onClick={() => setShowModal(flase)}>
            
            {/* Quando clicar nesse icone(X) vai fechar o video*/}
          <div className='fechar' onClick={() => setShowModal()}>
          <IoMdCloseCircleOutline />
          </div>
            
        <iframe 
              src={`https://www.youtube.com/embed/${movies.key}`}
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