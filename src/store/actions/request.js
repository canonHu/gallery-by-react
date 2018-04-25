import { createAction } from 'redux-actions'

import {
  OBTAIN_USER_INFO
} from '../types/request'

let requestUserInfo = (success, fail) => {
  const that = this

  wx.login({
    success: function(res) {
      if (res.code) {
        getOpenId(res.code, (openId) => {
          getCustomUserInfo(openId, success)
        })
      } else {
        fail(res.errMsg)
      }
    }
  });
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
          resolve && resolve(res.data.data)
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
      (userInfo) => {
        resolve(userInfo)
      },
      (errMsg) => {

      }
    )
  })
})

export {
  obtainUserInfo
}
