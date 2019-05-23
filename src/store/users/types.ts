export const GET_USERS = 'GET_USERS'
export const CREATE_USER = 'CREATE_USER'

export interface UserType {
  id: number,
  name: string,
}

export interface UsersState {
  users: UserType[]
}

interface GetUsersAction {
  type: typeof GET_USERS,
  payload: UsersState
}

interface CreateUserAction {
  type: typeof CREATE_USER,
  payload: {
    user: UserType
  }
}

export type UsersActionTypes = GetUsersAction | CreateUserAction
