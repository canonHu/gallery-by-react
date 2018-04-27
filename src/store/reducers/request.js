import { handleActions } from 'redux-actions'
import {
  OBTAIN_USER_INFO,
  TRANSFORM_LOCATION_NAME,
  UPLOAD_IMAGE,
  ARTICLE_COLLECT_OPT,
  GET_TAG_LIST
} from '../types/request'

export default handleActions({
  [OBTAIN_USER_INFO] (state, action) {
    return {
      ...state,
      userInfo: action.payload.userInfo,
      openId: action.payload.openId
    }
  },

  [TRANSFORM_LOCATION_NAME] (state, action) {
    return {
      ...state,
      locationInfo: action.payload
    }
  },

  [UPLOAD_IMAGE] (state, action) {
    return {
      ...state,
    }
  },

  [ARTICLE_COLLECT_OPT] (state, action) {
    let tempObj = Object.assign({}, state.userInfo)
    tempObj.collectCount += action.payload
    return Object.assign({}, state, {
      userInfo: tempObj
    })
  },

  [GET_TAG_LIST] (state, action) {
    return {
      ...state,
    }
  },
}, {
  userInfo: {},
  openId: 0,
})
