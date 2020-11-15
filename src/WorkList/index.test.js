import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import WorkList from './index.';

afterEach(() => cleanup());

describe('WorkList', () => {
  it('propsの値がない場合', () => {
    render(<WorkList />);
    // htmlデータに「No Data!」が含まれているか
    expect(screen.getByText('No Data!')).toBeInTheDocument();
  });
  it('propsの値がある場合', () => {
    const data = [
      {
        id: 1,
        item: 'React'
      },
      {
        id: 2,
        item: 'Vue'
      },
      {
        id: 3,
        item: 'Angular'
      }
    ];
    render(<WorkList works={data} />);
    const items = screen.getAllByRole('listitem').map((elm) => elm.textContent);
    const testItems = data.map((elm) => elm.item);
    // レンダリングされるli要素のテキストたちと、propsで渡されたデータと整合するか
    expect(items).toEqual(testItems);
    // propに渡されたデータがある場合、「No Data!」が表示されないか
    expect(screen.queryByText('No Data!')).toBeNull();
  });
});
