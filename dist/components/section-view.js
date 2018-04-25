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

var SectionView = function (_wepy$component) {
  _inherits(SectionView, _wepy$component);

  function SectionView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SectionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SectionView.__proto__ || Object.getPrototypeOf(SectionView)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      showClear: Boolean,
      title: String,
      dataList: Array,
      isPoiList: Boolean,
      dataType: String
    }, _this.data = {}, _this.methods = {
      clickedClearLocalButton: function clickedClearLocalButton() {
        this.dataList = [];
        this.$emit('clickedClearLocalButton', {});
      },
      clickedCurrentPoi: function clickedCurrentPoi(item, event) {
        var index = item.currentTarget.dataset.index;
        this.$emit('addHistorySelect', { selected: this.dataList[index], type: this.dataType });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SectionView, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log(this.dataList);
    }
  }]);

  return SectionView;
}(_wepy2.default.component);

exports.default = SectionView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tdmlldy5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uVmlldyIsInByb3BzIiwic2hvd0NsZWFyIiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwiZGF0YUxpc3QiLCJBcnJheSIsImlzUG9pTGlzdCIsImRhdGFUeXBlIiwiZGF0YSIsIm1ldGhvZHMiLCJjbGlja2VkQ2xlYXJMb2NhbEJ1dHRvbiIsIiRlbWl0IiwiY2xpY2tlZEN1cnJlbnRQb2kiLCJpdGVtIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0ZWQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVdDLE9BREw7QUFFTkMsYUFBT0MsTUFGRDtBQUdOQyxnQkFBVUMsS0FISjtBQUlOQyxpQkFBV0wsT0FKTDtBQUtOTSxnQkFBVUo7QUFMSixLLFFBUVJLLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyw2QkFEUSxxQ0FDa0I7QUFDeEIsYUFBS04sUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUtPLEtBQUwsQ0FBVyx5QkFBWCxFQUFzQyxFQUF0QztBQUNELE9BSk87QUFLUkMsdUJBTFEsNkJBS1VDLElBTFYsRUFLZ0JDLEtBTGhCLEVBS3VCO0FBQzdCLFlBQUlDLFFBQVFGLEtBQUtHLGFBQUwsQ0FBbUJDLE9BQW5CLENBQTJCRixLQUF2QztBQUNBLGFBQUtKLEtBQUwsQ0FBVyxrQkFBWCxFQUErQixFQUFDTyxVQUFVLEtBQUtkLFFBQUwsQ0FBY1csS0FBZCxDQUFYLEVBQWlDSSxNQUFNLEtBQUtaLFFBQTVDLEVBQS9CO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFXRCxDQUNSOzs7NkJBRVE7QUFDUGEsY0FBUUMsR0FBUixDQUFZLEtBQUtqQixRQUFqQjtBQUNEOzs7O0VBM0JzQyxlQUFLa0IsUzs7a0JBQXpCeEIsVyIsImZpbGUiOiJzZWN0aW9uLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uVmlldyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHNob3dDbGVhcjogQm9vbGVhbixcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICBkYXRhTGlzdDogQXJyYXksXG4gICAgICBpc1BvaUxpc3Q6IEJvb2xlYW4sXG4gICAgICBkYXRhVHlwZTogU3RyaW5nXG4gICAgfVxuXG4gICAgZGF0YSA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tlZENsZWFyTG9jYWxCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXVxuICAgICAgICB0aGlzLiRlbWl0KCdjbGlja2VkQ2xlYXJMb2NhbEJ1dHRvbicsIHt9KVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRDdXJyZW50UG9pKGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGl0ZW0uY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgIHRoaXMuJGVtaXQoJ2FkZEhpc3RvcnlTZWxlY3QnLCB7c2VsZWN0ZWQ6IHRoaXMuZGF0YUxpc3RbaW5kZXhdLCB0eXBlOiB0aGlzLmRhdGFUeXBlfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhTGlzdClcbiAgICB9XG4gIH1cbiJdfQ==