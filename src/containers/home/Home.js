import React from 'react'

import Menu from 'components/menu'
import ContentContainer from 'components/container'
import Footer from 'components/footer/Footer'
import { Container } from './Styled'

const Home = () => {
  const handleChangeTheme = () => {
    this.setState((preventState) => ({ blackTheme: !preventState.blackTheme }))
  }

  return (
    <Container>
      <Menu />
      <ContentContainer handleChangeTheme={handleChangeTheme} />
      <Footer />
    </Container>
  )
}

export default Home
