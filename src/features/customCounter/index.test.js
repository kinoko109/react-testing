import reducer, { increment, decrementm, incrementByAmount, fetchDummy } from '../customCounter/CustomCounterSlice';

describe('', () => {
  describe('', () => {
    let initialState = {
      mode: 0,
      value: 1
    };
    it('', () => {
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(3);
    });
    it('', () => {
      initialState = {
        mode: 1,
        value: 1
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(102);
    });
    it('', () => {
      initialState = {
        mode: 2,
        value: 1
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(1002);
    });
  });

  describe('', () => {
    let initialState = {
      mode: 0,
      value: 1
    };
    it('', () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it('', () => {
      initialState = {
        mode: 1,
        value: 1
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    it('', () => {
      initialState = {
        mode: 2,
        value: 1
      };
      const action = { type: incrementByAmount.type, payload: 5 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(5001);
    });
  });

  describe('extraReducers', () => {
    const initialState = {
      mode: 0,
      value: 100
    };
    it('', () => {
      const action = { type: fetchDummy.fulfilled.type, payload: 5 };
      console.log(fetchDummy.fulfilled.type);
      const state = reducer(initialState, action);
      expect(state.value).toEqual(105);
    });
    it('', () => {
      const action = { type: fetchDummy.rejected.type, payload: 100 };
      console.log(fetchDummy.rejected.type);
      const state = reducer(initialState, action);
      expect(state.value).toEqual(0);
    });
  });
});
