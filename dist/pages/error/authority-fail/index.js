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
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '无授权'
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      clickedSettingButton: function clickedSettingButton() {
        wx.openSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo'] === true) {
              wx.showToast({
                title: '授权成功',
                icon: 'success',
                duration: 2000
              });
              wx.switchTab({ url: '../../../pages/space/space-home/index' });
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/error/authority-fail/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNsaWNrZWRTZXR0aW5nQnV0dG9uIiwid3giLCJvcGVuU2V0dGluZyIsInN1Y2Nlc3MiLCJyZXMiLCJhdXRoU2V0dGluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwic3dpdGNoVGFiIiwidXJsIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQU1UQyxJLEdBQU8sRSxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFFUkMsMEJBRlEsa0NBRWU7QUFDckJDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxtQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGdCQUFJQSxJQUFJQyxXQUFKLENBQWdCLGdCQUFoQixNQUFzQyxJQUExQyxFQUFnRDtBQUM5Q0osaUJBQUdLLFNBQUgsQ0FBYTtBQUNYQyx1QkFBTyxNQURJO0FBRVhDLHNCQUFNLFNBRks7QUFHWEMsMEJBQVU7QUFIQyxlQUFiO0FBS0FSLGlCQUFHUyxTQUFILENBQWEsRUFBQ0MsS0FBSyx1Q0FBTixFQUFiO0FBQ0Q7QUFDRjtBQVZZLFNBQWY7QUFZRDtBQWZPLEs7Ozs7OzJCQWtCSEMsTyxFQUFTLENBRWY7Ozs7RUFqQ2dDLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aXoOaOiOadgydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgICAgY2xpY2tlZFNldHRpbmdCdXR0b24oKSB7XG4gICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmjojmnYPmiJDlip8nLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy4uLy4uLy4uL3BhZ2VzL3NwYWNlL3NwYWNlLWhvbWUvaW5kZXgnfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcblxuICAgIH1cbiAgfVxuIl19