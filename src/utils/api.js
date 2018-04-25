export const request = (resolve, reject, payload, url, successFn) => {
	wx.request({
		url: url,
		method: 'POST',
		data: payload,
		header: {
			'content-type': 'application/json' // 默认值
		},
		success: function (res) {
			if (res.data.success) {
				successFn(resolve, res, payload.nickname)
			}
		}
	})
}