'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabListView = require('./../../../components/tab-list-view.js');

var _tabListView2 = _interopRequireDefault(_tabListView);

var _tabList = require('./../../../components/tab-list.js');

var _tabList2 = _interopRequireDefault(_tabList);

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

var _alertList = require('./../../../components/alert-list.js');

var _alertList2 = _interopRequireDefault(_alertList);

var _releaseItem = require('./../../../components/release-item.js');

var _releaseItem2 = _interopRequireDefault(_releaseItem);

var _testJson = require('./../../../mixins/testJson.js');

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
      navigationBarTitleText: '广场',
      enablePullDownRefresh: true
    }, _this.$repeat = { "list": { "com": "releaseitem", "props": "items" } }, _this.$props = { "releaseitem": { "v-bind:cancelFlag.once": { "value": "cancelFlag", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:items.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:fromSquare.once": { "value": "fromSquare", "for": "list", "item": "item", "index": "index", "key": "index" } }, "tablist": { "xmlns:v-bind": "", "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultTitleColor.once": "defaultTitleColor", "v-bind:defaultTitleBold.once": "defaultTitleBold", "v-bind:selectTitleColor.once": "selectTitleColor", "v-bind:selectTitleBold.once": "selectTitleBold", "v-bind:indicatorColor.once": "indicatorColor", "xmlns:v-on": "" }, "tablistview": { "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultBackColor.once": "defaultBackColor_view", "v-bind:defaultTitleColor.once": "defaultTitleColor_view", "v-bind:defaultTitleBold.once": "defaultTitleBold_view", "v-bind:defaultBorderColor.once": "defaultBorderColor_view", "v-bind:selectTitleColor.once": "selectTitleColor_view", "v-bind:selectTitleBold.once": "selectTitleBold_view", "v-bind:selectBorderColor.once": "selectBorderColor_view", "v-bind:selectBackColor.once": "selectBackColor_view" }, "alertlist": { "v-bind:items.sync": "currentAlertSource", "v-bind:syncOffsetY.sync": "showAlertOffset", "v-bind:showSelectStyle.sync": "currentAlertSelectStyle", "v-bind:currentSelect.sync": "currentSort", "v-bind:totalCount.sync": "currentAlertSourceCount" } }, _this.$events = { "releaseitem": { "v-on:tapEvent": "clickedListItem", "v-on:tapMoreEvent": "clickedListItemMoreButton" }, "tablist": { "v-on:tapEvent": "clickCurrentTab" }, "tablistview": { "v-on:tapEvent": "clickCurrentTab" }, "alertlist": { "v-on:clickedAlertItem": "clickedAlertItem" } }, _this.components = {
      releaseitem: _releaseItem2.default,
      tablist: _tabList2.default,
      tablistview: _tabListView2.default,
      alertlist: _alertList2.default
    }, _this.computed = {
      getTabViewWidth: function getTabViewWidth() {
        return this.$parent.globalData.screenWidth - 54;
      }
    }, _this.data = {
      list: [],
      cityName: '全部城市',
      cityCode: 0,

      isAuthor: false,
      isAdmin: false,

      showToTop: false,
      screenHeight: 0,

      fromSquare: true,

      tabs: [],
      defaultTitleColor: '#666666',
      defaultTitleBold: 'normal',
      selectTitleColor: '#333333',
      selectTitleBold: 'bold',
      indicatorColor: '#ff7733',
      selectIndex: 0,
      selectItem: {},

      cancelFlag: false,

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
      currentSort: 0,
      sortTypes: ['默认排序', '发布时间排序', '热度排序'],
      itemTypes: ['分享', '移动']
    }, _this.methods = {
      clickedTopButton: function clickedTopButton() {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      clickedPostButton: function clickedPostButton() {
        this.$navigate('../../pop/content-post/index', { type: 'square' });
      },
      clickCurrentTab: function clickCurrentTab(num, evt) {
        this.selectIndex = num.index;
        this.selectItem = num.info;
        this.changeTab(num.info.title);
      },
      clickedShowTabListView: function clickedShowTabListView() {
        this.showTabview = !this.showTabview;
      },
      jumpPoiSelect: function jumpPoiSelect() {
        this.$navigate('../../space/add-destination/index?fromSquare=' + this.fromSquare, {});
      },
      jumpContentSelect: function jumpContentSelect() {
        this.$navigate('../../search/content-search/index?fromSquare=' + this.fromSquare, {});
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
        }
      },
      clickedListItem: function clickedListItem(info) {
        // 心得详情
        if (!info || !info.item) {
          return;
        }
        this.$navigate('../../article/article-detail/index?id=' + info.item.originId, {});
      },
      clickedMaskBack: function clickedMaskBack() {
        this.showAlert = false;
        this.currentAlertType = '';
        this.currentAlertSource = [];
        this.currentAlertSelectStyle = false;
        this.currentAlertSourceCount = 0;
      },
      clickedListItemMoreButton: function clickedListItemMoreButton(num) {
        this.currentAlertType = 'itemMore';
        this.currentAlertSource = this.itemTypes;
        this.currentAlertSelectStyle = false;
        this.currentAlertSourceCount = this.itemTypes.length;
        this.showAlert = true;
        this.showAlertOffset = num.offsetTop;

        this.currentSelectIndex = num.index;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'datachange',
    value: function datachange() {
      this.list.forEach(function (detail, j) {
        detail.elements.forEach(function (item, i) {
          if (item.elementId === 0) {
            detail.elementContent = item.content;
          } else if (item.elementId === 1) {
            item.imgs.forEach(function (value, index) {
              detail.imageNumber++;
              if (detail.imagesList.length < 3) {
                detail.imagesList.push(value.imgUrl);
              } else {
                detail.imagesNumberFlag = true;
              }
            });
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      if (_testJson.responseRelease.success) {
        this.list = _testJson.responseRelease.data.list;
        this.list.forEach(function (item, i) {
          item.flag = true;
          item.imageNumber = 0;
          item.imagesList = [];
          item.elementContent = '';
          item.imagesNumberFlag = false;
        });

        this.datachange();
      }
      this.screenHeight = wx.getSystemInfoSync().windowHeight;
      this.tabs = _test2.default.testTabData;
      this.$apply();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showNavigationBarLoading();
      setTimeout(function () {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 1500);
    }
  }, {
    key: 'onPageScroll',
    value: function onPageScroll(obj) {
      if (obj.scrollTop > this.screenHeight * 1.5) {
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
    key: 'changeTab',
    value: function changeTab(tabName) {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      var self = this;
      var shareObj = {
        title: '旅行最in攻略、最hot推荐、最实用指南',
        path: '/pages/space/space-list/index',
        success: function success(res) {
          if (res.errMsg === 'shareAppMessage:ok') {}
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
      if (options.from === 'button') {}
      return shareObj;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/square/square-home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmVsZWFzZWl0ZW0iLCJ0YWJsaXN0IiwidGFibGlzdHZpZXciLCJhbGVydGxpc3QiLCJjb21wdXRlZCIsImdldFRhYlZpZXdXaWR0aCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2NyZWVuV2lkdGgiLCJkYXRhIiwibGlzdCIsImNpdHlOYW1lIiwiY2l0eUNvZGUiLCJpc0F1dGhvciIsImlzQWRtaW4iLCJzaG93VG9Ub3AiLCJzY3JlZW5IZWlnaHQiLCJmcm9tU3F1YXJlIiwidGFicyIsImRlZmF1bHRUaXRsZUNvbG9yIiwiZGVmYXVsdFRpdGxlQm9sZCIsInNlbGVjdFRpdGxlQ29sb3IiLCJzZWxlY3RUaXRsZUJvbGQiLCJpbmRpY2F0b3JDb2xvciIsInNlbGVjdEluZGV4Iiwic2VsZWN0SXRlbSIsImNhbmNlbEZsYWciLCJzaG93VGFidmlldyIsImRlZmF1bHRCYWNrQ29sb3JfdmlldyIsImRlZmF1bHRUaXRsZUNvbG9yX3ZpZXciLCJkZWZhdWx0VGl0bGVCb2xkX3ZpZXciLCJkZWZhdWx0Qm9yZGVyQ29sb3JfdmlldyIsInNlbGVjdEJhY2tDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVCb2xkX3ZpZXciLCJzZWxlY3RCb3JkZXJDb2xvcl92aWV3Iiwic2hvd0FsZXJ0Iiwic2hvd0FsZXJ0T2Zmc2V0IiwiY3VycmVudEFsZXJ0VHlwZSIsImN1cnJlbnRBbGVydFNvdXJjZSIsImN1cnJlbnRBbGVydFNvdXJjZUNvdW50IiwiY3VycmVudEFsZXJ0U2VsZWN0U3R5bGUiLCJjdXJyZW50U29ydCIsInNvcnRUeXBlcyIsIml0ZW1UeXBlcyIsIm1ldGhvZHMiLCJjbGlja2VkVG9wQnV0dG9uIiwid3giLCJwYWdlU2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiIsImNsaWNrZWRQb3N0QnV0dG9uIiwiJG5hdmlnYXRlIiwidHlwZSIsImNsaWNrQ3VycmVudFRhYiIsIm51bSIsImV2dCIsImluZGV4IiwiaW5mbyIsImNoYW5nZVRhYiIsInRpdGxlIiwiY2xpY2tlZFNob3dUYWJMaXN0VmlldyIsImp1bXBQb2lTZWxlY3QiLCJqdW1wQ29udGVudFNlbGVjdCIsImNsaWNrZWRTb3J0QnV0dG9uIiwibGVuZ3RoIiwiY3VycmVudFRhcmdldCIsIm9mZnNldFRvcCIsImNsaWNrZWRBbGVydEl0ZW0iLCJjbGlja2VkTGlzdEl0ZW0iLCJpdGVtIiwib3JpZ2luSWQiLCJjbGlja2VkTWFza0JhY2siLCJjbGlja2VkTGlzdEl0ZW1Nb3JlQnV0dG9uIiwiY3VycmVudFNlbGVjdEluZGV4IiwiZm9yRWFjaCIsImRldGFpbCIsImoiLCJlbGVtZW50cyIsImkiLCJlbGVtZW50SWQiLCJlbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJpbWdzIiwidmFsdWUiLCJpbWFnZU51bWJlciIsImltYWdlc0xpc3QiLCJwdXNoIiwiaW1nVXJsIiwiaW1hZ2VzTnVtYmVyRmxhZyIsInN1Y2Nlc3MiLCJmbGFnIiwiZGF0YWNoYW5nZSIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwidGVzdFRhYkRhdGEiLCIkYXBwbHkiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzZXRUaW1lb3V0IiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9iaiIsInRhYk5hbWUiLCJvcHRpb25zIiwic2VsZiIsInNoYXJlT2JqIiwicGF0aCIsInJlcyIsImVyck1zZyIsImZhaWwiLCJjb21wbGV0ZSIsImZyb20iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFD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UyxDQUNsQjs7O3NDQUVpQkMsTyxFQUFTO0FBQ3pCLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFVBQUlDLFdBQVc7QUFDYjdDLGVBQU8sc0JBRE07QUFFYjhDLGNBQU0sK0JBRk87QUFHYmhCLGlCQUFTLGlCQUFVaUIsR0FBVixFQUFlO0FBQ3RCLGNBQUlBLElBQUlDLE1BQUosS0FBZSxvQkFBbkIsRUFBeUMsQ0FDeEM7QUFDRixTQU5ZO0FBT2JDLGNBQU0sY0FBVUYsR0FBVixFQUFlO0FBQ25CO0FBQ0EsY0FBSUEsSUFBSUMsTUFBSixLQUFlLDZCQUFuQixFQUFrRDtBQUNoRDtBQUNELFdBRkQsTUFFTyxJQUFJRCxJQUFJQyxNQUFKLEtBQWUsc0JBQW5CLEVBQTJDO0FBQ2hEO0FBQ0Q7QUFDRixTQWRZO0FBZWJFLGtCQUFVLG9CQUFZLENBRXJCO0FBakJZLE9BQWY7QUFtQkEsVUFBR1AsUUFBUVEsSUFBUixLQUFpQixRQUFwQixFQUE4QixDQUM3QjtBQUNELGFBQU9OLFFBQVA7QUFDRDs7OztFQWxPZ0MsZUFBS08sSTs7a0JBQW5CMUgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVGFiTGlzdFZpZXcgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWItbGlzdC12aWV3J1xuICBpbXBvcnQgVGFiTGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYi1saXN0J1xuICBpbXBvcnQgdGVzdCBmcm9tICcuLi8uLi8uLi91dGlscy90ZXN0J1xuICBpbXBvcnQgQWxlcnRMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQtbGlzdCdcbiAgaW1wb3J0IFJlbGVhc2VJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVsZWFzZS1pdGVtJ1xuICBpbXBvcnQgeyByZXNwb25zZVJlbGVhc2UgfSBmcm9tICcuLi8uLi8uLi9taXhpbnMvdGVzdEpzb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bm/5Zy6JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcInJlbGVhc2VpdGVtXCIsXCJwcm9wc1wiOlwiaXRlbXNcIn19O1xyXG4kcHJvcHMgPSB7XCJyZWxlYXNlaXRlbVwiOntcInYtYmluZDpjYW5jZWxGbGFnLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiY2FuY2VsRmxhZ1wiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbXMub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6ZnJvbVNxdWFyZS5vbmNlXCI6e1widmFsdWVcIjpcImZyb21TcXVhcmVcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInRhYmxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYnMuc3luY1wiOlwidGFic1wiLFwidi1iaW5kOnNlbGVjdEluZGV4LnN5bmNcIjpcInNlbGVjdEluZGV4XCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQ29sb3Iub25jZVwiOlwiZGVmYXVsdFRpdGxlQ29sb3JcIixcInYtYmluZDpkZWZhdWx0VGl0bGVCb2xkLm9uY2VcIjpcImRlZmF1bHRUaXRsZUJvbGRcIixcInYtYmluZDpzZWxlY3RUaXRsZUNvbG9yLm9uY2VcIjpcInNlbGVjdFRpdGxlQ29sb3JcIixcInYtYmluZDpzZWxlY3RUaXRsZUJvbGQub25jZVwiOlwic2VsZWN0VGl0bGVCb2xkXCIsXCJ2LWJpbmQ6aW5kaWNhdG9yQ29sb3Iub25jZVwiOlwiaW5kaWNhdG9yQ29sb3JcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInRhYmxpc3R2aWV3XCI6e1widi1iaW5kOnRhYnMuc3luY1wiOlwidGFic1wiLFwidi1iaW5kOnNlbGVjdEluZGV4LnN5bmNcIjpcInNlbGVjdEluZGV4XCIsXCJ2LWJpbmQ6ZGVmYXVsdEJhY2tDb2xvci5vbmNlXCI6XCJkZWZhdWx0QmFja0NvbG9yX3ZpZXdcIixcInYtYmluZDpkZWZhdWx0VGl0bGVDb2xvci5vbmNlXCI6XCJkZWZhdWx0VGl0bGVDb2xvcl92aWV3XCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQm9sZC5vbmNlXCI6XCJkZWZhdWx0VGl0bGVCb2xkX3ZpZXdcIixcInYtYmluZDpkZWZhdWx0Qm9yZGVyQ29sb3Iub25jZVwiOlwiZGVmYXVsdEJvcmRlckNvbG9yX3ZpZXdcIixcInYtYmluZDpzZWxlY3RUaXRsZUNvbG9yLm9uY2VcIjpcInNlbGVjdFRpdGxlQ29sb3Jfdmlld1wiLFwidi1iaW5kOnNlbGVjdFRpdGxlQm9sZC5vbmNlXCI6XCJzZWxlY3RUaXRsZUJvbGRfdmlld1wiLFwidi1iaW5kOnNlbGVjdEJvcmRlckNvbG9yLm9uY2VcIjpcInNlbGVjdEJvcmRlckNvbG9yX3ZpZXdcIixcInYtYmluZDpzZWxlY3RCYWNrQ29sb3Iub25jZVwiOlwic2VsZWN0QmFja0NvbG9yX3ZpZXdcIn0sXCJhbGVydGxpc3RcIjp7XCJ2LWJpbmQ6aXRlbXMuc3luY1wiOlwiY3VycmVudEFsZXJ0U291cmNlXCIsXCJ2LWJpbmQ6c3luY09mZnNldFkuc3luY1wiOlwic2hvd0FsZXJ0T2Zmc2V0XCIsXCJ2LWJpbmQ6c2hvd1NlbGVjdFN0eWxlLnN5bmNcIjpcImN1cnJlbnRBbGVydFNlbGVjdFN0eWxlXCIsXCJ2LWJpbmQ6Y3VycmVudFNlbGVjdC5zeW5jXCI6XCJjdXJyZW50U29ydFwiLFwidi1iaW5kOnRvdGFsQ291bnQuc3luY1wiOlwiY3VycmVudEFsZXJ0U291cmNlQ291bnRcIn19O1xyXG4kZXZlbnRzID0ge1wicmVsZWFzZWl0ZW1cIjp7XCJ2LW9uOnRhcEV2ZW50XCI6XCJjbGlja2VkTGlzdEl0ZW1cIixcInYtb246dGFwTW9yZUV2ZW50XCI6XCJjbGlja2VkTGlzdEl0ZW1Nb3JlQnV0dG9uXCJ9LFwidGFibGlzdFwiOntcInYtb246dGFwRXZlbnRcIjpcImNsaWNrQ3VycmVudFRhYlwifSxcInRhYmxpc3R2aWV3XCI6e1widi1vbjp0YXBFdmVudFwiOlwiY2xpY2tDdXJyZW50VGFiXCJ9LFwiYWxlcnRsaXN0XCI6e1widi1vbjpjbGlja2VkQWxlcnRJdGVtXCI6XCJjbGlja2VkQWxlcnRJdGVtXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICByZWxlYXNlaXRlbTogUmVsZWFzZUl0ZW0sXG4gICAgICB0YWJsaXN0OiBUYWJMaXN0LFxuICAgICAgdGFibGlzdHZpZXc6IFRhYkxpc3RWaWV3LFxuICAgICAgYWxlcnRsaXN0OiBBbGVydExpc3RcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldFRhYlZpZXdXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbldpZHRoIC0gNTRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW10sXG4gICAgICBjaXR5TmFtZTogJ+WFqOmDqOWfjuW4gicsXG4gICAgICBjaXR5Q29kZTogMCxcblxuICAgICAgaXNBdXRob3I6IGZhbHNlLFxuICAgICAgaXNBZG1pbjogZmFsc2UsXG5cbiAgICAgIHNob3dUb1RvcDogZmFsc2UsXG4gICAgICBzY3JlZW5IZWlnaHQ6IDAsXG5cbiAgICAgIGZyb21TcXVhcmU6IHRydWUsXG5cbiAgICAgIHRhYnM6IFtdLFxuICAgICAgZGVmYXVsdFRpdGxlQ29sb3I6ICcjNjY2NjY2JyxcbiAgICAgIGRlZmF1bHRUaXRsZUJvbGQ6ICdub3JtYWwnLFxuICAgICAgc2VsZWN0VGl0bGVDb2xvcjogJyMzMzMzMzMnLFxuICAgICAgc2VsZWN0VGl0bGVCb2xkOiAnYm9sZCcsXG4gICAgICBpbmRpY2F0b3JDb2xvcjogJyNmZjc3MzMnLFxuICAgICAgc2VsZWN0SW5kZXg6IDAsXG4gICAgICBzZWxlY3RJdGVtOiB7fSxcblxuICAgICAgY2FuY2VsRmxhZzogZmFsc2UsXG5cbiAgICAgIHNob3dUYWJ2aWV3OiBmYWxzZSxcbiAgICAgIGRlZmF1bHRCYWNrQ29sb3JfdmlldzogJyNGRkZGRkYnLFxuICAgICAgZGVmYXVsdFRpdGxlQ29sb3JfdmlldzogJyMzMzMzMzMnLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZF92aWV3OiAnbm9ybWFsJyxcbiAgICAgIGRlZmF1bHRCb3JkZXJDb2xvcl92aWV3OiAndHJhbnNwYXJlbnQnLFxuICAgICAgc2VsZWN0QmFja0NvbG9yX3ZpZXc6ICcjRkZGQ0Y4JyxcbiAgICAgIHNlbGVjdFRpdGxlQ29sb3JfdmlldzogJyNGRjU1MDAnLFxuICAgICAgc2VsZWN0VGl0bGVCb2xkX3ZpZXc6ICdib2xkJyxcbiAgICAgIHNlbGVjdEJvcmRlckNvbG9yX3ZpZXc6ICcjRkY3NzMzJyxcblxuICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgIHNob3dBbGVydE9mZnNldDogMCxcbiAgICAgIGN1cnJlbnRBbGVydFR5cGU6ICcnLFxuICAgICAgY3VycmVudEFsZXJ0U291cmNlOiBbXSxcbiAgICAgIGN1cnJlbnRBbGVydFNvdXJjZUNvdW50OiAwLFxuICAgICAgY3VycmVudEFsZXJ0U2VsZWN0U3R5bGU6IGZhbHNlLFxuICAgICAgY3VycmVudFNvcnQ6IDAsXG4gICAgICBzb3J0VHlwZXM6IFtcbiAgICAgICAgJ+m7mOiupOaOkuW6jycsXG4gICAgICAgICflj5HluIPml7bpl7TmjpLluo8nLFxuICAgICAgICAn54Ot5bqm5o6S5bqPJ1xuICAgICAgXSxcbiAgICAgIGl0ZW1UeXBlczogW1xuICAgICAgICAn5YiG5LqrJyxcbiAgICAgICAgJ+enu+WKqCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tlZFRvcEJ1dHRvbigpIHtcbiAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRQb3N0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vcG9wL2NvbnRlbnQtcG9zdC9pbmRleCcsIHt0eXBlOiAnc3F1YXJlJ30pXG4gICAgICB9LFxuICAgICAgY2xpY2tDdXJyZW50VGFiKG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSBudW0uaW5kZXhcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtID0gbnVtLmluZm9cbiAgICAgICAgdGhpcy5jaGFuZ2VUYWIobnVtLmluZm8udGl0bGUpXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNob3dUYWJMaXN0VmlldygpIHtcbiAgICAgICAgdGhpcy5zaG93VGFidmlldyA9ICF0aGlzLnNob3dUYWJ2aWV3XG4gICAgICB9LFxuICAgICAganVtcFBvaVNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL3NwYWNlL2FkZC1kZXN0aW5hdGlvbi9pbmRleD9mcm9tU3F1YXJlPScgKyB0aGlzLmZyb21TcXVhcmUsIHt9KVxuICAgICAgfSxcbiAgICAgIGp1bXBDb250ZW50U2VsZWN0KCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vc2VhcmNoL2NvbnRlbnQtc2VhcmNoL2luZGV4P2Zyb21TcXVhcmU9JyArIHRoaXMuZnJvbVNxdWFyZSwge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNvcnRCdXR0b24obnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRUeXBlID0gJ3NvcnQnXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlID0gdGhpcy5zb3J0VHlwZXNcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTZWxlY3RTdHlsZSA9IHRydWVcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTb3VyY2VDb3VudCA9IHRoaXMuc29ydFR5cGVzLmxlbmd0aFxuICAgICAgICB0aGlzLnNob3dBbGVydCA9IHRydWVcbiAgICAgICAgdGhpcy5zaG93QWxlcnRPZmZzZXQgPSBudW0uY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyAyNFxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRBbGVydEl0ZW0obnVtLCBldnQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gbnVtLmluZGV4XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbGVydFR5cGUgPT09ICdzb3J0Jykge1xuICAgICAgICAgIHRoaXMuY3VycmVudFNvcnQgPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xpY2tlZExpc3RJdGVtKGluZm8pIHtcbiAgICAgICAgLy8g5b+D5b6X6K+m5oOFXG4gICAgICAgIGlmICghaW5mbyB8fCAhaW5mby5pdGVtKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL2FydGljbGUvYXJ0aWNsZS1kZXRhaWwvaW5kZXg/aWQ9JyArIGluZm8uaXRlbS5vcmlnaW5JZCwge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZE1hc2tCYWNrKCkge1xuICAgICAgICB0aGlzLnNob3dBbGVydCA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0VHlwZSA9ICcnXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlID0gW11cbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTZWxlY3RTdHlsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U291cmNlQ291bnQgPSAwXG4gICAgICB9LFxuICAgICAgY2xpY2tlZExpc3RJdGVtTW9yZUJ1dHRvbihudW0pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRUeXBlID0gJ2l0ZW1Nb3JlJ1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZSA9IHRoaXMuaXRlbVR5cGVzXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U2VsZWN0U3R5bGUgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZUNvdW50ID0gdGhpcy5pdGVtVHlwZXMubGVuZ3RoXG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gdHJ1ZVxuICAgICAgICB0aGlzLnNob3dBbGVydE9mZnNldCA9IG51bS5vZmZzZXRUb3BcblxuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RJbmRleCA9IG51bS5pbmRleFxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFjaGFuZ2UoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZGV0YWlsLCBqKSA9PiB7XG4gICAgICAgIGRldGFpbC5lbGVtZW50cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZWxlbWVudElkID09PSAwKSB7XG4gICAgICAgICAgICBkZXRhaWwuZWxlbWVudENvbnRlbnQgPSBpdGVtLmNvbnRlbnRcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZWxlbWVudElkID09PSAxKSB7XG4gICAgICAgICAgICBpdGVtLmltZ3MuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGRldGFpbC5pbWFnZU51bWJlcisrXG4gICAgICAgICAgICAgIGlmIChkZXRhaWwuaW1hZ2VzTGlzdC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmltYWdlc0xpc3QucHVzaCh2YWx1ZS5pbWdVcmwpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmltYWdlc051bWJlckZsYWcgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBpZiAocmVzcG9uc2VSZWxlYXNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gcmVzcG9uc2VSZWxlYXNlLmRhdGEubGlzdFxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGl0ZW0uZmxhZyA9IHRydWVcbiAgICAgICAgICBpdGVtLmltYWdlTnVtYmVyID0gMFxuICAgICAgICAgIGl0ZW0uaW1hZ2VzTGlzdCA9IFtdXG4gICAgICAgICAgaXRlbS5lbGVtZW50Q29udGVudCA9ICcnXG4gICAgICAgICAgaXRlbS5pbWFnZXNOdW1iZXJGbGFnID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmRhdGFjaGFuZ2UoKVxuICAgICAgfVxuICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuICAgICAgdGhpcy50YWJzID0gdGVzdC50ZXN0VGFiRGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfSwgMTUwMClcbiAgICB9XG5cbiAgICBvblBhZ2VTY3JvbGwob2JqKSB7XG4gICAgICBpZiAob2JqLnNjcm9sbFRvcCA+IHRoaXMuc2NyZWVuSGVpZ2h0ICogMS41KSB7XG4gICAgICAgIGlmICghdGhpcy5zaG93VG9Ub3ApIHtcbiAgICAgICAgICB0aGlzLnNob3dUb1RvcCA9IHRydWVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dUb1RvcCkge1xuICAgICAgICAgIHRoaXMuc2hvd1RvVG9wID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUYWIodGFiTmFtZSkge1xuICAgIH1cblxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKG9wdGlvbnMpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IHNoYXJlT2JqID0ge1xuICAgICAgICB0aXRsZTogJ+aXheihjOacgGlu5pS755Wl44CB5pyAaG905o6o6I2Q44CB5pyA5a6e55So5oyH5Y2XJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9zcGFjZS9zcGFjZS1saXN0L2luZGV4JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuZXJyTXNnID09PSAnc2hhcmVBcHBNZXNzYWdlOm9rJykge1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0peS5i+WQjueahOWbnuiwg1xuICAgICAgICAgIGlmIChyZXMuZXJyTXNnID09PSAnc2hhcmVBcHBNZXNzYWdlOmZhaWwgY2FuY2VsJykge1xuICAgICAgICAgICAgLy8g55So5oi35Y+W5raI6L2s5Y+RXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuZXJyTXNnID09PSAnc2hhcmVBcHBNZXNzYWdlOmZhaWwnKSB7XG4gICAgICAgICAgICAvLyDovazlj5HlpLHotKXvvIzlhbbkuK0gZGV0YWlsIG1lc3NhZ2Ug5Li66K+m57uG5aSx6LSl5L+h5oGvXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKG9wdGlvbnMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGFyZU9ialxuICAgIH1cbiAgfVxuIl19