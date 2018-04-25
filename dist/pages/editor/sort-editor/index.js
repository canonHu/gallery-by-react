'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

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
      navigationBarTitleText: '发布旅行心得'
    }, _this.data = {
      contents: [],
      layouts: [],
      showFixedView: false,
      currentIndex: -1,
      animation: wx.createAnimation({
        duration: 0,
        timingFunction: 'ease'
      }),
      currentLayout: {
        x: -1,
        y: -1
      },
      lastLayout: {
        x: 0,
        y: 0
      }
    }, _this.computed = {}, _this.methods = {
      bindlongpress: function bindlongpress(num) {
        var event = num.changedTouches[0];
        this.lastLayout = {
          x: event.pageX,
          y: event.pageY
        };

        var currentIndex = parseInt(event.pageY / 122) * 3 + parseInt(event.pageX / 122);
        currentIndex = _utils2.default.getEffectiveIndex(currentIndex, this.contents.length);
        this.currentLayout = {
          x: this.getLayoutX(currentIndex),
          y: this.getLayoutY(currentIndex)
        };
        this.currentIndex = currentIndex;
        this.showFixedView = true;
      },
      onChange: function onChange(num) {
        // 非排序状态
        if (this.showFixedView !== true) {
          return;
        }

        // 计算当前位置
        var event = num.changedTouches[0];
        var currentX = event.pageX;
        var currentY = event.pageY;

        this.currentLayout.x += currentX - this.lastLayout.x;
        this.currentLayout.y += currentY - this.lastLayout.y;
        this.animation.translate(this.currentLayout.x, this.currentLayout.y).step();
        this.animationData = this.animation.export();

        // 更新上次位置
        this.lastLayout = {
          x: event.pageX,
          y: event.pageY
        };
      },
      bindtouchend: function bindtouchend(e) {
        // 非排序状态
        if (this.showFixedView !== true) {
          return;
        }

        this.showFixedView = false;

        // 获取拖动item索引
        var dragIndex = this.currentIndex;
        this.currentIndex = -1;

        // 计算排序
        if (this.pointInDisplayArea(this.currentLayout)) {
          // 计算拖动停止时所在的位置
          var currentIndex = Math.round(this.currentLayout.y / 122) * 3 + Math.round(this.currentLayout.x / 122);
          currentIndex = _utils2.default.getEffectiveIndex(currentIndex, this.contents.length);

          // 获取拖动item
          var dragItem = this.contents[dragIndex];

          // 更新顺序
          this.contents.splice(dragIndex, 1);
          this.contents.splice(currentIndex, 0, dragItem);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      var store = (0, _wepyRedux.getStore)();
      var state = store.getState();
      this.contents = state.editor.contents;

      this.contents.forEach(function (item, index) {
        _this2.layouts.push({
          x: _this2.getLayoutX(index),
          y: _this2.getLayoutY(index)
        });
      });
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      this.contents.forEach(function (item, index) {
        item.elementId = index;
      });
    }
  }, {
    key: 'getLayoutX',
    value: function getLayoutX(index) {
      return (index % 3 + 1) * 12 + index % 3 * 110;
    }
  }, {
    key: 'getLayoutY',
    value: function getLayoutY(index) {
      return parseInt(index / 3 + 1) * 12 + parseInt(index / 3) * 110;
    }
  }, {
    key: 'pointInDisplayArea',
    value: function pointInDisplayArea(point) {
      return point.x >= 0 && point.y >= 0 && point.x <= 122 * 3 && point.y <= this.$parent.globalData.screenHeight;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/editor/sort-editor/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnRzIiwibGF5b3V0cyIsInNob3dGaXhlZFZpZXciLCJjdXJyZW50SW5kZXgiLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJjdXJyZW50TGF5b3V0IiwieCIsInkiLCJsYXN0TGF5b3V0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiYmluZGxvbmdwcmVzcyIsIm51bSIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwicGFyc2VJbnQiLCJnZXRFZmZlY3RpdmVJbmRleCIsImxlbmd0aCIsImdldExheW91dFgiLCJnZXRMYXlvdXRZIiwib25DaGFuZ2UiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwidHJhbnNsYXRlIiwic3RlcCIsImFuaW1hdGlvbkRhdGEiLCJleHBvcnQiLCJiaW5kdG91Y2hlbmQiLCJlIiwiZHJhZ0luZGV4IiwicG9pbnRJbkRpc3BsYXlBcmVhIiwiTWF0aCIsInJvdW5kIiwiZHJhZ0l0ZW0iLCJzcGxpY2UiLCJvcHRpb25zIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiZWRpdG9yIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJlbGVtZW50SWQiLCJwb2ludCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2NyZWVuSGVpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLDhCQUF3QjtB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QUErQjNCLFNBQVMyQixRQUFRLENBQWpCLElBQXNCLEdBQTVEO0FBQ0Q7Ozt1Q0FFa0JHLEssRUFBTztBQUN4QixhQUFRQSxNQUFNekMsQ0FBTixJQUFXLENBQVgsSUFBZ0J5QyxNQUFNeEMsQ0FBTixJQUFXLENBQTNCLElBQWdDd0MsTUFBTXpDLENBQU4sSUFBVyxNQUFNLENBQWpELElBQXNEeUMsTUFBTXhDLENBQU4sSUFBVyxLQUFLeUMsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxZQUFqRztBQUNEOzs7O0VBN0hnQyxlQUFLQyxJOztrQkFBbkI3RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcbiAgaW1wb3J0IHsgZ2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+aXheihjOW/g+W+lydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY29udGVudHM6IFtdLFxuICAgICAgbGF5b3V0czogW10sXG4gICAgICBzaG93Rml4ZWRWaWV3OiBmYWxzZSxcbiAgICAgIGN1cnJlbnRJbmRleDogLTEsXG4gICAgICBhbmltYXRpb246IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgICAgfSksXG4gICAgICBjdXJyZW50TGF5b3V0OiB7XG4gICAgICAgIHg6IC0xLFxuICAgICAgICB5OiAtMSxcbiAgICAgIH0sXG4gICAgICBsYXN0TGF5b3V0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRsb25ncHJlc3MobnVtKSB7XG4gICAgICAgIGxldCBldmVudCA9IG51bS5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICB0aGlzLmxhc3RMYXlvdXQgPSB7XG4gICAgICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgeTogZXZlbnQucGFnZVksXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gIHBhcnNlSW50KGV2ZW50LnBhZ2VZIC8gMTIyKSAqIDMgKyBwYXJzZUludChldmVudC5wYWdlWCAvIDEyMilcbiAgICAgICAgY3VycmVudEluZGV4ID0gdXRpbHMuZ2V0RWZmZWN0aXZlSW5kZXgoY3VycmVudEluZGV4LCB0aGlzLmNvbnRlbnRzLmxlbmd0aClcbiAgICAgICAgdGhpcy5jdXJyZW50TGF5b3V0ID0ge1xuICAgICAgICAgIHg6IHRoaXMuZ2V0TGF5b3V0WChjdXJyZW50SW5kZXgpLFxuICAgICAgICAgIHk6IHRoaXMuZ2V0TGF5b3V0WShjdXJyZW50SW5kZXgpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4XG4gICAgICAgIHRoaXMuc2hvd0ZpeGVkVmlldyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZShudW0pIHtcbiAgICAgICAgLy8g6Z2e5o6S5bqP54q25oCBXG4gICAgICAgIGlmICh0aGlzLnNob3dGaXhlZFZpZXcgIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuoeeul+W9k+WJjeS9jee9rlxuICAgICAgICBsZXQgZXZlbnQgPSBudW0uY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgbGV0IGN1cnJlbnRYID0gZXZlbnQucGFnZVhcbiAgICAgICAgbGV0IGN1cnJlbnRZID0gZXZlbnQucGFnZVlcblxuICAgICAgICB0aGlzLmN1cnJlbnRMYXlvdXQueCArPSAoY3VycmVudFggLSB0aGlzLmxhc3RMYXlvdXQueClcbiAgICAgICAgdGhpcy5jdXJyZW50TGF5b3V0LnkgKz0gKGN1cnJlbnRZIC0gdGhpcy5sYXN0TGF5b3V0LnkpXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnRyYW5zbGF0ZSh0aGlzLmN1cnJlbnRMYXlvdXQueCwgdGhpcy5jdXJyZW50TGF5b3V0LnkpLnN0ZXAoKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB0aGlzLmFuaW1hdGlvbi5leHBvcnQoKVxuXG4gICAgICAgIC8vIOabtOaWsOS4iuasoeS9jee9rlxuICAgICAgICB0aGlzLmxhc3RMYXlvdXQgPSB7XG4gICAgICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgeTogZXZlbnQucGFnZVksXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiaW5kdG91Y2hlbmQoZSkge1xuICAgICAgICAvLyDpnZ7mjpLluo/nirbmgIFcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpeGVkVmlldyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93Rml4ZWRWaWV3ID0gZmFsc2VcblxuICAgICAgICAvLyDojrflj5bmi5bliqhpdGVt57Si5byVXG4gICAgICAgIGxldCBkcmFnSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleFxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IC0xXG5cbiAgICAgICAgLy8g6K6h566X5o6S5bqPXG4gICAgICAgIGlmICh0aGlzLnBvaW50SW5EaXNwbGF5QXJlYSh0aGlzLmN1cnJlbnRMYXlvdXQpKSB7XG4gICAgICAgICAgLy8g6K6h566X5ouW5Yqo5YGc5q2i5pe25omA5Zyo55qE5L2N572uXG4gICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9ICBNYXRoLnJvdW5kKHRoaXMuY3VycmVudExheW91dC55IC8gMTIyKSAqIDMgKyBNYXRoLnJvdW5kKHRoaXMuY3VycmVudExheW91dC54IC8gMTIyKVxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IHV0aWxzLmdldEVmZmVjdGl2ZUluZGV4KGN1cnJlbnRJbmRleCwgdGhpcy5jb250ZW50cy5sZW5ndGgpXG5cbiAgICAgICAgICAvLyDojrflj5bmi5bliqhpdGVtXG4gICAgICAgICAgbGV0IGRyYWdJdGVtID0gdGhpcy5jb250ZW50c1tkcmFnSW5kZXhdXG5cbiAgICAgICAgICAvLyDmm7TmlrDpobrluo9cbiAgICAgICAgICB0aGlzLmNvbnRlbnRzLnNwbGljZShkcmFnSW5kZXgsIDEpXG4gICAgICAgICAgdGhpcy5jb250ZW50cy5zcGxpY2UoY3VycmVudEluZGV4LCAwLCBkcmFnSXRlbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKClcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgdGhpcy5jb250ZW50cyA9IHN0YXRlLmVkaXRvci5jb250ZW50c1xuXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0cy5wdXNoKHtcbiAgICAgICAgICB4OiB0aGlzLmdldExheW91dFgoaW5kZXgpLFxuICAgICAgICAgIHk6IHRoaXMuZ2V0TGF5b3V0WShpbmRleCksXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uSGlkZSgpIHtcbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5lbGVtZW50SWQgPSBpbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRMYXlvdXRYKGluZGV4KSB7XG4gICAgICByZXR1cm4gKGluZGV4ICUgMyArIDEpICogMTIgKyAoaW5kZXggJSAzKSAqIDExMFxuICAgIH1cblxuICAgIGdldExheW91dFkoaW5kZXgpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChpbmRleCAvIDMgKyAxKSAqIDEyICsgcGFyc2VJbnQoaW5kZXggLyAzKSAqIDExMFxuICAgIH1cblxuICAgIHBvaW50SW5EaXNwbGF5QXJlYShwb2ludCkge1xuICAgICAgcmV0dXJuIChwb2ludC54ID49IDAgJiYgcG9pbnQueSA+PSAwICYmIHBvaW50LnggPD0gMTIyICogMyAmJiBwb2ludC55IDw9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbkhlaWdodClcbiAgICB9XG4gIH1cbiJdfQ==