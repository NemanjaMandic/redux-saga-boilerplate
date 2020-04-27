import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: true,
        },
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          inProgress: false,
          data: payload,
        },
      };
    case actions.GET_USERS_FAIL:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
