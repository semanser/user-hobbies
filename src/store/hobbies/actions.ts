import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  CREATE_HOBBY,
  GET_HOBBIES,
  HobbiesActionTypes,
  HobbyType,
  REMOVE_HOBBY,
} from './types'
import axios from '../../mocks/axios'

export const getHobbies = (id: number): ThunkAction<Promise<void>, {}, {}, HobbiesActionTypes> => 
  async (dispatch: ThunkDispatch<{}, {}, HobbiesActionTypes>): Promise<void> => {
    axios.get(`/hobbies/${id}`)
      .then((response: any) => 
        dispatch({
          type: GET_HOBBIES,
          payload: {
            hobbies: response.data
          }
        })
      )
  }

export const createHobby = (hobby: HobbyType): ThunkAction<Promise<void>, {}, {}, HobbiesActionTypes> => 
  async (dispatch: ThunkDispatch<{}, {}, HobbiesActionTypes>): Promise<void> => {
    axios.post('/hobbies', { ...hobby })
      .then((response: any) => 
        dispatch({
          type: CREATE_HOBBY,
          payload: {
            hobby: response.data
          }
        })
      )
  }

export const removeHobby = (hobby: HobbyType): ThunkAction<Promise<void>, {}, {}, HobbiesActionTypes> => 
  async (dispatch: ThunkDispatch<{}, {}, HobbiesActionTypes>): Promise<void> => {
    axios.delete(`/hobbies/${hobby.id}`)
      .then((response: any) => 
        dispatch({
          type: REMOVE_HOBBY,
          payload: {
            hobby: response.data
          }
        })
      )
  }
