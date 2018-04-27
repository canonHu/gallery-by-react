import { createAction } from 'redux-actions'
import { request } from '../../utils/api'

import {
  SPACE_HOME_USERS,
  SPACE_LIST,
  SPACE_EDITOR,
  SPACE_DETAIL
} from '../types/space'

const getUsersCount = createAction(SPACE_HOME_USERS, (userId) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      {userId:userId},
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/users',
      (resolve, res, otherRes) => {
        if (res.data !== null) {
          resolve && resolve(res.data.users);
        }
      }
    )
  })
})

const getSpaceList = createAction(SPACE_LIST, (userId) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      {userId:userId},
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/list',
      (resolve, res, otherRes) => {
        if (res.data !== null) {
          resolve && resolve(res.data.dataList);
        }
      }
    )
  })
})

const editorNewSpace = createAction(SPACE_EDITOR, (spaceInfo) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      spaceInfo,
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/add',
      (resolve, res, otherRes) => {
        if (res.data.data !== null) {
          wx.showToast({
            title: '创建成功',
            icon: 'none',
            duration: 2000
          })
          wx.navigateBack()
          resolve && resolve({currentSpace:spaceInfo, success: res.data.data});
        }
      },
      () => {
        wx.showToast({
          title: '创建失败',
          icon: 'none',
          duration: 2000
        })
      }
    )
  })
})

const getSpaceDetail = createAction(SPACE_DETAIL, (userId, spaceId) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      {
        userId:userId,
        spaceId:spaceId
      },
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/detail',
      (resolve, res, otherRes) => {
        if (res.data !== null) {
          resolve && resolve(res.data);
        }
      }
    )
  })
})


export {
  getUsersCount,
  getSpaceList,
  editorNewSpace,
  getSpaceDetail
}
