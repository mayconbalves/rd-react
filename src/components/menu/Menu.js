import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const Header = styled.header`
  border-bottom: 1px solid rgba(134, 134, 134, 0.5);
  display: grid;
  grid-template-areas: 'logo navbar';

  .logo {
    grid-area: logo;
  }

  .navbar {
    grid-area: navbar;
    justify-self: end;
    align-self: center;
  }
`

const Navbar = styled.nav`
  ul {
    list-style: none;

    li {
      display: inline-flex;
      margin: 1rem;

      a {
        color: #007f56;
        font-weight: 300;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`

const baseUrl = 'https://developer.mozilla.org/pt-BR/docs'
const Menu = () => (
  <Header>
    <img src={Logo} alt="Raia Drogasil" className="logo" />

    <Navbar className="navbar">
      <ul>
        <li>
          <a href={`${baseUrl}/Web/HTML/HTML5`}>html5</a>
        </li>
        <li>
          <a href={`${baseUrl}/Archive/CSS3`}>css3</a>
        </li>
        <li>
          <a href={`${baseUrl}/Aprender/JavaScript`}>javascript</a>
        </li>
        <li>
          <a href="https://pt-br.reactjs.org/">react</a>
        </li>
        <li>
          <a href="https://redux.js.org/">redux</a>
        </li>
      </ul>
    </Navbar>
  </Header>
)

export default Menu
