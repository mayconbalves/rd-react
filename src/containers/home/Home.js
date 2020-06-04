import React from 'react'
import Menu from '../../components/menu/Menu'
import ContentContainer from '../../components/container/ContentContainer'
import styled from 'styled-components'

const Container = styled.main`
  margin: auto;
  width: 1200px;
`

function App() {
  return (
    <Container>
      <Menu />
      <ContentContainer />
    </Container>
  )
}

export default App
