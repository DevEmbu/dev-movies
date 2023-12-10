/* ESSE É O CABEÇALHO(Header) */

import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/DEVEMBU.png'
import { ContainerHeader, Menu, Li } from './styles'

function Header(){
   const { pathname } = useLocation()
   console.log(pathname)
  return(
    <ContainerHeader>

      <img src={ Logo } alt="logo-header"/>
      
      <Menu>
        <Li isActive={ pathname === '/' }> <Link to='/'>Home</Link> </Li>
        <Li isActive={ pathname.includes('filmes') }> <Link to='/filmes'>Filmes</Link> </Li>
        <Li isActive={ pathname.includes('series') }> <Link to='/series'>Series</Link> </Li>       
               
      </Menu>

    </ContainerHeader>
  )
}
export default Header