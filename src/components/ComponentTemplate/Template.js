import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './ComponentTemplate.scss'

/**
 * @module ComponentTemplate
 */
class ComponentTemplate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exampleState : 'initial state'
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div></div>
        );
    }
}

ComponentTemplate.defaultProps = {
    defaultPropGoesHere: 'default prop'
};

ComponentTemplate.propTypes = {
    example: PropTypes.string
};

ComponentTemplate.displayName = 'ComponentTemplate';

export default ComponentTemplate;