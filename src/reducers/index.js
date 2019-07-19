import { combineReducers } from 'redux'
import events from './events'
import operationLogs from './operationLogs'
//import counter from './counter'

export default combineReducers({
  events,
  operationLogs
})