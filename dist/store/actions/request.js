'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtainUserInfo = undefined;

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _request = require('./../types/request.js');

var requestUserInfo = function requestUserInfo(_success, fail) {
  var that = undefined;

  wx.login({
    success: function success(res) {
      if (res.code) {
        getOpenId(res.code, function (openId) {
          getCustomUserInfo(openId, _success);
        });
      } else {
        fail(res.errMsg);
      }
    }
  });
};

var getCustomUserInfo = function getCustomUserInfo(openId, resolve) {
  wx.getUserInfo({
    success: function success(res) {
      wx.request({
        url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/guideUser/addUser',
        method: 'POST',
        data: {
          openId: openId,
          nickname: res.userInfo.nickName,
          headImg: res.userInfo.avatarUrl
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          resolve && resolve(res.data.data);
        },
        fail: function fail(e) {
          console.log(e);
        }
      });
    }
  });
};

var getOpenId = function getOpenId(code, resolve) {
  var appid = 'wx1e95e86f73a39f47'; //填写微信小程序appid
  var secret = '0e0068e396e3f27a475ea0f0d668cb16'; //填写微信小程序secret
  //调用request请求api转换登录凭证
  wx.request({
    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code,
    header: {
      'content-type': 'application/json'
    },
    success: function success(res) {
      resolve && resolve(res.data.openid);
    },
    fail: function fail(e) {
      console.log(e);
    },
    complete: function complete(e) {
      console.log(e);
    }
  });
};

var obtainUserInfo = (0, _reduxActions.createAction)(_request.OBTAIN_USER_INFO, function () {
  return new Promise(function (resolve) {
    requestUserInfo(function (userInfo) {
      resolve(userInfo);
    }, function (errMsg) {});
  });
});

