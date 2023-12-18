
import styled from 'styled-components'

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;


   img{
    border-radius: 20px;
    width: 150px; 
    height: 100%;
    
    &:hover{
      box-shadow: 0px 0px 10px 5px rgba(184,180,184,1);
    }

   }

   h3{
     color: #ffffff;
     font-size: 15px;
     font-weight: 500;
     padding: 5px;
     margin-top: 10px;
     text-align: center;
   }

`