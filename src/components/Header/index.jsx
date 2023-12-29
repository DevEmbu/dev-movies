/* ESSE É O CABEÇALHO(Header) */

import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/DEVEMBU.png'
import { ContainerHeader, Menu, Li } from './styles'
import { useState } from 'react'
import { MdOutlineLocalMovies } from "react-icons/md"
import { BiCameraMovie } from "react-icons/bi"
import { MdOutlineHome, MdMailOutline } from "react-icons/md"
import { FaInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";



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
      <div className='meuLink'>
          <p>Acesse o link abaixo:</p>
          <em><a href='https://aulas.devclub.com.br/login' target='_blank'>Login Dev Club</a>
          </em>
      </div>
          <div className='rede-social'>
           <a href='https://www.facebook.com/' target='_blank'><SiFacebook /><span>Facebook</span> </a> 
           <a href='https://www.instagram.com/' target='_blank'> <FaInstagram /><span>Instagram</span> </a>
           <a href='https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=glif' target='_blank'> <MdMailOutline /><span>Email</span></a>

          </div>
      
      <Menu>
        <Li isactive={ pathname === '/' }> <Link to='/'><MdOutlineHome /> </Link> </Li>
        <Li isactive={ pathname.includes('filmes') }> <Link to='/filmes'><BiCameraMovie /> </Link> </Li>
        <Li isactive={ pathname.includes('series') }> <Link to='/series'><MdOutlineLocalMovies /> </Link> </Li>       
               
      </Menu>

    </ContainerHeader>
  )
}
export default Header