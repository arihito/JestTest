import React from 'react';
import renderer from 'react-test-renderer';

import Hello from './Hello';


describe('Hello component', () => {
  it('should match sanpshot', () => {
    const component = renderer.create(<Hello />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
