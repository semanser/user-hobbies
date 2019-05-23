import {
  CREATE_HOBBY,
  GET_HOBBIES,
  HobbiesActionTypes,
  HobbyType,
  REMOVE_HOBBY,
} from './types'

const defaultState : HobbyType[] = []

export default (state = defaultState, action: HobbiesActionTypes) => {
  switch(action.type) {
    case GET_HOBBIES: {
      return action.payload.hobbies
    }

    case CREATE_HOBBY: {
      return [...state, action.payload.hobby]
    }
    
    case REMOVE_HOBBY: {
      return state.filter(hobby => hobby.id !== action.payload.hobby.id)
    }

    default: return state
  }
}

