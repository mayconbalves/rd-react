import React from 'react'
import PropTypes from 'prop-types'

import { ImageSection } from './styled'

const ImageSectionComponent = ({ children }) => {
  return (
    <ImageSection>
      {children}
    </ImageSection>
  )
}

ImageSectionComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ImageSectionComponent
