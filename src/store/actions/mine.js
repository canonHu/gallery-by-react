import { createAction } from 'redux-actions'
import { request } from '../../utils/api'
import {
	RES_DATA,
	CHANGE_NAME
} from '../types/mine'

const changeMineName = createAction(CHANGE_NAME, payload => {
	return new Promise((resolve, reject) => {
		request(
			resolve,
			reject,
			payload,
			'http://cmt-tgsp.api.tuniu-sst.org/tgsp/guideUser/editUserNickname',
			(resolve, res) => {
				// res 接口返回的数据

				resolve(payload.nickname)
			}
		)
	})
})

const getListData = createAction(RES_DATA, (payload, otherRes) => {
	return new Promise((resolve, reject) => {
		const payloads = {
			payload,
			name: otherRes
		}
		resolve(payloads)
	})
})

export {
	getListData,
	changeMineName
}
