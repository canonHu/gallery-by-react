import { handleActions } from 'redux-actions'
import {
  CHANGE_PARAGRAGH_DATA,
  CHANGE_CONTENT_TITLE,
  CHANGE_CONTENT_POI_LIST,
  CHANGE_CONTENT_TAG_LIST,
  EDITOR_CONTENT_CLEAR
} from '../types/editor'


let constructElementInfo = data => {
  let element
  switch (data.elementType) {
    case 0:
    {
      element = {
        elementType: 0,
        title: data.title,
        content: data.content,
        elementId: data.elementId,
      }
    }
      break
    case 1:
    {
      element = {
        elementType: 1,
        imgs: data.imgs,
        elementId: data.elementId,
      }
    }
      break
    default:
      break
  }

  return element
}

export default handleActions({
  [EDITOR_CONTENT_CLEAR] (state, action) {
    return {
      ...state,
      title: '',
      contents: [],
      poiList: [],
      tagList: [],
    }
  },
  [CHANGE_PARAGRAGH_DATA] (state, action) {

    let data = action.payload !== undefined ? action.payload.source.data : action.element

    if(data.elementType === 0) {
      if (data.content.length <= 0) {
        wx.showToast({
          title: '没有填正文',
          icon: 'none',
          duration: 2000
        })

        return
      } else {
        wx.navigateBack()
      }
    }

    let element = constructElementInfo(data)

    if (data.isEditor === true) {
      state.contents[element.elementId] = element
    } else if (state.contents.length === element.elementId) {
      state.contents.push(element)
    } else {
      state.contents.splice(element.elementId, 0, element)
    }

    return {
      ...state,
      contents: state.contents
    }
  },

  [CHANGE_CONTENT_TITLE] (state, action) {
    let title = state.title
    if (action.payload.source.data.title.length <= 0) {
      wx.showToast({
        title: '标题不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      title = action.payload.source.data.title

      if (action.payload.source.data.isEditor === true) {
        wx.navigateBack()
      } else {
        wx.redirectTo({
          url: `../content-editor/index?type=${action.payload.source.data.type}&spacePois=${action.payload.source.data.spacePois}`
        })
      }
    }

    return {
      ...state,
      title: title
    }
  },

  [CHANGE_CONTENT_POI_LIST] (state, action) {
    return {
      ...state,
      poiList: action.poiList
    }
  },

  [CHANGE_CONTENT_TAG_LIST] (state, action) {
    return {
      ...state,
      tagList: action.tagList
    }
  }
}, {
  title: '',
  contents: [],
  poiList: [],
  tagList: [],
})
