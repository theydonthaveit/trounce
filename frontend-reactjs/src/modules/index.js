import { combineReducers } from 'redux'
import counter from './counter'
import postcode from './postcode'
import region from './region'
import accountName from './accountName'


export default combineReducers({
  counter,
  postcode,
  region,
  accountName
})
