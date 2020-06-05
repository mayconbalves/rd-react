import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../../assets/background.jpg'
import Menu from '../../components/menu/Menu'
import ContentContainer from '../../components/container/ContentContainer'
import Footer from '../../components/footer/Footer'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    margin: 0;
    padding: 0;
    background: ${ props => props.blackTheme ? '#000' : `url(${BackgroundImage})` };
  }
`

const Container = styled.main`
  margin: auto;
  width: 1200px;
`

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { blackTheme: false }
  }

  handleChangeTheme = () => {
    this.setState(preventState => ({ blackTheme: !preventState.blackTheme }))
  }

  render () {
    const { blackTheme } = this.state
    return (
      <Container>
        <GlobalStyle blackTheme={blackTheme} />
        <Menu />
        <ContentContainer handleChangeTheme={this.handleChangeTheme} />
        <Footer />
      </Container>
    )
  }
}

export default Home
