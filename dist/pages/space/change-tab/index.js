'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '更换板块'
    }, _this.data = {
      tabs: [],
      selectTags: [],
      totalCount: 0,
      index: -1,
      refreshFlag: false
    }, _this.computed = {}, _this.methods = {
      clickedSelectItem: function clickedSelectItem(num) {
        var info = _utils2.default.getSelectTagsInfo(this.tabs, this.selectTags, parseInt(num.currentTarget.dataset.index), 3);
        this.tabs = info.tabs;
        this.selectTags = info.selectTags;
        this.$apply();
      },
      clickedCompleteButton: function clickedCompleteButton() {
        var _this2 = this;

        wx.setStorage({
          key: _utils2.default.spaceChangeTag,
          data: { index: this.index, selectTags: this.selectTags },
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
      var _this3 = this;

      this.index = options.index !== undefined ? options.index : -1;
      this.refreshFlag = !(options.refreshFlag === true);
      this.selectTags = JSON.parse(options.selectTags);

      //      delete
      var tabsStr = JSON.stringify(_test2.default.testTabData);
      this.tabs = JSON.parse(tabsStr);
      //      delete

      this.totalCount = this.tabs.length;

      if (this.selectTags !== undefined) {
        this.tabs.forEach(function (item, index) {
          for (var i = 0; i < _this3.selectTags.length; i++) {
            var tempInfo = _this3.selectTags[i];
            if (item.id === tempInfo.id) {
              item.isSelect = true;
              break;
            }
          }
        });
      }
      this.$apply();
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
    value: function getShowImgs(elements) {}
  }, {
    key: 'changeTab',
    value: function changeTab(tabName) {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/change-tab/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYnMiLCJzZWxlY3RUYWdzIiwidG90YWxDb3VudCIsImluZGV4IiwicmVmcmVzaEZsYWciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjbGlja2VkU2VsZWN0SXRlbSIsIm51bSIsImluZm8iLCJnZXRTZWxlY3RUYWdzSW5mbyIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkYXBwbHkiLCJjbGlja2VkQ29tcGxldGVCdXR0b24iLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJzcGFjZUNoYW5nZVRhZyIsInN1Y2Nlc3MiLCIkYmFjayIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJKU09OIiwicGFyc2UiLCJ0YWJzU3RyIiwic3RyaW5naWZ5IiwidGVzdFRhYkRhdGEiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJ0ZW1wSW5mbyIsImlkIiwiaXNTZWxlY3QiLCJlbGVtZW50cyIsImNvbnRlbnRUZXh0IiwiZWxlbWVudCIsImVsZW1lbnRUeXBlIiwiY29udGVudCIsInRhYk5hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQU1UQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsa0JBQVksQ0FIUDtBQUlMQyxhQUFPLENBQUMsQ0FKSDtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1JDLHVCQURRLDZCQUNVQyxHQURWLEVBQ2U7QUFDckIsWUFBSUMsT0FBTyxnQkFBTUMsaUJBQU4sQ0FBd0IsS0FBS1YsSUFBN0IsRUFBbUMsS0FBS0MsVUFBeEMsRUFBb0RVLFNBQVNILElBQUlJLGFBQUosQ0FBa0JDLE9BQWxCLENBQTBCVixLQUFuQyxDQUFwRCxFQUErRixDQUEvRixDQUFYO0FBQ0EsYUFBS0gsSUFBTCxHQUFZUyxLQUFLVCxJQUFqQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0JRLEtBQUtSLFVBQXZCO0FBQ0EsYUFBS2EsTUFBTDtBQUNELE9BTk87QUFPUkMsMkJBUFEsbUNBT2dCO0FBQUE7O0FBQ3RCQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxnQkFBTUMsY0FEQztBQUVacEIsZ0JBQU0sRUFBQ0ksT0FBTyxLQUFLQSxLQUFiLEVBQW9CRixZQUFZLEtBQUtBLFVBQXJDLEVBRk07QUFHWm1CLG1CQUFTLG1CQUFNO0FBQ2IsbUJBQUtDLEtBQUw7QUFDRDtBQUxXLFNBQWQ7QUFPRDtBQWZPLEs7Ozs7OzJCQWtCSEMsTyxFQUFTO0FBQUE7O0FBQ2QsV0FBS25CLEtBQUwsR0FBYW1CLFFBQVFuQixLQUFSLEtBQWtCb0IsU0FBbEIsR0FBOEJELFFBQVFuQixLQUF0QyxHQUE2QyxDQUFDLENBQTNEO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixFQUFFa0IsUUFBUWxCLFdBQVIsS0FBd0IsSUFBMUIsQ0FBbkI7QUFDQSxXQUFLSCxVQUFMLEdBQWtCdUIsS0FBS0MsS0FBTCxDQUFXSCxRQUFRckIsVUFBbkIsQ0FBbEI7O0FBRU47QUFDTSxVQUFJeUIsVUFBVUYsS0FBS0csU0FBTCxDQUFlLGVBQUtDLFdBQXBCLENBQWQ7QUFDQSxXQUFLNUIsSUFBTCxHQUFZd0IsS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQVo7QUFDTjs7QUFFTSxXQUFLeEIsVUFBTCxHQUFrQixLQUFLRixJQUFMLENBQVU2QixNQUE1Qjs7QUFFQSxVQUFJLEtBQUs1QixVQUFMLEtBQW9Cc0IsU0FBeEIsRUFBbUM7QUFDakMsYUFBS3ZCLElBQUwsQ0FBVThCLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPNUIsS0FBUCxFQUFpQjtBQUNqQyxlQUFLLElBQUk2QixJQUFJLENBQWIsRUFBZ0JBLElBQUksT0FBSy9CLFVBQUwsQ0FBZ0I0QixNQUFwQyxFQUE0Q0csR0FBNUMsRUFBaUQ7QUFDL0MsZ0JBQUlDLFdBQVcsT0FBS2hDLFVBQUwsQ0FBZ0IrQixDQUFoQixDQUFmO0FBQ0EsZ0JBQUlELEtBQUtHLEVBQUwsS0FBWUQsU0FBU0MsRUFBekIsRUFBNkI7QUFDM0JILG1CQUFLSSxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsU0FSRDtBQVNEO0FBQ0QsV0FBS3JCLE1BQUw7QUFDRDs7O3VDQUVrQnNCLFEsRUFBVTtBQUMzQixVQUFJQyxjQUFjLEVBQWxCOztBQUVBLFVBQUlELGFBQWFiLFNBQWIsSUFBMEJhLFNBQVNQLE1BQVQsR0FBa0IsQ0FBaEQsRUFBbUQ7QUFDakQsYUFBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlJLFNBQVNQLE1BQTdCLEVBQXFDRyxHQUFyQyxFQUEwQztBQUN4QyxjQUFJTSxVQUFVRixTQUFTSixDQUFULENBQWQ7QUFDQSxjQUFJTSxRQUFRQyxXQUFSLEtBQXdCLENBQXhCLElBQTZCRCxRQUFRRSxPQUFSLEtBQW9CLEVBQXJELEVBQXlEO0FBQ3ZESCwwQkFBY0MsUUFBUUUsT0FBdEI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPSCxXQUFQO0FBQ0Q7OztnQ0FFV0QsUSxFQUFVLENBRXJCOzs7OEJBRVNLLE8sRUFBUyxDQUVsQjs7OztFQXJGZ0MsZUFBS0MsSTs7a0JBQW5CaEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCB0ZXN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Rlc3QnXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmm7TmjaLmnb/lnZcnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRhYnM6IFtdLFxuICAgICAgc2VsZWN0VGFnczogW10sXG4gICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgaW5kZXg6IC0xLFxuICAgICAgcmVmcmVzaEZsYWc6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tlZFNlbGVjdEl0ZW0obnVtKSB7XG4gICAgICAgIGxldCBpbmZvID0gdXRpbHMuZ2V0U2VsZWN0VGFnc0luZm8odGhpcy50YWJzLCB0aGlzLnNlbGVjdFRhZ3MsIHBhcnNlSW50KG51bS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCAzKVxuICAgICAgICB0aGlzLnRhYnMgPSBpbmZvLnRhYnNcbiAgICAgICAgdGhpcy5zZWxlY3RUYWdzID0gaW5mby5zZWxlY3RUYWdzXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBjbGlja2VkQ29tcGxldGVCdXR0b24oKSB7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogdXRpbHMuc3BhY2VDaGFuZ2VUYWcsXG4gICAgICAgICAgZGF0YToge2luZGV4OiB0aGlzLmluZGV4LCBzZWxlY3RUYWdzOiB0aGlzLnNlbGVjdFRhZ3N9LFxuICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5pbmRleCA9IG9wdGlvbnMuaW5kZXggIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW5kZXg6IC0xXG4gICAgICB0aGlzLnJlZnJlc2hGbGFnID0gIShvcHRpb25zLnJlZnJlc2hGbGFnID09PSB0cnVlKVxuICAgICAgdGhpcy5zZWxlY3RUYWdzID0gSlNPTi5wYXJzZShvcHRpb25zLnNlbGVjdFRhZ3MpXG5cbi8vICAgICAgZGVsZXRlXG4gICAgICBsZXQgdGFic1N0ciA9IEpTT04uc3RyaW5naWZ5KHRlc3QudGVzdFRhYkRhdGEpXG4gICAgICB0aGlzLnRhYnMgPSBKU09OLnBhcnNlKHRhYnNTdHIpXG4vLyAgICAgIGRlbGV0ZVxuXG4gICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRhYnMubGVuZ3RoXG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdFRhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0VGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRlbXBJbmZvID0gdGhpcy5zZWxlY3RUYWdzW2ldXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGVtcEluZm8uaWQpIHtcbiAgICAgICAgICAgICAgaXRlbS5pc1NlbGVjdCA9IHRydWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgZ2V0U2hvd0NvbnRlbnRUZXh0KGVsZW1lbnRzKSB7XG4gICAgICBsZXQgY29udGVudFRleHQgPSAnJ1xuXG4gICAgICBpZiAoZWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldXG4gICAgICAgICAgaWYgKGVsZW1lbnQuZWxlbWVudFR5cGUgPT09IDAgJiYgZWxlbWVudC5jb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgY29udGVudFRleHQgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50VGV4dFxuICAgIH1cblxuICAgIGdldFNob3dJbWdzKGVsZW1lbnRzKSB7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VUYWIodGFiTmFtZSkge1xuXG4gICAgfVxuICB9XG4iXX0=