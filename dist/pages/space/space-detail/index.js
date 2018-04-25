'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../../store/actions/index.js');

var _tabList = require('./../../../components/tab-list.js');

var _tabList2 = _interopRequireDefault(_tabList);

var _tabListView = require('./../../../components/tab-list-view.js');

var _tabListView2 = _interopRequireDefault(_tabListView);

var _spaceDetailListItem = require('./../../../components/space-detail-list-item.js');

var _spaceDetailListItem2 = _interopRequireDefault(_spaceDetailListItem);

var _alertList = require('./../../../components/alert-list.js');

var _alertList2 = _interopRequireDefault(_alertList);

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

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
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '空间详情',
      enablePullDownRefresh: true,
      onReachBottomDistance: 100
    }, _this.$repeat = { "list": { "com": "spacedetailitem", "props": "cellInfo" } }, _this.$props = { "spacedetailitem": { "v-bind:index.once": { "value": "index", "type": "index", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:cellInfo.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } }, "tablist": { "xmlns:v-bind": "", "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultTitleColor.once": "defaultTitleColor", "v-bind:defaultTitleBold.once": "defaultTitleBold", "v-bind:selectTitleColor.once": "selectTitleColor", "v-bind:selectTitleBold.once": "selectTitleBold", "v-bind:indicatorColor.once": "indicatorColor", "xmlns:v-on": "" }, "tablistview": { "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultBackColor.once": "defaultBackColor_view", "v-bind:defaultTitleColor.once": "defaultTitleColor_view", "v-bind:defaultTitleBold.once": "defaultTitleBold_view", "v-bind:defaultBorderColor.once": "defaultBorderColor_view", "v-bind:selectTitleColor.once": "selectTitleColor_view", "v-bind:selectTitleBold.once": "selectTitleBold_view", "v-bind:selectBorderColor.once": "selectBorderColor_view", "v-bind:selectBackColor.once": "selectBackColor_view" }, "alertlist": { "v-bind:items.sync": "currentAlertSource", "v-bind:syncOffsetY.sync": "showAlertOffset", "v-bind:showSelectStyle.sync": "currentAlertSelectStyle", "v-bind:currentSelect.sync": "currentSort", "v-bind:totalCount.sync": "currentAlertSourceCount" } }, _this.$events = { "spacedetailitem": { "v-on:tapEvent": "clickedListItem", "v-on:tapMoreEvent": "clickedListItemMoreButton" }, "tablist": { "v-on:tapEvent": "clickCurrentTab" }, "tablistview": { "v-on:tapEvent": "clickCurrentTab" }, "alertlist": { "v-on:clickedAlertItem": "clickedAlertItem" } }, _this.components = {
      tablist: _tabList2.default,
      tablistview: _tabListView2.default,
      spacedetailitem: _spaceDetailListItem2.default,
      alertlist: _alertList2.default
    }, _this.data = {
      defaultTitleColor: '#666666',
      defaultTitleBold: 'normal',
      selectTitleColor: '#333333',
      selectTitleBold: 'bold',
      indicatorColor: '#ff7733',
      selectIndex: 0,
      selectItem: {},

      store: (0, _wepyRedux.getStore)(),
      userId: 0,
      spaceId: 0,

      showTabview: false,
      defaultBackColor_view: '#FFFFFF',
      defaultTitleColor_view: '#333333',
      defaultTitleBold_view: 'normal',
      defaultBorderColor_view: 'transparent',
      selectBackColor_view: '#FFFCF8',
      selectTitleColor_view: '#FF5500',
      selectTitleBold_view: 'bold',
      selectBorderColor_view: '#FF7733',

      showAlert: false,
      showAlertOffset: 0,

      currentAlertType: '',
      currentAlertSource: [],
      currentAlertSourceCount: 0,
      currentAlertSelectStyle: false,
      currentSelectIndex: -1,

      currentSort: 0,
      sortTypes: ['默认排序', '发布时间排序', '热度排序'],
      itemTypes: ['分享', '更换板块', '移除空间'],
      tabs: [],
      list: [],
      spaceInfo: {},

      showToTop: false
    }, _this.computed = {
      getTabViewWidth: function getTabViewWidth() {
        return this.$parent.globalData.screenWidth - 54;
      }
    }, _this.methods = {
      clickedShowTabListView: function clickedShowTabListView() {
        this.showTabview = !this.showTabview;
      },
      clickCurrentTab: function clickCurrentTab(num, evt) {
        this.selectIndex = num.index;
        this.selectItem = num.info;
        this.changeTab(num.info.name);
      },
      clickedEditorSpace: function clickedEditorSpace() {
        this.$navigate('../create-space/index', { isEditor: true });
      },
      clickedSearchButton: function clickedSearchButton() {
        this.$navigate('../../search/content-search/index?fromSquare=false', {});
      },
      clickedListItem: function clickedListItem(info) {
        // 心得详情
        if (!info || !info.item) {
          return;
        }
        this.$navigate('../../article/article-detail/index?id=' + info.item.originId, {});
      },
      clickedListItemMoreButton: function clickedListItemMoreButton(num, evt) {
        this.currentAlertType = 'itemMore';
        this.currentAlertSource = this.itemTypes;
        this.currentAlertSelectStyle = false;
        this.currentAlertSourceCount = this.itemTypes.length;
        this.showAlert = true;
        this.showAlertOffset = num.offsetTop;

        this.currentSelectIndex = num.index;
      },
      clickedMaskBack: function clickedMaskBack() {
        this.showAlert = false;
        this.currentAlertType = '';
        this.currentAlertSource = [];
        this.currentAlertSelectStyle = false;
        this.currentAlertSourceCount = 0;
        this.currentSelectIndex = -1;
      },
      clickedSortButton: function clickedSortButton(num, evt) {
        this.currentAlertType = 'sort';
        this.currentAlertSource = this.sortTypes;
        this.currentAlertSelectStyle = true;
        this.currentAlertSourceCount = this.sortTypes.length;
        this.showAlert = true;
        this.showAlertOffset = num.currentTarget.offsetTop + 24;
      },
      clickedAlertItem: function clickedAlertItem(num, evt) {
        var index = num.index;
        if (this.currentAlertType === 'sort') {
          this.currentSort = index;
        } else {
          switch (index) {
            case 0:
              // 分享
              break;
            case 1:
              // 移动板块
              var tempItem = this.list[this.currentSelectIndex];
              this.$navigate('../change-tab/index', { selectTags: JSON.stringify(tempItem.tagList), index: this.currentSelectIndex });
              break;
            case 2:
              // 移除空间
              break;
            default:
              break;
          }
        }
      },
      clickedPostButton: function clickedPostButton() {
        this.$navigate('../../pop/content-post/index', { type: 'space', selectPois: this.spaceInfo.poiList });
      },
      clickedTopButton: function clickedTopButton() {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.list.length <= 0) {
        return;
      }
      wx.showLoading({
        title: '加载中...'
      });

      setTimeout(function () {
        wx.hideLoading();
      }, 2000);
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // 下拉刷新

      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 3000);
    }
  }, {
    key: 'onPageScroll',
    value: function onPageScroll(obj) {
      if (obj.scrollTop > this.$parent.globalData.screenHeight * 2) {
        if (!this.showToTop) {
          this.showToTop = true;
          this.$apply();
        }
      } else {
        if (this.showToTop) {
          this.showToTop = false;
          this.$apply();
        }
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      wx.getStorage({
        key: _utils2.default.spaceChangeTag,
        success: function success(res) {
          wx.showToast({
            title: '版块更换成功～',
            icon: 'none',
            duration: 2000
          });
          var itemInfo = res.data;
          var temp = self.list[itemInfo.index];
          temp.tagList = itemInfo.selectTags;
          self.list[itemInfo.index] = temp;
          self.$apply();
          wx.removeStorage({
            key: _utils2.default.spaceChangeTag,
            success: function success(res) {}
          });
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(opts) {
      if (opts && opts.spaceId) {
        this.spaceId = opts.spaceId;
      }

      var self = this;
      this.tabs = _test2.default.testTabData;
      this.list = _test2.default.testSpaceListData;
      this.list.forEach(function (item, index) {
        item.pvStr = _utils2.default.getPVStr(item.pv);
        item.simpleContent = self.getShowContentText(item.elements);
        var tempImgs = self.getShowImgs(item.elements);
        item.simpleImgsCount = tempImgs.length;
        item.simpleImgs = tempImgs.slice(0, 3);
      });
      this.$apply();

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
    }
  }, {
    key: 'getShowContentText',
    value: function getShowContentText(elements) {
      var contentText = '';

      if (elements !== undefined && elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element.elementType === 0 && element.content !== '') {
            contentText = element.content;
            break;
          }
        }
      }

      return contentText;
    }
  }, {
    key: 'getShowImgs',
    value: function getShowImgs(elements) {
      var imgs = [];
      if (elements !== undefined && elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element.elementType === 1 && element.imgs !== undefined && element.imgs.length > 0) {
            imgs = imgs.concat(element.imgs);
          }
        }
      }

      return imgs;
    }
  }, {
    key: 'changeTab',
    value: function changeTab(tabName) {}

    /*引用广场回调*/

  }, {
    key: 'quoteSpace',
    value: function quoteSpace(selectedList) {
      var data = {
        originId: selectedList,
        spaceId: [this.spaceId],
        userId: this.userId,
        type: 0
      };
      wx.request({
        url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/articleMove?' + JSON.stringify(data),
        success: function success(res) {
          var response = res.data;
          if (response.success && response.data && response.data.res) {
            wx.showToast({
              title: '引用成功',
              icon: 'none',
              duration: 2000
            });
          } else {
            wx.showToast({
              title: '引用失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function fail(e) {
          console.log(e);
          wx.showToast({
            title: '引用失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/space-detail/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsIm9uUmVhY2hCb3R0b21EaXN0YW5jZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYmxpc3QiLCJ0YWJsaXN0dmlldyIsInNwYWNlZGV0YWlsaXRlbSIsImFsZXJ0bGlzdCIsImRhdGEiLCJkZWZhdWx0VGl0bGVDb2xvciIsImRlZmF1bHRUaXRsZUJvbGQiLCJzZWxlY3RUaXRsZUNvbG9yIiwic2VsZWN0VGl0bGVCb2xkIiwiaW5kaWNhdG9yQ29sb3IiLCJzZWxlY3RJbmRleCIsInNlbGVjdEl0ZW0iLCJzdG9yZSIsInVzZXJJZCIsInNwYWNlSWQiLCJzaG93VGFidmlldyIsImRlZmF1bHRCYWNrQ29sb3JfdmlldyIsImRlZmF1bHRUaXRsZUNvbG9yX3ZpZXciLCJkZWZhdWx0VGl0bGVCb2xkX3ZpZXciLCJkZWZhdWx0Qm9yZGVyQ29sb3JfdmlldyIsInNlbGVjdEJhY2tDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVCb2xkX3ZpZXciLCJzZWxlY3RCb3JkZXJDb2xvcl92aWV3Iiwic2hvd0FsZXJ0Iiwic2hvd0FsZXJ0T2Zmc2V0IiwiY3VycmVudEFsZXJ0VHlwZSIsImN1cnJlbnRBbGVydFNvdXJjZSIsImN1cnJlbnRBbGVydFNvdXJjZUNvdW50IiwiY3VycmVudEFsZXJ0U2VsZWN0U3R5bGUiLCJjdXJyZW50U2VsZWN0SW5kZXgiLCJjdXJyZW50U29ydCIsInNvcnRUeXBlcyIsIml0ZW1UeXBlcyIsInRhYnMiLCJsaXN0Iiwic3BhY2VJbmZvIiwic2hvd1RvVG9wIiwiY29tcHV0ZWQiLCJnZXRUYWJWaWV3V2lkdGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInNjcmVlbldpZHRoIiwibWV0aG9kcyIsImNsaWNrZWRTaG93VGFiTGlzdFZpZXciLCJjbGlja0N1cnJlbnRUYWIiLCJudW0iLCJldnQiLCJpbmRleCIsImluZm8iLCJjaGFuZ2VUYWIiLCJuYW1lIiwiY2xpY2tlZEVkaXRvclNwYWNlIiwiJG5hdmlnYXRlIiwiaXNFZGl0b3IiLCJjbGlja2VkU2VhcmNoQnV0dG9uIiwiY2xpY2tlZExpc3RJdGVtIiwiaXRlbSIsIm9yaWdpbklkIiwiY2xpY2tlZExpc3RJdGVtTW9yZUJ1dHRvbiIsImxlbmd0aCIsIm9mZnNldFRvcCIsImNsaWNrZWRNYXNrQmFjayIsImNsaWNrZWRTb3J0QnV0dG9uIiwiY3VycmVudFRhcmdldCIsImNsaWNrZWRBbGVydEl0ZW0iLCJ0ZW1wSXRlbSIsInNlbGVjdFRhZ3MiLCJKU09OIiwic3RyaW5naWZ5IiwidGFnTGlzdCIsImNsaWNrZWRQb3N0QnV0dG9uIiwidHlwZSIsInNlbGVjdFBvaXMiLCJwb2lMaXN0IiwiY2xpY2tlZFRvcEJ1dHRvbiIsInd4IiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJzaG93TG9hZGluZyIsInRpdGxlIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9iaiIsInNjcmVlbkhlaWdodCIsIiRhcHBseSIsInNlbGYiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3BhY2VDaGFuZ2VUYWciLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwiaWNvbiIsIml0ZW1JbmZvIiwidGVtcCIsInJlbW92ZVN0b3JhZ2UiLCJvcHRzIiwidGVzdFRhYkRhdGEiLCJ0ZXN0U3BhY2VMaXN0RGF0YSIsImZvckVhY2giLCJwdlN0ciIsImdldFBWU3RyIiwicHYiLCJzaW1wbGVDb250ZW50IiwiZ2V0U2hvd0NvbnRlbnRUZXh0IiwiZWxlbWVudHMiLCJ0ZW1wSW1ncyIsImdldFNob3dJbWdzIiwic2ltcGxlSW1nc0NvdW50Iiwic2ltcGxlSW1ncyIsInNsaWNlIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiYXV0aG9yaXplIiwic2NvcGUiLCJkaXNwYXRjaCIsImFwcGx5IiwidGhlbiIsImUiLCJzZXRVc2VySWQiLCJmYWlsIiwicmVMYXVuY2giLCJ1cmwiLCJzdGF0ZSIsImdldFN0YXRlIiwicmVxdWVzdCIsInVzZXJJbmZvIiwiY29udGVudFRleHQiLCJ1bmRlZmluZWQiLCJpIiwiZWxlbWVudCIsImVsZW1lbnRUeXBlIiwiY29udGVudCIsImltZ3MiLCJjb25jYXQiLCJ0YWJOYW1lIiwic2VsZWN0ZWRMaXN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsMkJBQXFCLE1BRGQ7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QixPQUhqQjtBQUlQQyw4QkFBd0IsTUFKakI7QUFLUEMsNkJBQXVCLElBTGhCO0FBTVBDLDZCQUF1QjtBQU5oQixLLFFBU1ZDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGlCQUFQLEVBQXlCLFNBQVEsVUFBakMsRUFBUixFLFFBQ2JDLE0sR0FBUyxFQUFDLG1CQUFrQixFQUFDLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsUUFBTyxNQUFwRCxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sT0FBakYsRUFBckIsRUFBK0csd0JBQXVCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxP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ZUFBR2tCLFNBQUgsQ0FBYTtBQUNYYixxQkFBTyxNQURJO0FBRVhjLG9CQUFNLE1BRks7QUFHWGhCLHdCQUFVO0FBSEMsYUFBYjtBQUlhO0FBQ2hCLFNBaEJRO0FBaUJUNEMsY0FBTSxjQUFVRixDQUFWLEVBQWE7QUFDakJvQixrQkFBUUMsR0FBUixDQUFZckIsQ0FBWjtBQUNBN0MsYUFBR2tCLFNBQUgsQ0FBYTtBQUNYYixtQkFBTyxNQURJO0FBRVhjLGtCQUFNLE1BRks7QUFHWGhCLHNCQUFVO0FBSEMsV0FBYjtBQUtEO0FBeEJRLE9BQVg7QUEwQkQ7Ozs7RUF4VWdDLGVBQUtnRSxJOztrQkFBbkIzSixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgb2J0YWluVXNlckluZm8gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuXG4gIGltcG9ydCBUYWJMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFiLWxpc3QnXG4gIGltcG9ydCBUYWJMaXN0VmlldyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYi1saXN0LXZpZXcnXG4gIGltcG9ydCBTcGFjZURldGFpbExpc3RJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc3BhY2UtZGV0YWlsLWxpc3QtaXRlbSdcbiAgaW1wb3J0IEFsZXJ0TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FsZXJ0LWxpc3QnXG4gIGltcG9ydCB0ZXN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Rlc3QnXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnqbrpl7Tor6bmg4UnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgICAgb25SZWFjaEJvdHRvbURpc3RhbmNlOiAxMDBcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJzcGFjZWRldGFpbGl0ZW1cIixcInByb3BzXCI6XCJjZWxsSW5mb1wifX07XHJcbiRwcm9wcyA9IHtcInNwYWNlZGV0YWlsaXRlbVwiOntcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Y2VsbEluZm8ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ0YWJsaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWJzLnN5bmNcIjpcInRhYnNcIixcInYtYmluZDpzZWxlY3RJbmRleC5zeW5jXCI6XCJzZWxlY3RJbmRleFwiLFwidi1iaW5kOmRlZmF1bHRUaXRsZUNvbG9yLm9uY2VcIjpcImRlZmF1bHRUaXRsZUNvbG9yXCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQm9sZC5vbmNlXCI6XCJkZWZhdWx0VGl0bGVCb2xkXCIsXCJ2LWJpbmQ6c2VsZWN0VGl0bGVDb2xvci5vbmNlXCI6XCJzZWxlY3RUaXRsZUNvbG9yXCIsXCJ2LWJpbmQ6c2VsZWN0VGl0bGVCb2xkLm9uY2VcIjpcInNlbGVjdFRpdGxlQm9sZFwiLFwidi1iaW5kOmluZGljYXRvckNvbG9yLm9uY2VcIjpcImluZGljYXRvckNvbG9yXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ0YWJsaXN0dmlld1wiOntcInYtYmluZDp0YWJzLnN5bmNcIjpcInRhYnNcIixcInYtYmluZDpzZWxlY3RJbmRleC5zeW5jXCI6XCJzZWxlY3RJbmRleFwiLFwidi1iaW5kOmRlZmF1bHRCYWNrQ29sb3Iub25jZVwiOlwiZGVmYXVsdEJhY2tDb2xvcl92aWV3XCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQ29sb3Iub25jZVwiOlwiZGVmYXVsdFRpdGxlQ29sb3Jfdmlld1wiLFwidi1iaW5kOmRlZmF1bHRUaXRsZUJvbGQub25jZVwiOlwiZGVmYXVsdFRpdGxlQm9sZF92aWV3XCIsXCJ2LWJpbmQ6ZGVmYXVsdEJvcmRlckNvbG9yLm9uY2VcIjpcImRlZmF1bHRCb3JkZXJDb2xvcl92aWV3XCIsXCJ2LWJpbmQ6c2VsZWN0VGl0bGVDb2xvci5vbmNlXCI6XCJzZWxlY3RUaXRsZUNvbG9yX3ZpZXdcIixcInYtYmluZDpzZWxlY3RUaXRsZUJvbGQub25jZVwiOlwic2VsZWN0VGl0bGVCb2xkX3ZpZXdcIixcInYtYmluZDpzZWxlY3RCb3JkZXJDb2xvci5vbmNlXCI6XCJzZWxlY3RCb3JkZXJDb2xvcl92aWV3XCIsXCJ2LWJpbmQ6c2VsZWN0QmFja0NvbG9yLm9uY2VcIjpcInNlbGVjdEJhY2tDb2xvcl92aWV3XCJ9LFwiYWxlcnRsaXN0XCI6e1widi1iaW5kOml0ZW1zLnN5bmNcIjpcImN1cnJlbnRBbGVydFNvdXJjZVwiLFwidi1iaW5kOnN5bmNPZmZzZXRZLnN5bmNcIjpcInNob3dBbGVydE9mZnNldFwiLFwidi1iaW5kOnNob3dTZWxlY3RTdHlsZS5zeW5jXCI6XCJjdXJyZW50QWxlcnRTZWxlY3RTdHlsZVwiLFwidi1iaW5kOmN1cnJlbnRTZWxlY3Quc3luY1wiOlwiY3VycmVudFNvcnRcIixcInYtYmluZDp0b3RhbENvdW50LnN5bmNcIjpcImN1cnJlbnRBbGVydFNvdXJjZUNvdW50XCJ9fTtcclxuJGV2ZW50cyA9IHtcInNwYWNlZGV0YWlsaXRlbVwiOntcInYtb246dGFwRXZlbnRcIjpcImNsaWNrZWRMaXN0SXRlbVwiLFwidi1vbjp0YXBNb3JlRXZlbnRcIjpcImNsaWNrZWRMaXN0SXRlbU1vcmVCdXR0b25cIn0sXCJ0YWJsaXN0XCI6e1widi1vbjp0YXBFdmVudFwiOlwiY2xpY2tDdXJyZW50VGFiXCJ9LFwidGFibGlzdHZpZXdcIjp7XCJ2LW9uOnRhcEV2ZW50XCI6XCJjbGlja0N1cnJlbnRUYWJcIn0sXCJhbGVydGxpc3RcIjp7XCJ2LW9uOmNsaWNrZWRBbGVydEl0ZW1cIjpcImNsaWNrZWRBbGVydEl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHRhYmxpc3Q6IFRhYkxpc3QsXG4gICAgICB0YWJsaXN0dmlldzogVGFiTGlzdFZpZXcsXG4gICAgICBzcGFjZWRldGFpbGl0ZW06IFNwYWNlRGV0YWlsTGlzdEl0ZW0sXG4gICAgICBhbGVydGxpc3Q6IEFsZXJ0TGlzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBkZWZhdWx0VGl0bGVDb2xvcjogJyM2NjY2NjYnLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZDogJ25vcm1hbCcsXG4gICAgICBzZWxlY3RUaXRsZUNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBzZWxlY3RUaXRsZUJvbGQ6ICdib2xkJyxcbiAgICAgIGluZGljYXRvckNvbG9yOiAnI2ZmNzczMycsXG4gICAgICBzZWxlY3RJbmRleDogMCxcbiAgICAgIHNlbGVjdEl0ZW06IHt9LFxuXG4gICAgICBzdG9yZTogZ2V0U3RvcmUoKSxcbiAgICAgIHVzZXJJZDogMCxcbiAgICAgIHNwYWNlSWQ6IDAsXG5cbiAgICAgIHNob3dUYWJ2aWV3OiBmYWxzZSxcbiAgICAgIGRlZmF1bHRCYWNrQ29sb3JfdmlldzogJyNGRkZGRkYnLFxuICAgICAgZGVmYXVsdFRpdGxlQ29sb3JfdmlldzogJyMzMzMzMzMnLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZF92aWV3OiAnbm9ybWFsJyxcbiAgICAgIGRlZmF1bHRCb3JkZXJDb2xvcl92aWV3OiAndHJhbnNwYXJlbnQnLFxuICAgICAgc2VsZWN0QmFja0NvbG9yX3ZpZXc6ICcjRkZGQ0Y4JyxcbiAgICAgIHNlbGVjdFRpdGxlQ29sb3JfdmlldzogJyNGRjU1MDAnLFxuICAgICAgc2VsZWN0VGl0bGVCb2xkX3ZpZXc6ICdib2xkJyxcbiAgICAgIHNlbGVjdEJvcmRlckNvbG9yX3ZpZXc6ICcjRkY3NzMzJyxcblxuICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgIHNob3dBbGVydE9mZnNldDogMCxcblxuICAgICAgY3VycmVudEFsZXJ0VHlwZTogJycsXG4gICAgICBjdXJyZW50QWxlcnRTb3VyY2U6IFtdLFxuICAgICAgY3VycmVudEFsZXJ0U291cmNlQ291bnQ6IDAsXG4gICAgICBjdXJyZW50QWxlcnRTZWxlY3RTdHlsZTogZmFsc2UsXG4gICAgICBjdXJyZW50U2VsZWN0SW5kZXg6IC0xLFxuXG4gICAgICBjdXJyZW50U29ydDogMCxcbiAgICAgIHNvcnRUeXBlczogW1xuICAgICAgICAn6buY6K6k5o6S5bqPJyxcbiAgICAgICAgJ+WPkeW4g+aXtumXtOaOkuW6jycsXG4gICAgICAgICfng63luqbmjpLluo8nXG4gICAgICBdLFxuICAgICAgaXRlbVR5cGVzOiBbXG4gICAgICAgICfliIbkuqsnLFxuICAgICAgICAn5pu05o2i5p2/5Z2XJyxcbiAgICAgICAgJ+enu+mZpOepuumXtCdcbiAgICAgIF0sXG4gICAgICB0YWJzOiBbXSxcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgc3BhY2VJbmZvOiB7fSxcblxuICAgICAgc2hvd1RvVG9wOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0VGFiVmlld1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2NyZWVuV2lkdGggLSA1NFxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGlja2VkU2hvd1RhYkxpc3RWaWV3KCkge1xuICAgICAgICB0aGlzLnNob3dUYWJ2aWV3ID0gIXRoaXMuc2hvd1RhYnZpZXdcbiAgICAgIH0sXG4gICAgICBjbGlja0N1cnJlbnRUYWIobnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJbmRleCA9IG51bS5pbmRleFxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0gPSBudW0uaW5mb1xuICAgICAgICB0aGlzLmNoYW5nZVRhYihudW0uaW5mby5uYW1lKVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRFZGl0b3JTcGFjZSgpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uL2NyZWF0ZS1zcGFjZS9pbmRleCcsIHtpc0VkaXRvcjogdHJ1ZX0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNlYXJjaEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL3NlYXJjaC9jb250ZW50LXNlYXJjaC9pbmRleD9mcm9tU3F1YXJlPWZhbHNlJywge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZExpc3RJdGVtKGluZm8pIHtcbiAgICAgICAgLy8g5b+D5b6X6K+m5oOFXG4gICAgICAgIGlmICghaW5mbyB8fCAhaW5mby5pdGVtKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL2FydGljbGUvYXJ0aWNsZS1kZXRhaWwvaW5kZXg/aWQ9JyArIGluZm8uaXRlbS5vcmlnaW5JZCwge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZExpc3RJdGVtTW9yZUJ1dHRvbihudW0sIGV2dCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFR5cGUgPSAnaXRlbU1vcmUnXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlID0gdGhpcy5pdGVtVHlwZXNcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTZWxlY3RTdHlsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlQ291bnQgPSB0aGlzLml0ZW1UeXBlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5zaG93QWxlcnQgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0T2Zmc2V0ID0gbnVtLm9mZnNldFRvcFxuXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdEluZGV4ID0gbnVtLmluZGV4XG4gICAgICB9LFxuICAgICAgY2xpY2tlZE1hc2tCYWNrKCkge1xuICAgICAgICB0aGlzLnNob3dBbGVydCA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0VHlwZSA9ICcnXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlID0gW11cbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTZWxlY3RTdHlsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlQ291bnQgPSAwXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdEluZGV4ID0gLTFcbiAgICAgIH0sXG4gICAgICBjbGlja2VkU29ydEJ1dHRvbihudW0sIGV2dCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFR5cGUgPSAnc29ydCdcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTb3VyY2UgPSB0aGlzLnNvcnRUeXBlc1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNlbGVjdFN0eWxlID0gdHJ1ZVxuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZUNvdW50ID0gdGhpcy5zb3J0VHlwZXMubGVuZ3RoXG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gdHJ1ZVxuICAgICAgICB0aGlzLnNob3dBbGVydE9mZnNldCA9IG51bS5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcCArIDI0XG4gICAgICB9LFxuICAgICAgY2xpY2tlZEFsZXJ0SXRlbShudW0sIGV2dCkge1xuICAgICAgICBsZXQgaW5kZXggPSBudW0uaW5kZXhcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFsZXJ0VHlwZSA9PT0gJ3NvcnQnKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U29ydCA9IGluZGV4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyDliIbkuqtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTogLy8g56e75Yqo5p2/5Z2XXG4gICAgICAgICAgICAgIGxldCB0ZW1wSXRlbSA9IHRoaXMubGlzdFt0aGlzLmN1cnJlbnRTZWxlY3RJbmRleF1cbiAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uL2NoYW5nZS10YWIvaW5kZXgnLCB7c2VsZWN0VGFnczogSlNPTi5zdHJpbmdpZnkodGVtcEl0ZW0udGFnTGlzdCksIGluZGV4OiB0aGlzLmN1cnJlbnRTZWxlY3RJbmRleH0pXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6IC8vIOenu+mZpOepuumXtFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbGlja2VkUG9zdEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL3BvcC9jb250ZW50LXBvc3QvaW5kZXgnLCB7dHlwZTogJ3NwYWNlJywgc2VsZWN0UG9pczogdGhpcy5zcGFjZUluZm8ucG9pTGlzdH0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFRvcEJ1dHRvbigpIHtcbiAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rS4uLicsXG4gICAgICB9KVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgIH0sMjAwMClcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIC8vIOS4i+aLieWIt+aWsFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB9LCAzMDAwKVxuICAgIH1cblxuICAgIG9uUGFnZVNjcm9sbChvYmopIHtcbiAgICAgIGlmIChvYmouc2Nyb2xsVG9wID4gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2NyZWVuSGVpZ2h0ICogMikge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1RvVG9wKSB7XG4gICAgICAgICAgdGhpcy5zaG93VG9Ub3AgPSB0cnVlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zaG93VG9Ub3ApIHtcbiAgICAgICAgICB0aGlzLnNob3dUb1RvcCA9IGZhbHNlXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiB1dGlscy5zcGFjZUNoYW5nZVRhZyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn54mI5Z2X5pu05o2i5oiQ5Yqf772eJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsZXQgaXRlbUluZm8gPSByZXMuZGF0YVxuICAgICAgICAgIGxldCB0ZW1wID0gc2VsZi5saXN0W2l0ZW1JbmZvLmluZGV4XVxuICAgICAgICAgIHRlbXAudGFnTGlzdCA9IGl0ZW1JbmZvLnNlbGVjdFRhZ3NcbiAgICAgICAgICBzZWxmLmxpc3RbaXRlbUluZm8uaW5kZXhdID0gdGVtcFxuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogdXRpbHMuc3BhY2VDaGFuZ2VUYWcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRzKSB7XG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnNwYWNlSWQpIHtcbiAgICAgICAgdGhpcy5zcGFjZUlkID0gb3B0cy5zcGFjZUlkXG4gICAgICB9XG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy50YWJzID0gdGVzdC50ZXN0VGFiRGF0YVxuICAgICAgdGhpcy5saXN0ID0gdGVzdC50ZXN0U3BhY2VMaXN0RGF0YVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0ucHZTdHIgPSB1dGlscy5nZXRQVlN0cihpdGVtLnB2KVxuICAgICAgICBpdGVtLnNpbXBsZUNvbnRlbnQgPSBzZWxmLmdldFNob3dDb250ZW50VGV4dChpdGVtLmVsZW1lbnRzKVxuICAgICAgICBsZXQgdGVtcEltZ3MgPSBzZWxmLmdldFNob3dJbWdzKGl0ZW0uZWxlbWVudHMpXG4gICAgICAgIGl0ZW0uc2ltcGxlSW1nc0NvdW50ID0gdGVtcEltZ3MubGVuZ3RoXG4gICAgICAgIGl0ZW0uc2ltcGxlSW1ncyA9IHRlbXBJbWdzLnNsaWNlKDAsIDMpXG4gICAgICB9KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuXG5cbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICB3eC5hdXRob3JpemUoe1xuICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcbiAgICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3JlLmRpc3BhdGNoKG9idGFpblVzZXJJbmZvLmFwcGx5KCkpLnRoZW4oKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuc2V0VXNlcklkKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHt1cmw6ICcuLi8uLi9lcnJvci9hdXRob3JpdHktZmFpbC9pbmRleCd9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnN0b3JlLmRpc3BhdGNoKG9idGFpblVzZXJJbmZvLmFwcGx5KCkpLnRoZW4oKGUpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRVc2VySWQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0VXNlcklkKCkge1xuICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpXG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICAgIHRoaXMudXNlcklkID0gc3RhdGUucmVxdWVzdC51c2VySW5mby51c2VySWRcbiAgICB9XG5cbiAgICBnZXRTaG93Q29udGVudFRleHQoZWxlbWVudHMpIHtcbiAgICAgIGxldCBjb250ZW50VGV4dCA9ICcnXG5cbiAgICAgIGlmIChlbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV1cbiAgICAgICAgICBpZiAoZWxlbWVudC5lbGVtZW50VHlwZSA9PT0gMCAmJiBlbGVtZW50LmNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICBjb250ZW50VGV4dCA9IGVsZW1lbnQuY29udGVudFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnRUZXh0XG4gICAgfVxuXG4gICAgZ2V0U2hvd0ltZ3MoZWxlbWVudHMpIHtcbiAgICAgIGxldCBpbWdzID0gW11cbiAgICAgIGlmIChlbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV1cbiAgICAgICAgICBpZiAoZWxlbWVudC5lbGVtZW50VHlwZSA9PT0gMSAmJiBlbGVtZW50LmltZ3MgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW1ncyA9IGltZ3MuY29uY2F0KGVsZW1lbnQuaW1ncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltZ3NcbiAgICB9XG5cbiAgICBjaGFuZ2VUYWIodGFiTmFtZSkge1xuXG4gICAgfVxuXG4gICAgLyrlvJXnlKjlub/lnLrlm57osIMqL1xuICAgIHF1b3RlU3BhY2Uoc2VsZWN0ZWRMaXN0KSB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgb3JpZ2luSWQ6IHNlbGVjdGVkTGlzdCxcbiAgICAgICAgc3BhY2VJZDogW3RoaXMuc3BhY2VJZF0sXG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIHR5cGU6IDBcbiAgICAgIH1cbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGBodHRwOi8vY210LXRnc3AuYXBpLnR1bml1LXNzdC5vcmcvdGdzcC9zcGFjZS9hcnRpY2xlTW92ZT8ke0pTT04uc3RyaW5naWZ5KGRhdGEpfWAsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXMuZGF0YVxuICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLnJlcykge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflvJXnlKjmiJDlip8nLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+W8leeUqOWksei0pScsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+W8leeUqOWksei0pScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=