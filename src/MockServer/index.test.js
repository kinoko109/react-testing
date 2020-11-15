import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockServer from './index';

const API = 'https://jsonplaceholder.typicode.com/users/1';

const server = setupServer(
  rest.get(API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
  })
);

// このファイルの最初に実行される処理
beforeAll(() => server.listen());

afterEach(function () {
  server.resetHandlers();
  cleanup();
});

// このファイルの最後に実行される処理
afterAll(() => server.close());

describe('Mock API', () => {
  it('', async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('heading')).toHaveTextContent('Bred dummy');
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('', async () => {
    server.use(
      rest.get(API, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<MockServer />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByTestId('error')).toHaveTextContent('Fetching Failed!');
    expect(screen.queryByRole('heading')).toBeNull();
    screen.debug(screen.queryByRole('heading'));
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });
});
