import React from 'react'
import PropTypes from 'prop-types'
import { CircleDiv } from './styled'

const Circle = ({ backgroundArray }) => (
  backgroundArray.map((bg, index) => {
      return (
        <>
          <CircleDiv background={bg} key={index} />
          {
            bg === '#FCDA92' ? <span>{`${bg}`}</span> : <span>{`${bg}, `}</span>
          }
        </>
      )
    }
  )
)

Circle.propTypes = {
  backgroundArray: PropTypes.array.isRequired
}

export default Circle
