import { createAction } from 'redux-actions'
import { request } from '../../utils/api'
import {
	CHANGE_NAME
} from '../types/mine'

const changeMineName = createAction(CHANGE_NAME, (payload) => {
	return new Promise((resolve, reject) => {
		request(
			resolve,
			reject,
			payload,
			'http://cmt-tgsp.api.tuniu-sst.org/tgsp/guideUser/editUserNickname',
			(resolve, res, otherRes) => {
				// res 接口返回的数据
				// otherRes 你自己传入的数据
				
				resolve(otherRes)
			}
		)
	})
})

export {
	changeMineName
}
