import React from 'react'
import styled from 'styled-components'

import LogoDrogaraia from '../../assets/logo_drogaraia.png'
import LogoDrogasil from '../../assets/logo_drogasil.png'
import LogoFarmasil from '../../assets/logo_farmasil.png'
import LogoUnivers from '../../assets/logo_univers.png'
import LogoFourBio from '../../assets/logo_4bio.png'
import LogoRd from '../../assets/logo_small.png'

const Container = styled.footer`
  display: grid;
  grid-template-columns: 300px 800px 100px;
  clear: both;
  height: 50px;
  margin: 20px auto;
  padding: 10px 0;
  width: 100%;

  p {
    margin: 30px 0;
  }

  .small-logo img {
    margin-top: 30px;
  }
`
const ListStyle = styled.ul`
  margin: 20px;
  li {
    display: inline-block;
    list-style: none;
    margin: 0 10px;
  }
`

const Footer = () => (
  <Container>
    <div>
      <p>RD 2017. Todos os direitos reservados</p>
    </div>
    <div>
      <ListStyle>
        <li>
          <img src={LogoDrogaraia} alt='Drogaraia' />
        </li>
        <li>
          <img src={LogoDrogasil} alt='Drogasil' />
        </li>
        <li>
          <img src={LogoFarmasil} alt='Farmasil' />
        </li>
        <li>
          <img src={LogoUnivers} alt='Univers' />
        </li>
        <li>
          <img src={LogoFourBio} alt='Four Bio' />
        </li>
      </ListStyle>
    </div>
    <div className='small-logo'>
      <img src={LogoRd} alt='Raia Drogasil' />
    </div>
  </Container>
)

export default Footer
