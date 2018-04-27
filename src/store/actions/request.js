import { createAction } from 'redux-actions'
import { request } from '../../utils/api'

import {
  OBTAIN_USER_INFO,
  TRANSFORM_LOCATION_NAME,
  UPLOAD_IMAGE,
  ARTICLE_COLLECT_OPT,
  GET_TAG_LIST
} from '../types/request'

import { uploadfile } from '../../utils/uploadfile/'

let requestUserInfo = (success, fail) => {
  const that = this

  wx.login({
    success: function(res) {
      if (res.code) {
        getOpenId(res.code, (openId) => {
          checkAuthority(openId, success)
        })
      } else {
        fail(res.errMsg)
      }
    }
  });
}

let checkAuthority = (openId, success) => {
  wx.getSetting({
    success(res) {
      // if (!res.authSetting['scope.userLocation']) {
      //   wx.authorize({
      //     scope: 'scope.userLocation',
      //     success() {
      //
      //     },
      //     fail() {
      //
      //     }
      //   })
      // }

      if (!res.authSetting['scope.userInfo']) {
        wx.authorize({
          scope: 'scope.userInfo',
          success() {
            getCustomUserInfo(openId, success)
          },
          fail() {
            wx.reLaunch({url: '../../../pages/error/authority-fail/index'})
          }
        })
      } else {
        getCustomUserInfo(openId, success)
      }
    }
  })
}

let getCustomUserInfo = (openId, resolve) => {

  wx.getUserInfo({
    success (res) {
      wx.request({
        url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/guideUser/addUser',
        method: 'POST',
        data: {
          openId:openId,
          nickname:res.userInfo.nickName,
          headImg:res.userInfo.avatarUrl,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if (res.data.success === true) {
            resolve && resolve(openId, res.data.data)
          } else {
            wx.showToast({
              title: '登录失败！',
              icon: 'none',
              mask: true,
              duration: 2000,
              complete: () => {
                setTimeout(() => {
                  wx.navigateBack()
                }, 2000)
              }
            })
          }
        },
        fail: function (e) {
          console.log(e)
        }
      })
    }
  })
}

let getOpenId = (code, resolve) => {
  var appid = 'wx1e95e86f73a39f47'; //填写微信小程序appid
  var secret = '0e0068e396e3f27a475ea0f0d668cb16'; //填写微信小程序secret
  //调用request请求api转换登录凭证
  wx.request({
    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      resolve && resolve(res.data.openid);
    },
    fail: function (e) {
      console.log(e)
    },
    complete: function (e) {
      console.log(e)
    }
  })
}

const obtainUserInfo = createAction(OBTAIN_USER_INFO, () => {
  return new Promise(resolve => {
    requestUserInfo(
      (openId, userInfo) => {
        resolve({openId, userInfo})
      },
      (errMsg) => {

      }
    )
  })
})


const transformLocationName = createAction(TRANSFORM_LOCATION_NAME, (lat, lng) => {
  return new Promise(resolve => {
    wx.request({
      url: `http://api.tuniu.com/community/mate/poiList?{"gpsType":1,"keyword":"","searchType":4,"distance":10,"page":1,"limit":1,"lat":${lat},"lng":${lng}}`,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.data !== null && res.data.data.poiList.length > 0) {
          resolve && resolve(res.data.data.poiList[0]);
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

const uploadImage = createAction(UPLOAD_IMAGE, (filePath, openId) => {
  return new Promise(resolve => {
    uploadfile(filePath, openId).then((res) => {
      resolve && resolve(res)
    })
  })
})

const changCollect = createAction(ARTICLE_COLLECT_OPT, (increaseNum) => {
  return new Promise(resolve => {
    resolve && resolve(increaseNum)
  })
})

const getTagList = createAction(GET_TAG_LIST, () => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      {cacheCategory:2, cacheKey: 'tableList01'},
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/staticConfig/getStatConfigByKey',
      (resolve, res, otherRes) => {
        if (res.data !== null && res.data.cacheValue !== null) {
          let tags = JSON.stringify(res.data.cacheValue)
          resolve && resolve(tags);
        }
      }
    )
  })
})

export {
  obtainUserInfo,
  transformLocationName,
  uploadImage,
  changCollect,
  getTagList
}
