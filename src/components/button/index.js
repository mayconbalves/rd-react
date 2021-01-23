import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ background, handleAction, title }) => (
  <StyledButton background={background} onClick={handleAction}>
    {title}
  </StyledButton>
)

Button.propTypes = {
  background: PropTypes.string.isRequired,
  handleAction: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default Button
