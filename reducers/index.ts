import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { SurveyState } from "../interface/survey";
import surveySlice, { surveyInitialState } from "./survey";
import testSlice, { testInitialState, TestState } from "./test";

export interface rootState {
  test: TestState;
  survey: SurveyState;
}

const rootReducer = (
  state: rootState = {
    test: testInitialState,
    survey: surveyInitialState,
  },
  action: AnyAction
): rootState => {
  const type = action.type;

  if (type === HYDRATE) {
    return action.payload;
  } else {
    const combineReducer = combineReducers({
      test: testSlice.reducer,
      survey: surveySlice.reducer,
    });
    return combineReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
