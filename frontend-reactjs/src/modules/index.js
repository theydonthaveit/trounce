import { combineReducers } from 'redux'
import counter from './counter'
import postcode from './postcode'

export default combineReducers({
  counter,
  postcode
})
