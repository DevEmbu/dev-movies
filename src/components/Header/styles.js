
import styled from 'styled-components'


export const ContainerHeader = styled.div` 
      min-height: 100px;
      z-index: 99;
      position: fixed;
      top: 0;
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
    gap: 30px;
    
    
`
export const Li = styled.li` 
   font-size: 25px;
   font-weight: 600;
   cursor: pointer;
   position: relative;

   a{
    text-decoration: none;
    color: #ffffff;
   }

   &::after{
    content: '';
    height: 3px; 
    width: ${props => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
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
  
  