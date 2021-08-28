import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import surveySlice from "../../reducers/survey";
import testSlice from "../../reducers/test";

function* requestChangeSaga(action: PayloadAction) {
  yield put(testSlice.actions.ADD_COUNT());
}

function* surveySaga() {
  const { REQUEST_CHANGE_SURVEY } = surveySlice.actions;

  yield takeLatest(REQUEST_CHANGE_SURVEY, requestChangeSaga);
}

export default surveySaga;
