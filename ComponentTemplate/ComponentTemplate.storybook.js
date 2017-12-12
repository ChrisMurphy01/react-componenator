import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import globalStyles from '@styles/global'

import ComponentTemplate from './Index'

const story = storiesOf('Atoms/Picture', module)
story.addDecorator((story, context, globalStyles) =>
  withInfo('common info')(story)(context))
story.addDecorator(withKnobs)

story.add('ComponentTemplate', () => {
  return (
    <ComponentTemplate />
  )
})