exports.obtainUserInfo = obtainUserInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdFVzZXJJbmZvIiwic3VjY2VzcyIsImZhaWwiLCJ0aGF0Iiwid3giLCJsb2dpbiIsInJlcyIsImNvZGUiLCJnZXRPcGVuSWQiLCJvcGVuSWQiLCJnZXRDdXN0b21Vc2VySW5mbyIsImVyck1zZyIsInJlc29sdmUiLCJnZXRVc2VySW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwibmlja25hbWUiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiaGVhZEltZyIsImF2YXRhclVybCIsImhlYWRlciIsImUiLCJjb25zb2xlIiwibG9nIiwiYXBwaWQiLCJzZWNyZXQiLCJvcGVuaWQiLCJjb21wbGV0ZSIsIm9idGFpblVzZXJJbmZvIiwiUHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUlBLElBQUlBLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsUUFBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3ZDLE1BQU1DLGdCQUFOOztBQUVBQyxLQUFHQyxLQUFILENBQVM7QUFDUEosYUFBUyxpQkFBU0ssR0FBVCxFQUFjO0FBQ3JCLFVBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaQyxrQkFBVUYsSUFBSUMsSUFBZCxFQUFvQixVQUFDRSxNQUFELEVBQVk7QUFDOUJDLDRCQUFrQkQsTUFBbEIsRUFBMEJSLFFBQTFCO0FBQ0QsU0FGRDtBQUdELE9BSkQsTUFJTztBQUNMQyxhQUFLSSxJQUFJSyxNQUFUO0FBQ0Q7QUFDRjtBQVRNLEdBQVQ7QUFXRCxDQWREOztBQWdCQSxJQUFJRCxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRCxNQUFELEVBQVNHLE9BQVQsRUFBcUI7QUFDM0NSLEtBQUdTLFdBQUgsQ0FBZTtBQUNiWixXQURhLG1CQUNKSyxHQURJLEVBQ0M7QUFDWkYsU0FBR1UsT0FBSCxDQUFXO0FBQ1RDLGFBQUssMERBREk7QUFFVEMsZ0JBQVEsTUFGQztBQUdUQyxjQUFNO0FBQ0pSLGtCQUFPQSxNQURIO0FBRUpTLG9CQUFTWixJQUFJYSxRQUFKLENBQWFDLFFBRmxCO0FBR0pDLG1CQUFRZixJQUFJYSxRQUFKLENBQWFHO0FBSGpCLFNBSEc7QUFRVEMsZ0JBQVE7QUFDTiwwQkFBZ0Isa0JBRFYsQ0FDNkI7QUFEN0IsU0FSQztBQVdUdEIsaUJBQVMsaUJBQVNLLEdBQVQsRUFBYztBQUNyQk0scUJBQVdBLFFBQVFOLElBQUlXLElBQUosQ0FBU0EsSUFBakIsQ0FBWDtBQUNELFNBYlE7QUFjVGYsY0FBTSxjQUFVc0IsQ0FBVixFQUFhO0FBQ2pCQyxrQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFoQlEsT0FBWDtBQWtCRDtBQXBCWSxHQUFmO0FBc0JELENBdkJEOztBQXlCQSxJQUFJaEIsWUFBWSxTQUFaQSxTQUFZLENBQUNELElBQUQsRUFBT0ssT0FBUCxFQUFtQjtBQUNqQyxNQUFJZSxRQUFRLG9CQUFaLENBRGlDLENBQ0M7QUFDbEMsTUFBSUMsU0FBUyxrQ0FBYixDQUZpQyxDQUVnQjtBQUNqRDtBQUNBeEIsS0FBR1UsT0FBSCxDQUFXO0FBQ1RDLFNBQUssd0RBQXdEWSxLQUF4RCxHQUFnRSxVQUFoRSxHQUE2RUMsTUFBN0UsR0FBc0YseUNBQXRGLEdBQWtJckIsSUFEOUg7QUFFVGdCLFlBQVE7QUFDTixzQkFBZ0I7QUFEVixLQUZDO0FBS1R0QixhQUFTLGlCQUFVSyxHQUFWLEVBQWU7QUFDdEJNLGlCQUFXQSxRQUFRTixJQUFJVyxJQUFKLENBQVNZLE1BQWpCLENBQVg7QUFDRCxLQVBRO0FBUVQzQixVQUFNLGNBQVVzQixDQUFWLEVBQWE7QUFDakJDLGNBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELEtBVlE7QUFXVE0sY0FBVSxrQkFBVU4sQ0FBVixFQUFhO0FBQ3JCQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQWJRLEdBQVg7QUFlRCxDQW5CRDs7QUFxQkEsSUFBTU8saUJBQWlCLDJEQUErQixZQUFNO0FBQzFELFNBQU8sSUFBSUMsT0FBSixDQUFZLG1CQUFXO0FBQzVCaEMsb0JBQ0UsVUFBQ21CLFFBQUQsRUFBYztBQUNaUCxjQUFRTyxRQUFSO0FBQ0QsS0FISCxFQUlFLFVBQUNSLE1BQUQsRUFBWSxDQUVYLENBTkg7QUFRRCxHQVRNLENBQVA7QUFVRCxDQVhzQixDQUF2Qjs7UUFjRW9CLGMsR0FBQUEsYyIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcblxuaW1wb3J0IHtcbiAgT0JUQUlOX1VTRVJfSU5GT1xufSBmcm9tICcuLi90eXBlcy9yZXF1ZXN0J1xuXG5sZXQgcmVxdWVzdFVzZXJJbmZvID0gKHN1Y2Nlc3MsIGZhaWwpID0+IHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICB3eC5sb2dpbih7XG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgZ2V0T3BlbklkKHJlcy5jb2RlLCAob3BlbklkKSA9PiB7XG4gICAgICAgICAgZ2V0Q3VzdG9tVXNlckluZm8ob3BlbklkLCBzdWNjZXNzKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFpbChyZXMuZXJyTXNnKVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmxldCBnZXRDdXN0b21Vc2VySW5mbyA9IChvcGVuSWQsIHJlc29sdmUpID0+IHtcbiAgd3guZ2V0VXNlckluZm8oe1xuICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly9jbXQtdGdzcC5hcGkudHVuaXUtc3N0Lm9yZy90Z3NwL2d1aWRlVXNlci9hZGRVc2VyJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuSWQ6b3BlbklkLFxuICAgICAgICAgIG5pY2tuYW1lOnJlcy51c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgICBoZWFkSW1nOnJlcy51c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShyZXMuZGF0YS5kYXRhKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5sZXQgZ2V0T3BlbklkID0gKGNvZGUsIHJlc29sdmUpID0+IHtcbiAgdmFyIGFwcGlkID0gJ3d4MWU5NWU4NmY3M2EzOWY0Nyc7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPYXBwaWRcbiAgdmFyIHNlY3JldCA9ICcwZTAwNjhlMzk2ZTNmMjdhNDc1ZWEwZjBkNjY4Y2IxNic7IC8v5aGr5YaZ5b6u5L+h5bCP56iL5bqPc2VjcmV0XG4gIC8v6LCD55SocmVxdWVzdOivt+axgmFwaei9rOaNoueZu+W9leWHreivgVxuICB3eC5yZXF1ZXN0KHtcbiAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0nICsgYXBwaWQgKyAnJnNlY3JldD0nICsgc2VjcmV0ICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSZqc19jb2RlPScgKyBjb2RlLFxuICAgIGhlYWRlcjoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKHJlcy5kYXRhLm9wZW5pZCk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IG9idGFpblVzZXJJbmZvID0gY3JlYXRlQWN0aW9uKE9CVEFJTl9VU0VSX0lORk8sICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlcXVlc3RVc2VySW5mbyhcbiAgICAgICh1c2VySW5mbykgPT4ge1xuICAgICAgICByZXNvbHZlKHVzZXJJbmZvKVxuICAgICAgfSxcbiAgICAgIChlcnJNc2cpID0+IHtcblxuICAgICAgfVxuICAgIClcbiAgfSlcbn0pXG5cbmV4cG9ydCB7XG4gIG9idGFpblVzZXJJbmZvXG59XG4iXX0=