import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const sleep = (sec) => {
  const start = new Date();
  while (new Date() - start < sec);
};

export const fetchDummy = createAsyncThunk('fetch/dummy', async (num) => {
  await sleep(3000);
  return num;
});

export const fetchJson = createAsyncThunk('fetch/api', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  // throw new Error();
  // console.log(res);
  const { username } = res.data;
  return username;
});

export const customCounterSlice = createSlice({
  name: 'customCounter',
  initialState: {
    mode: 0,
    value: 0,
    username: ''
  },
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 1000;
          break;
        default:
          state.value += 1;
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 1000 * action.payload;
          break;
        default:
          break;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      console.log(action.type);
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchDummy.rejected, (state, action) => {
      state.value = 100 - action.payload;
    });
    builder.addCase(fetchJson.fulfilled, (state, action) => {
      state.username = action.payload;
    });
    builder.addCase(fetchJson.rejected, (state, action) => {
      state.username = 'fail';
    });
  }
});

export const { increment, decrement, incrementByAmount } = customCounterSlice.actions;

export const selectCount = (state) => state.customCounter.value;
export const selectUsername = (state) => state.customCounter.username;

export default customCounterSlice.reducer;
