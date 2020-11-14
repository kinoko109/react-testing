import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './index';

// test title
describe('Rendering', () => {
  // test
  it('Should render all the "Render Component"', () => {
    render(<Render />);
    screen.debug();
  });
});
