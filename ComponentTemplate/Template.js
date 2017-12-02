import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './{{displayName}}.scss'

/**
 * @module {{displayName}}
 */
class {{displayName}} extends Component {

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

{{displayName}}.defaultProps = {
    defaultPropGoesHere: 'default prop'
};

{{displayName}}.propTypes = {
    example: PropTypes.string
};

{{displayName}}.displayName = '{{displayName}}';

export default {{displayName}};