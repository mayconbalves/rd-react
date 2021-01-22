import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'containers/home/Home'
import { createGlobalStyle } from 'styled-components'
import BackgroundImage from 'assets/background.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    margin: 0;
    padding: 0;
    background: ${(props) =>
      props.blackTheme ? '#000' : `url(${BackgroundImage})`};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
