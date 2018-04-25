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

var AlertList = function (_wepy$component) {
  _inherits(AlertList, _wepy$component);

  function AlertList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlertList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlertList.__proto__ || Object.getPrototypeOf(AlertList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: {
        type: Object,
        default: {}
      },
      syncOffsetY: {
        type: Number,
        default: 0
      },
      showSelectStyle: {
        type: Boolean,
        default: 0
      },
      currentSelect: {
        type: Number,
        default: 0
      },
      totalCount: {
        type: Number,
        default: 0
      }
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      clickedAlertItem: function clickedAlertItem(num, evt) {
        var index = num.currentTarget.dataset.index;
        this.$emit('clickedAlertItem', { item: this.items[index], index: index });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlertList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AlertList;
}(_wepy2.default.component);

exports.default = AlertList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWxpc3QuanMiXSwibmFtZXMiOlsiQWxlcnRMaXN0IiwicHJvcHMiLCJpdGVtcyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0Iiwic3luY09mZnNldFkiLCJOdW1iZXIiLCJzaG93U2VsZWN0U3R5bGUiLCJCb29sZWFuIiwiY3VycmVudFNlbGVjdCIsInRvdGFsQ291bnQiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiY2xpY2tlZEFsZXJ0SXRlbSIsIm51bSIsImV2dCIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsIml0ZW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUztBQUZKLE9BREQ7QUFLTkMsbUJBQWE7QUFDWEgsY0FBTUksTUFESztBQUVYRixpQkFBUztBQUZFLE9BTFA7QUFTTkcsdUJBQWlCO0FBQ2ZMLGNBQU1NLE9BRFM7QUFFZkosaUJBQVM7QUFGTSxPQVRYO0FBYU5LLHFCQUFlO0FBQ2JQLGNBQU1JLE1BRE87QUFFYkYsaUJBQVM7QUFGSSxPQWJUO0FBaUJOTSxrQkFBWTtBQUNWUixjQUFNSSxNQURJO0FBRVZGLGlCQUFTO0FBRkM7QUFqQk4sSyxRQXVCUk8sSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNTQyxHQURULEVBQ2NDLEdBRGQsRUFDbUI7QUFDekIsWUFBSUMsUUFBUUYsSUFBSUcsYUFBSixDQUFrQkMsT0FBbEIsQ0FBMEJGLEtBQXRDO0FBQ0EsYUFBS0csS0FBTCxDQUFXLGtCQUFYLEVBQStCLEVBQUNDLE1BQU0sS0FBS3BCLEtBQUwsQ0FBV2dCLEtBQVgsQ0FBUCxFQUEwQkEsT0FBTUEsS0FBaEMsRUFBL0I7QUFDRDtBQUpPLEs7Ozs7OzZCQU9ELENBRVI7Ozs7RUFyQ29DLGVBQUtLLFM7O2tCQUF2QnZCLFMiLCJmaWxlIjoiYWxlcnQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0TGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBzeW5jT2Zmc2V0WToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH0sXG4gICAgICBzaG93U2VsZWN0U3R5bGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRTZWxlY3Q6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgICB9LFxuICAgICAgdG90YWxDb3VudDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge31cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGlja2VkQWxlcnRJdGVtKG51bSwgZXZ0KSB7XG4gICAgICAgIGxldCBpbmRleCA9IG51bS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2tlZEFsZXJ0SXRlbScsIHtpdGVtOiB0aGlzLml0ZW1zW2luZGV4XSwgaW5kZXg6aW5kZXh9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgfVxuIl19