import styled from 'styled-components'

export const ParagraphSection = styled.section`
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

export const ImageSection = styled.section`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 3%;
`

export const BoxImg = styled.div`
  background: ${(props) => props.background};
  max-height: 330px;

  .desktop {
    background: #fe9481;

    button {
      background: ${(props) => props.backgroud};
    }
  }
  .tablet {
    background: #fcda92;
  }
  .mobile {
    background: #9c8cb9;
  }

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
