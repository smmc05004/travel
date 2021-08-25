import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TestState {
  num: number;
}

const prifix = "TEST";

export const testInitialState = {
  num: 0,
};

const reducer = {
  REQUEST_ADD_CNT: (state: TestState, action: PayloadAction) => {
    return {
      ...state,
    };
  },
  ADD_COUNT: (state: TestState, action: PayloadAction) => {
    const { num } = state;
    return {
      num: num + 1,
    };
  },
};

const testSlice = createSlice({
  reducers: reducer,
  initialState: testInitialState,
  name: prifix,
});

export default testSlice;
