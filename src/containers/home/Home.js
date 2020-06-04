import React from 'react'
import Menu from '../../components/menu/Menu'
import ContentContainer from '../../components/container/ContentContainer'
import Footer from '../../components/footer/Footer'
import styled from 'styled-components'

const Container = styled.main`
  margin: auto;
  width: 1200px;
`

const Home = () => {
  return (
    <Container>
      <Menu />
      <ContentContainer />
      <Footer />
    </Container>
  )
}

export default Home
