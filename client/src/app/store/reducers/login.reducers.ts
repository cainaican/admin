import { State, createReducer, on } from "@ngrx/store";
import { setLogin } from "../actions/login.actions";

export const loginFeatureKey = 'login';

export interface LoginModel {
	username: string;
	password: string;
  }

export const initialLoginState: LoginModel = {
	username: "",
	password: "",
  };

export const loginReducer = createReducer(
	initialLoginState,
	on(setLogin, (state, {password, username}) => ({ ...state, password, username })),
  );