'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布旅行心得',
      navigationBarTextStyle: 'black',
      navigationBarBackground: '#ffffff'
    }, _this.component = {}, _this.data = {
      type: '',
      showIconList: [],
      currentDay: '',
      currentWeek: '',
      currentMon: ''
    }, _this.methods = {
      clickClose: function clickClose() {
        this.$back();
      },
      clickItem: function clickItem(url) {
        this.$redirect(url, { type: this.type });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(opts) {
      this.type = opts.type;
      if (opts.type === 'square') {
        this.showIconList = _utils2.default.squareIconList;
      } else {
        this.showIconList = _utils2.default.spaceIconLit;
      }
      var date = new Date();
      this.currentDay = date.getDate();
      this.currentWeek = _utils2.default.getGreateWeek(date);
      this.currentMon = _utils2.default.getMonthYear(date);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/pop/content-post/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZCIsImNvbXBvbmVudCIsImRhdGEiLCJ0eXBlIiwic2hvd0ljb25MaXN0IiwiY3VycmVudERheSIsImN1cnJlbnRXZWVrIiwiY3VycmVudE1vbiIsIm1ldGhvZHMiLCJjbGlja0Nsb3NlIiwiJGJhY2siLCJjbGlja0l0ZW0iLCJ1cmwiLCIkcmVkaXJlY3QiLCJvcHRzIiwic3F1YXJlSWNvbkxpc3QiLCJzcGFjZUljb25MaXQiLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRHcmVhdGVXZWVrIiwiZ2V0TW9udGhZZWFyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsUUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLCtCQUF5QjtBQUhsQixLLFFBTVRDLFMsR0FBWSxFLFFBR1pDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsb0JBQWMsRUFGVDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLG1CQUFhLEVBSlI7QUFLTEMsa0JBQVk7QUFMUCxLLFFBcUJQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCxhQUFLQyxLQUFMO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlFQyxHQUpGLEVBSU87QUFDYixhQUFLQyxTQUFMLENBQWVELEdBQWYsRUFBb0IsRUFBQ1QsTUFBTSxLQUFLQSxJQUFaLEVBQXBCO0FBQ0Q7QUFOTyxLOzs7OzsyQkFiRlcsSSxFQUFNO0FBQ1osV0FBS1gsSUFBTCxHQUFZVyxLQUFLWCxJQUFqQjtBQUNBLFVBQUlXLEtBQUtYLElBQUwsS0FBYyxRQUFsQixFQUE0QjtBQUMxQixhQUFLQyxZQUFMLEdBQW9CLGdCQUFNVyxjQUExQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtYLFlBQUwsR0FBb0IsZ0JBQU1ZLFlBQTFCO0FBQ0Q7QUFDRCxVQUFJQyxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBLFdBQUtiLFVBQUwsR0FBa0JZLEtBQUtFLE9BQUwsRUFBbEI7QUFDQSxXQUFLYixXQUFMLEdBQW1CLGdCQUFNYyxhQUFOLENBQW9CSCxJQUFwQixDQUFuQjtBQUNBLFdBQUtWLFVBQUwsR0FBa0IsZ0JBQU1jLFlBQU4sQ0FBbUJKLElBQW5CLENBQWxCO0FBQ0Q7Ozs7RUE3QmdDLGVBQUtLLEk7O2tCQUFuQjFCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+aXheihjOW/g+W+lycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmQ6ICcjZmZmZmZmJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudCA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdHlwZTogJycsXG4gICAgICBzaG93SWNvbkxpc3Q6IFtdLFxuICAgICAgY3VycmVudERheTogJycsXG4gICAgICBjdXJyZW50V2VlazogJycsXG4gICAgICBjdXJyZW50TW9uOiAnJ1xuICAgIH1cblxuICAgIG9uTG9hZCAob3B0cykge1xuICAgICAgdGhpcy50eXBlID0gb3B0cy50eXBlXG4gICAgICBpZiAob3B0cy50eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgICB0aGlzLnNob3dJY29uTGlzdCA9IHV0aWxzLnNxdWFyZUljb25MaXN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dJY29uTGlzdCA9IHV0aWxzLnNwYWNlSWNvbkxpdFxuICAgICAgfVxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICB0aGlzLmN1cnJlbnREYXkgPSBkYXRlLmdldERhdGUoKVxuICAgICAgdGhpcy5jdXJyZW50V2VlayA9IHV0aWxzLmdldEdyZWF0ZVdlZWsoZGF0ZSlcbiAgICAgIHRoaXMuY3VycmVudE1vbiA9IHV0aWxzLmdldE1vbnRoWWVhcihkYXRlKVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLiRiYWNrKClcbiAgICAgIH0sXG4gICAgICBjbGlja0l0ZW0odXJsKSB7XG4gICAgICAgIHRoaXMuJHJlZGlyZWN0KHVybCwge3R5cGU6IHRoaXMudHlwZX0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=