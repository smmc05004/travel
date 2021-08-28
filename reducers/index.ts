import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { SurveyState } from "../interface/survey";
import surveySlice, { surveyInitialState } from "./survey";

export interface rootState {
  survey: SurveyState;
}

const rootReducer = (
  state: rootState = {
    survey: surveyInitialState,
  },
  action: AnyAction
): rootState => {
  const type = action.type;

  if (type === HYDRATE) {
    return action.payload;
  } else {
    const combineReducer = combineReducers({
      survey: surveySlice.reducer,
    });
    return combineReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
