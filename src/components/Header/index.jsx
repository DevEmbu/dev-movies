/* ESSE É O CABEÇALHO(Header) */

import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/DEVEMBU.png'
import { ContainerHeader, Menu, Li } from './styles'
import { useState } from 'react'
import { MdOutlineLocalMovies } from "react-icons/md"
import { BiCameraMovie } from "react-icons/bi"
import { MdOutlineHome } from "react-icons/md"



function Header(){
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()
//função que vai fazer a transição da cor do fundo do Header, 
//quando for usado o mouse(descendo ou subindo)

        window.onscroll = () => {
         if(!changeBackground && pageYOffset > 300){
           setChangeBackground(true)
         }
         if(changeBackground && window.pageYOffset <= 300){
           setChangeBackground(false)
         }
      }
     
  return(
    <ContainerHeader changeBackground={changeBackground}>
      <img src={ Logo } alt="logo-header"/>
      
      <Menu>
        <Li isactive={ pathname === '/' }> <Link to='/'><MdOutlineHome /> </Link> </Li>
        <Li isactive={ pathname.includes('filmes') }> <Link to='/filmes'><BiCameraMovie /> </Link> </Li>
        <Li isactive={ pathname.includes('series') }> <Link to='/series'><MdOutlineLocalMovies /> </Link> </Li>       
               
      </Menu>

    </ContainerHeader>
  )
}
export default Header