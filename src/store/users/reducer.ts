import {
  CREATE_USER,
  GET_USERS,
  UserType,
  UsersActionTypes,
} from './types'

const defaultState : UserType[] = []

export default (state = defaultState, action: UsersActionTypes) => {
  switch(action.type) {
    case GET_USERS: {
      return action.payload.users
    }

    case CREATE_USER: {
      return [...state, action.payload.user]
    }

    default: return state
  }
}
