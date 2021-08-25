import { composeWithDevTools } from "redux-devtools-extension";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer, { rootState } from "./reducers";
import rootSaga from "./sagas";

export interface SagaStore extends Store<rootState, AnyAction> {
  sagaTask?: Task;
}

const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
