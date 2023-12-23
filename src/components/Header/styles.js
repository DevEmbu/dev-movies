
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
        width: 8%;
             
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
  
  