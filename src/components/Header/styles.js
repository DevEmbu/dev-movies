
import styled from 'styled-components'


export const ContainerHeader = styled.div` 
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      width: 100%;
      background-color: ${ (props) => props.changeBackground ? '#000' 
                          : 'transparent'};
      transition: background-color 1.5s ease-in-out;
      //background:#dd5200;

     

      img{
        width: 4%;
             
      }

      a{
    text-decoration: none;
    color: #E6B54B;
    cursor: pointer;
        
   }
      a:hover{
        color: #808080;      
        
      }

   .meuLink{
    position: absolute;
    align-items: left;
    margin: 20px 0 0 100px;
    color: #fff;
    text-align: center;
    border: 2px solid #808080;
    border-radius: 5px;
    width: 150px;
    

    p{
      font-size: 12px;
      font-weight: 500;
      color: #EEE8AA;
    }
   }
   .rede-social{
    color: #ffffff;
    width: 75px;
    
   }
   .rede-social span{
    color: #ffffff;
    font-size: 8px;
    width: 70px;
   }
   
      
`
export const Menu = styled.ul`
    display: flex; 
    list-style: none; 
    gap: 50px;
    
    
`
export const Li = styled.li` 
   font-size: 25px;
   font-weight: 600;
   cursor: pointer;
   position: relative;

   a{
    text-decoration: none;
    color: #E6B54B;
    
   }

   &::after{
    content: '';
    height: 3px; 
    width: ${props => (props.isActive ? '100%' : 0)};
    background-color: #F8F1E1;
    position: absolute;
    bottom: -7px; 
    left: 0;
    //transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
   }

   &:hover::after{
    width: 100%;
   }
`
  
  