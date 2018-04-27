import md5 from '../encode/md5'
var tnUploadFile = {
  config: {
    HIDE_SEED: 'tuniu520',
    uploadFileInterface: 'https://api.tuniu.com/image/wx/upload/fb',
  },
  uploadTask: null,
  /**
   * 上传
   */
  uploadfile: function (url, openId) {
    var timestamp = Date.now();
    return new Promise((resolve, reject) => {
      tnUploadFile.uploadTask = wx.uploadFile({
        url: tnUploadFile.config.uploadFileInterface,
        filePath: url,
        name: 'photos[]',
        header: {
          fOpenId: openId,
          fTimestamp: timestamp,
          fSign: tnUploadFile.createSign(openId, timestamp),
        },
        success: function (res) {
          var objRes = JSON.parse(res.data);
          if (objRes.success) {
            resolve(objRes.data[0]);
          }
        },
        fail: function (res) {
          reject(res);
        }
      })
    });
  },
  /**
   * 生成签名，接口鉴权要用，header传参
   */
  createSign: function (openId, timestamp) {
    var str = openId + timestamp + tnUploadFile.config.HIDE_SEED;
    return md5(str);
  }
}
module.exports = {
  uploadfile: tnUploadFile.uploadfile,
  uploadTask: tnUploadFile.uploadTask
};
