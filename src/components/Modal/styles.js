
import styled from 'styled-components'

export const BackgroundModal = styled.div`
     height: 100vh;
     width:100vw; 
     z-index: 999;
     background: rgba(0,0,0, 0.6);
     position: absolute;
     display: flex; 
     align-items: center;
     justify-content: center;

           

          
 `

export const ContainerModal = styled.div`
     background: linear-gradient(45deg, rgba(11,11,219,1) 3%, rgba(109,193,233,1) 27%, rgba(30,152,237,1) 49%, rgba(109,193,233,1) 71%, rgba(11,11,219,1) 97%);  
     width: 50%; 
     //z-index: 999;
     display: flex;
     justify-content: center; 
     align-items: center; 
     position: fixed;  
     padding: 15px; 
     max-width: 1200px; 

     iframe{
        border: none;
     }

     .fechar {
          color: #ffffff;
          display: flex;
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
         
          }
    

    
`