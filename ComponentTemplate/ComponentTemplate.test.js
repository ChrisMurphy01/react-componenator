/* global it expect */
import ComponentTemplate from './Index'
import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'

const wrapperShallow = (props = {}) => {
  return shallow(
    <ComponentTemplate />
  )
}

const wrapperMount = (props = {}) => {
  return mount(<ComponentTemplate />
  )
}

it('Match Snapshot', () => {
  expect(wrapperShallow({ })).toMatchSnapshot()
})

it('propeties are passed down', () => {
  let node = wrapperMount({ }).getDOMNode()
})
