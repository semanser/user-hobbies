import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  CREATE_USER,
  GET_USERS,
  UsersActionTypes,
} from './types'
import axios from '../../mocks/axios'

export const getUsers = (): ThunkAction<Promise<void>, {}, {}, UsersActionTypes> => 
  async (dispatch: ThunkDispatch<{}, {}, UsersActionTypes>): Promise<void> => {
    axios.get('/users')
      .then((response: any) => 
        dispatch({
          type: GET_USERS,
          payload: {
            users: response.data
          }
        })
      )
    }
   
export const createUser = (name: string): ThunkAction<Promise<void>, {}, {}, UsersActionTypes> => 
  async (dispatch: ThunkDispatch<{}, {}, UsersActionTypes>): Promise<void> => {
    axios.post('/users', { name })
      .then((response: any) => 
        dispatch({
          type: CREATE_USER,
          payload: {
            user: response.data
          }
        })
      )
  }
