import { all, takeLatest, put } from "redux-saga/effects";

import { getUsersAPI } from "../../services/api";
import * as actions from "./actions";

export function* getUsers$() {
  try {
    const users = yield getUsersAPI();
    yield put(actions.getUsersSuccess(users.data));
  } catch (error) {
    yield put(actions.getUsersFail(error));
  }
}

export default function* () {
  yield all([takeLatest(actions.GET_USERS, getUsers$)]);
}
