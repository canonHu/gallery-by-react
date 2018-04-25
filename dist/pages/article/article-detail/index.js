'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _articleElement = require('./../../../components/article-element.js');

var _articleElement2 = _interopRequireDefault(_articleElement);

var _actionsBottom = require('./../../../components/actions-bottom.js');

var _actionsBottom2 = _interopRequireDefault(_actionsBottom);

var _poiBottom = require('./../../../components/poi-bottom.js');

var _poiBottom2 = _interopRequireDefault(_poiBottom);

var _alertList = require('./../../../components/alert-list.js');

var _alertList2 = _interopRequireDefault(_alertList);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../../store/actions/index.js');

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '旅行心得'
    }, _this.data = {
      id: 0,
      articleItem: Object,
      poiList: [],

      isAuthor: false,
      userId: 0,
      isCollect: false,
      store: (0, _wepyRedux.getStore)(),

      showAlert: false,
      currentAlertSource: ['编辑', '删除'],
      currentAlertSourceCount: 2,
      currentAlertSelectStyle: true,
      currentSelectIndex: 0,
      showAlertOffset: 0,

      shareText: '分享',
      shareIcon: '../../../images/tn-wx-share.png',
      shareNum: 633,

      collectText: '收藏',
      collectIcon: '../../../images/tn-wx-collect-false.png',
      collectNum: 63,

      spaceText: '添加到空间',
      spaceIcon: '../../../images/tn-wx-article-addtospace.png',
      spaceNum: 3
    }, _this.computed = {}, _this.$repeat = { "articleItem": { "com": "elementitem", "props": "data" } }, _this.$props = { "elementitem": { "xmlns:v-bind": { "value": "", "for": "articleItem.elements", "item": "item", "index": "index", "key": "index" }, "v-bind:data.once": { "value": "item", "type": "item", "for": "articleItem.elements", "item": "item", "index": "index", "key": "index" } }, "shareBottom": { "v-bind:icon.once": "shareIcon", "v-bind:name.once": "shareText", "v-bind:number.sync": "shareNum", "xmlns:v-on": "" }, "collectBottom": { "v-bind:icon.sync": "collectIcon", "v-bind:name.once": "collectText", "v-bind:number.sync": "collectNum" }, "spaceBottom": { "v-bind:icon.once": "spaceIcon", "v-bind:name.once": "spaceText", "v-bind:number.sync": "spaceNum" }, "poiBottom": { "v-bind:poiList.sync": "poiList" }, "alertlist": { "v-bind:items.sync": "currentAlertSource", "v-bind:syncOffsetY.sync": "showAlertOffset", "v-bind:showSelectStyle.sync": "currentAlertSelectStyle", "v-bind:currentSelect.sync": "currentSort", "v-bind:totalCount.sync": "currentAlertSourceCount" } }, _this.$events = { "shareBottom": { "v-on:clickBottom": "clickBottom" }, "collectBottom": { "v-on:clickBottom": "clickBottom" }, "spaceBottom": { "v-on:clickBottom": "clickBottom" }, "alertlist": { "v-on:clickedAlertItem": "clickedAlertItem" } }, _this.components = {
      elementitem: _articleElement2.default,
      shareBottom: _actionsBottom2.default,
      collectBottom: _actionsBottom2.default,
      spaceBottom: _actionsBottom2.default,
      poiBottom: _poiBottom2.default,
      alertlist: _alertList2.default
    }, _this.methods = {
      clickMore: function clickMore(num) {
        this.showAlert = true;
        this.showAlertOffset = num.currentTarget.offsetTop + 7;
        this.$apply();
      },
      clickBottom: function clickBottom(opt) {
        switch (opt.name) {
          case this.shareText:
            break;
          case this.collectText:
            this.isCollect = !this.isCollect;
            this.setCollectIcon(false);
            break;
          case this.spaceText:
            this.$navigate('../../space/space-list/index?addSpace=true', {});
            break;
          default:
            break;
        }
      },
      clickedMaskBack: function clickedMaskBack() {
        this.showAlert = false;
      },
      clickedAlertItem: function clickedAlertItem(num, evt) {
        var index = num.index;
        var self = this;
        switch (index) {
          case 0:
            // 编辑
            break;
          case 1:
            // 删除
            wx.showModal({
              title: '提示',
              content: '是否确认删除该旅行心得，删除后不可恢复',
              success: function success(res) {
                if (res.confirm) {
                  wx.showToast({
                    title: '心得已删除',
                    icon: 'none',
                    duration: 2000
                  });
                  setTimeout(function () {
                    self.$back();
                  }, 2000);
                } else if (res.cancel) {}
              }
            });
            break;
          default:
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(opts) {
      if (!opts || opts.id === 0) {
        return;
      }
      var self = this;
      this.id = opts.id;

      this.isAuthor = true;
      this.articleItem = _test2.default.testSpaceListData[0];
      this.poiList = this.articleItem.poiList;
      this.$apply();

      this.setCollectIcon(true);

      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success: function success() {
                self.store.dispatch(_actions.obtainUserInfo.apply()).then(function (e) {
                  self.setUserId();
                });
              },
              fail: function fail() {
                wx.reLaunch({ url: '../../error/authority-fail/index' });
              }
            });
          } else {
            self.store.dispatch(_actions.obtainUserInfo.apply()).then(function (e) {
              self.setUserId();
            });
          }
        }
      });
    }
  }, {
    key: 'setUserId',
    value: function setUserId() {
      var store = (0, _wepyRedux.getStore)();
      var state = store.getState();
      this.userId = state.request.userInfo.userId;
      console.log(this.userId);
      if (this.articleItem.userInfo.userId === this.userId) {
        this.isAuthor = true;
      } else {
        this.isAuthor = false;
      }
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      var self = this;
      var shareObj = {
        title: '你想知道的都在这里',
        path: '/pages/article/article-detail/index?id=' + this.id,
        success: function success(res) {
          if (res.errMsg === 'shareAppMessage:ok') {
            self.shareNum = self.shareNum + 1;
            self.$apply();
          }
        },
        fail: function fail(res) {
          // 转发失败之后的回调
          if (res.errMsg === 'shareAppMessage:fail cancel') {
            // 用户取消转发
          } else if (res.errMsg === 'shareAppMessage:fail') {
            // 转发失败，其中 detail message 为详细失败信息
          }
        },
        complete: function complete() {}
      };
      return shareObj;
    }
  }, {
    key: 'setCollectIcon',
    value: function setCollectIcon(isInit) {
      if (this.isCollect) {
        this.collectIcon = '../../../images/tn-wx-collect-true.png';
        if (!isInit) {
          this.collectNum = this.collectNum + 1;
          wx.showToast({
            title: '收藏成功',
            icon: 'none',
            duration: 2000
          });
        }
      } else {
        this.collectIcon = '../../../images/tn-wx-collect-false.png';
        if (!isInit) {
          this.collectNum = this.collectNum - 1;
          wx.showToast({
            title: '取消收藏',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }
  }, {
    key: 'addSpace',
    value: function addSpace(spaceList) {
      var self = this;
      var data = {
        originId: [this.id],
        spaceId: spaceList,
        userId: this.userId,
        type: this.isAuthor ? 0 : 1
      };
      wx.request({
        url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/articleMove?' + JSON.stringify(data),
        success: function success(res) {
          var response = res.data;
          if (response.success && response.data && response.data.res) {
            wx.showToast({
              title: '添加成功',
              icon: 'none',
              duration: 2000
            });
            self.spaceNum = self.spaceNum + spaceList.length;
            self.$apply();
          } else {
            wx.showToast({
              title: '添加失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function fail(e) {
          console.log(e);
          wx.showToast({
            title: '添加失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/article/article-detail/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImlkIiwiYXJ0aWNsZUl0ZW0iLCJPYmplY3QiLCJwb2lMaXN0IiwiaXNBdXRob3IiLCJ1c2VySWQiLCJpc0NvbGxlY3QiLCJzdG9yZSIsInNob3dBbGVydCIsImN1cnJlbnRBbGVydFNvdXJjZSIsImN1cnJlbnRBbGVydFNvdXJjZUNvdW50IiwiY3VycmVudEFsZXJ0U2VsZWN0U3R5bGUiLCJjdXJyZW50U2VsZWN0SW5kZXgiLCJzaG93QWxlcnRPZmZzZXQiLCJzaGFyZVRleHQiLCJzaGFyZUljb24iLCJzaGFyZU51bSIsImNvbGxlY3RUZXh0IiwiY29sbGVjdEljb24iLCJjb2xsZWN0TnVtIiwic3BhY2VUZXh0Iiwic3BhY2VJY29uIiwic3BhY2VOdW0iLCJjb21wdXRlZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVsZW1lbnRpdGVtIiwic2hhcmVCb3R0b20iLCJjb2xsZWN0Qm90dG9tIiwic3BhY2VCb3R0b20iLCJwb2lCb3R0b20iLCJhbGVydGxpc3QiLCJtZXRob2RzIiwiY2xpY2tNb3JlIiwibnVtIiwiY3VycmVudFRhcmdldCIsIm9mZnNldFRvcCIsIiRhcHBseSIsImNsaWNrQm90dG9tIiwib3B0IiwibmFtZSIsInNldENvbGxlY3RJY29uIiwiJG5hdmlnYXRlIiwiY2xpY2tlZE1hc2tCYWNrIiwiY2xpY2tlZEFsZXJ0SXRlbSIsImV2dCIsImluZGV4Iiwic2VsZiIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwiJGJhY2siLCJjYW5jZWwiLCJvcHRzIiwidGVzdFNwYWNlTGlzdERhdGEiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJhdXRob3JpemUiLCJzY29wZSIsImRpc3BhdGNoIiwiYXBwbHkiLCJ0aGVuIiwiZSIsInNldFVzZXJJZCIsImZhaWwiLCJyZUxhdW5jaCIsInVybCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyZXF1ZXN0IiwidXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInNoYXJlT2JqIiwicGF0aCIsImVyck1zZyIsImNvbXBsZXRlIiwiaXNJbml0Iiwic3BhY2VMaXN0Iiwib3JpZ2luSWQiLCJzcGFjZUlkIiwidHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBTVRDLEksR0FBTztBQUNMQyxVQUFJLENBREM7QUFFTEMsbUJBQWFDLE1BRlI7QUFHTEMsZUFBUyxFQUhKOztBQUtMQyxnQkFBVSxLQUxMO0FBTUxDLGNBQVEsQ0FOSDtBQU9MQyxpQkFBVyxLQVBOO0FBUUxDLGFBQU8sMEJBUkY7O0FBVUxDLGlCQUFXLEtBVk47QUFXTEMsMEJBQW9CLENBQ2xCLElBRGtCLEVBRWxCLElBRmtCLENBWGY7QUFlTEMsK0JBQXlCLENBZnBCO0FBZ0JMQywrQkFBeUIsSUFoQnBCO0FBaUJMQywwQkFBb0IsQ0FqQmY7QUFrQkxDLHVCQUFpQixDQWxCWjs7QUFvQkxDLGlCQUFXLElBcEJOO0FBcUJMQyxpQkFBVyxpQ0FyQk47QUFzQkxDLGdCQUFVLEdBdEJMOztBQXdCTEMsbUJBQWEsSUF4QlI7QUF5QkxDLG1CQUFhLHlDQXpCUjtBQTBCTEMsa0JBQVksRUExQlA7O0FBNEJMQyxpQkFBVyxPQTVCTjtBQTZCTEMsaUJBQVcsOENBN0JOO0FBOEJMQyxnQkFBVTtBQTlCTCxLLFFBaUNQQyxRLEdBQVcsRSxRQUVaQyxPLEdBQVUsRUFBQyxlQUFjLEVBQUMsT0FBTSxhQUFQLEVBQXFCLFNBQVEsTUFBN0IsRUFBZixFLFFBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sc0JBQWxCLEVBQXlDLFFBQU8sTUFBaEQsRUFBdUQsU0FBUSxPQUEvRCxFQUF1RSxPQUFNLE9BQTdFLEVBQWhCLEVBQXNHLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sc0JBQXBDLEVBQTJELFFBQU8sTUFBbEUsRUFBeUUsU0FBUSxPQUFqRixFQUF5RixPQUFNLE9BQS9GLEVBQXpILEVBQWYsRUFBaVAsZUFBYyxFQUFDLG9CQUFtQixXQUFwQixFQUFnQyxvQkFBbUIsV0FBbkQsRUFBK0Qsc0JBQXFCLFVBQXBGLEVBQStGLGNBQWEsRUFBNUcsRUFBL1AsRUFBK1csaUJBQWdCLEVBQUMsb0JBQW1CLGFBQXBCLEVBQWtDLG9CQUFtQixhQUFyRCxFQUFtRSxzQkFBcUIsWUFBeEYsRUFBL1gsRUFBcWUsZUFBYyxFQUFDLG9CQUFtQixXQUFwQixFQUFnQyxvQkFBbUIsV0FBbkQsRUFBK0Qsc0JBQXFCLFVBQXBGLEVBQW5mLEVBQW1sQixhQUFZLEVBQUMsdUJBQXNCLFNBQXZCLEVBQS9sQixFQUFpb0IsYUFBWSxFQUFDLHFCQUFvQixvQkFBckIsRUFBMEMsMkJBQTBCLGlCQUFwRSxFQUFzRiwrQkFBOEIseUJBQXBILEVBQThJLDZCQUE0QixhQUExSyxFQUF3TCwwQkFBeUIseUJBQWpOLEVBQTdvQixFLFFBQ1RDLE8sR0FBVSxFQUFDLGVBQWMsRUFBQyxvQkFBbUIsYUFBcEIsRUFBZixFQUFrRCxpQkFBZ0IsRUFBQyxvQkFBbUIsYUFBcEIsRUFBbEUsRUFBcUcsZUFBYyxFQUFDLG9CQUFtQixhQUFwQixFQUFuSCxFQUFzSixhQUFZLEVBQUMseUJBQXdCLGtCQUF6QixFQUFsSyxFLFFBQ1RDLFUsR0FBYTtBQUNSQywyQ0FEUTtBQUVSQywwQ0FGUTtBQUdSQyw0Q0FIUTtBQUlSQywwQ0FKUTtBQUtSQyxvQ0FMUTtBQU1SQztBQU5RLEssUUFTVkMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLEdBREYsRUFDTztBQUNiLGFBQUs1QixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0ssZUFBTCxHQUF1QnVCLElBQUlDLGFBQUosQ0FBa0JDLFNBQWxCLEdBQThCLENBQXJEO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BTE87QUFNUkMsaUJBTlEsdUJBTUlDLEdBTkosRUFNUztBQUNmLGdCQUFRQSxJQUFJQyxJQUFaO0FBQ0UsZUFBSyxLQUFLNUIsU0FBVjtBQUNFO0FBQ0YsZUFBSyxLQUFLRyxXQUFWO0FBQ0UsaUJBQUtYLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQSxTQUF2QjtBQUNBLGlCQUFLcUMsY0FBTCxDQUFvQixLQUFwQjtBQUNBO0FBQ0YsZUFBSyxLQUFLdkIsU0FBVjtBQUNFLGlCQUFLd0IsU0FBTCxDQUFlLDRDQUFmLEVBQTZELEVBQTdEO0FBQ0E7QUFDRjtBQUNFO0FBWEo7QUFhRCxPQXBCTztBQXFCUkMscUJBckJRLDZCQXFCVTtBQUNoQixhQUFLckMsU0FBTCxHQUFpQixLQUFqQjtBQUNELE9BdkJPO0FBd0JSc0Msc0JBeEJRLDRCQXdCU1YsR0F4QlQsRUF3QmNXLEdBeEJkLEVBd0JtQjtBQUN6QixZQUFJQyxRQUFRWixJQUFJWSxLQUFoQjtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGdCQUFRRCxLQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVE7QUFDTjtBQUNGLGVBQUssQ0FBTDtBQUFRO0FBQ05FLGVBQUdDLFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxJQURJO0FBRVhDLHVCQUFTLHFCQUZFO0FBR1hDLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZk4scUJBQUdPLFNBQUgsQ0FBYTtBQUNYTCwyQkFBTyxPQURJO0FBRVhNLDBCQUFNLE1BRks7QUFHWEMsOEJBQVU7QUFIQyxtQkFBYjtBQUtBQyw2QkFBVyxZQUFXO0FBQ3BCWCx5QkFBS1ksS0FBTDtBQUNELG1CQUZELEVBRUcsSUFGSDtBQUdELGlCQVRELE1BU08sSUFBSU4sSUFBSU8sTUFBUixFQUFnQixDQUN0QjtBQUNGO0FBZlUsYUFBYjtBQWlCQTtBQUNGO0FBQ0U7QUF2Qko7QUF5QkQ7QUFwRE8sSzs7Ozs7MkJBdURIQyxJLEVBQU07QUFDWCxVQUFJLENBQUNBLElBQUQsSUFBU0EsS0FBSy9ELEVBQUwsS0FBWSxDQUF6QixFQUE0QjtBQUMxQjtBQUNEO0FBQ0QsVUFBSWlELE9BQU8sSUFBWDtBQUNBLFdBQUtqRCxFQUFMLEdBQVUrRCxLQUFLL0QsRUFBZjs7QUFFQSxXQUFLSSxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS0gsV0FBTCxHQUFtQixlQUFLK0QsaUJBQUwsQ0FBdUIsQ0FBdkIsQ0FBbkI7QUFDQSxXQUFLN0QsT0FBTCxHQUFlLEtBQUtGLFdBQUwsQ0FBaUJFLE9BQWhDO0FBQ0EsV0FBS29DLE1BQUw7O0FBRUEsV0FBS0ksY0FBTCxDQUFvQixJQUFwQjs7QUFFQU8sU0FBR2UsVUFBSCxDQUFjO0FBQ1pYLGVBRFksbUJBQ0pDLEdBREksRUFDQztBQUNYLGNBQUksQ0FBQ0EsSUFBSVcsV0FBSixDQUFnQixnQkFBaEIsQ0FBTCxFQUF3QztBQUN0Q2hCLGVBQUdpQixTQUFILENBQWE7QUFDWEMscUJBQU8sZ0JBREk7QUFFWGQscUJBRlcscUJBRUQ7QUFDUkwscUJBQUsxQyxLQUFMLENBQVc4RCxRQUFYLENBQW9CLHdCQUFlQyxLQUFmLEVBQXBCLEVBQTRDQyxJQUE1QyxDQUFpRCxVQUFDQyxDQUFELEVBQU87QUFDdER2Qix1QkFBS3dCLFNBQUw7QUFDRCxpQkFGRDtBQUdELGVBTlU7QUFPWEMsa0JBUFcsa0JBT0o7QUFDTHhCLG1CQUFHeUIsUUFBSCxDQUFZLEVBQUNDLEtBQUssa0NBQU4sRUFBWjtBQUNEO0FBVFUsYUFBYjtBQVdELFdBWkQsTUFZTztBQUNMM0IsaUJBQUsxQyxLQUFMLENBQVc4RCxRQUFYLENBQW9CLHdCQUFlQyxLQUFmLEVBQXBCLEVBQTRDQyxJQUE1QyxDQUFpRCxVQUFDQyxDQUFELEVBQU87QUFDdER2QixtQkFBS3dCLFNBQUw7QUFDRCxhQUZEO0FBR0Q7QUFDRjtBQW5CVyxPQUFkO0FBcUJEOzs7Z0NBRVc7QUFDVixVQUFNbEUsUUFBUSwwQkFBZDtBQUNBLFVBQU1zRSxRQUFRdEUsTUFBTXVFLFFBQU4sRUFBZDtBQUNBLFdBQUt6RSxNQUFMLEdBQWN3RSxNQUFNRSxPQUFOLENBQWNDLFFBQWQsQ0FBdUIzRSxNQUFyQztBQUNBNEUsY0FBUUMsR0FBUixDQUFZLEtBQUs3RSxNQUFqQjtBQUNBLFVBQUcsS0FBS0osV0FBTCxDQUFpQitFLFFBQWpCLENBQTBCM0UsTUFBMUIsS0FBcUMsS0FBS0EsTUFBN0MsRUFBcUQ7QUFDbkQsYUFBS0QsUUFBTCxHQUFnQixJQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQUNGOzs7c0NBRWlCK0UsTyxFQUFTO0FBQ3pCLFVBQUlsQyxPQUFPLElBQVg7QUFDQSxVQUFJbUMsV0FBVztBQUNiaEMsZUFBTyxXQURNO0FBRWJpQyxjQUFNLDRDQUE0QyxLQUFLckYsRUFGMUM7QUFHYnNELGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsY0FBSUEsSUFBSStCLE1BQUosS0FBZSxvQkFBbkIsRUFBeUM7QUFDdkNyQyxpQkFBS2pDLFFBQUwsR0FBZ0JpQyxLQUFLakMsUUFBTCxHQUFnQixDQUFoQztBQUNBaUMsaUJBQUtWLE1BQUw7QUFDRDtBQUNGLFNBUlk7QUFTYm1DLGNBQU0sY0FBVW5CLEdBQVYsRUFBZTtBQUNuQjtBQUNBLGNBQUlBLElBQUkrQixNQUFKLEtBQWUsNkJBQW5CLEVBQWtEO0FBQ2hEO0FBQ0QsV0FGRCxNQUVPLElBQUkvQixJQUFJK0IsTUFBSixLQUFlLHNCQUFuQixFQUEyQztBQUNoRDtBQUNEO0FBQ0YsU0FoQlk7QUFpQmJDLGtCQUFVLG9CQUFZLENBRXJCO0FBbkJZLE9BQWY7QUFxQkEsYUFBT0gsUUFBUDtBQUNEOzs7bUNBRWNJLE0sRUFBUTtBQUNyQixVQUFJLEtBQUtsRixTQUFULEVBQW9CO0FBQ2xCLGFBQUtZLFdBQUwsR0FBbUIsd0NBQW5CO0FBQ0EsWUFBSSxDQUFDc0UsTUFBTCxFQUFhO0FBQ1gsZUFBS3JFLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxHQUFrQixDQUFwQztBQUNBK0IsYUFBR08sU0FBSCxDQUFhO0FBQ1hMLG1CQUFPLE1BREk7QUFFWE0sa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRDtBQUNGLE9BVkQsTUFVTztBQUNMLGFBQUt6QyxXQUFMLEdBQW1CLHlDQUFuQjtBQUNBLFlBQUksQ0FBQ3NFLE1BQUwsRUFBYTtBQUNYLGVBQUtyRSxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsR0FBa0IsQ0FBcEM7QUFDQStCLGFBQUdPLFNBQUgsQ0FBYTtBQUNYTCxtQkFBTyxNQURJO0FBRVhNLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0Q7QUFDRjtBQUNGOzs7NkJBRVE4QixTLEVBQVc7QUFDbEIsVUFBSXhDLE9BQU8sSUFBWDtBQUNBLFVBQUlsRCxPQUFPO0FBQ1QyRixrQkFBVSxDQUFDLEtBQUsxRixFQUFOLENBREQ7QUFFVDJGLGlCQUFTRixTQUZBO0FBR1RwRixnQkFBUSxLQUFLQSxNQUhKO0FBSVR1RixjQUFNLEtBQUt4RixRQUFMLEdBQWdCLENBQWhCLEdBQW9CO0FBSmpCLE9BQVg7QUFNQThDLFNBQUc2QixPQUFILENBQVc7QUFDVEgsMkVBQWlFaUIsS0FBS0MsU0FBTCxDQUFlL0YsSUFBZixDQUR4RDtBQUVUdUQsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixjQUFJd0MsV0FBV3hDLElBQUl4RCxJQUFuQjtBQUNBLGNBQUdnRyxTQUFTekMsT0FBVCxJQUFvQnlDLFNBQVNoRyxJQUE3QixJQUFxQ2dHLFNBQVNoRyxJQUFULENBQWN3RCxHQUF0RCxFQUEyRDtBQUN6REwsZUFBR08sU0FBSCxDQUFhO0FBQ1hMLHFCQUFPLE1BREk7QUFFWE0sb0JBQU0sTUFGSztBQUdYQyx3QkFBVTtBQUhDLGFBQWI7QUFLQVYsaUJBQUszQixRQUFMLEdBQWdCMkIsS0FBSzNCLFFBQUwsR0FBZ0JtRSxVQUFVTyxNQUExQztBQUNBL0MsaUJBQUtWLE1BQUw7QUFDRCxXQVJELE1BUU87QUFDTFcsZUFBR08sU0FBSCxDQUFhO0FBQ1hMLHFCQUFPLE1BREk7QUFFWE0sb0JBQU0sTUFGSztBQUdYQyx3QkFBVTtBQUhDLGFBQWI7QUFJYTtBQUNoQixTQWxCUTtBQW1CVGUsY0FBTSxjQUFVRixDQUFWLEVBQWE7QUFDakJTLGtCQUFRQyxHQUFSLENBQVlWLENBQVo7QUFDQXRCLGFBQUdPLFNBQUgsQ0FBYTtBQUNYTCxtQkFBTyxNQURJO0FBRVhNLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0Q7QUExQlEsT0FBWDtBQTRCRDs7OztFQXBQZ0MsZUFBS3NDLEk7O2tCQUFuQnZHLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEFydGljbGVFbGVtZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXJ0aWNsZS1lbGVtZW50J1xuICBpbXBvcnQgQWN0aW9uc0JvdHRvbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FjdGlvbnMtYm90dG9tJ1xuICBpbXBvcnQgUG9pQm90dG9tIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcG9pLWJvdHRvbSdcbiAgaW1wb3J0IEFsZXJ0TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FsZXJ0LWxpc3QnXG5cbiAgaW1wb3J0IHsgZ2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgeyBvYnRhaW5Vc2VySW5mbyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5cbiAgaW1wb3J0IHRlc3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml4XooYzlv4PlvpcnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgYXJ0aWNsZUl0ZW06IE9iamVjdCxcbiAgICAgIHBvaUxpc3Q6IFtdLFxuXG4gICAgICBpc0F1dGhvcjogZmFsc2UsXG4gICAgICB1c2VySWQ6IDAsXG4gICAgICBpc0NvbGxlY3Q6IGZhbHNlLFxuICAgICAgc3RvcmU6IGdldFN0b3JlKCksXG5cbiAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICBjdXJyZW50QWxlcnRTb3VyY2U6IFtcbiAgICAgICAgJ+e8lui+kScsXG4gICAgICAgICfliKDpmaQnXG4gICAgICBdLFxuICAgICAgY3VycmVudEFsZXJ0U291cmNlQ291bnQ6IDIsXG4gICAgICBjdXJyZW50QWxlcnRTZWxlY3RTdHlsZTogdHJ1ZSxcbiAgICAgIGN1cnJlbnRTZWxlY3RJbmRleDogMCxcbiAgICAgIHNob3dBbGVydE9mZnNldDogMCxcblxuICAgICAgc2hhcmVUZXh0OiAn5YiG5LqrJyxcbiAgICAgIHNoYXJlSWNvbjogJy4uLy4uLy4uL2ltYWdlcy90bi13eC1zaGFyZS5wbmcnLFxuICAgICAgc2hhcmVOdW06IDYzMyxcblxuICAgICAgY29sbGVjdFRleHQ6ICfmlLbol48nLFxuICAgICAgY29sbGVjdEljb246ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtY29sbGVjdC1mYWxzZS5wbmcnLFxuICAgICAgY29sbGVjdE51bTogNjMsXG5cbiAgICAgIHNwYWNlVGV4dDogJ+a3u+WKoOWIsOepuumXtCcsXG4gICAgICBzcGFjZUljb246ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtYXJ0aWNsZS1hZGR0b3NwYWNlLnBuZycsXG4gICAgICBzcGFjZU51bTogM1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgJHJlcGVhdCA9IHtcImFydGljbGVJdGVtXCI6e1wiY29tXCI6XCJlbGVtZW50aXRlbVwiLFwicHJvcHNcIjpcImRhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJlbGVtZW50aXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYXJ0aWNsZUl0ZW0uZWxlbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpkYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhcnRpY2xlSXRlbS5lbGVtZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInNoYXJlQm90dG9tXCI6e1widi1iaW5kOmljb24ub25jZVwiOlwic2hhcmVJY29uXCIsXCJ2LWJpbmQ6bmFtZS5vbmNlXCI6XCJzaGFyZVRleHRcIixcInYtYmluZDpudW1iZXIuc3luY1wiOlwic2hhcmVOdW1cIixcInhtbG5zOnYtb25cIjpcIlwifSxcImNvbGxlY3RCb3R0b21cIjp7XCJ2LWJpbmQ6aWNvbi5zeW5jXCI6XCJjb2xsZWN0SWNvblwiLFwidi1iaW5kOm5hbWUub25jZVwiOlwiY29sbGVjdFRleHRcIixcInYtYmluZDpudW1iZXIuc3luY1wiOlwiY29sbGVjdE51bVwifSxcInNwYWNlQm90dG9tXCI6e1widi1iaW5kOmljb24ub25jZVwiOlwic3BhY2VJY29uXCIsXCJ2LWJpbmQ6bmFtZS5vbmNlXCI6XCJzcGFjZVRleHRcIixcInYtYmluZDpudW1iZXIuc3luY1wiOlwic3BhY2VOdW1cIn0sXCJwb2lCb3R0b21cIjp7XCJ2LWJpbmQ6cG9pTGlzdC5zeW5jXCI6XCJwb2lMaXN0XCJ9LFwiYWxlcnRsaXN0XCI6e1widi1iaW5kOml0ZW1zLnN5bmNcIjpcImN1cnJlbnRBbGVydFNvdXJjZVwiLFwidi1iaW5kOnN5bmNPZmZzZXRZLnN5bmNcIjpcInNob3dBbGVydE9mZnNldFwiLFwidi1iaW5kOnNob3dTZWxlY3RTdHlsZS5zeW5jXCI6XCJjdXJyZW50QWxlcnRTZWxlY3RTdHlsZVwiLFwidi1iaW5kOmN1cnJlbnRTZWxlY3Quc3luY1wiOlwiY3VycmVudFNvcnRcIixcInYtYmluZDp0b3RhbENvdW50LnN5bmNcIjpcImN1cnJlbnRBbGVydFNvdXJjZUNvdW50XCJ9fTtcclxuJGV2ZW50cyA9IHtcInNoYXJlQm90dG9tXCI6e1widi1vbjpjbGlja0JvdHRvbVwiOlwiY2xpY2tCb3R0b21cIn0sXCJjb2xsZWN0Qm90dG9tXCI6e1widi1vbjpjbGlja0JvdHRvbVwiOlwiY2xpY2tCb3R0b21cIn0sXCJzcGFjZUJvdHRvbVwiOntcInYtb246Y2xpY2tCb3R0b21cIjpcImNsaWNrQm90dG9tXCJ9LFwiYWxlcnRsaXN0XCI6e1widi1vbjpjbGlja2VkQWxlcnRJdGVtXCI6XCJjbGlja2VkQWxlcnRJdGVtXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBlbGVtZW50aXRlbTogQXJ0aWNsZUVsZW1lbnQsXG4gICAgICBzaGFyZUJvdHRvbTogQWN0aW9uc0JvdHRvbSxcbiAgICAgIGNvbGxlY3RCb3R0b206IEFjdGlvbnNCb3R0b20sXG4gICAgICBzcGFjZUJvdHRvbTogQWN0aW9uc0JvdHRvbSxcbiAgICAgIHBvaUJvdHRvbTogUG9pQm90dG9tLFxuICAgICAgYWxlcnRsaXN0OiBBbGVydExpc3RcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tNb3JlKG51bSkge1xuICAgICAgICB0aGlzLnNob3dBbGVydCA9IHRydWVcbiAgICAgICAgdGhpcy5zaG93QWxlcnRPZmZzZXQgPSBudW0uY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyA3XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBjbGlja0JvdHRvbShvcHQpIHtcbiAgICAgICAgc3dpdGNoIChvcHQubmFtZSkge1xuICAgICAgICAgIGNhc2UgdGhpcy5zaGFyZVRleHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgdGhpcy5jb2xsZWN0VGV4dDpcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsZWN0ID0gIXRoaXMuaXNDb2xsZWN0XG4gICAgICAgICAgICB0aGlzLnNldENvbGxlY3RJY29uKGZhbHNlKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIHRoaXMuc3BhY2VUZXh0OlxuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL3NwYWNlL3NwYWNlLWxpc3QvaW5kZXg/YWRkU3BhY2U9dHJ1ZScsIHt9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRNYXNrQmFjaygpIHtcbiAgICAgICAgdGhpcy5zaG93QWxlcnQgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRBbGVydEl0ZW0obnVtLCBldnQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gbnVtLmluZGV4XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgICAgY2FzZSAwOiAvLyDnvJbovpFcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxOiAvLyDliKDpmaRcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aYr+WQpuehruiupOWIoOmZpOivpeaXheihjOW/g+W+l++8jOWIoOmZpOWQjuS4jeWPr+aBouWkjScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflv4Plvpflt7LliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kYmFjaygpXG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0cykge1xuICAgICAgaWYgKCFvcHRzIHx8IG9wdHMuaWQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRoaXMuaWQgPSBvcHRzLmlkXG5cbiAgICAgIHRoaXMuaXNBdXRob3IgPSB0cnVlXG4gICAgICB0aGlzLmFydGljbGVJdGVtID0gdGVzdC50ZXN0U3BhY2VMaXN0RGF0YVswXVxuICAgICAgdGhpcy5wb2lMaXN0ID0gdGhpcy5hcnRpY2xlSXRlbS5wb2lMaXN0XG4gICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgIHRoaXMuc2V0Q29sbGVjdEljb24odHJ1ZSlcblxuICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgIHd4LmF1dGhvcml6ZSh7XG4gICAgICAgICAgICAgIHNjb3BlOiAnc2NvcGUudXNlckluZm8nLFxuICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcmUuZGlzcGF0Y2gob2J0YWluVXNlckluZm8uYXBwbHkoKSkudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZi5zZXRVc2VySWQoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe3VybDogJy4uLy4uL2Vycm9yL2F1dGhvcml0eS1mYWlsL2luZGV4J30pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc3RvcmUuZGlzcGF0Y2gob2J0YWluVXNlckluZm8uYXBwbHkoKSkudGhlbigoZSkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLnNldFVzZXJJZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRVc2VySWQoKSB7XG4gICAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKClcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgdGhpcy51c2VySWQgPSBzdGF0ZS5yZXF1ZXN0LnVzZXJJbmZvLnVzZXJJZFxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VySWQpXG4gICAgICBpZih0aGlzLmFydGljbGVJdGVtLnVzZXJJbmZvLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpIHtcbiAgICAgICAgdGhpcy5pc0F1dGhvciA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNBdXRob3IgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKG9wdGlvbnMpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNoYXJlT2JqID0ge1xuICAgICAgICB0aXRsZTogJ+S9oOaDs+efpemBk+eahOmDveWcqOi/memHjCcsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvYXJ0aWNsZS9hcnRpY2xlLWRldGFpbC9pbmRleD9pZD0nICsgdGhpcy5pZCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuZXJyTXNnID09PSAnc2hhcmVBcHBNZXNzYWdlOm9rJykge1xuICAgICAgICAgICAgc2VsZi5zaGFyZU51bSA9IHNlbGYuc2hhcmVOdW0gKyAxXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSl5LmL5ZCO55qE5Zue6LCDXG4gICAgICAgICAgaWYgKHJlcy5lcnJNc2cgPT09ICdzaGFyZUFwcE1lc3NhZ2U6ZmFpbCBjYW5jZWwnKSB7XG4gICAgICAgICAgICAvLyDnlKjmiLflj5bmtojovazlj5FcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5lcnJNc2cgPT09ICdzaGFyZUFwcE1lc3NhZ2U6ZmFpbCcpIHtcbiAgICAgICAgICAgIC8vIOi9rOWPkeWksei0pe+8jOWFtuS4rSBkZXRhaWwgbWVzc2FnZSDkuLror6bnu4blpLHotKXkv6Hmga9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoYXJlT2JqXG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdEljb24oaXNJbml0KSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxlY3QpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0SWNvbiA9ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtY29sbGVjdC10cnVlLnBuZydcbiAgICAgICAgaWYgKCFpc0luaXQpIHtcbiAgICAgICAgICB0aGlzLmNvbGxlY3ROdW0gPSB0aGlzLmNvbGxlY3ROdW0gKyAxXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pS26JeP5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0SWNvbiA9ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtY29sbGVjdC1mYWxzZS5wbmcnXG4gICAgICAgIGlmICghaXNJbml0KSB7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0TnVtID0gdGhpcy5jb2xsZWN0TnVtIC0gMVxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXjycsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTcGFjZShzcGFjZUxpc3QpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIG9yaWdpbklkOiBbdGhpcy5pZF0sXG4gICAgICAgIHNwYWNlSWQ6IHNwYWNlTGlzdCxcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgdHlwZTogdGhpcy5pc0F1dGhvciA/IDAgOiAxXG4gICAgICB9XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovL2NtdC10Z3NwLmFwaS50dW5pdS1zc3Qub3JnL3Rnc3Avc3BhY2UvYXJ0aWNsZU1vdmU/JHtKU09OLnN0cmluZ2lmeShkYXRhKX1gLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVzLmRhdGFcbiAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5yZXMpIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5re75Yqg5oiQ5YqfJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYuc3BhY2VOdW0gPSBzZWxmLnNwYWNlTnVtICsgc3BhY2VMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWksei0pScsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWksei0pScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=