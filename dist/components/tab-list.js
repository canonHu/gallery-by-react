'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabList = function (_wepy$component) {
  _inherits(TabList, _wepy$component);

  function TabList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabList.__proto__ || Object.getPrototypeOf(TabList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tabs: {
        type: Object,
        default: []
      },
      selectIndex: {
        type: Number,
        default: 0
      },
      defaultTitleColor: String,
      defaultTitleBold: String,
      selectTitleColor: String,
      selectTitleBold: String,
      indicatorColor: String
    }, _this.data = {
      toView: ''
    }, _this.computed = {
      getCurrentSelect: function getCurrentSelect() {
        if (this.selectIndex >= this.tabs.length) {
          console.log('warning: Index out of bounds');
          return;
        }
        return this.selectIndex !== undefined ? this.selectIndex : 0;
      }
    }, _this.methods = {
      clickedSimpleItem: function clickedSimpleItem(num, evt) {
        var index = parseInt(num.currentTarget.dataset.index);
        if (this.getCurrentSelect !== index) {
          this.selectIndex = index;
          var item = this.tabs[index];
          this.toView = 'tabitem_' + index; // 组件id最好都使用英文开头，避免不生效
          this.$emit('tapEvent', { index: index, info: item });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'changeCurrentTab',
    value: function changeCurrentTab(index) {
      this.toView = 'tabitem_' + index;
    }
  }]);

  return TabList;
}(_wepy2.default.component);

exports.default = TabList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1saXN0LmpzIl0sIm5hbWVzIjpbIlRhYkxpc3QiLCJwcm9wcyIsInRhYnMiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInNlbGVjdEluZGV4IiwiTnVtYmVyIiwiZGVmYXVsdFRpdGxlQ29sb3IiLCJTdHJpbmciLCJkZWZhdWx0VGl0bGVCb2xkIiwic2VsZWN0VGl0bGVDb2xvciIsInNlbGVjdFRpdGxlQm9sZCIsImluZGljYXRvckNvbG9yIiwiZGF0YSIsInRvVmlldyIsImNvbXB1dGVkIiwiZ2V0Q3VycmVudFNlbGVjdCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJtZXRob2RzIiwiY2xpY2tlZFNpbXBsZUl0ZW0iLCJudW0iLCJldnQiLCJpbmRleCIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwiJGVtaXQiLCJpbmZvIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLG1CQUFhO0FBQ1hILGNBQU1JLE1BREs7QUFFWEYsaUJBQVM7QUFGRSxPQUxQO0FBU05HLHlCQUFtQkMsTUFUYjtBQVVOQyx3QkFBa0JELE1BVlo7QUFXTkUsd0JBQWtCRixNQVhaO0FBWU5HLHVCQUFpQkgsTUFaWDtBQWFOSSxzQkFBZ0JKO0FBYlYsSyxRQWdCUkssSSxHQUFPO0FBQ0xDLGNBQVE7QUFESCxLLFFBSVBDLFEsR0FBVztBQUNUQyxzQkFEUyw4QkFDVTtBQUNqQixZQUFJLEtBQUtYLFdBQUwsSUFBb0IsS0FBS0osSUFBTCxDQUFVZ0IsTUFBbEMsRUFBMEM7QUFDeENDLGtCQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQTtBQUNEO0FBQ0QsZUFBTyxLQUFLZCxXQUFMLEtBQXFCZSxTQUFyQixHQUFpQyxLQUFLZixXQUF0QyxHQUFvRCxDQUEzRDtBQUNEO0FBUFEsSyxRQVVYZ0IsTyxHQUFVO0FBQ1JDLHVCQURRLDZCQUNVQyxHQURWLEVBQ2VDLEdBRGYsRUFDb0I7QUFDMUIsWUFBSUMsUUFBUUMsU0FBU0gsSUFBSUksYUFBSixDQUFrQkMsT0FBbEIsQ0FBMEJILEtBQW5DLENBQVo7QUFDQSxZQUFJLEtBQUtULGdCQUFMLEtBQTBCUyxLQUE5QixFQUFxQztBQUNuQyxlQUFLcEIsV0FBTCxHQUFtQm9CLEtBQW5CO0FBQ0EsY0FBSUksT0FBTyxLQUFLNUIsSUFBTCxDQUFVd0IsS0FBVixDQUFYO0FBQ0EsZUFBS1gsTUFBTCxHQUFjLGFBQWFXLEtBQTNCLENBSG1DLENBR0Q7QUFDbEMsZUFBS0ssS0FBTCxDQUFXLFVBQVgsRUFBdUIsRUFBQ0wsT0FBT0EsS0FBUixFQUFlTSxNQUFNRixJQUFyQixFQUF2QjtBQUNEO0FBQ0Y7QUFUTyxLOzs7Ozs2QkFZRCxDQUFFOzs7cUNBRU1KLEssRUFBTztBQUN0QixXQUFLWCxNQUFMLEdBQWMsYUFBYVcsS0FBM0I7QUFDRDs7OztFQS9Da0MsZUFBS08sUzs7a0JBQXJCakMsTyIsImZpbGUiOiJ0YWItbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYkxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB0YWJzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBzZWxlY3RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0VGl0bGVDb2xvcjogU3RyaW5nLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZDogU3RyaW5nLFxuICAgICAgc2VsZWN0VGl0bGVDb2xvcjogU3RyaW5nLFxuICAgICAgc2VsZWN0VGl0bGVCb2xkOiBTdHJpbmcsXG4gICAgICBpbmRpY2F0b3JDb2xvcjogU3RyaW5nXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRvVmlldzogJydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldEN1cnJlbnRTZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEluZGV4ID49IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnd2FybmluZzogSW5kZXggb3V0IG9mIGJvdW5kcycpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXggIT09IHVuZGVmaW5lZCA/IHRoaXMuc2VsZWN0SW5kZXggOiAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrZWRTaW1wbGVJdGVtKG51bSwgZXZ0KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KG51bS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTZWxlY3QgIT09IGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRhYnNbaW5kZXhdXG4gICAgICAgICAgdGhpcy50b1ZpZXcgPSAndGFiaXRlbV8nICsgaW5kZXggIC8vIOe7hOS7tmlk5pyA5aW96YO95L2/55So6Iux5paH5byA5aS077yM6YG/5YWN5LiN55Sf5pWIXG4gICAgICAgICAgdGhpcy4kZW1pdCgndGFwRXZlbnQnLCB7aW5kZXg6IGluZGV4LCBpbmZvOiBpdGVtfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHt9XG5cbiAgICBjaGFuZ2VDdXJyZW50VGFiKGluZGV4KSB7XG4gICAgICB0aGlzLnRvVmlldyA9ICd0YWJpdGVtXycgKyBpbmRleFxuICAgIH1cbiAgfVxuIl19