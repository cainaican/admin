import { createAction, props } from "@ngrx/store";

export const setLogin = createAction(
	'[Login Page] Login',
	props<{ username: string; password: string }>()
  );