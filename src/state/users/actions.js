import { createAction } from "redux-actions";

export const GET_USERS = "GET_USERS";
export const getUsers = createAction(GET_USERS);

export const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);

export const GET_USERS_FAIL = `${GET_USERS}_FAIL`;
export const getUsersFail = createAction(GET_USERS_FAIL);
