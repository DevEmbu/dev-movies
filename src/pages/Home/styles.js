

import styled from 'styled-components'
     
export const Background = styled.div`
    
     background-image: url(${(props) => props.fundo});
     background-position: center;
     background-size: cover;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
    
     
     &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0; 
        width: 100%; 
        height: 100%; 
        background-color: rgba(0,0,0, 0.5);
          
     }
     
     
`
export const Container = styled.div`
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%; 
      max-width: 1500px;

`

export const Info = styled.div`
     z-index: 2;
     padding: 20px;
     width: 50%;

     h1{
        color: #ffffff;
        font-size: 5rem;
        font-weight: 700;

     }

     p{
        color: #ffffff;
        font-size: 15px;
        font-weight: 500;
        margin-top: 30px;
        margin: 20px;
     }
      
`
export const Poster = styled.div`
      z-index: 3;
    img{
        width: 400px;
        border-radius: 30px;

    }
`
export const ContainerButtons = styled.div` 
      display: flex;
      gap: 30px;
      margin-top: 30px;
`