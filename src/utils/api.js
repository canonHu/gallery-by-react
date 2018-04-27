export const request = (resolve, reject, payload, url, successFn, failFn) => {

	wx.request({
		url: url,
		method: 'POST',
		data: payload,
		header: {
			'content-type': 'application/json' // 默认值
		},
		success: function (res) {
			if (res.data.success) {
				successFn(resolve, res.data)
			} else {
        failFn && failFn(reject, err)
      }
		},
    fail: function (err) {
      failFn && failFn(reject, err)
    }
	})
}
