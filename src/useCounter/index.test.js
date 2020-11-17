import { useCounter } from './useCount';
import { act, renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());

describe('useCounter test', () => {
  it('initial count', () => {
    // renderHooksでカスタムフックのreturn値を取得
    const { result } = renderHook(() => useCounter(3));
    // result.current.countで現在のcountを取得
    expect(result.current.count).toEqual(3);
  });

  it('increment', () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });

  it('decrement', () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(99);
  });

  it('double', () => {
    const { result } = renderHook(() => useCounter(30));
    act(() => {
      result.current.double();
    });
    expect(result.current.count).toBe(60);
  });

  it('triple', () => {
    const { result } = renderHook(() => useCounter(200));
    act(() => {
      result.current.triple();
    });
    expect(result.current.count).toBe(600);
  });

  it('reset', () => {
    const { result } = renderHook(() => useCounter(10000));
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
