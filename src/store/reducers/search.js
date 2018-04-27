import { handleActions } from 'redux-actions'
import {
  SEARCH_POI,
  SEARCH_HOT_POI
} from '../types/search'

export default handleActions({
  [SEARCH_POI] (state, action) {
    return {
      ...state,
      poiList: action.payload.poiList
    }
  },

  [SEARCH_HOT_POI] (state, action) {
    return {
      ...state,
      hotPoiList: action.payload
    }
  }
}, {
  poiList: [],
  hotPoiList: [],
})
