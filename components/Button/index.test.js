import React from 'react';
import Button from './index';
import {shallow} from 'enzyme';

const setup = (props={}) => {
  return shallow(<Button { ...props } />);
};

test('renders Button component', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});