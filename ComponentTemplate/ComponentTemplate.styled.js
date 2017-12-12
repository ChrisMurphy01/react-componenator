import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

function renderImg (fullWidth) {
  return styled.img`
    display: block;
    width: ${!!fullWidth ? '100%' : 'auto'};
    max-width: ${!!fullWidth ? '100%' : 'unset'};
    position: relative;
  `
}

class Picture extends React.Component {
  render() {
    const {
      srcSmall,
      srcMed,
      srcLarge,
      mediaLarge,
      mediaMed,
      alt,
      fullWidth
    } = this.props
    const PictureElement = styled.picture``
    let Img = renderImg(fullWidth)
    return (
      <PictureElement>
        <source srcSet={srcLarge} media={`(min-width: ${mediaLarge})`} />
        <source srcSet={srcMed} media={`(min-width: ${mediaMed})`} />
        <source srcSet={srcSmall} media='(min-width: 0px)' />
        <Img srcSet={srcLarge} alt={alt} />
      </PictureElement>
    )
  }
}

export default Picture