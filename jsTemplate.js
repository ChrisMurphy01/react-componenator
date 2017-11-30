import React, { Component } from 'react'

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
    example: React.PropTypes.string
};

{{displayName}}.displayName = '{{displayName}}';

export default {{displayName}};