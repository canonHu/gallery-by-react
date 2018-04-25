'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

var _sectionView = require('./../../../components/section-view.js');

var _sectionView2 = _interopRequireDefault(_sectionView);

var _spaceDetailListItem = require('./../../../components/space-detail-list-item.js');

var _spaceDetailListItem2 = _interopRequireDefault(_spaceDetailListItem);

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
      navigationBarTitleText: '广场搜索'
    }, _this.$repeat = { "searchResults": { "com": "listItem", "props": "cellInfo" } }, _this.$props = { "listItem": { "xmlns:v-bind": { "value": "", "for": "searchResults", "item": "item", "index": "index", "key": "index" }, "v-bind:cellInfo.once": { "value": "item", "type": "item", "for": "searchResults", "item": "item", "index": "index", "key": "index" } }, "sectionView": { "v-bind:title.sync": "getTitle", "v-bind:showClear.sync": "showClear", "v-bind:dataList.sync": "historyList", "v-bind:isPoiList.sync": "isPoiList", "v-bind:dataType.sync": "getType", "xmlns:v-on": "" } }, _this.$events = { "sectionView": { "v-on:addHistorySelect": "clickHistory", "v-on:clickedClearLocalButton": "clickedClearLocalButton" } }, _this.components = {
      sectionView: _sectionView2.default,
      listItem: _spaceDetailListItem2.default
    }, _this.computed = {
      getTitle: function getTitle() {
        return '搜索历史';
      },
      getType: function getType() {
        return 'history';
      },
      isPoiList: function isPoiList() {
        return false;
      }
    }, _this.data = {
      fromSquare: true,
      isSearching: false,
      searchKeyword: '',
      showClear: true,
      searchResults: [],
      historyList: [{ keyName: '南京' }]
    }, _this.methods = {
      bindinput: function bindinput(value, cursor) {
        this.searchKeyword = value.detail.value;
        if (this.searchKeyword !== '') {
          this.isSearching = true;
        } else {
          this.isSearching = false;
        }
      },
      bindconfirm: function bindconfirm(value) {
        this.addHistorySelect(value.detail.value);
      },
      clickedClearSearchKeyword: function clickedClearSearchKeyword() {
        this.isSearching = false;
        this.searchKeyword = '';
      },
      clickedClearLocalButton: function clickedClearLocalButton() {
        this.historyList = [];
        this.clearHistory();
      },
      clickHistory: function clickHistory(opts) {
        this.addHistorySelect(opts.selected.keyName);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'addHistorySelect',


    // 添加选择历史
    value: function addHistorySelect(keyName) {
      if (!keyName) {
        return;
      }
      this.searchKeyword = keyName;
      this.isSearching = true;
      this.historyList.unshift({ keyName: keyName });
      this.historyList = this.historyList.slice(0, 5);

      wx.setStorage({
        key: this.fromSquare ? _utils2.default.squareSearchContentCache : _utils2.default.spaceSearchContentCache,
        data: this.historyList,
        success: function success() {}
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (options) {
        this.fromSquare = options.fromSquare;
        this.$apply();
      }
      if (this.fromSquare === true || this.fromSquare === 'true') {
        this.fromSquare = true;
        wx.setNavigationBarTitle({
          title: '广场搜索'
        });
      } else {
        this.fromSquare = false;
        wx.setNavigationBarTitle({
          title: '空间内搜索'
        });
      }
      var self = this;
      this.searchResults = _test2.default.testSpaceListData;
      this.$apply();

      // 获取历史搜索poi
      wx.getStorage({
        key: self.fromSquare ? _utils2.default.squareSearchContentCache : _utils2.default.spaceSearchContentCache,
        success: function success(res) {
          self.historyList = res.data;
          self.$apply();
        }
      });
    }
  }, {
    key: 'clearHistory',
    value: function clearHistory() {
      wx.removeStorage({
        key: this.fromSquare ? _utils2.default.squareSearchContentCache : _utils2.default.spaceSearchContentCache,
        data: this.historyList,
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


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search/content-search/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VjdGlvblZpZXciLCJsaXN0SXRlbSIsImNvbXB1dGVkIiwiZ2V0VGl0bGUiLCJnZXRUeXBlIiwiaXNQb2lMaXN0IiwiZGF0YSIsImZyb21TcXVhcmUiLCJpc1NlYXJjaGluZyIsInNlYXJjaEtleXdvcmQiLCJzaG93Q2xlYXIiLCJzZWFyY2hSZXN1bHRzIiwiaGlzdG9yeUxpc3QiLCJrZXlOYW1lIiwibWV0aG9kcyIsImJpbmRpbnB1dCIsInZhbHVlIiwiY3Vyc29yIiwiZGV0YWlsIiwiYmluZGNvbmZpcm0iLCJhZGRIaXN0b3J5U2VsZWN0IiwiY2xpY2tlZENsZWFyU2VhcmNoS2V5d29yZCIsImNsaWNrZWRDbGVhckxvY2FsQnV0dG9uIiwiY2xlYXJIaXN0b3J5IiwiY2xpY2tIaXN0b3J5Iiwib3B0cyIsInNlbGVjdGVkIiwidW5zaGlmdCIsInNsaWNlIiwid3giLCJzZXRTdG9yYWdlIiwia2V5Iiwic3F1YXJlU2VhcmNoQ29udGVudENhY2hlIiwic3BhY2VTZWFyY2hDb250ZW50Q2FjaGUiLCJzdWNjZXNzIiwib3B0aW9ucyIsIiRhcHBseSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic2VsZiIsInRlc3RTcGFjZUxpc3REYXRhIiwiZ2V0U3RvcmFnZSIsInJlcyIsInJlbW92ZVN0b3JhZ2UiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFT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O0FBS0Q7QUFUYyxPQUFqQjtBQVdEOzs7O0VBM0hnQyxlQUFLQyxJOztrQkFBbkJ4RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcbiAgaW1wb3J0IHRlc3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGVzdCdcbiAgaW1wb3J0IFNlY3Rpb25WaWV3IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi12aWV3J1xuICBpbXBvcnQgU3BhY2VEZXRhaWxMaXN0SXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NwYWNlLWRldGFpbC1saXN0LWl0ZW0nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bm/5Zy65pCc57SiJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcInNlYXJjaFJlc3VsdHNcIjp7XCJjb21cIjpcImxpc3RJdGVtXCIsXCJwcm9wc1wiOlwiY2VsbEluZm9cIn19O1xyXG4kcHJvcHMgPSB7XCJsaXN0SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwic2VhcmNoUmVzdWx0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmNlbGxJbmZvLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJzZWFyY2hSZXN1bHRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwic2VjdGlvblZpZXdcIjp7XCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwiZ2V0VGl0bGVcIixcInYtYmluZDpzaG93Q2xlYXIuc3luY1wiOlwic2hvd0NsZWFyXCIsXCJ2LWJpbmQ6ZGF0YUxpc3Quc3luY1wiOlwiaGlzdG9yeUxpc3RcIixcInYtYmluZDppc1BvaUxpc3Quc3luY1wiOlwiaXNQb2lMaXN0XCIsXCJ2LWJpbmQ6ZGF0YVR5cGUuc3luY1wiOlwiZ2V0VHlwZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInNlY3Rpb25WaWV3XCI6e1widi1vbjphZGRIaXN0b3J5U2VsZWN0XCI6XCJjbGlja0hpc3RvcnlcIixcInYtb246Y2xpY2tlZENsZWFyTG9jYWxCdXR0b25cIjpcImNsaWNrZWRDbGVhckxvY2FsQnV0dG9uXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzZWN0aW9uVmlldzogU2VjdGlvblZpZXcsXG4gICAgICBsaXN0SXRlbTogU3BhY2VEZXRhaWxMaXN0SXRlbVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAn5pCc57Si5Y6G5Y+yJ1xuICAgICAgfSxcbiAgICAgIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiAnaGlzdG9yeSdcbiAgICAgIH0sXG4gICAgICBpc1BvaUxpc3QoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBmcm9tU3F1YXJlOiB0cnVlLFxuICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93Q2xlYXI6IHRydWUsXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgIGhpc3RvcnlMaXN0OiBbXG4gICAgICAgIHtrZXlOYW1lOiAn5Y2X5LqsJ31cbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZGlucHV0KHZhbHVlLCBjdXJzb3IpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hLZXl3b3JkID0gdmFsdWUuZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEtleXdvcmQgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJpbmRjb25maXJtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRkSGlzdG9yeVNlbGVjdCh2YWx1ZS5kZXRhaWwudmFsdWUpXG4gICAgICB9LFxuICAgICAgY2xpY2tlZENsZWFyU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2VhcmNoS2V5d29yZCA9ICcnXG4gICAgICB9LFxuICAgICAgY2xpY2tlZENsZWFyTG9jYWxCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeUxpc3QgPSBbXVxuICAgICAgICB0aGlzLmNsZWFySGlzdG9yeSgpXG4gICAgICB9LFxuICAgICAgY2xpY2tIaXN0b3J5KG9wdHMpIHtcbiAgICAgICAgdGhpcy5hZGRIaXN0b3J5U2VsZWN0KG9wdHMuc2VsZWN0ZWQua2V5TmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmt7vliqDpgInmi6nljoblj7JcbiAgICBhZGRIaXN0b3J5U2VsZWN0KGtleU5hbWUpIHtcbiAgICAgIGlmICgha2V5TmFtZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuc2VhcmNoS2V5d29yZCA9IGtleU5hbWVcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSB0cnVlXG4gICAgICB0aGlzLmhpc3RvcnlMaXN0LnVuc2hpZnQoe2tleU5hbWU6IGtleU5hbWV9KVxuICAgICAgdGhpcy5oaXN0b3J5TGlzdCA9IHRoaXMuaGlzdG9yeUxpc3Quc2xpY2UoMCwgNSlcblxuICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogdGhpcy5mcm9tU3F1YXJlID8gdXRpbHMuc3F1YXJlU2VhcmNoQ29udGVudENhY2hlIDogdXRpbHMuc3BhY2VTZWFyY2hDb250ZW50Q2FjaGUsXG4gICAgICAgIGRhdGE6IHRoaXMuaGlzdG9yeUxpc3QsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5mcm9tU3F1YXJlID0gb3B0aW9ucy5mcm9tU3F1YXJlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZyb21TcXVhcmUgPT09IHRydWUgfHwgdGhpcy5mcm9tU3F1YXJlID09PSAndHJ1ZScpIHtcbiAgICAgICAgdGhpcy5mcm9tU3F1YXJlID0gdHJ1ZVxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgIHRpdGxlOiAn5bm/5Zy65pCc57SiJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcm9tU3F1YXJlID0gZmFsc2VcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICB0aXRsZTogJ+epuumXtOWGheaQnOe0oidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGVzdC50ZXN0U3BhY2VMaXN0RGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAvLyDojrflj5bljoblj7LmkJzntKJwb2lcbiAgICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IHNlbGYuZnJvbVNxdWFyZSA/IHV0aWxzLnNxdWFyZVNlYXJjaENvbnRlbnRDYWNoZSA6IHV0aWxzLnNwYWNlU2VhcmNoQ29udGVudENhY2hlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmhpc3RvcnlMaXN0ID0gcmVzLmRhdGFcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xlYXJIaXN0b3J5KCkge1xuICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XG4gICAgICAgIGtleTogdGhpcy5mcm9tU3F1YXJlID8gdXRpbHMuc3F1YXJlU2VhcmNoQ29udGVudENhY2hlIDogdXRpbHMuc3BhY2VTZWFyY2hDb250ZW50Q2FjaGUsXG4gICAgICAgIGRhdGE6IHRoaXMuaGlzdG9yeUxpc3QsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmuIXpmaTmiJDlip8nLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19