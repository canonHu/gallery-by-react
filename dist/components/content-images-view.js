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

var ContentImagesView = function (_wepy$component) {
  _inherits(ContentImagesView, _wepy$component);

  function ContentImagesView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContentImagesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentImagesView.__proto__ || Object.getPrototypeOf(ContentImagesView)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      sepSize: Number,
      currentIndex: Number,
      imgs: Object
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      clickedDeleteImgButton: function clickedDeleteImgButton(num, evt) {
        this.$emit('deleteImg', { currentIndex: this.currentIndex, imgIndex: num.currentTarget.dataset.index });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContentImagesView, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ContentImagesView;
}(_wepy2.default.component);

exports.default = ContentImagesView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtaW1hZ2VzLXZpZXcuanMiXSwibmFtZXMiOlsiQ29udGVudEltYWdlc1ZpZXciLCJwcm9wcyIsInNlcFNpemUiLCJOdW1iZXIiLCJjdXJyZW50SW5kZXgiLCJpbWdzIiwiT2JqZWN0IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNsaWNrZWREZWxldGVJbWdCdXR0b24iLCJudW0iLCJldnQiLCIkZW1pdCIsImltZ0luZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVNDLE1BREg7QUFFTkMsb0JBQWNELE1BRlI7QUFHTkUsWUFBTUM7QUFIQSxLLFFBTVJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyw0QkFEUSxrQ0FDZUMsR0FEZixFQUNvQkMsR0FEcEIsRUFDeUI7QUFDL0IsYUFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0IsRUFBQ1QsY0FBYyxLQUFLQSxZQUFwQixFQUFrQ1UsVUFBVUgsSUFBSUksYUFBSixDQUFrQkMsT0FBbEIsQ0FBMEJDLEtBQXRFLEVBQXhCO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRCxDQUFFOzs7O0VBakJrQyxlQUFLQyxTOztrQkFBL0JsQixpQiIsImZpbGUiOiJjb250ZW50LWltYWdlcy12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEltYWdlc1ZpZXcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBzZXBTaXplOiBOdW1iZXIsXG4gICAgICBjdXJyZW50SW5kZXg6IE51bWJlcixcbiAgICAgIGltZ3M6IE9iamVjdFxuICAgIH1cblxuICAgIGRhdGEgPSB7fVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNsaWNrZWREZWxldGVJbWdCdXR0b24obnVtLCBldnQpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnZGVsZXRlSW1nJywge2N1cnJlbnRJbmRleDogdGhpcy5jdXJyZW50SW5kZXgsIGltZ0luZGV4OiBudW0uY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=