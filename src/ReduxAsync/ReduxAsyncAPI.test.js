import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import customCounterReducer from '../features/customCounter/CustomCounterSlice';

import ReduxAsync from './index';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'Bred dummy'
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('Redux Async API Mock', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer
      }
    });
  });

  it('Fetch Success', async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole('heading')).toBeNull();

    userEvent.click(screen.getByText('Fetch Json'));
    expect(await screen.findByText('Bred dummy')).toBeInTheDocument();
  });

  it('Fetch Failed', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );

    userEvent.click(screen.getByText('Fetch Json'));
    expect(await screen.findByText('fail')).toBeInTheDocument();
  });
});
