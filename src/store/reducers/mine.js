import { handleActions } from 'redux-actions'
import wepy from 'wepy'
import { CHANGE_NAME, RES_DATA, CANCEL } from '../types/mine'

// 模拟数据
import { responseCollection } from '../../mixins/testJson'

let jsonData = res => {
  let dataList = res.data.list
  dataList.forEach((item, i) => {
    item.flag = true
    item.imageNumber = 0
    item.imagesList = []
    item.elementContent = ''
    item.imagesNumberFlag = false
  })

  dataList.forEach((detail, j) => {
    detail.elements.forEach((item, i) => {
      if (item.elementId === 0) {
        detail.elementContent = item.content
      } else if (item.elementId === 1) {
        item.imgs.forEach((value, index) => {
          detail.imageNumber++
          if (detail.imagesList.length < 3) {
            detail.imagesList.push(value.imgUrl)
            if (detail.imagesList.length === 3) {
              detail.imagesNumberFlag = true
            }
          } else {
            detail.imagesNumberFlag = true
          }
        })
      }
    })
  })

  return dataList
}

const mutations = {
  [CHANGE_NAME](state, action) {
    
    return {
      ...state,
      nickName: action.payload
    }
  },

  [RES_DATA](state, action) {
    let dataList = []
    if (responseCollection.success) {
      dataList = jsonData(responseCollection)
    }

    return {
      ...state,
      resList: dataList
    }
  },

  [CANCEL](state, action) {
    wx.showToast({
      title: '删除成功',
      icon: 'none',
      duration: 2000
    })

    return {
      ...state
    }
  }
}

const changeState = {
  nickName: '',
  resList: null
}

export default handleActions(mutations, changeState)
