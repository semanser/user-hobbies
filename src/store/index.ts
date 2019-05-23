import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import users from './users/reducer'
import hobbies from './hobbies/reducer'

const combinedReducer = combineReducers({
  users,
  hobbies,
})

const store = createStore(combinedReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store

