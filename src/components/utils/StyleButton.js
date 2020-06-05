import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButtonBody = styled.button`
  background: ${props => props.background};
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

const StyledButton = ({ background, handleAction, title }) => {
  return (
    <StyledButtonBody background={background} onClick={handleAction}>
      {title}
    </StyledButtonBody>
  )
}

StyledButton.propTypes = {
  background: PropTypes.string.isRequired,
  handleAction: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default StyledButton
