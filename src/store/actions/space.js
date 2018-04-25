import { createAction } from 'redux-actions'

import {
  SPACE_HOME_USERS,
  SPACE_LIST,
  SPACE_EDITOR
} from '../types/space'

const getUsersCount = createAction(SPACE_HOME_USERS, (userId) => {
  return new Promise(resolve => {
    wx.request({
      url: `http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/users?{"userId":${userId}}`,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.data !== null) {
          resolve && resolve(res.data.data.users);
        }
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function (e) {
        console.log(e)
      }
    })
  })
})

const getSpaceList = createAction(SPACE_LIST, (userId) => {
  return new Promise(resolve => {
    wx.request({
      url: `http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/list?{"userId":${userId}}`,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.data !== null) {
          resolve && resolve(res.data.data.dataList);
        }
      },
      fail: function (e) {
        console.log(e)
      },
      complete: function (e) {
        console.log(e)
      }
    })
  })
})

const editorNewSpace = createAction(SPACE_EDITOR, (spaceInfo) => {
  return new Promise(resolve => {
    wx.request({
      url: `http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/add`,
      method: 'POST',
      data: spaceInfo,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.data !== null) {
          wx.showToast({
            title: '创建成功',
            icon: 'none',
            duration: 2000
          })
          wx.navigateBack()
          resolve && resolve(res.data.data.dataList);
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '创建失败',
          icon: 'none',
          duration: 2000
        })
        console.log(e)
      },
      complete: function (e) {
        console.log(e)
      }
    })
  })
})

export {
  getUsersCount,
  getSpaceList,
  editorNewSpace
}
