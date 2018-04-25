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
      title: String,
      needDraft: Boolean
    }, _this.data = {}, _this.computed = {
      getCompleteWidth: function getCompleteWidth() {
        return this.needDraft ? 68 : 100;
      }
    }, _this.methods = {
      completeEvent: function completeEvent(num, evt) {
        this.$emit('completeEvent', {});
      },
      draftEvent: function draftEvent(num, evt) {
        this.$emit('draftEvent', {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLWJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJTcGFjZUl0ZW0iLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibmVlZERyYWZ0IiwiQm9vbGVhbiIsImRhdGEiLCJjb21wdXRlZCIsImdldENvbXBsZXRlV2lkdGgiLCJtZXRob2RzIiwiY29tcGxldGVFdmVudCIsIm51bSIsImV2dCIsIiRlbWl0IiwiZHJhZnRFdmVudCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsYUFBT0MsTUFERDtBQUVOQyxpQkFBV0M7QUFGTCxLLFFBS1JDLEksR0FBTyxFLFFBRVBDLFEsR0FBVztBQUNUQyxzQkFEUyw4QkFDVTtBQUNqQixlQUFPLEtBQUtKLFNBQUwsR0FBaUIsRUFBakIsR0FBc0IsR0FBN0I7QUFDRDtBQUhRLEssUUFNWEssTyxHQUFVO0FBQ1JDLG1CQURRLHlCQUNNQyxHQUROLEVBQ1dDLEdBRFgsRUFDZ0I7QUFDdEIsYUFBS0MsS0FBTCxDQUFXLGVBQVgsRUFBNEIsRUFBNUI7QUFDRCxPQUhPO0FBSVJDLGdCQUpRLHNCQUlHSCxHQUpILEVBSVFDLEdBSlIsRUFJYTtBQUNuQixhQUFLQyxLQUFMLENBQVcsWUFBWCxFQUF5QixFQUF6QjtBQUNEO0FBTk8sSzs7Ozs7NkJBU0QsQ0FBRTs7OztFQXZCMEIsZUFBS0UsUzs7a0JBQXZCZixTIiwiZmlsZSI6ImNvbXBsZXRlLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYWNlSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICBuZWVkRHJhZnQ6IEJvb2xlYW5cbiAgICB9XG5cbiAgICBkYXRhID0ge31cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZ2V0Q29tcGxldGVXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmVlZERyYWZ0ID8gNjggOiAxMDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY29tcGxldGVFdmVudChudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjb21wbGV0ZUV2ZW50Jywge30pXG4gICAgICB9LFxuICAgICAgZHJhZnRFdmVudChudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdkcmFmdEV2ZW50Jywge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge31cbiAgfVxuIl19