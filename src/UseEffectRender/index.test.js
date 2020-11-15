import React from 'react';
import { render, screen } from '@testing-library/react';
import UseEffectRender from './index';

describe('', () => {
  it('', async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    console.log(await screen.findByText(/I am/));
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
