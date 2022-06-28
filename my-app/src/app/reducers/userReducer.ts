import { IuserState, userAction, userActionType } from "./types/users";

const initialState: IuserState = {
  users: [],
  actual: false,
};

export const userReducer = (
  state = initialState,
  action: userAction
): IuserState => {
  switch (action.type) {
    case userActionType.FETCH_USERS:
      return { actual: true, users: [] };
    case userActionType.FETCH_USERS_ACTUAL:
      return { actual: true, users: action.payload };
    default:
      return state;
  }
};
