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

var SpaceItem = function (_wepy$component) {
  _inherits(SpaceItem, _wepy$component);

  function SpaceItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SpaceItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpaceItem.__proto__ || Object.getPrototypeOf(SpaceItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      index: Number,
      item: Object,
      itemWidth: Number,
      spaceSize: Number,
      addSpace: Boolean
    }, _this.data = {}, _this.computed = {
      getImageWidth: function getImageWidth() {
        return this.itemWidth;
      },
      getSpaceSize: function getSpaceSize() {
        return this.spaceSize !== undefined ? this.spaceSize : 0;
      }
    }, _this.methods = {
      tapEvent: function tapEvent(num, evt) {
        this.$emit('tapEvent', { item: this.item, index: this.index });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SpaceItem, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SpaceItem;
}(_wepy2.default.component);

exports.default = SpaceItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLWl0ZW0uanMiXSwibmFtZXMiOlsiU3BhY2VJdGVtIiwicHJvcHMiLCJpbmRleCIsIk51bWJlciIsIml0ZW0iLCJPYmplY3QiLCJpdGVtV2lkdGgiLCJzcGFjZVNpemUiLCJhZGRTcGFjZSIsIkJvb2xlYW4iLCJkYXRhIiwiY29tcHV0ZWQiLCJnZXRJbWFnZVdpZHRoIiwiZ2V0U3BhY2VTaXplIiwidW5kZWZpbmVkIiwibWV0aG9kcyIsInRhcEV2ZW50IiwibnVtIiwiZXZ0IiwiJGVtaXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DLE1BREQ7QUFFTkMsWUFBTUMsTUFGQTtBQUdOQyxpQkFBV0gsTUFITDtBQUlOSSxpQkFBV0osTUFKTDtBQUtOSyxnQkFBVUM7QUFMSixLLFFBUVJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU8sS0FBS04sU0FBWjtBQUNELE9BSFE7QUFJVE8sa0JBSlMsMEJBSU07QUFDYixlQUFPLEtBQUtOLFNBQUwsS0FBbUJPLFNBQW5CLEdBQStCLEtBQUtQLFNBQXBDLEdBQWdELENBQXZEO0FBQ0Q7QUFOUSxLLFFBU1hRLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxHQURELEVBQ01DLEdBRE4sRUFDVztBQUNqQixhQUFLQyxLQUFMLENBQVcsVUFBWCxFQUF1QixFQUFDZixNQUFNLEtBQUtBLElBQVosRUFBa0JGLE9BQU8sS0FBS0EsS0FBOUIsRUFBdkI7QUFDRDtBQUhPLEs7Ozs7OzZCQU1ELENBQUU7Ozs7RUExQjBCLGVBQUtrQixTOztrQkFBdkJwQixTIiwiZmlsZSI6InNwYWNlLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZUl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBpbmRleDogTnVtYmVyLFxuICAgICAgaXRlbTogT2JqZWN0LFxuICAgICAgaXRlbVdpZHRoOiBOdW1iZXIsXG4gICAgICBzcGFjZVNpemU6IE51bWJlcixcbiAgICAgIGFkZFNwYWNlOiBCb29sZWFuXG4gICAgfVxuXG4gICAgZGF0YSA9IHt9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldEltYWdlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1XaWR0aFxuICAgICAgfSxcbiAgICAgIGdldFNwYWNlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2VTaXplICE9PSB1bmRlZmluZWQgPyB0aGlzLnNwYWNlU2l6ZSA6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwRXZlbnQobnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndGFwRXZlbnQnLCB7aXRlbTogdGhpcy5pdGVtLCBpbmRleDogdGhpcy5pbmRleH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge31cbiAgfVxuIl19