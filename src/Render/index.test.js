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
  it('getByRoleメソッドでh系要素を取得', () => {
    render(<Render />);
    screen.debug(screen.getByRole('heading'));
  });
  it('h系要素があるか', () => {
    render(<Render />);
    // 存在するか
    expect(screen.getByRole('heading')).toBeTruthy();
  });
  it('inputがあるか', () => {
    render(<Render />);
    // 存在するか
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
  it('button要素が全てあるか', () => {
    render(<Render />);
    // 1つ目のbutton要素があるか
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    // 2つ目のbutton要素があるか
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
  });
  it('対象のテキストが挿入されている要素があるか', () => {
    render(<Render />);
    // 「Hoge」が挿入されている要素があるかをチェックできる
    expect(screen.getByText('Hoge')).toBeTruthy();
    // 「HogeHogeHoge」が挿入されている要素がない場合はnullを返し、テストはfailにならない
    expect(screen.getByText('HogeHogeHoge')).toBeNull();
  });
  it('対象のid属性が指定されている要素があるか', () => {
    render(<Render />);
    // 「test」idが設定されている要素を取得
    screen.debug(screen.getByTestId('test'));
    expect(screen.getByTestId('test')).toBeTruthy();
  });
});
