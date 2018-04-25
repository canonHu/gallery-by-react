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
    }, _this.$repeat = { "list": { "com": "releaseitem", "props": "items" } }, _this.$props = { "releaseitem": { "v-bind:cancelFlag.once": { "value": "cancelFlag", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:items.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:fromSquare.once": { "value": "fromSquare", "for": "list", "item": "item", "index": "index", "key": "index" } }, "tablist": { "xmlns:v-bind": "", "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultTitleColor.once": "defaultTitleColor", "v-bind:defaultTitleBold.once": "defaultTitleBold", "v-bind:selectTitleColor.once": "selectTitleColor", "v-bind:selectTitleBold.once": "selectTitleBold", "v-bind:indicatorColor.once": "indicatorColor", "xmlns:v-on": "" }, "tablistview": { "v-bind:tabs.sync": "tabs", "v-bind:selectIndex.sync": "selectIndex", "v-bind:defaultBackColor.once": "defaultBackColor_view", "v-bind:defaultTitleColor.once": "defaultTitleColor_view", "v-bind:defaultTitleBold.once": "defaultTitleBold_view", "v-bind:defaultBorderColor.once": "defaultBorderColor_view", "v-bind:selectTitleColor.once": "selectTitleColor_view", "v-bind:selectTitleBold.once": "selectTitleBold_view", "v-bind:selectBorderColor.once": "selectBorderColor_view", "v-bind:selectBackColor.once": "selectBackColor_view" }, "alertlist": { "v-bind:items.sync": "currentAlertSource", "v-bind:syncOffsetY.sync": "showAlertOffset", "v-bind:showSelectStyle.sync": "currentAlertSelectStyle", "v-bind:currentSelect.sync": "currentSort", "v-bind:totalCount.sync": "currentAlertSourceCount" } }, _this.$events = { "releaseitem": { "v-on:tapEvent": "clickedListItem" }, "tablist": { "v-on:tapEvent": "clickCurrentTab" }, "tablistview": { "v-on:tapEvent": "clickCurrentTab" }, "alertlist": { "v-on:clickedAlertItem": "clickedAlertItem" } }, _this.components = {
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

      showToTop: false,
      screenHeight: 0,

      fromSquare: false,
      cancelFlag: true,
      selectedList: [],

      tabs: [],
      defaultTitleColor: '#666666',
      defaultTitleBold: 'normal',
      selectTitleColor: '#333333',
      selectTitleBold: 'bold',
      indicatorColor: '#ff7733',
      selectIndex: 0,
      selectItem: {},

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
      currentAlertSource: [],
      currentAlertSourceCount: 0,
      currentAlertSelectStyle: false,
      currentSort: 0,
      sortTypes: ['默认排序', '发布时间排序', '热度排序']
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
        this.currentAlertSource = this.sortTypes;
        this.currentAlertSelectStyle = true;
        this.currentAlertSourceCount = this.sortTypes.length;
        this.showAlert = true;
        this.showAlertOffset = num.currentTarget.offsetTop + 24;
      },
      clickedAlertItem: function clickedAlertItem(num, evt) {
        var index = num.index;
        this.currentSort = index;
      },
      clickedListItem: function clickedListItem(info) {
        // 心得详情
        if (!info) {
          return;
        }
        this.list[info.index].flag = !info.flag;
        this.clickedItem(this.list[info.index].originId, info.flag);
      },
      clickedMaskBack: function clickedMaskBack() {
        this.showAlert = false;
        this.currentAlertSource = [];
        this.currentAlertSelectStyle = false;
        this.currentAlertSourceCount = 0;
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
    key: 'clickedItem',
    value: function clickedItem(id, selected) {
      if (selected) {
        this.removeItem(id);
        this.selectedList.push(id);
      } else {
        this.removeItem(id);
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(id) {
      if (this.selectedList.length <= 0) {
        return;
      }
      for (var i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i] === id) {
          this.selectedList.splice(i, 1);
          i--;
        }
      }
    }
  }, {
    key: 'clickedCompleteButton',
    value: function clickedCompleteButton() {
      var self = this;
      var pages = getCurrentPages();
      var beforePage = pages[pages.length - 2]; // 前一个页面
      this.$back({
        success: function success() {
          beforePage.quoteSpace(self.selectedList);
        }
      });
    }
  }, {
    key: 'changeTab',
    value: function changeTab(tabName) {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/square/square-quote/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmVsZWFzZWl0ZW0iLCJ0YWJsaXN0IiwidGFibGlzdHZpZXciLCJhbGVydGxpc3QiLCJjb21wdXRlZCIsImdldFRhYlZpZXdXaWR0aCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2NyZWVuV2lkdGgiLCJkYXRhIiwibGlzdCIsImNpdHlOYW1lIiwiY2l0eUNvZGUiLCJzaG93VG9Ub3AiLCJzY3JlZW5IZWlnaHQiLCJmcm9tU3F1YXJlIiwiY2FuY2VsRmxhZyIsInNlbGVjdGVkTGlzdCIsInRhYnMiLCJkZWZhdWx0VGl0bGVDb2xvciIsImRlZmF1bHRUaXRsZUJvbGQiLCJzZWxlY3RUaXRsZUNvbG9yIiwic2VsZWN0VGl0bGVCb2xkIiwiaW5kaWNhdG9yQ29sb3IiLCJzZWxlY3RJbmRleCIsInNlbGVjdEl0ZW0iLCJzaG93VGFidmlldyIsImRlZmF1bHRCYWNrQ29sb3JfdmlldyIsImRlZmF1bHRUaXRsZUNvbG9yX3ZpZXciLCJkZWZhdWx0VGl0bGVCb2xkX3ZpZXciLCJkZWZhdWx0Qm9yZGVyQ29sb3JfdmlldyIsInNlbGVjdEJhY2tDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVDb2xvcl92aWV3Iiwic2VsZWN0VGl0bGVCb2xkX3ZpZXciLCJzZWxlY3RCb3JkZXJDb2xvcl92aWV3Iiwic2hvd0FsZXJ0Iiwic2hvd0FsZXJ0T2Zmc2V0IiwiY3VycmVudEFsZXJ0U291cmNlIiwiY3VycmVudEFsZXJ0U291cmNlQ291bnQiLCJjdXJyZW50QWxlcnRTZWxlY3RTdHlsZSIsImN1cnJlbnRTb3J0Iiwic29ydFR5cGVzIiwibWV0aG9kcyIsImNsaWNrZWRUb3BCdXR0b24iLCJ3eCIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwiY2xpY2tlZFBvc3RCdXR0b24iLCIkbmF2aWdhdGUiLCJ0eXBlIiwiY2xpY2tDdXJyZW50VGFiIiwibnVtIiwiZXZ0IiwiaW5kZXgiLCJpbmZvIiwiY2hhbmdlVGFiIiwidGl0bGUiLCJjbGlja2VkU2hvd1RhYkxpc3RWaWV3IiwianVtcFBvaVNlbGVjdCIsImp1bXBDb250ZW50U2VsZWN0IiwiY2xpY2tlZFNvcnRCdXR0b24iLCJsZW5ndGgiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0VG9wIiwiY2xpY2tlZEFsZXJ0SXRlbSIsImNsaWNrZWRMaXN0SXRlbSIsImZsYWciLCJjbGlja2VkSXRlbSIsIm9yaWdpbklkIiwiY2xpY2tlZE1hc2tCYWNrIiwiZm9yRWFjaCIsImRldGFpbCIsImoiLCJlbGVtZW50cyIsIml0ZW0iLCJpIiwiZWxlbWVudElkIiwiZWxlbWVudENvbnRlbnQiLCJjb250ZW50IiwiaW1ncyIsInZhbHVlIiwiaW1hZ2VOdW1iZXIiLCJpbWFnZXNMaXN0IiwicHVzaCIsImltZ1VybCIsImltYWdlc051bWJlckZsYWciLCJzdWNjZXNzIiwiZGF0YWNoYW5nZSIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwidGVzdFRhYkRhdGEiLCIkYXBwbHkiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzZXRUaW1lb3V0IiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9iaiIsImlkIiwic2VsZWN0ZWQiLCJyZW1vdmVJdGVtIiwic3BsaWNlIiwic2VsZiIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiYmVmb3JlUGFnZSIsIiRiYWNrIiwicXVvdGVTcGFjZSIsInRhYk5hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7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QUFPLElBQVg7QUFDQSxVQUFJQyxRQUFRQyxpQkFBWjtBQUNBLFVBQUlDLGFBQWFGLE1BQU1BLE1BQU16QyxNQUFOLEdBQWUsQ0FBckIsQ0FBakIsQ0FIc0IsQ0FHbUI7QUFDekMsV0FBSzRDLEtBQUwsQ0FBVztBQUNUbkIsaUJBQVMsbUJBQVc7QUFDbEJrQixxQkFBV0UsVUFBWCxDQUFzQkwsS0FBS3JGLFlBQTNCO0FBQ0Q7QUFIUSxPQUFYO0FBS0Q7Ozs4QkFFUzJGLE8sRUFBUyxDQUNsQjs7OztFQW5OZ0MsZUFBS0MsSTs7a0JBQW5CdkgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVGFiTGlzdFZpZXcgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWItbGlzdC12aWV3J1xuICBpbXBvcnQgVGFiTGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYi1saXN0J1xuICBpbXBvcnQgdGVzdCBmcm9tICcuLi8uLi8uLi91dGlscy90ZXN0J1xuICBpbXBvcnQgQWxlcnRMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWxlcnQtbGlzdCdcbiAgaW1wb3J0IFJlbGVhc2VJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVsZWFzZS1pdGVtJ1xuICBpbXBvcnQgeyByZXNwb25zZVJlbGVhc2UgfSBmcm9tICcuLi8uLi8uLi9taXhpbnMvdGVzdEpzb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bm/5Zy6JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcInJlbGVhc2VpdGVtXCIsXCJwcm9wc1wiOlwiaXRlbXNcIn19O1xyXG4kcHJvcHMgPSB7XCJyZWxlYXNlaXRlbVwiOntcInYtYmluZDpjYW5jZWxGbGFnLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiY2FuY2VsRmxhZ1wiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbXMub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6ZnJvbVNxdWFyZS5vbmNlXCI6e1widmFsdWVcIjpcImZyb21TcXVhcmVcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInRhYmxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYnMuc3luY1wiOlwidGFic1wiLFwidi1iaW5kOnNlbGVjdEluZGV4LnN5bmNcIjpcInNlbGVjdEluZGV4XCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQ29sb3Iub25jZVwiOlwiZGVmYXVsdFRpdGxlQ29sb3JcIixcInYtYmluZDpkZWZhdWx0VGl0bGVCb2xkLm9uY2VcIjpcImRlZmF1bHRUaXRsZUJvbGRcIixcInYtYmluZDpzZWxlY3RUaXRsZUNvbG9yLm9uY2VcIjpcInNlbGVjdFRpdGxlQ29sb3JcIixcInYtYmluZDpzZWxlY3RUaXRsZUJvbGQub25jZVwiOlwic2VsZWN0VGl0bGVCb2xkXCIsXCJ2LWJpbmQ6aW5kaWNhdG9yQ29sb3Iub25jZVwiOlwiaW5kaWNhdG9yQ29sb3JcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInRhYmxpc3R2aWV3XCI6e1widi1iaW5kOnRhYnMuc3luY1wiOlwidGFic1wiLFwidi1iaW5kOnNlbGVjdEluZGV4LnN5bmNcIjpcInNlbGVjdEluZGV4XCIsXCJ2LWJpbmQ6ZGVmYXVsdEJhY2tDb2xvci5vbmNlXCI6XCJkZWZhdWx0QmFja0NvbG9yX3ZpZXdcIixcInYtYmluZDpkZWZhdWx0VGl0bGVDb2xvci5vbmNlXCI6XCJkZWZhdWx0VGl0bGVDb2xvcl92aWV3XCIsXCJ2LWJpbmQ6ZGVmYXVsdFRpdGxlQm9sZC5vbmNlXCI6XCJkZWZhdWx0VGl0bGVCb2xkX3ZpZXdcIixcInYtYmluZDpkZWZhdWx0Qm9yZGVyQ29sb3Iub25jZVwiOlwiZGVmYXVsdEJvcmRlckNvbG9yX3ZpZXdcIixcInYtYmluZDpzZWxlY3RUaXRsZUNvbG9yLm9uY2VcIjpcInNlbGVjdFRpdGxlQ29sb3Jfdmlld1wiLFwidi1iaW5kOnNlbGVjdFRpdGxlQm9sZC5vbmNlXCI6XCJzZWxlY3RUaXRsZUJvbGRfdmlld1wiLFwidi1iaW5kOnNlbGVjdEJvcmRlckNvbG9yLm9uY2VcIjpcInNlbGVjdEJvcmRlckNvbG9yX3ZpZXdcIixcInYtYmluZDpzZWxlY3RCYWNrQ29sb3Iub25jZVwiOlwic2VsZWN0QmFja0NvbG9yX3ZpZXdcIn0sXCJhbGVydGxpc3RcIjp7XCJ2LWJpbmQ6aXRlbXMuc3luY1wiOlwiY3VycmVudEFsZXJ0U291cmNlXCIsXCJ2LWJpbmQ6c3luY09mZnNldFkuc3luY1wiOlwic2hvd0FsZXJ0T2Zmc2V0XCIsXCJ2LWJpbmQ6c2hvd1NlbGVjdFN0eWxlLnN5bmNcIjpcImN1cnJlbnRBbGVydFNlbGVjdFN0eWxlXCIsXCJ2LWJpbmQ6Y3VycmVudFNlbGVjdC5zeW5jXCI6XCJjdXJyZW50U29ydFwiLFwidi1iaW5kOnRvdGFsQ291bnQuc3luY1wiOlwiY3VycmVudEFsZXJ0U291cmNlQ291bnRcIn19O1xyXG4kZXZlbnRzID0ge1wicmVsZWFzZWl0ZW1cIjp7XCJ2LW9uOnRhcEV2ZW50XCI6XCJjbGlja2VkTGlzdEl0ZW1cIn0sXCJ0YWJsaXN0XCI6e1widi1vbjp0YXBFdmVudFwiOlwiY2xpY2tDdXJyZW50VGFiXCJ9LFwidGFibGlzdHZpZXdcIjp7XCJ2LW9uOnRhcEV2ZW50XCI6XCJjbGlja0N1cnJlbnRUYWJcIn0sXCJhbGVydGxpc3RcIjp7XCJ2LW9uOmNsaWNrZWRBbGVydEl0ZW1cIjpcImNsaWNrZWRBbGVydEl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHJlbGVhc2VpdGVtOiBSZWxlYXNlSXRlbSxcbiAgICAgIHRhYmxpc3Q6IFRhYkxpc3QsXG4gICAgICB0YWJsaXN0dmlldzogVGFiTGlzdFZpZXcsXG4gICAgICBhbGVydGxpc3Q6IEFsZXJ0TGlzdFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0VGFiVmlld1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2NyZWVuV2lkdGggLSA1NFxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGNpdHlOYW1lOiAn5YWo6YOo5Z+O5biCJyxcbiAgICAgIGNpdHlDb2RlOiAwLFxuXG4gICAgICBzaG93VG9Ub3A6IGZhbHNlLFxuICAgICAgc2NyZWVuSGVpZ2h0OiAwLFxuXG4gICAgICBmcm9tU3F1YXJlOiBmYWxzZSxcbiAgICAgIGNhbmNlbEZsYWc6IHRydWUsXG4gICAgICBzZWxlY3RlZExpc3Q6IFtdLFxuXG4gICAgICB0YWJzOiBbXSxcbiAgICAgIGRlZmF1bHRUaXRsZUNvbG9yOiAnIzY2NjY2NicsXG4gICAgICBkZWZhdWx0VGl0bGVCb2xkOiAnbm9ybWFsJyxcbiAgICAgIHNlbGVjdFRpdGxlQ29sb3I6ICcjMzMzMzMzJyxcbiAgICAgIHNlbGVjdFRpdGxlQm9sZDogJ2JvbGQnLFxuICAgICAgaW5kaWNhdG9yQ29sb3I6ICcjZmY3NzMzJyxcbiAgICAgIHNlbGVjdEluZGV4OiAwLFxuICAgICAgc2VsZWN0SXRlbToge30sXG5cbiAgICAgIHNob3dUYWJ2aWV3OiBmYWxzZSxcbiAgICAgIGRlZmF1bHRCYWNrQ29sb3JfdmlldzogJyNGRkZGRkYnLFxuICAgICAgZGVmYXVsdFRpdGxlQ29sb3JfdmlldzogJyMzMzMzMzMnLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZF92aWV3OiAnbm9ybWFsJyxcbiAgICAgIGRlZmF1bHRCb3JkZXJDb2xvcl92aWV3OiAndHJhbnNwYXJlbnQnLFxuICAgICAgc2VsZWN0QmFja0NvbG9yX3ZpZXc6ICcjRkZGQ0Y4JyxcbiAgICAgIHNlbGVjdFRpdGxlQ29sb3JfdmlldzogJyNGRjU1MDAnLFxuICAgICAgc2VsZWN0VGl0bGVCb2xkX3ZpZXc6ICdib2xkJyxcbiAgICAgIHNlbGVjdEJvcmRlckNvbG9yX3ZpZXc6ICcjRkY3NzMzJyxcblxuICAgICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICAgIHNob3dBbGVydE9mZnNldDogMCxcbiAgICAgIGN1cnJlbnRBbGVydFNvdXJjZTogW10sXG4gICAgICBjdXJyZW50QWxlcnRTb3VyY2VDb3VudDogMCxcbiAgICAgIGN1cnJlbnRBbGVydFNlbGVjdFN0eWxlOiBmYWxzZSxcbiAgICAgIGN1cnJlbnRTb3J0OiAwLFxuICAgICAgc29ydFR5cGVzOiBbXG4gICAgICAgICfpu5jorqTmjpLluo8nLFxuICAgICAgICAn5Y+R5biD5pe26Ze05o6S5bqPJyxcbiAgICAgICAgJ+eDreW6puaOkuW6jydcbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tlZFRvcEJ1dHRvbigpIHtcbiAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRQb3N0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vcG9wL2NvbnRlbnQtcG9zdC9pbmRleCcsIHt0eXBlOiAnc3F1YXJlJ30pXG4gICAgICB9LFxuICAgICAgY2xpY2tDdXJyZW50VGFiKG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSBudW0uaW5kZXhcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtID0gbnVtLmluZm9cbiAgICAgICAgdGhpcy5jaGFuZ2VUYWIobnVtLmluZm8udGl0bGUpXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNob3dUYWJMaXN0VmlldygpIHtcbiAgICAgICAgdGhpcy5zaG93VGFidmlldyA9ICF0aGlzLnNob3dUYWJ2aWV3XG4gICAgICB9LFxuICAgICAganVtcFBvaVNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL3NwYWNlL2FkZC1kZXN0aW5hdGlvbi9pbmRleD9mcm9tU3F1YXJlPScgKyB0aGlzLmZyb21TcXVhcmUsIHt9KVxuICAgICAgfSxcbiAgICAgIGp1bXBDb250ZW50U2VsZWN0KCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vc2VhcmNoL2NvbnRlbnQtc2VhcmNoL2luZGV4P2Zyb21TcXVhcmU9JyArIHRoaXMuZnJvbVNxdWFyZSwge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNvcnRCdXR0b24obnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxlcnRTb3VyY2UgPSB0aGlzLnNvcnRUeXBlc1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNlbGVjdFN0eWxlID0gdHJ1ZVxuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZUNvdW50ID0gdGhpcy5zb3J0VHlwZXMubGVuZ3RoXG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gdHJ1ZVxuICAgICAgICB0aGlzLnNob3dBbGVydE9mZnNldCA9IG51bS5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcCArIDI0XG4gICAgICB9LFxuICAgICAgY2xpY2tlZEFsZXJ0SXRlbShudW0sIGV2dCkge1xuICAgICAgICBsZXQgaW5kZXggPSBudW0uaW5kZXhcbiAgICAgICAgdGhpcy5jdXJyZW50U29ydCA9IGluZGV4XG4gICAgICB9LFxuICAgICAgY2xpY2tlZExpc3RJdGVtKGluZm8pIHtcbiAgICAgICAgLy8g5b+D5b6X6K+m5oOFXG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdFtpbmZvLmluZGV4XS5mbGFnID0gIWluZm8uZmxhZ1xuICAgICAgICB0aGlzLmNsaWNrZWRJdGVtKHRoaXMubGlzdFtpbmZvLmluZGV4XS5vcmlnaW5JZCwgaW5mby5mbGFnKVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRNYXNrQmFjaygpIHtcbiAgICAgICAgdGhpcy5zaG93QWxlcnQgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZSA9IFtdXG4gICAgICAgIHRoaXMuY3VycmVudEFsZXJ0U2VsZWN0U3R5bGUgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1cnJlbnRBbGVydFNvdXJjZUNvdW50ID0gMFxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFjaGFuZ2UoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZGV0YWlsLCBqKSA9PiB7XG4gICAgICAgIGRldGFpbC5lbGVtZW50cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZWxlbWVudElkID09PSAwKSB7XG4gICAgICAgICAgICBkZXRhaWwuZWxlbWVudENvbnRlbnQgPSBpdGVtLmNvbnRlbnRcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZWxlbWVudElkID09PSAxKSB7XG4gICAgICAgICAgICBpdGVtLmltZ3MuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGRldGFpbC5pbWFnZU51bWJlcisrXG4gICAgICAgICAgICAgIGlmIChkZXRhaWwuaW1hZ2VzTGlzdC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmltYWdlc0xpc3QucHVzaCh2YWx1ZS5pbWdVcmwpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGV0YWlsLmltYWdlc051bWJlckZsYWcgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBpZiAocmVzcG9uc2VSZWxlYXNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gcmVzcG9uc2VSZWxlYXNlLmRhdGEubGlzdFxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGl0ZW0uZmxhZyA9IHRydWVcbiAgICAgICAgICBpdGVtLmltYWdlTnVtYmVyID0gMFxuICAgICAgICAgIGl0ZW0uaW1hZ2VzTGlzdCA9IFtdXG4gICAgICAgICAgaXRlbS5lbGVtZW50Q29udGVudCA9ICcnXG4gICAgICAgICAgaXRlbS5pbWFnZXNOdW1iZXJGbGFnID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmRhdGFjaGFuZ2UoKVxuICAgICAgfVxuICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuICAgICAgdGhpcy50YWJzID0gdGVzdC50ZXN0VGFiRGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfSwgMTUwMClcbiAgICB9XG5cbiAgICBvblBhZ2VTY3JvbGwob2JqKSB7XG4gICAgICBpZiAob2JqLnNjcm9sbFRvcCA+IHRoaXMuc2NyZWVuSGVpZ2h0ICogMS41KSB7XG4gICAgICAgIGlmICghdGhpcy5zaG93VG9Ub3ApIHtcbiAgICAgICAgICB0aGlzLnNob3dUb1RvcCA9IHRydWVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dUb1RvcCkge1xuICAgICAgICAgIHRoaXMuc2hvd1RvVG9wID0gZmFsc2VcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja2VkSXRlbShpZCwgc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oaWQpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0LnB1c2goaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oaWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShpZCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExpc3RbaV0gPT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZExpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgaS0tXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbGlja2VkQ29tcGxldGVCdXR0b24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgICB2YXIgYmVmb3JlUGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdIC8vIOWJjeS4gOS4qumhtemdolxuICAgICAgdGhpcy4kYmFjayh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJlZm9yZVBhZ2UucXVvdGVTcGFjZShzZWxmLnNlbGVjdGVkTGlzdClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjaGFuZ2VUYWIodGFiTmFtZSkge1xuICAgIH1cbiAgfVxuIl19