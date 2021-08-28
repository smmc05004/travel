import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SurveyState } from "../../interface/survey";

const prifix = "SURVEY";

export const surveyInitialState = {
  survey: [
    {
      question: "",
      type: 0,
      options: [{ option: "" }],
    },
  ],
};

const reducer = {
  CHANGE_QUESTION: (
    state: SurveyState,
    action: PayloadAction<{ questionId: number; value: string }>
  ) => {
    const { questionId, value } = action.payload;
    state.survey[questionId].question = value;
  },
  CHANGE_OPTION: (
    state: SurveyState,
    action: PayloadAction<{
      questionId: number;
      optionId: number;
      value: string;
    }>
  ) => {
    const { questionId, optionId, value } = action.payload;
    state.survey[questionId].options[optionId].option = value;
  },
  ADD_QUESTION: (state: SurveyState) => {
    state.survey.push({
      question: "",
      type: 0,
      options: [{ option: "" }],
    });
  },
  ADD_OPTION: (
    state: SurveyState,
    action: PayloadAction<{ questionId: number }>
  ) => {
    const { questionId } = action.payload;
    state.survey[questionId].options.push({ option: "" });
  },
  DELETE_QUESTION: (
    state: SurveyState,
    action: PayloadAction<{ questionId: number }>
  ) => {
    const { questionId } = action.payload;
    state.survey.splice(questionId, 1);
  },

  DELETE_OPTION: (
    state: SurveyState,
    action: PayloadAction<{ questionId: number; optionId: number }>
  ) => {
    const { questionId, optionId } = action.payload;
    state.survey[questionId].options.splice(optionId, 1);
  },
  REQUEST_CHANGE_SURVEY: (state: SurveyState, action: PayloadAction) => {
    return {
      ...state,
    };
  },
};

const surveySlice = createSlice({
  reducers: reducer,
  initialState: surveyInitialState,
  name: prifix,
});

export default surveySlice;
