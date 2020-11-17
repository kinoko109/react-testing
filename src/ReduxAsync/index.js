import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, selectUsername, fetchDummy, fetchJson } from '../features/customCounter/CustomCounterSlice';

const ReduxAsync = () => {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>Fetch Dummy</button>
      {username && <h1>{username}</h1>}
      <button onClick={() => dispatch(fetchJson())}>Fetch Json</button>
    </div>
  );
};

export default ReduxAsync;
