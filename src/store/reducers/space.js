import { handleActions } from 'redux-actions'
import {
  SPACE_HOME_USERS,
  SPACE_LIST,
  SPACE_EDITOR
} from '../types/space'

export default handleActions({
  [SPACE_HOME_USERS] (state, action) {
    return {
      ...state,
      users: action.payload
    }
  },

  [SPACE_LIST] (state, action) {
    return {
      ...state,
      spaceList: action.payload
    }
  },

  [SPACE_EDITOR] (state, action) {
    return {
      ...state,
      spaceList: action.payload
    }
  }
}, {
  users: 0,
  spaceList: [],
})
