import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const StyledDiv = styled.div`
  margin: 5% 10%;
`

export const StyledSpan = styled.span`
  font-weight: bold;

  &:nth-child(even) {
    text-transform: uppercase;
  }
`

export const StyledTitle = styled.h1`
  color: #007f56;
  font-weight: 300;
  font-size: 3.3333333333em;
  text-align: center;
`

export const StyledSubTitle = styled.h3`
  color: #868686;
  font-size: 1.7777777778em;
  text-align: center;
  font-weight: 300;
  margin: 5%;
`

export const ImageSection = styled.section`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 3%;
`

export const Box = styled.div`
  background: ${(props) => props.background};
  max-height: 330px;

  img {
    background: ${(props) => props.background};
    margin: 3% 20%;
  }

  div {
    background: #fff;
    min-height: 112px;
  }

  h3 {
    background: ${(props) => props.background};
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

export const BoxImg = styled.div`
  background: ${(props) => props.background};
`

export const StyledButton = styled.button`
  background: ${(props) => props.background};
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
