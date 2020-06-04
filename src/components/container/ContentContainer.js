import React, { Component } from 'react'
import styled from 'styled-components'

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

class ContentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
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

        <section>

        </section>
      </div>
    )
  }
}

export default ContentContainer
