import React from 'react'
import { Circle } from './styled'

const background = ['#007f56', '#FE9481', '#9C8CB9', '#868686', '#FCDA92']

const ColoredCircle = () =>
  background.map((bg) => (
    <React.Fragment key={bg}>
      <Circle background={bg} />
      {bg === '#FCDA92' ? <span>{`${bg}`}</span> : <span>{`${bg}, `}</span>}
    </React.Fragment>
  ))

export default ColoredCircle
