import React from 'react'

import LogoDrogaraia from 'assets/logo_drogaraia.png'
import LogoDrogasil from 'assets/logo_drogasil.png'
import LogoFarmasil from 'assets/logo_farmasil.png'
import LogoUnivers from 'assets/logo_univers.png'
import LogoFourBio from 'assets/logo_4bio.png'
import LogoRd from 'assets/logo_small.png'

import { Container, ListStyle, LiStyle, ParagraphStyle, LogoStyle } from './styled'

const Footer = () => (
  <Container>
    <ParagraphStyle>
      RD 2017. Todos os direitos reservados
    </ParagraphStyle>
    <ListStyle>
      <LiStyle>
        <img src={LogoDrogaraia} alt='Drogaraia' />
      </LiStyle>
      <LiStyle>
        <img src={LogoDrogasil} alt='Drogasil' />
      </LiStyle>
      <LiStyle>
        <img src={LogoFarmasil} alt='Farmasil' />
      </LiStyle>
      <LiStyle>
        <img src={LogoUnivers} alt='Univers' />
      </LiStyle>
      <LiStyle>
        <img src={LogoFourBio} alt='Four Bio' />
      </LiStyle>
    </ListStyle>
    <div>
      <LogoStyle src={LogoRd} alt='Raia Drogasil' />
    </div>
  </Container>
)

export default Footer
