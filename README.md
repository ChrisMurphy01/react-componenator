# react-componenator
Quickly create component templates for React and scss

## Generated output
YourFileName /

---YourFileName.js

---YourFileName.scss


**YourFileName.js**

```
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    example: 'xxx'
};

YourFileName.propTypes = {
    example: PropTypes.string
};

YourFileName.displayName = 'YourFileName';

export default YourFileName;
```

**YourFileName.scss**

```
@import './src/styles/variables';
```


Install with

```
npm install -g react-componenator
```

Usage

Run from the command line with
```
rc
```

You can use the provided template, or create a custom template.

To create a custom template; cd to your components folder
```
cd src/components
```
then create the template folder

```
rc
ComponentTemplate
```
The files in the folder will now be used as the template. Modify to suit your needs.

Wherever you want the component name to appear file, add
```
{{displayName}}
```


