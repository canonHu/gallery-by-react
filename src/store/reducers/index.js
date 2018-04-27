import { combineReducers } from 'redux'
import counter from './counter'
import mine from './mine'
import editor from './editor'
import request from './request'
import space from './space'
import search from './search'

export default combineReducers({
  counter,
  mine,
  editor,
  request,
  space,
  search
})
