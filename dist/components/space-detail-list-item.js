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

var SpaceDetailListItem = function (_wepy$component) {
  _inherits(SpaceDetailListItem, _wepy$component);

  function SpaceDetailListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SpaceDetailListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpaceDetailListItem.__proto__ || Object.getPrototypeOf(SpaceDetailListItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      cellInfo: Object,
      index: Number
    }, _this.data = {}, _this.methods = {
      tapEvent: function tapEvent(num, evt) {
        this.$emit('tapEvent', { item: this.cellInfo, index: this.index });
      },
      tapMoreEvent: function tapMoreEvent(num, evt) {
        this.$emit('tapMoreEvent', { item: this.cellInfo, index: this.index, offsetTop: num.currentTarget.offsetTop + 9 + 48 });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SpaceDetailListItem, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SpaceDetailListItem;
}(_wepy2.default.component);

exports.default = SpaceDetailListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLWRldGFpbC1saXN0LWl0ZW0uanMiXSwibmFtZXMiOlsiU3BhY2VEZXRhaWxMaXN0SXRlbSIsInByb3BzIiwiY2VsbEluZm8iLCJPYmplY3QiLCJpbmRleCIsIk51bWJlciIsImRhdGEiLCJtZXRob2RzIiwidGFwRXZlbnQiLCJudW0iLCJldnQiLCIkZW1pdCIsIml0ZW0iLCJ0YXBNb3JlRXZlbnQiLCJvZmZzZXRUb3AiLCJjdXJyZW50VGFyZ2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7Ozs7Z05BQ25CQyxLLEdBQVE7QUFDTkMsZ0JBQVVDLE1BREo7QUFFTkMsYUFBT0M7QUFGRCxLLFFBS1JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxHQURELEVBQ01DLEdBRE4sRUFDVztBQUNqQixhQUFLQyxLQUFMLENBQVcsVUFBWCxFQUF1QixFQUFDQyxNQUFNLEtBQUtWLFFBQVosRUFBc0JFLE9BQU8sS0FBS0EsS0FBbEMsRUFBdkI7QUFDRCxPQUhPO0FBSVJTLGtCQUpRLHdCQUlLSixHQUpMLEVBSVVDLEdBSlYsRUFJZTtBQUNyQixhQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEyQixFQUFDQyxNQUFNLEtBQUtWLFFBQVosRUFBc0JFLE9BQU8sS0FBS0EsS0FBbEMsRUFBeUNVLFdBQVdMLElBQUlNLGFBQUosQ0FBa0JELFNBQWxCLEdBQThCLENBQTlCLEdBQWtDLEVBQXRGLEVBQTNCO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFTRCxDQUFFOzs7O0VBakJvQyxlQUFLRSxTOztrQkFBakNoQixtQiIsImZpbGUiOiJzcGFjZS1kZXRhaWwtbGlzdC1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2VEZXRhaWxMaXN0SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGNlbGxJbmZvOiBPYmplY3QsXG4gICAgICBpbmRleDogTnVtYmVyXG4gICAgfVxuXG4gICAgZGF0YSA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwRXZlbnQobnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndGFwRXZlbnQnLCB7aXRlbTogdGhpcy5jZWxsSW5mbywgaW5kZXg6IHRoaXMuaW5kZXh9KVxuICAgICAgfSxcbiAgICAgIHRhcE1vcmVFdmVudChudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRlbWl0KCd0YXBNb3JlRXZlbnQnLCB7aXRlbTogdGhpcy5jZWxsSW5mbywgaW5kZXg6IHRoaXMuaW5kZXgsIG9mZnNldFRvcDogbnVtLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgOSArIDQ4fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=