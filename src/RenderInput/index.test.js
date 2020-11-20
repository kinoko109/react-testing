import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderInput from './index';

// それぞれのitのテストケースのあとに必ずcleanupを実行する
// （renderによってレンダリングされたコンポーネントをアンマウントしてくれる）
// 副作用などをなくして、より正確にテストできる
afterEach(() => cleanup());

describe('Rendering', () => {
  it('Should render all the "Rendering Component"', () => {
    render(<RenderInput />);
    expect(screen.getByRole('button')).toBeTruthy();
  });
  it('Should render all the "Rendering Component"', () => {
    render(<RenderInput />);
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('input onChange', () => {
  it('input value', () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText('Enter');
    // inputに「test」の文字列を入力するシミュレーターを再現
    userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('', () => {
  it('', () => {
    const outputConsole = jest.fn();
    render(<RenderInput onClickButton={outputConsole} />);
    userEvent.click(screen.getByRole('button'));
    // 呼び出されない
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it('', () => {
    const outputConsole = jest.fn();
    render(<RenderInput onClickButton={outputConsole} />);
    const value = screen.getByPlaceholderText('Enter');
    userEvent.type(value, 'test');
    userEvent.click(screen.getByRole('button'));
    // outputConsoleが1回実行されるか
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
