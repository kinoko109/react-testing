import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import Redux from './index';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from '../features/customCounter/CustomCounterSlice';

afterEach(() => {
  cleanup();
});

describe('integration test', () => {
  // test用のstoreを用意
  let store;
  // testが走る前にstoreを作成
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer
      }
    });
  });

  it('increment', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(3);
  });

  it('decrement', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(-2);
  });

  it('incrementByAmount', () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText('Enter'), '30');
    userEvent.click(screen.getByText('incrementByAmount'));
    expect(screen.getByTestId('count-value')).toHaveTextContent(30);
  });
});
