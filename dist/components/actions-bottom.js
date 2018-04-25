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

var ActionsBottom = function (_wepy$component) {
  _inherits(ActionsBottom, _wepy$component);

  function ActionsBottom() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionsBottom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionsBottom.__proto__ || Object.getPrototypeOf(ActionsBottom)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      icon: String,
      name: String,
      number: Number
    }, _this.data = {
      showText: ''
    }, _this.methods = {
      onItemClick: function onItemClick() {
        this.$emit('clickBottom', { name: this.name });
      }
    }, _this.computed = {}, _this.watch = {
      number: function number(newValue, oldValue) {
        this.combineText();
      },
      showText: function showText(newValue, oldValue) {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionsBottom, [{
    key: 'onLoad',
    value: function onLoad() {
      this.combineText();
    }
  }, {
    key: 'combineText',
    value: function combineText() {
      if (this.name !== null) {
        this.showText = this.name;
      } else {
        return;
      }
      if (this.number && this.number > 0) {
        this.showText += '(' + this.number + ')';
        this.$apply();
      }
    }
  }]);

  return ActionsBottom;
}(_wepy2.default.component);

exports.default = ActionsBottom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMtYm90dG9tLmpzIl0sIm5hbWVzIjpbIkFjdGlvbnNCb3R0b20iLCJwcm9wcyIsImljb24iLCJTdHJpbmciLCJuYW1lIiwibnVtYmVyIiwiTnVtYmVyIiwiZGF0YSIsInNob3dUZXh0IiwibWV0aG9kcyIsIm9uSXRlbUNsaWNrIiwiJGVtaXQiLCJjb21wdXRlZCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbWJpbmVUZXh0IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEssR0FBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLFlBQU1ELE1BRkE7QUFHTkUsY0FBUUM7QUFIRixLLFFBTVJDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNPO0FBQ2IsYUFBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEIsRUFBQ1AsTUFBTSxLQUFLQSxJQUFaLEVBQTFCO0FBQ0Q7QUFITyxLLFFBTVZRLFEsR0FBVyxFLFFBRVhDLEssR0FBUTtBQUNOUixZQURNLGtCQUNDUyxRQURELEVBQ1dDLFFBRFgsRUFDcUI7QUFDekIsYUFBS0MsV0FBTDtBQUNELE9BSEs7QUFJTlIsY0FKTSxvQkFJR00sUUFKSCxFQUlhQyxRQUpiLEVBSXVCLENBQUU7QUFKekIsSzs7Ozs7NkJBT0U7QUFDUixXQUFLQyxXQUFMO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUksS0FBS1osSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGFBQUtJLFFBQUwsR0FBZ0IsS0FBS0osSUFBckI7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNEO0FBQ0QsVUFBSSxLQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxHQUFjLENBQWpDLEVBQW9DO0FBQ2xDLGFBQUtHLFFBQUwsSUFBaUIsTUFBTSxLQUFLSCxNQUFYLEdBQW9CLEdBQXJDO0FBQ0EsYUFBS1ksTUFBTDtBQUNEO0FBQ0Y7Ozs7RUF4Q3dDLGVBQUtDLFM7O2tCQUEzQmxCLGEiLCJmaWxlIjoiYWN0aW9ucy1ib3R0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25zQm90dG9tIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgbnVtYmVyOiBOdW1iZXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc2hvd1RleHQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uSXRlbUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2tCb3R0b20nLCB7bmFtZTogdGhpcy5uYW1lfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIG51bWJlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21iaW5lVGV4dCgpXG4gICAgICB9LFxuICAgICAgc2hvd1RleHQobmV3VmFsdWUsIG9sZFZhbHVlKSB7fVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmNvbWJpbmVUZXh0KClcbiAgICB9XG5cbiAgICBjb21iaW5lVGV4dCgpIHtcbiAgICAgIGlmICh0aGlzLm5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zaG93VGV4dCA9IHRoaXMubmFtZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgPiAwKSB7XG4gICAgICAgIHRoaXMuc2hvd1RleHQgKz0gJygnICsgdGhpcy5udW1iZXIgKyAnKSdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19