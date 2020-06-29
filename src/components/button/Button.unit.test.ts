import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';

describe('The Button component', () => {
  beforeEach(cleanup);
  it('Renders with basic props',() => {
    const { container } = render(Button)
    expect(container).toMatchSnapshot();
  })
})