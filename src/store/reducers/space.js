import { handleActions } from 'redux-actions'
import {
  SPACE_HOME_USERS,
  SPACE_LIST,
  SPACE_EDITOR,
  SPACE_DETAIL
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
    let createSpace = action.payload.currentSpace

    let isNew = true
    state.spaceList.forEach((item, index) => {
      if (item.spaceId === createSpace.spaceId) {
        item.spaceName = createSpace.spaceName
        item.power = createSpace.power
        item.poiIds = createSpace.poiIds
        item.banner = createSpace.coverImageUrl
        isNew = false
      }
    })

    if (isNew === true) {
      state.spaceList.push(createSpace)
    }

    return {
      ...state,
      spaceList: state.spaceList,
    }
  },

  [SPACE_DETAIL] (state, action) {
    return {
      ...state,
      spaceDetail: action.payload
    }
  },
}, {
  users: 0,
  spaceList: [],
  spaceDetail: {}
})
