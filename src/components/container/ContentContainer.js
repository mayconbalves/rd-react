import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DesktopImg from '../../assets/desktop-responsive-design.png'
import TabletImg from '../../assets/tablets-responsive-design.png'
import MobileImg from '../../assets/mobile-responsive-design.png'


const ParagraphSection = styled.section`
  margin: 5% 10%;
  h2 {
    color: #007f56;
    font-weight: 300;
    font-size: 3.3333333333em;
    text-align: center;

    span {
      font-weight: bold;

      &:nth-child(even) {
        text-transform: uppercase;
      }
    }
  }

  h3 {
    color: #868686;
    font-size: 1.7777777778em;
    text-align: center;
    font-weight: 300;
    margin: 5%;
  }
`

const Circle = styled.div`
  height: 20px;
  width: 20px;
  background: ${props => props.background || "#000"};
  border-radius: 50%;
  display: inline-block;
`

const ImageSection = styled.section`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 3%;
`

const BoxImg = styled.div`
  background: ${props => props.background};
  max-height: 330px;

  .desktop {
    background: #FE9481;

    button {
      background: ${props => props.backgroud};
    }
  }
  .tablet {
    background: #FCDA92;
  }
  .mobile {
    background: #9C8CB9;
  }

  img {
    background: ${props => props.background};
    margin: 3% 20%;
  }

  div {
    background:  #fff;
    min-height: 112px;
  }

  h3 {
    background: ${props => props.background};
    color: #fff;
    font-size: 1.77777777778em;
    font-weight: 300;
    margin: 30px 0;
    text-align: center;
  }

  p {
    color: #868686;
    background: #fff;
    float: left;
    height: 100px;
    padding: 1.9444444444444445%;
    max-width: 100%;
    text-align: justify;
    top: 225px;
  }

  span {
    background: #fff;
    font-weight: 800;
  }
`

const StyledButton = styled.button`
  background: ${props => props.background};
  border: none;
  height: 40px;
  font-size: 1.1111111111em;
  font-weight: 400;
  float: right;
  margin: 10px;
  text-align: center;
  text-shadow: none;
  width: 33.33333333333333%;
  color: #fff;
  padding: 0 10px;
  position: relative;
  bottom: 50px;
`

class ContentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { theme: props.blackTheme }
  }

  render() {
    return (
      <div>
        <ParagraphSection>
          <h2>
            Crie este site <span>responsivo</span> com <span>react</span> utilizando <span>styled-components</span>
          </h2>

          <h3>
            A fonte utilizada é a Open Sans de 300 a 800.<br />
            exemplo: "Open Sans", Helvetica, sans-serif, arial;<br />
            Já as cores são:<br />
            <Circle background='#007f56' />#007f56, <Circle background='#868686' />#868686, <Circle background='#FE9481' />#FE9481, <Circle background='#FCDA92' />#FCDA92 e <Circle background='#9C8CB9' />#9C8CB9
          </h3>
        </ParagraphSection>

        <ImageSection>
          <BoxImg background='#FE9481'>
            <div className='desktop'>
              <img src={DesktopImg} alt={DesktopImg} background='#FE9481' />
              <h3>Site Responsivo desktop</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> o restante da informação deverá aparecer em scroll down.
              </p>
              <StyledButton background='#FE9481'>Leia mais...</StyledButton>
            </div>
          </BoxImg>

          <BoxImg background='#FCDA92'>
            <div className='tablet'>
              <img src={TabletImg} alt={TabletImg} background='#FCDA92' />
              <h3>Site Responsivo tablet</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>Leia mais...</span> informação deverá aparecer completa em um popup na tela.
              </p>
              <StyledButton background='#FCDA92'>Leia mais...</StyledButton>
            </div>
          </BoxImg>

          <BoxImg background='#9C8CB9'>
            <div className='mobile'>
              <img src={MobileImg} alt={MobileImg} background='#9C8CB9' />
              <h3>Site Responsivo mobile</h3>
            </div>
            <div>
              <p>
                Quando pressionado o botão <span>alterar tema</span> modifique o tema do site para blackfriday a seu gosto.
              </p>
              <StyledButton
                background='#9C8CB9'
                onClick={() => this.props.handleChangeTheme()}
              >
                Alterar tema
              </StyledButton>
            </div>
          </BoxImg>
        </ImageSection>
      </div>
    )
  }
}

ContentContainer.propType = {
  handleChangeTheme: PropTypes.func.isRequired
}

export default ContentContainer
