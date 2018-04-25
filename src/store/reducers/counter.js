import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_NAME } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [CHANGE_NAME] (state, action) {
    wx.navigateBack()
    
    return {
      ...state,
      nickName: action.payload.source.data.name
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  nickName: ''
})