import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import testSlice, { testInitialState, TestState } from "./test";

export interface rootState {
  test: TestState;
}

const rootReducer = (
  state: rootState = {
    test: testInitialState,
  },
  action: AnyAction
): rootState => {
  const type = action.type;

  if (type === HYDRATE) {
    return action.payload;
  } else {
    const combineReducer = combineReducers({
      test: testSlice.reducer,
    });
    return combineReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
