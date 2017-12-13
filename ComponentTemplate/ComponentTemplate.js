import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import ComponentTemplateElement from './ComponentTemplate.styled.js'

class ComponentTemplate extends PureComponent {
  render() {
    return (
      <ComponentTemplateElement />
    );
  }
}

// OR

const ComponentTemplate = () => {
  return ()
}

ComponentTemplate.propTypes = {
}

ComponentTemplate.defaultProps = {
}

export default ComponentTemplate