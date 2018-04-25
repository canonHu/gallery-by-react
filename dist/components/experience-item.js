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

var ExperienceItem = function (_wepy$component) {
  _inherits(ExperienceItem, _wepy$component);

  function ExperienceItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExperienceItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExperienceItem.__proto__ || Object.getPrototypeOf(ExperienceItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      item: Object
    }, _this.data = {}, _this.computed = {
      getImageWidth: function getImageWidth() {
        var count = 4;
        var space = 20;
        var lastImage = 9;
        return (this.width - count * space - lastImage) / 3;
      }
    }, _this.methods = {
      clickedSimpleItem: function clickedSimpleItem(num, evt) {
        this.$emit('clickedSimpleItem', 100);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExperienceItem, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ExperienceItem;
}(_wepy2.default.component);

exports.default = ExperienceItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtaXRlbS5qcyJdLCJuYW1lcyI6WyJFeHBlcmllbmNlSXRlbSIsInByb3BzIiwiaXRlbSIsIk9iamVjdCIsImRhdGEiLCJjb21wdXRlZCIsImdldEltYWdlV2lkdGgiLCJjb3VudCIsInNwYWNlIiwibGFzdEltYWdlIiwid2lkdGgiLCJtZXRob2RzIiwiY2xpY2tlZFNpbXBsZUl0ZW0iLCJudW0iLCJldnQiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTUM7QUFEQSxLLFFBSVJDLEksR0FBTyxFLFFBR1BDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLFlBQUlDLFFBQVEsQ0FBWjtBQUNBLFlBQUlDLFFBQVEsRUFBWjtBQUNBLFlBQUlDLFlBQVksQ0FBaEI7QUFDQSxlQUFPLENBQUMsS0FBS0MsS0FBTCxHQUFhSCxRQUFRQyxLQUFyQixHQUE2QkMsU0FBOUIsSUFBMkMsQ0FBbEQ7QUFDRDtBQU5RLEssUUFTWEUsTyxHQUFVO0FBQ1JDLHVCQURRLDZCQUNVQyxHQURWLEVBQ2VDLEdBRGYsRUFDb0I7QUFDMUIsYUFBS0MsS0FBTCxDQUFXLG1CQUFYLEVBQWdDLEdBQWhDO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRCxDQUVSOzs7O0VBekJ5QyxlQUFLQyxTOztrQkFBNUJoQixjIiwiZmlsZSI6ImV4cGVyaWVuY2UtaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2VJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgaXRlbTogT2JqZWN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldEltYWdlV2lkdGgoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDRcbiAgICAgICAgbGV0IHNwYWNlID0gMjBcbiAgICAgICAgbGV0IGxhc3RJbWFnZSA9IDlcbiAgICAgICAgcmV0dXJuICh0aGlzLndpZHRoIC0gY291bnQgKiBzcGFjZSAtIGxhc3RJbWFnZSkgLyAzXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrZWRTaW1wbGVJdGVtKG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrZWRTaW1wbGVJdGVtJywgMTAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgfVxuIl19