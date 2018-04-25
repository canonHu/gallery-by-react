'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Releaseitems = function (_wepy$component) {
  _inherits(Releaseitems, _wepy$component);

  function Releaseitems() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Releaseitems);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Releaseitems.__proto__ || Object.getPrototypeOf(Releaseitems)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: Object,
      cancelFlag: Boolean,
      twoWay: true,
      index: Number,
      fromSquare: Boolean
    }, _this.methods = {
      tapEvent: function tapEvent() {
        if (this.cancelFlag) {
          this.$emit('tapEvent', {
            flag: this.items.flag,
            index: this.index
          });
        } else {
          this.$emit('tapEvent', {
            item: this.items,
            index: this.index
          });
        }
      },
      tapMoreEvent: function tapMoreEvent(num, evt) {
        this.$emit('tapMoreEvent', {
          item: this.items,
          index: this.index,
          offsetTop: num.currentTarget.offsetTop + 9 + 48
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Releaseitems;
}(_wepy2.default.component);

exports.default = Releaseitems;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UtaXRlbS5qcyJdLCJuYW1lcyI6WyJSZWxlYXNlaXRlbXMiLCJwcm9wcyIsIml0ZW1zIiwiT2JqZWN0IiwiY2FuY2VsRmxhZyIsIkJvb2xlYW4iLCJ0d29XYXkiLCJpbmRleCIsIk51bWJlciIsImZyb21TcXVhcmUiLCJtZXRob2RzIiwidGFwRXZlbnQiLCIkZW1pdCIsImZsYWciLCJpdGVtIiwidGFwTW9yZUV2ZW50IiwibnVtIiwiZXZ0Iiwib2Zmc2V0VG9wIiwiY3VycmVudFRhcmdldCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DLE1BREQ7QUFFTkMsa0JBQVlDLE9BRk47QUFHTkMsY0FBUSxJQUhGO0FBSU5DLGFBQU9DLE1BSkQ7QUFLTkMsa0JBQVlKO0FBTE4sSyxRQVFSSyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNULFlBQUksS0FBS1AsVUFBVCxFQUFxQjtBQUNuQixlQUFLUSxLQUFMLENBQVcsVUFBWCxFQUF1QjtBQUNyQkMsa0JBQU0sS0FBS1gsS0FBTCxDQUFXVyxJQURJO0FBRXJCTixtQkFBTyxLQUFLQTtBQUZTLFdBQXZCO0FBSUQsU0FMRCxNQUtPO0FBQ0wsZUFBS0ssS0FBTCxDQUFXLFVBQVgsRUFBdUI7QUFDckJFLGtCQUFNLEtBQUtaLEtBRFU7QUFFckJLLG1CQUFPLEtBQUtBO0FBRlMsV0FBdkI7QUFJRDtBQUNGLE9BYk87QUFlUlEsa0JBZlEsd0JBZUtDLEdBZkwsRUFlVUMsR0FmVixFQWVlO0FBQ3JCLGFBQUtMLEtBQUwsQ0FBVyxjQUFYLEVBQTJCO0FBQ3pCRSxnQkFBTSxLQUFLWixLQURjO0FBRXpCSyxpQkFBTyxLQUFLQSxLQUZhO0FBR3pCVyxxQkFBV0YsSUFBSUcsYUFBSixDQUFrQkQsU0FBbEIsR0FBOEIsQ0FBOUIsR0FBa0M7QUFIcEIsU0FBM0I7QUFLRDtBQXJCTyxLOzs7O0VBVDhCLGVBQUtFLFM7O2tCQUExQnBCLFkiLCJmaWxlIjoicmVsZWFzZS1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZWl0ZW1zIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgaXRlbXM6IE9iamVjdCxcbiAgICAgIGNhbmNlbEZsYWc6IEJvb2xlYW4sXG4gICAgICB0d29XYXk6IHRydWUsXG4gICAgICBpbmRleDogTnVtYmVyLFxuICAgICAgZnJvbVNxdWFyZTogQm9vbGVhblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXBFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuY2VsRmxhZykge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcEV2ZW50Jywge1xuICAgICAgICAgICAgZmxhZzogdGhpcy5pdGVtcy5mbGFnLFxuICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhcEV2ZW50Jywge1xuICAgICAgICAgICAgaXRlbTogdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdGFwTW9yZUV2ZW50KG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3RhcE1vcmVFdmVudCcsIHtcbiAgICAgICAgICBpdGVtOiB0aGlzLml0ZW1zLFxuICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgIG9mZnNldFRvcDogbnVtLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgOSArIDQ4XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=