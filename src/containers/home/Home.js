import React from 'react'

import Menu from 'components/menu'
import Footer from 'components/footer/Footer'
import Circle from 'components/coloredCircle'
import DesktopImg from 'assets/desktop-responsive-design.png'
import TabletImg from 'assets/tablets-responsive-design.png'
import MobileImg from 'assets/mobile-responsive-design.png'

import {
  Container,
  StyledDiv,
  Box,
  ImageSection,
  StyledTitle,
  StyledSpan,
  StyledSubTitle,
  BoxImg,
  StyledButton
} from './styled'

const Home = () => {
  return (
    <Container>
      <Menu />
      <main>
        <StyledDiv>
          <StyledTitle>
            Crie este site <StyledSpan>responsivo </StyledSpan>com
            <StyledSpan> react</StyledSpan> utilizando{' '}
            <StyledSpan>styled-components</StyledSpan>
          </StyledTitle>

          <StyledSubTitle>
            A fonte utilizada é a Open Sans de 300 a 800.
            <br />
            exemplo: Open Sans, Helvetica, sans-serif, arial;
            <br />
            Já as cores são:
            <br />
            <Circle />
          </StyledSubTitle>
        </StyledDiv>

        <ImageSection>
          <Box background="#FE9481">
            <BoxImg background="#fe9481">
              <img src={DesktopImg} alt={DesktopImg} background="#FE9481" />
              <h3>Site Responsivo desktop</h3>
            </BoxImg>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> o restante
                da informação deverá aparecer em scroll down.
              </p>
              <StyledButton background="#FE9481">Ler mais...</StyledButton>
            </div>
          </Box>

          <Box background="#FCDA92">
            <BoxImg background="#fcda92">
              <img src={TabletImg} alt={TabletImg} background="#FCDA92" />
              <h3>Site Responsivo tablet</h3>
            </BoxImg>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> informação
                deverá aparecer completa em um popup na tela.
              </p>
              <StyledButton background="#FCDA92">Ler mais...</StyledButton>
            </div>
          </Box>

          <Box background="#9C8CB9">
            <BoxImg background="#9c8cb9">
              <img src={MobileImg} alt={MobileImg} background="#9C8CB9" />
              <h3>Site Responsivo mobile</h3>
            </BoxImg>
            <div>
              <p>
                Quando pressionado o botão <span>alterar tema</span> modifique o
                tema do site para blackfriday a seu gosto.
              </p>
              <StyledButton background="#9C8CB9">Alterar tema</StyledButton>
            </div>
          </Box>
        </ImageSection>
      </main>
      <Footer />
    </Container>
  )
}

export default Home
