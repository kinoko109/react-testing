import React from 'react';
import { render, screen } from '@testing-library/react';
import UseEffectRender from './index';

describe('', () => {
  it('', async () => {
    render(<UseEffectRender />);
    // I amが当てはまるテキストがあるかを探す
    expect(screen.queryByText(/I am/)).toBeNull();
    console.log(await screen.findByText(/I am/));
    // findByTextは、レスポンスが返ってきてくれるまで待ってから処理してくれる（最大４秒？）
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
