import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import ReduxAsync from './index';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from '../features/customCounter/CustomCounterSlice';

afterEach(() => {
  cleanup();
});

describe('async test', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer
      }
    });
  });

  it('fetchDummy async function', async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    userEvent.click(screen.getByText('Fetch Dummy'));
    expect(await screen.findByTestId('count-value')).toHaveTextContent('105');
  });
});
