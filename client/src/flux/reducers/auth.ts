import userApi from "../../api/user";

import { ResultCodes } from "../../types/api";
import { AuthActions, LoaderActions } from "../actions";
import toastActions from "../actions/toast";
import { InferActionsTypes, ThunkType } from "../index";
import { UserType } from "../../types";

export const initialState = {
  user: null as null | UserType,
  loggedIn: false,
  token: "" as string | null,
};
type State = typeof initialState;
type Actions = InferActionsTypes<
  typeof AuthActions & typeof LoaderActions & typeof toastActions
>;
type T = ThunkType<Actions>;

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case "AUTH/SET_AUTH_USER":
      return {
        ...state,
        user: action.user,
        token: action.token,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};
export const getAuthUser = (): T => async (dispatch) => {
  const data = await userApi.getAuthUser();
  if (data.resultCode === ResultCodes.Success)
    dispatch(AuthActions.setAuthUser(true, data.token, data.user));
  else {
    dispatch(toastActions.setToast(true, "toast-danger", data.message));
  }
};

export const register =
  (name: string, surname: string, email: string, password: string): T =>
  async (dispatch: any) => {
    dispatch(LoaderActions.toggleIsLoading(true));
    const data = await userApi.register(name, surname, email, password);
    dispatch(LoaderActions.toggleIsLoading(false));
    if (data.resultCode === ResultCodes.Success) {
      dispatch(toastActions.setToast(true, "toast-success", data.message));
    } else {
      dispatch(LoaderActions.toggleIsLoading(false));
      dispatch(toastActions.setToast(true, "toast-danger", data.message));
    }
  };
export const login =
  (email: string, password: string): T =>
  async (dispatch: any) => {
    console.log("login");
    dispatch(LoaderActions.toggleIsLoading(true));
    const data = await userApi.login(email, password);
    console.log("login", data);
    dispatch(LoaderActions.toggleIsLoading(false));
    if (data.resultCode === ResultCodes.Success) dispatch(getAuthUser());
    else {
      dispatch(LoaderActions.toggleIsLoading(false));
      dispatch(toastActions.setToast(true, "toast-danger", data.message));
    }
  };

export const logout = (): T => async (dispatch) => {
  dispatch(LoaderActions.toggleIsLoading(true));
  const data = await userApi.logout();
  debugger;
  if (data.resultCode === ResultCodes.Success) {
    dispatch(AuthActions.setAuthUser(false, null, null));
    dispatch(toastActions.setToast(true, "toast-success", data.message));
  } else dispatch(toastActions.setToast(true, "toast-danger", data.message));
  dispatch(LoaderActions.toggleIsLoading(false));
};
