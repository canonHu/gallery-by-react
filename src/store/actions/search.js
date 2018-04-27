import { createAction } from 'redux-actions'
import { request } from '../../utils/api'
import utils from '../../utils/utils'
import {
  SEARCH_POI,
  SEARCH_HOT_POI
} from '../types/search'

const getPoiList = createAction(SEARCH_POI, (params) => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      params,
      'http://cmt-tgsp.api.tuniu-sst.org//tgsp/space/searchPoiList',
      (resolve, res) => {
        if (res.data && utils.haveValue(res.data.poiList) && utils.haveValue(params.keyword)) {
          res.data.poiList.forEach((item, index) => {
            if (utils.haveValue(item.name)) {
              item.styleName = utils.matchKeyword(params.keyword, item.name)
            }
          })
          resolve && resolve(res.data);
        }
      }
    )
  })
})

const getHotPoiList = createAction(SEARCH_HOT_POI, () => {
  return new Promise((resolve, reject) => {
    request(
      resolve,
      reject,
      {},
      'http://cmt-tgsp.api.tuniu-sst.org//tgsp/space/hotPoiList',
      (resolve, res) => {
        if (res.data !== null) {
          resolve && resolve(res.data.poiList);
        }
      }
    )
  })
})

export {
  getPoiList,
  getHotPoiList
}
