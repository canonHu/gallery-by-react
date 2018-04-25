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

var TabListView = function (_wepy$component) {
  _inherits(TabListView, _wepy$component);

  function TabListView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabListView.__proto__ || Object.getPrototypeOf(TabListView)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tabs: {
        type: Object,
        default: []
      },
      selectIndex: {
        type: Number,
        default: 0
      },
      defaultBackColor: String,
      defaultTitleColor: String,
      defaultTitleBold: String,
      defaultBorderColor: String,
      selectBackColor: String,
      selectTitleColor: String,
      selectTitleBold: String,
      selectBorderColor: String
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      tapEvent: function tapEvent(num, evt) {
        var index = parseInt(num.currentTarget.id);
        if (this.selectIndex !== index) {
          this.selectIndex = index;
          var item = this.tabs[index];
          // invoke： 组件路径需加上前缀'/'，同时组件名为page中所重定义的名字
          this.$invoke('/tablist', 'changeCurrentTab', index);
          this.$emit('tapEvent', { index: index, info: item });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabListView, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TabListView;
}(_wepy2.default.component);

exports.default = TabListView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1saXN0LXZpZXcuanMiXSwibmFtZXMiOlsiVGFiTGlzdFZpZXciLCJwcm9wcyIsInRhYnMiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInNlbGVjdEluZGV4IiwiTnVtYmVyIiwiZGVmYXVsdEJhY2tDb2xvciIsIlN0cmluZyIsImRlZmF1bHRUaXRsZUNvbG9yIiwiZGVmYXVsdFRpdGxlQm9sZCIsImRlZmF1bHRCb3JkZXJDb2xvciIsInNlbGVjdEJhY2tDb2xvciIsInNlbGVjdFRpdGxlQ29sb3IiLCJzZWxlY3RUaXRsZUJvbGQiLCJzZWxlY3RCb3JkZXJDb2xvciIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0YXBFdmVudCIsIm51bSIsImV2dCIsImluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJpdGVtIiwiJGludm9rZSIsIiRlbWl0IiwiaW5mbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtOQyxtQkFBYTtBQUNYSCxjQUFNSSxNQURLO0FBRVhGLGlCQUFTO0FBRkUsT0FMUDtBQVNORyx3QkFBa0JDLE1BVFo7QUFVTkMseUJBQW1CRCxNQVZiO0FBV05FLHdCQUFrQkYsTUFYWjtBQVlORywwQkFBb0JILE1BWmQ7QUFhTkksdUJBQWlCSixNQWJYO0FBY05LLHdCQUFrQkwsTUFkWjtBQWVOTSx1QkFBaUJOLE1BZlg7QUFnQk5PLHlCQUFtQlA7QUFoQmIsSyxRQW1CUlEsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLEdBREQsRUFDTUMsR0FETixFQUNXO0FBQ2pCLFlBQUlDLFFBQVFDLFNBQVNILElBQUlJLGFBQUosQ0FBa0JDLEVBQTNCLENBQVo7QUFDQSxZQUFJLEtBQUtwQixXQUFMLEtBQXFCaUIsS0FBekIsRUFBZ0M7QUFDOUIsZUFBS2pCLFdBQUwsR0FBbUJpQixLQUFuQjtBQUNBLGNBQUlJLE9BQU8sS0FBS3pCLElBQUwsQ0FBVXFCLEtBQVYsQ0FBWDtBQUNBO0FBQ0EsZUFBS0ssT0FBTCxDQUFhLFVBQWIsRUFBeUIsa0JBQXpCLEVBQTZDTCxLQUE3QztBQUNBLGVBQUtNLEtBQUwsQ0FBVyxVQUFYLEVBQXVCLEVBQUNOLE9BQU9BLEtBQVIsRUFBZU8sTUFBTUgsSUFBckIsRUFBdkI7QUFDRDtBQUNGO0FBVk8sSzs7Ozs7NkJBYUQsQ0FBRTs7OztFQXRDNEIsZUFBS0ksUzs7a0JBQXpCL0IsVyIsImZpbGUiOiJ0YWItbGlzdC12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTGlzdFZpZXcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB0YWJzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBzZWxlY3RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0QmFja0NvbG9yOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0VGl0bGVDb2xvcjogU3RyaW5nLFxuICAgICAgZGVmYXVsdFRpdGxlQm9sZDogU3RyaW5nLFxuICAgICAgZGVmYXVsdEJvcmRlckNvbG9yOiBTdHJpbmcsXG4gICAgICBzZWxlY3RCYWNrQ29sb3I6IFN0cmluZyxcbiAgICAgIHNlbGVjdFRpdGxlQ29sb3I6IFN0cmluZyxcbiAgICAgIHNlbGVjdFRpdGxlQm9sZDogU3RyaW5nLFxuICAgICAgc2VsZWN0Qm9yZGVyQ29sb3I6IFN0cmluZ1xuICAgIH1cblxuICAgIGRhdGEgPSB7fVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcEV2ZW50KG51bSwgZXZ0KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KG51bS5jdXJyZW50VGFyZ2V0LmlkKVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMudGFic1tpbmRleF1cbiAgICAgICAgICAvLyBpbnZva2XvvJog57uE5Lu26Lev5b6E6ZyA5Yqg5LiK5YmN57yAJy8n77yM5ZCM5pe257uE5Lu25ZCN5Li6cGFnZeS4reaJgOmHjeWumuS5ieeahOWQjeWtl1xuICAgICAgICAgIHRoaXMuJGludm9rZSgnL3RhYmxpc3QnLCAnY2hhbmdlQ3VycmVudFRhYicsIGluZGV4KVxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcEV2ZW50Jywge2luZGV4OiBpbmRleCwgaW5mbzogaXRlbX0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=