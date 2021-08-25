import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import testSlice from "../../reducers/test";

function* requestAddSaga(action: PayloadAction) {
  yield put(testSlice.actions.ADD_COUNT());
}

function* testSaga() {
  const { REQUEST_ADD_CNT } = testSlice.actions;

  yield takeLatest(REQUEST_ADD_CNT, requestAddSaga);
}

export default testSaga;
