'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

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
      navigationBarTitleText: '添加目的地'
    }, _this.data = {
      fromSquare: true,
      locationName: '',
      isSearching: false,
      searchKeyword: '',
      historyTitle: '最近搜索',
      searchResults: [{
        poiName: '泰国'
      }, {
        poiName: '泰国画骨化石'
      }, {
        poiName: '一日游泰国'
      }, {
        poiName: '一日游泰国'
      }],
      historyPOIList: [],
      recommendList: [{
        poiName: '泰国'
      }, {
        poiName: '泰国画骨化石'
      }, {
        poiName: '一日游泰国'
      }, {
        poiName: '一日游泰国'
      }]
    }, _this.methods = {
      bindinput: function bindinput(value, cursor) {
        this.searchKeyword = value.detail.value;
        if (this.searchKeyword !== '') {
          this.isSearching = true;
        } else {
          this.isSearching = false;
        }
      },
      bindconfirm: function bindconfirm(value) {},
      clickedClearSearchKeyword: function clickedClearSearchKeyword() {
        this.isSearching = false;
        this.searchKeyword = '';
      },
      clickedClearLocalButton: function clickedClearLocalButton() {
        this.historyPOIList = [];
        this.clearHistory();
      },
      clickedCurrentPoi: function clickedCurrentPoi(item, event) {
        var _this2 = this;

        // 获取点击poi信息
        var selectPoiInfo = this.getSelectInfo(item.currentTarget.dataset.type, item.currentTarget.dataset.index);

        // 为空，返回
        if (!selectPoiInfo) {
          return;
        }

        // 添加到历史搜索
        this.addHistorySelect(selectPoiInfo);

        // 通过本地缓存向上一个页面返回参数
        wx.setStorage({
          key: _utils2.default.cityStorageKey,
          data: selectPoiInfo,
          success: function success() {
            _this2.$back();
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      if (options) {
        this.fromSquare = options.fromSquare;
      }
      if (this.fromSquare === true || this.fromSquare === 'true') {
        this.fromSquare = true;
        wx.setNavigationBarTitle({
          title: '切换目的地'
        });
        this.historyTitle = '最近浏览';
      } else {
        this.fromSquare = false;
        wx.setNavigationBarTitle({
          title: '添加目的地'
        });
        this.historyTitle = '最近搜索';
      }

      var self = this;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;

          self.locationName = '南京';
          self.$apply();
        }
      });

      // 获取历史搜索poi
      wx.getStorage({
        key: this.fromSquare ? _utils2.default.squareSearchPOICache : _utils2.default.spaceSearchPOICache,
        success: function success(res) {
          self.historyPOIList = res.data;
          self.$apply();
        }
      });
    }
  }, {
    key: 'getSelectInfo',
    value: function getSelectInfo(sourceType, index) {
      var currentTapPOI = void 0;
      switch (sourceType) {
        case 'location':
          currentTapPOI = {};
          break;
        case 'history':
          currentTapPOI = this.historyPOIList[index];
          this.historyPOIList.splice(index, 1);
          break;
        case 'recommend':
          currentTapPOI = this.recommendList[index];
          break;
        case 'searchResult':
          currentTapPOI = this.searchResults[index];
          break;
        default:
          break;
      }

      return currentTapPOI;
    }

    // 添加选择历史

  }, {
    key: 'addHistorySelect',
    value: function addHistorySelect(currentTapPOI) {

      this.historyPOIList.unshift(currentTapPOI);

      this.historyPOIList = this.historyPOIList.slice(0, 5);

      wx.setStorage({
        key: this.fromSquare ? _utils2.default.squareSearchPOICache : _utils2.default.spaceSearchPOICache,
        data: this.historyPOIList,
        success: function success() {}
      });
    }
  }, {
    key: 'clearHistory',
    value: function clearHistory() {
      wx.removeStorage({
        key: this.fromSquare ? _utils2.default.squareSearchPOICache : _utils2.default.spaceSearchPOICache,
        data: this.historyPOIList,
        success: function success() {
          wx.showToast({
            title: '清除成功',
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/add-destination/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZyb21TcXVhcmUiLCJsb2NhdGlvbk5hbWUiLCJpc1NlYXJjaGluZyIsInNlYXJjaEtleXdvcmQiLCJoaXN0b3J5VGl0bGUiLCJzZWFyY2hSZXN1bHRzIiwicG9pTmFtZSIsImhpc3RvcnlQT0lMaXN0IiwicmVjb21tZW5kTGlzdCIsIm1ldGhvZHMiLCJiaW5kaW5wdXQiLCJ2YWx1ZSIsImN1cnNvciIsImRldGFpbCIsImJpbmRjb25maXJtIiwiY2xpY2tlZENsZWFyU2VhcmNoS2V5d29yZCIsImNsaWNrZWRDbGVhckxvY2FsQnV0dG9uIiwiY2xlYXJIaXN0b3J5IiwiY2xpY2tlZEN1cnJlbnRQb2kiLCJpdGVtIiwiZXZlbnQiLCJzZWxlY3RQb2lJbmZvIiwiZ2V0U2VsZWN0SW5mbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsImluZGV4IiwiYWRkSGlzdG9yeVNlbGVjdCIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImNpdHlTdG9yYWdlS2V5Iiwic3VjY2VzcyIsIiRiYWNrIiwib3B0aW9ucyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic2VsZiIsImdldExvY2F0aW9uIiwicmVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCIkYXBwbHkiLCJnZXRTdG9yYWdlIiwic3F1YXJlU2VhcmNoUE9JQ2FjaGUiLCJzcGFjZVNlYXJjaFBPSUNhY2hlIiwic291cmNlVHlwZSIsImN1cnJlbnRUYXBQT0kiLCJzcGxpY2UiLCJ1bnNoaWZ0Iiwic2xpY2UiLCJyZW1vdmVTdG9yYWdlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFD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a0IsZ0JBQU00QyxvQkFBeEIsR0FBK0MsZ0JBQU1DLG1CQUQ5QztBQUVaOUMsY0FBTSxLQUFLUSxjQUZDO0FBR1p5QixpQkFBUyxtQkFBTSxDQUVkO0FBTFcsT0FBZDtBQU9EOzs7bUNBRWM7QUFDYkosU0FBR3VCLGFBQUgsQ0FBaUI7QUFDZnJCLGFBQUssS0FBSzlCLFVBQUwsR0FBa0IsZ0JBQU00QyxvQkFBeEIsR0FBK0MsZ0JBQU1DLG1CQUQzQztBQUVmOUMsY0FBTSxLQUFLUSxjQUZJO0FBR2Z5QixpQkFBUyxtQkFBTTtBQUNiSixhQUFHd0IsU0FBSCxDQUFhO0FBQ1hoQixtQkFBTyxNQURJO0FBRVhpQixrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtEO0FBVGMsT0FBakI7QUFXRDs7OztFQXJMZ0MsZUFBS0MsSTs7a0JBQW5CN0QsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg55uu55qE5ZywJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBmcm9tU3F1YXJlOiB0cnVlLFxuICAgICAgbG9jYXRpb25OYW1lOiAnJyxcbiAgICAgIGlzU2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICAgICAgaGlzdG9yeVRpdGxlOiAn5pyA6L+R5pCc57SiJyxcbiAgICAgIHNlYXJjaFJlc3VsdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBvaU5hbWU6ICfms7Dlm70nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwb2lOYW1lOiAn5rOw5Zu955S76aqo5YyW55+zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcG9pTmFtZTogJ+S4gOaXpea4uOazsOWbvSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBvaU5hbWU6ICfkuIDml6XmuLjms7Dlm70nXG4gICAgICAgIH1cblxuICAgICAgXSxcbiAgICAgIGhpc3RvcnlQT0lMaXN0OiBbXSxcbiAgICAgIHJlY29tbWVuZExpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBvaU5hbWU6ICfms7Dlm70nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwb2lOYW1lOiAn5rOw5Zu955S76aqo5YyW55+zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcG9pTmFtZTogJ+S4gOaXpea4uOazsOWbvSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBvaU5hbWU6ICfkuIDml6XmuLjms7Dlm70nXG4gICAgICAgIH1cblxuICAgICAgXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kaW5wdXQodmFsdWUsIGN1cnNvcikge1xuICAgICAgICB0aGlzLnNlYXJjaEtleXdvcmQgPSB2YWx1ZS5kZXRhaWwudmFsdWVcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoS2V5d29yZCAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmluZGNvbmZpcm0odmFsdWUpIHtcblxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRDbGVhclNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLnNlYXJjaEtleXdvcmQgPSAnJ1xuICAgICAgfSxcbiAgICAgIGNsaWNrZWRDbGVhckxvY2FsQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmhpc3RvcnlQT0lMaXN0ID0gW11cbiAgICAgICAgdGhpcy5jbGVhckhpc3RvcnkoKVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRDdXJyZW50UG9pKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgIC8vIOiOt+WPlueCueWHu3BvaeS/oeaBr1xuICAgICAgICBsZXQgc2VsZWN0UG9pSW5mbyA9IHRoaXMuZ2V0U2VsZWN0SW5mbyhpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlLCBpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleClcblxuICAgICAgICAvLyDkuLrnqbrvvIzov5Tlm55cbiAgICAgICAgaWYgKCFzZWxlY3RQb2lJbmZvKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDliLDljoblj7LmkJzntKJcbiAgICAgICAgdGhpcy5hZGRIaXN0b3J5U2VsZWN0KHNlbGVjdFBvaUluZm8pXG5cbiAgICAgICAgLy8g6YCa6L+H5pys5Zyw57yT5a2Y5ZCR5LiK5LiA5Liq6aG16Z2i6L+U5Zue5Y+C5pWwXG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogdXRpbHMuY2l0eVN0b3JhZ2VLZXksXG4gICAgICAgICAgZGF0YTogc2VsZWN0UG9pSW5mbyxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRiYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZnJvbVNxdWFyZSA9IG9wdGlvbnMuZnJvbVNxdWFyZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZnJvbVNxdWFyZSA9PT0gdHJ1ZSB8fCB0aGlzLmZyb21TcXVhcmUgPT09ICd0cnVlJykge1xuICAgICAgICB0aGlzLmZyb21TcXVhcmUgPSB0cnVlXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6ICfliIfmjaLnm67nmoTlnLAnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaGlzdG9yeVRpdGxlID0gJ+acgOi/kea1j+iniCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJvbVNxdWFyZSA9IGZhbHNlXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6ICfmt7vliqDnm67nmoTlnLAnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaGlzdG9yeVRpdGxlID0gJ+acgOi/keaQnOe0oidcbiAgICAgIH1cblxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3eC5nZXRMb2NhdGlvbih7XG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHZhciBsYXRpdHVkZSA9IHJlcy5sYXRpdHVkZVxuICAgICAgICAgIHZhciBsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlXG5cblxuICAgICAgICAgIHNlbGYubG9jYXRpb25OYW1lID0gJ+WNl+S6rCdcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIOiOt+WPluWOhuWPsuaQnOe0onBvaVxuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogdGhpcy5mcm9tU3F1YXJlID8gdXRpbHMuc3F1YXJlU2VhcmNoUE9JQ2FjaGUgOiB1dGlscy5zcGFjZVNlYXJjaFBPSUNhY2hlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmhpc3RvcnlQT0lMaXN0ID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0SW5mbyhzb3VyY2VUeXBlLCBpbmRleCkge1xuICAgICAgbGV0IGN1cnJlbnRUYXBQT0lcbiAgICAgIHN3aXRjaCAoc291cmNlVHlwZSkge1xuICAgICAgICBjYXNlICdsb2NhdGlvbic6XG4gICAgICAgICAgY3VycmVudFRhcFBPSSA9IHt9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICAgICAgY3VycmVudFRhcFBPSSA9IHRoaXMuaGlzdG9yeVBPSUxpc3RbaW5kZXhdXG4gICAgICAgICAgdGhpcy5oaXN0b3J5UE9JTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAncmVjb21tZW5kJzpcbiAgICAgICAgICBjdXJyZW50VGFwUE9JID0gdGhpcy5yZWNvbW1lbmRMaXN0W2luZGV4XVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3NlYXJjaFJlc3VsdCc6XG4gICAgICAgICAgY3VycmVudFRhcFBPSSA9IHRoaXMuc2VhcmNoUmVzdWx0c1tpbmRleF1cbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50VGFwUE9JXG4gICAgfVxuXG4gICAgLy8g5re75Yqg6YCJ5oup5Y6G5Y+yXG4gICAgYWRkSGlzdG9yeVNlbGVjdChjdXJyZW50VGFwUE9JKSB7XG5cbiAgICAgIHRoaXMuaGlzdG9yeVBPSUxpc3QudW5zaGlmdChjdXJyZW50VGFwUE9JKVxuXG4gICAgICB0aGlzLmhpc3RvcnlQT0lMaXN0ID0gdGhpcy5oaXN0b3J5UE9JTGlzdC5zbGljZSgwLCA1KVxuXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiB0aGlzLmZyb21TcXVhcmUgPyB1dGlscy5zcXVhcmVTZWFyY2hQT0lDYWNoZSA6IHV0aWxzLnNwYWNlU2VhcmNoUE9JQ2FjaGUsXG4gICAgICAgIGRhdGE6IHRoaXMuaGlzdG9yeVBPSUxpc3QsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNsZWFySGlzdG9yeSgpIHtcbiAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IHRoaXMuZnJvbVNxdWFyZSA/IHV0aWxzLnNxdWFyZVNlYXJjaFBPSUNhY2hlIDogdXRpbHMuc3BhY2VTZWFyY2hQT0lDYWNoZSxcbiAgICAgICAgZGF0YTogdGhpcy5oaXN0b3J5UE9JTGlzdCxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+a4hemZpOaIkOWKnycsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=