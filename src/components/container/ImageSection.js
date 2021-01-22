import React from 'react'
import PropTypes from 'prop-types'

import { ImageSection } from './Styled'

const ImageSectionComponent = ({ children }) => (
  <ImageSection>{children}</ImageSection>
)

ImageSectionComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ImageSectionComponent
