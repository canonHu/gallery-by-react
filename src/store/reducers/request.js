import { handleActions } from 'redux-actions'
import {
  OBTAIN_USER_INFO
} from '../types/request'

export default handleActions({
  [OBTAIN_USER_INFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload
    }
  }
}, {
  userInfo: {}
})
