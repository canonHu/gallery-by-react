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

var ReplyItem = function (_wepy$component) {
  _inherits(ReplyItem, _wepy$component);

  function ReplyItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReplyItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReplyItem.__proto__ || Object.getPrototypeOf(ReplyItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      item: Object
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      clickedSimpleItem: function clickedSimpleItem(num, evt) {
        this.$emit('clickedSimpleItem', this.item);
      },
      clickedReplyButton: function clickedReplyButton(num, evt) {
        this.$emit('replyEvent', this.item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReplyItem, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ReplyItem;
}(_wepy2.default.component);

exports.default = ReplyItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LWl0ZW0uanMiXSwibmFtZXMiOlsiUmVwbHlJdGVtIiwicHJvcHMiLCJpdGVtIiwiT2JqZWN0IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNsaWNrZWRTaW1wbGVJdGVtIiwibnVtIiwiZXZ0IiwiJGVtaXQiLCJjbGlja2VkUmVwbHlCdXR0b24iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU1DO0FBREEsSyxRQUlSQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsdUJBRFEsNkJBQ1VDLEdBRFYsRUFDZUMsR0FEZixFQUNvQjtBQUMxQixhQUFLQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0MsS0FBS1IsSUFBckM7QUFDRCxPQUhPO0FBSVJTLHdCQUpRLDhCQUlXSCxHQUpYLEVBSWdCQyxHQUpoQixFQUlxQjtBQUMzQixhQUFLQyxLQUFMLENBQVcsWUFBWCxFQUF5QixLQUFLUixJQUE5QjtBQUNEO0FBTk8sSzs7Ozs7NkJBU0QsQ0FFUjs7OztFQXJCb0MsZUFBS1UsUzs7a0JBQXZCWixTIiwiZmlsZSI6InJlcGx5LWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBseUl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBpdGVtOiBPYmplY3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGlja2VkU2ltcGxlSXRlbShudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGlja2VkU2ltcGxlSXRlbScsIHRoaXMuaXRlbSlcbiAgICAgIH0sXG4gICAgICBjbGlja2VkUmVwbHlCdXR0b24obnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgncmVwbHlFdmVudCcsIHRoaXMuaXRlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG4gIH1cbiJdfQ==