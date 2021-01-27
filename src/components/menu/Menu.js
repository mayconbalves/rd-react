import React from 'react'
import Logo from 'assets/logo.png'
import { Header, Navbar, ImgLogo, ListItem, Link } from './styled'
import { baseUrl } from 'constants/mozilaUrl'

const Menu = () => (
  <Header>
    <ImgLogo src={Logo} alt="Raia Drogasil" />

    <Navbar>
      <ul>
        <ListItem>
          <Link href={`${baseUrl}/Web/HTML/HTML5`}>html5</Link>
        </ListItem>
        <ListItem>
          <Link href={`${baseUrl}/Archive/CSS3`}>css3</Link>
        </ListItem>
        <ListItem>
          <Link href={`${baseUrl}/Aprender/JavaScript`}>javascript</Link>
        </ListItem>
        <ListItem>
          <Link href="https://pt-br.reactjs.org/">react</Link>
        </ListItem>
        <ListItem>
          <Link href="https://redux.js.org/">redux</Link>
        </ListItem>
      </ul>
    </Navbar>
  </Header>
)

export default Menu
