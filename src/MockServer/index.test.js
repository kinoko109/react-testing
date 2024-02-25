// import React from 'react';
// import { cleanup, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import MockServer from './index';

// const API = 'https://jsonplaceholder.typicode.com/users/1';

// const server = setupServer(
//   rest.get(API, (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }));
//   })
// );

// // このファイルの最初に実行される処理
// beforeAll(() => server.listen());

// afterEach(function () {
//   server.resetHandlers();
//   cleanup();
// });

// // このファイルの最後に実行される処理
// afterAll(() => server.close());

// describe('Mock API', () => {
//   it('', async () => {
//     render(<MockServer />);
//     userEvent.click(screen.getByRole('button'));
//     expect(await screen.findByRole('heading')).toHaveTextContent('Bred dummy');
//     expect(screen.getByRole('button')).toHaveAttribute('disabled');
//   });

//   it('', async () => {
//     server.use(
//       rest.get(API, (req, res, ctx) => {
//         return res(ctx.status(404));
//       })
//     );
//     render(<MockServer />);
//     userEvent.click(screen.getByRole('button'));
//     expect(await screen.findByTestId('error')).toHaveTextContent('Fetching Failed!');
//     expect(screen.queryByRole('heading')).toBeNull();
//     screen.debug(screen.queryByRole('heading'));
//     expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
//   });
// });

// fetchData.js
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


global.fetch = jest.fn();

describe('fetchData', () => {
  it('successfully fetches data', async () => {
    const [promise, resolve] = Promise.withResolvers();
    fetch.mockImplementation(() => promise);

    const dataPromise = fetchData('https://example.com/data');

    const mockData = { key: 'value' };
    resolve({ ok: true, json: () => mockData });

    await expect(dataPromise).resolves.toEqual(mockData);
  });

  it('handles fetch error', async () => {
    const [promise, , reject] = Promise.withResolvers();
    fetch.mockImplementation(() => promise);

    const errorPromise = fetchData('https://example.com/data');

    reject({ ok: false });

    await expect(errorPromise).rejects.toThrow('Network response was not ok');
  });
});

