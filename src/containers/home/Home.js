import React from 'react'

import Menu from 'components/menu'
import Footer from 'components/footer/Footer'
import Circle from 'components/coloredCircle'
import Button from 'components/button'
import DesktopImg from 'assets/desktop-responsive-design.png'
import TabletImg from 'assets/tablets-responsive-design.png'
import MobileImg from 'assets/mobile-responsive-design.png'

import {
  Container,
  StyledDiv,
  BoxImg,
  ImageSection,
  StyledTitle,
  StyledSpan,
  StyledSubTitle
} from './styled'

const Home = () => {
  const handleChangeTheme = () => {
    this.setState((preventState) => ({ blackTheme: !preventState.blackTheme }))
  }

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
          <BoxImg background="#FE9481">
            <div className="desktop">
              <img src={DesktopImg} alt={DesktopImg} background="#FE9481" />
              <h3>Site Responsivo desktop</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> o restante
                da informação deverá aparecer em scroll down.
              </p>
              <Button background="#FE9481" title="Leia mais..." />
            </div>
          </BoxImg>

          <BoxImg background="#FCDA92">
            <div className="tablet">
              <img src={TabletImg} alt={TabletImg} background="#FCDA92" />
              <h3>Site Responsivo tablet</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> informação
                deverá aparecer completa em um popup na tela.
              </p>
              <Button background="#FCDA92" title="Leia mais..." />
            </div>
          </BoxImg>

          <BoxImg background="#9C8CB9">
            <div className="mobile">
              <img src={MobileImg} alt={MobileImg} background="#9C8CB9" />
              <h3>Site Responsivo mobile</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>alterar tema</span> modifique o
                tema do site para blackfriday a seu gosto.
              </p>
              <Button
                background="#9C8CB9"
                handleAction={() => handleChangeTheme()}
                title="Alterar tema"
              />
            </div>
          </BoxImg>
        </ImageSection>
      </main>
      <Footer />
    </Container>
  )
}

export default Home
