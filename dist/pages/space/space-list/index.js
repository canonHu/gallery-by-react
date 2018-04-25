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
      navigationBarTitleText: '空间列表'
    }, _this.$repeat = { "list": { "com": "spaceitem", "props": "item" } }, _this.$props = { "spaceitem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:itemWidth.once": { "value": "getImageWidth", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:spaceSize.once": { "value": "spaceSize", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:addSpace.once": { "value": "addSpace", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "spaceitem": { "v-on:tapEvent": "clickedSimpleSpace" } }, _this.components = {
      spaceitem: _spaceItem2.default
    }, _this.data = {
      addSpace: false,
      spaceSize: 10,
      selectList: [],
      list: []
    }, _this.computed = {
      getImageWidth: function getImageWidth() {
        return this.$parent.globalData.spaceItemWidth;
      },
      getSpaceSepWidth: function getSpaceSepWidth() {
        return Math.floor((this.$parent.globalData.screenWidth - 20 * 4 - this.$parent.globalData.spaceItemWidth * 3) / 2);
      }
    }, _this.methods = {
      clickedSimpleSpace: function clickedSimpleSpace(num, evt) {
        if (this.addSpace === true) {
          // 添加到空间
          var temp = this.list[num.index];
          if (temp.selected === true) {
            temp.selected = false;
            for (var i = this.selectList.length - 1; i >= 0; i--) {
              if (this.selectList[i] === temp.spaceId) {
                this.selectList.splice(i, 1);
              }
            }
          } else {
            this.selectList.push(num.item.spaceId);
            temp.selected = true;
          }
          this.$apply();
        } else {
          this.$navigate('../space-detail/index?spaceId=' + num.item.spaceId, {});
        }
      },
      clickedCompleteButton: function clickedCompleteButton() {
        var self = this;
        var pages = getCurrentPages();
        var beforePage = pages[pages.length - 2]; // 前一个页面
        this.$back({
          success: function success() {
            beforePage.addSpace(self.selectList);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      if (options && options.addSpace !== undefined) {
        this.addSpace = JSON.parse(options.addSpace);
      }
      this.list = _test2.default.testData;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/space-list/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3BhY2VpdGVtIiwiZGF0YSIsImFkZFNwYWNlIiwic3BhY2VTaXplIiwic2VsZWN0TGlzdCIsImxpc3QiLCJjb21wdXRlZCIsImdldEltYWdlV2lkdGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInNwYWNlSXRlbVdpZHRoIiwiZ2V0U3BhY2VTZXBXaWR0aCIsIk1hdGgiLCJmbG9vciIsInNjcmVlbldpZHRoIiwibWV0aG9kcyIsImNsaWNrZWRTaW1wbGVTcGFjZSIsIm51bSIsImV2dCIsInRlbXAiLCJpbmRleCIsInNlbGVjdGVkIiwiaSIsImxlbmd0aCIsInNwYWNlSWQiLCJzcGxpY2UiLCJwdXNoIiwiaXRlbSIsIiRhcHBseSIsIiRuYXZpZ2F0ZSIsImNsaWNrZWRDb21wbGV0ZUJ1dHRvbiIsInNlbGYiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImJlZm9yZVBhZ2UiLCIkYmFjayIsInN1Y2Nlc3MiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwidGVzdERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQU1WQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsTUFBM0IsRUFBUixFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFB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QTNELEVBQW9FLEVBQXBFO0FBQ0Q7QUFDRixPQXBCTztBQXFCUk0sMkJBckJRLG1DQXFCZ0I7QUFDdEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUMsaUJBQVo7QUFDQSxZQUFJQyxhQUFhRixNQUFNQSxNQUFNVCxNQUFOLEdBQWUsQ0FBckIsQ0FBakIsQ0FIc0IsQ0FHbUI7QUFDekMsYUFBS1ksS0FBTCxDQUFXO0FBQ1RDLG1CQUFTLG1CQUFXO0FBQ2xCRix1QkFBV2hDLFFBQVgsQ0FBb0I2QixLQUFLM0IsVUFBekI7QUFDRDtBQUhRLFNBQVg7QUFLRDtBQTlCTyxLOzs7OzsyQkFpQ0hpQyxPLEVBQVM7QUFDZCxVQUFJQSxXQUFXQSxRQUFRbkMsUUFBUixLQUFxQm9DLFNBQXBDLEVBQStDO0FBQzdDLGFBQUtwQyxRQUFMLEdBQWdCcUMsS0FBS0MsS0FBTCxDQUFXSCxRQUFRbkMsUUFBbkIsQ0FBaEI7QUFDRDtBQUNELFdBQUtHLElBQUwsR0FBWSxlQUFLb0MsUUFBakI7QUFDRDs7OztFQXBFZ0MsZUFBS0MsSTs7a0JBQW5CbkQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU3BhY2VJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc3BhY2UtaXRlbSdcbiAgaW1wb3J0IHRlc3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnqbrpl7TliJfooagnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwic3BhY2VpdGVtXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcInNwYWNlaXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbVdpZHRoLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiZ2V0SW1hZ2VXaWR0aFwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3BhY2VTaXplLm9uY2VcIjp7XCJ2YWx1ZVwiOlwic3BhY2VTaXplXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDphZGRTcGFjZS5vbmNlXCI6e1widmFsdWVcIjpcImFkZFNwYWNlXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wic3BhY2VpdGVtXCI6e1widi1vbjp0YXBFdmVudFwiOlwiY2xpY2tlZFNpbXBsZVNwYWNlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzcGFjZWl0ZW06IFNwYWNlSXRlbVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBhZGRTcGFjZTogZmFsc2UsXG4gICAgICBzcGFjZVNpemU6IDEwLFxuICAgICAgc2VsZWN0TGlzdDogW10sXG4gICAgICBsaXN0OiBbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0SW1hZ2VXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNwYWNlSXRlbVdpZHRoXG4gICAgICB9LFxuICAgICAgZ2V0U3BhY2VTZXBXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbldpZHRoIC0gMjAgKiA0IC0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc3BhY2VJdGVtV2lkdGggKiAzKSAvIDIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrZWRTaW1wbGVTcGFjZShudW0sIGV2dCkge1xuICAgICAgICBpZiAodGhpcy5hZGRTcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIOa3u+WKoOWIsOepuumXtFxuICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy5saXN0W251bS5pbmRleF1cbiAgICAgICAgICBpZiAodGVtcC5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGVtcC5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zZWxlY3RMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdExpc3RbaV0gPT09IHRlbXAuc3BhY2VJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdExpc3QucHVzaChudW0uaXRlbS5zcGFjZUlkKVxuICAgICAgICAgICAgdGVtcC5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuLi9zcGFjZS1kZXRhaWwvaW5kZXg/c3BhY2VJZD0nICsgbnVtLml0ZW0uc3BhY2VJZCwge30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbGlja2VkQ29tcGxldGVCdXR0b24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICB2YXIgYmVmb3JlUGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdIC8vIOWJjeS4gOS4qumhtemdolxuICAgICAgICB0aGlzLiRiYWNrKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGJlZm9yZVBhZ2UuYWRkU3BhY2Uoc2VsZi5zZWxlY3RMaXN0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hZGRTcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYWRkU3BhY2UgPSBKU09OLnBhcnNlKG9wdGlvbnMuYWRkU3BhY2UpXG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QgPSB0ZXN0LnRlc3REYXRhXG4gICAgfVxuICB9XG4iXX0=