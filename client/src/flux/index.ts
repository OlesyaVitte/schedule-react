import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

import todo from "./reducers/todo";
import authReducder from "./reducers/auth";
import loaderReducer from "./reducers/loader";
import toastReducer from "./reducers/toast";
import paginatorReducer from "./reducers/paginator";

import app from "./reducers/app";

const rootReducer = combineReducers({
  app: app,
  todos: todo,
  auth: authReducder,
  loader: loaderReducer,
  toast: toastReducer,
  paginator: paginatorReducer,
});
type RootReducerType = typeof rootReducer;
export type RootState = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootState,
  unknown,
  A
>;

const middleware = [thunk];
const store = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store);
