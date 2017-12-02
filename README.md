# react-componenator
Quickly create component templates for React and scss

## Generated output
YourFileName /

---YourFileName.js

---YourFileName.scss


**YourFileName.js**

```import React, { Component } from 'react'

import styles from './YourFileName.scss'

/**
 * @module YourFileName
 */
class YourFileName extends Component {

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

YourFileName.defaultProps = {
    defaultPropGoesHere: 'default prop'
};

YourFileName.propTypes = {
    example: React.PropTypes.string
};

YourFileName.displayName = 'YourFileName';

export default YourFileName;
```

**YourFileName.scss**

```
@import '../common/variables';
```


Install with

```
npm install -g react-componenator
```

Usage

From the command line navigate to the source directory, ie. cd ./src/components
then type

```
rc
```

Give your component a name when promted. (MyNewComponent)

