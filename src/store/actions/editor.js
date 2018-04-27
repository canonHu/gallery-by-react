import { createAction } from 'redux-actions'
import { request } from '../../utils/api'

import {
  PUBLISH_ARTICLE,
  ARTICLE_DETAIL
} from '../types/editor'

const publishArticle = createAction(PUBLISH_ARTICLE, (experienceInfo) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      experienceInfo,
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/article/publishArticle',
      (resolve, res, otherRes) => {
        if (res.data !== null) {
          resolve && resolve(res.data);
          wx.showToast({
            title: '发布成功',
            icon: 'none',
            mask: true,
            duration: 2000,
            complete: () => {
              setTimeout(() => {
                wx.navigateBack()
              }, 1500)
            }
          })
        }
      },
      () => {
        wx.showToast({
          title: '发布失败！',
          icon: 'none',
          mask: true,
          duration: 2000
        })
      }
    )
  })
})

const getArticleDetail = createAction(ARTICLE_DETAIL, (params) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      params,
      'http://cmt-tgsp.api.tuniu-sst.org/tgsp/article/getArticleInfo',
      (resolve, res) => {
        if (res.data !== null) {
          resolve && resolve(res.data);
        }
      },
      () => {
      }
    )
  })
})

export {
  publishArticle,
  getArticleDetail
}
