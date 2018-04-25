'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _spaceItem = require('./../../../components/space-item.js');

var _spaceItem2 = _interopRequireDefault(_spaceItem);

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../../store/actions/index.js');

var _space = require('./../../../store/types/space.js');

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
      navigationBarTitleText: '空间'
    }, _this.$repeat = { "spaceList": { "com": "spaceitem", "props": "item" } }, _this.$props = { "spaceitem": { "v-bind:index.once": "0", "v-bind:item.once": "getFirstSpaceInfo", "v-bind:itemWidth.once": "getImageWidth", "xmlns:v-bind": "", "xmlns:v-on": "" } }, _this.$events = { "spaceitem": { "v-on:tapEvent": "clickedSimpleSpace" } }, _this.components = {
      spaceitem: _spaceItem2.default
    }, _this.data = {
      store: (0, _wepyRedux.getStore)(),
      hasSpace: true,
      person: 0,
      defaultUserImage: '../../../images/test.png',
      dynamicDatas: [],
      spaceList: []
    }, _this.computed = {
      getImageWidth: function getImageWidth() {
        return this.$parent.globalData.spaceItemWidth;
      },
      getFirstSpaceInfo: function getFirstSpaceInfo() {
        return this.spaceList[0];
      }
    }, _this.methods = {
      createSpace: function createSpace(num, evt) {
        this.$navigate('../create-space/index', {});
      },
      clickedMoreDynamicButton: function clickedMoreDynamicButton(num, evt) {
        this.$navigate('../dynamic-list/index', {});
      },
      clickedSimpleSpace: function clickedSimpleSpace(num, evt) {
        this.$navigate('../space-detail/index', {});
      },
      clickedSpaceListMoreButton: function clickedSpaceListMoreButton(num, evt) {
        this.$navigate('../space-list/index', {});
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var self = this;
      wx.getSetting({
        success: function success(res) {
          if (!res.authSetting['scope.userLocation']) {
            wx.authorize({
              scope: 'scope.userLocation',
              success: function success() {},
              fail: function fail() {}
            });
          }

          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success: function success() {
                self.store.dispatch(_actions.obtainUserInfo.apply()).then(function (e) {
                  self.getSpaceHomeInfo();
                });
              },
              fail: function fail() {
                wx.reLaunch({ url: '../../../pages/error/authority-fail/index' });
              }
            });
          } else {
            self.store.dispatch(_actions.obtainUserInfo.apply()).then(function (e) {
              self.getSpaceHomeInfo();
            });
          }
        }
      });
    }
  }, {
    key: 'getSpaceHomeInfo',
    value: function getSpaceHomeInfo() {
      var state = this.store.getState();
      var userId = state.request.userInfo.userId;

      var self = this;

      // 请求使用人数
      this.store.dispatch(_actions.getUsersCount.apply(this.store, [userId])).then(function () {
        self.person = self.store.getState().space.users;
        self.$apply();
      });

      // 请求空间列表
      this.store.dispatch(_actions.getSpaceList.apply(this.store, [userId])).then(function () {
        self.spaceList = self.store.getState().space.spaceList;
        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/space-home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3BhY2VpdGVtIiwiZGF0YSIsInN0b3JlIiwiaGFzU3BhY2UiLCJwZXJzb24iLCJkZWZhdWx0VXNlckltYWdlIiwiZHluYW1pY0RhdGFzIiwic3BhY2VMaXN0IiwiY29tcHV0ZWQiLCJnZXRJbWFnZVdpZHRoIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzcGFjZUl0ZW1XaWR0aCIsImdldEZpcnN0U3BhY2VJbmZvIiwibWV0aG9kcyIsImNyZWF0ZVNwYWNlIiwibnVtIiwiZXZ0IiwiJG5hdmlnYXRlIiwiY2xpY2tlZE1vcmVEeW5hbWljQnV0dG9uIiwiY2xpY2tlZFNpbXBsZVNwYWNlIiwiY2xpY2tlZFNwYWNlTGlzdE1vcmVCdXR0b24iLCJzZWxmIiwid3giLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwiYXV0aG9yaXplIiwic2NvcGUiLCJmYWlsIiwiZGlzcGF0Y2giLCJhcHBseSIsInRoZW4iLCJlIiwiZ2V0U3BhY2VIb21lSW5mbyIsInJlTGF1bmNoIiwidXJsIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJ1c2VySW5mbyIsInNwYWNlIiwidXNlcnMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQU1WQyxPLEdBQVUs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QkFBY0MsS0FBZCxDQUFvQixLQUFLOUIsS0FBekIsRUFBZ0MsQ0FBQ3NDLE1BQUQsQ0FBaEMsQ0FBcEIsRUFBK0RQLElBQS9ELENBQW9FLFlBQU07QUFDeEVYLGFBQUtsQixNQUFMLEdBQWNrQixLQUFLcEIsS0FBTCxDQUFXcUMsUUFBWCxHQUFzQkksS0FBdEIsQ0FBNEJDLEtBQTFDO0FBQ0F0QixhQUFLdUIsTUFBTDtBQUNELE9BSEQ7O0FBS0E7QUFDQSxXQUFLM0MsS0FBTCxDQUFXNkIsUUFBWCxDQUFvQixzQkFBYUMsS0FBYixDQUFtQixLQUFLOUIsS0FBeEIsRUFBK0IsQ0FBQ3NDLE1BQUQsQ0FBL0IsQ0FBcEIsRUFBOERQLElBQTlELENBQW1FLFlBQU07QUFDdkVYLGFBQUtmLFNBQUwsR0FBaUJlLEtBQUtwQixLQUFMLENBQVdxQyxRQUFYLEdBQXNCSSxLQUF0QixDQUE0QnBDLFNBQTdDO0FBQ0FlLGFBQUt1QixNQUFMO0FBQ0QsT0FIRDtBQUlEOzs7O0VBdEZnQyxlQUFLQyxJOztrQkFBbkJ2RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBTcGFjZUl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zcGFjZS1pdGVtJ1xuICBpbXBvcnQgdGVzdCBmcm9tICcuLi8uLi8uLi91dGlscy90ZXN0J1xuXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgb2J0YWluVXNlckluZm8sIGdldFVzZXJzQ291bnQsIGdldFNwYWNlTGlzdCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG4gIGltcG9ydCB7IFNQQUNFX0hPTUVfVVNFUlMgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS90eXBlcy9zcGFjZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnqbrpl7QnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wic3BhY2VMaXN0XCI6e1wiY29tXCI6XCJzcGFjZWl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wic3BhY2VpdGVtXCI6e1widi1iaW5kOmluZGV4Lm9uY2VcIjpcIjBcIixcInYtYmluZDppdGVtLm9uY2VcIjpcImdldEZpcnN0U3BhY2VJbmZvXCIsXCJ2LWJpbmQ6aXRlbVdpZHRoLm9uY2VcIjpcImdldEltYWdlV2lkdGhcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wic3BhY2VpdGVtXCI6e1widi1vbjp0YXBFdmVudFwiOlwiY2xpY2tlZFNpbXBsZVNwYWNlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzcGFjZWl0ZW06IFNwYWNlSXRlbVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzdG9yZTogZ2V0U3RvcmUoKSxcbiAgICAgIGhhc1NwYWNlOiB0cnVlLFxuICAgICAgcGVyc29uOiAwLFxuICAgICAgZGVmYXVsdFVzZXJJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICBkeW5hbWljRGF0YXM6IFtdLFxuICAgICAgc3BhY2VMaXN0OiBbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0SW1hZ2VXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNwYWNlSXRlbVdpZHRoXG4gICAgICB9LFxuICAgICAgZ2V0Rmlyc3RTcGFjZUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNlTGlzdFswXVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XG4gICAgICAgICAgICB3eC5hdXRob3JpemUoe1xuICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJMb2NhdGlvbicsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbCgpIHtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICB3eC5hdXRob3JpemUoe1xuICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcbiAgICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3JlLmRpc3BhdGNoKG9idGFpblVzZXJJbmZvLmFwcGx5KCkpLnRoZW4oKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3BhY2VIb21lSW5mbygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7dXJsOiAnLi4vLi4vLi4vcGFnZXMvZXJyb3IvYXV0aG9yaXR5LWZhaWwvaW5kZXgnfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zdG9yZS5kaXNwYXRjaChvYnRhaW5Vc2VySW5mby5hcHBseSgpKS50aGVuKChlKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuZ2V0U3BhY2VIb21lSW5mbygpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRTcGFjZUhvbWVJbmZvKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKClcbiAgICAgIGxldCB1c2VySWQgPSBzdGF0ZS5yZXF1ZXN0LnVzZXJJbmZvLnVzZXJJZFxuXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgLy8g6K+35rGC5L2/55So5Lq65pWwXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGdldFVzZXJzQ291bnQuYXBwbHkodGhpcy5zdG9yZSwgW3VzZXJJZF0pKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2VsZi5wZXJzb24gPSBzZWxmLnN0b3JlLmdldFN0YXRlKCkuc3BhY2UudXNlcnNcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcblxuICAgICAgLy8g6K+35rGC56m66Ze05YiX6KGoXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGdldFNwYWNlTGlzdC5hcHBseSh0aGlzLnN0b3JlLCBbdXNlcklkXSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZWxmLnNwYWNlTGlzdCA9IHNlbGYuc3RvcmUuZ2V0U3RhdGUoKS5zcGFjZS5zcGFjZUxpc3RcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY3JlYXRlU3BhY2UobnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uL2NyZWF0ZS1zcGFjZS9pbmRleCcsIHt9KVxuICAgICAgfSxcblxuICAgICAgY2xpY2tlZE1vcmVEeW5hbWljQnV0dG9uKG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuLi9keW5hbWljLWxpc3QvaW5kZXgnLCB7fSlcbiAgICAgIH0sXG5cbiAgICAgIGNsaWNrZWRTaW1wbGVTcGFjZShudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vc3BhY2UtZGV0YWlsL2luZGV4Jywge30pXG4gICAgICB9LFxuXG4gICAgICBjbGlja2VkU3BhY2VMaXN0TW9yZUJ1dHRvbihudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vc3BhY2UtbGlzdC9pbmRleCcsIHt9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19