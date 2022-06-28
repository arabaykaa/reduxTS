type UsersArr = {
  photo: string;
  name: string;
  phone: string;
  id: number;
};

export interface IuserState {
  users: UsersArr[];
  actual: boolean;
}
export enum userActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_ACTUAL = "FETCH_USERS_ACTUAL",
}

interface IFetchUserAction {
  type: userActionType.FETCH_USERS;
}
interface IFetchUserSuccesAction {
  type: userActionType.FETCH_USERS_ACTUAL;
  payload: any[];
}

export interface IContacts {
  photo: string;
  name: string;
  phone: string;
  id: number;
}
export type userAction = IFetchUserAction | IFetchUserSuccesAction;
