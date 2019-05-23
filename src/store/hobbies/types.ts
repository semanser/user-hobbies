export const GET_HOBBIES = 'GET_HOBBIES'
export const CREATE_HOBBY = 'CREATE_HOBBY'
export const REMOVE_HOBBY = 'REMOVE_HOBBY'

export interface HobbyType {
  id: number,
  text: string,
  passionLevel: number, 
  year: number,
}

export interface HobbiesListState {
  hobbies: HobbyType[]
}

interface GetHobbiesAction {
  type: typeof GET_HOBBIES,
  payload: HobbiesListState
}

interface CreateHobbieAction {
  type: typeof CREATE_HOBBY,
  payload: {
    hobby: HobbyType
  }
}

interface RemoveHobbieAction {
  type: typeof REMOVE_HOBBY,
    payload: {
      hobby: HobbyType
    }
}

export type HobbiesActionTypes = GetHobbiesAction | CreateHobbieAction | RemoveHobbieAction

