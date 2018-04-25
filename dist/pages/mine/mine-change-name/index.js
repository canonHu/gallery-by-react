'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../../store/actions/index.js');

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
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '修改昵称',
      avigationBarBackgroundColor: '#ffffff'
    }, _this.data = {
      name: '',
      userId: 0,
      nickName: '',
      store: (0, _wepyRedux.getStore)()
    }, _this.methods = {
      getNewName: function getNewName() {
        var payload = {
          nickname: this.name,
          userId: this.userId
        };
        var len = this.name.length;
        if (len > 16) {
          wx.showToast({
            title: '昵称长度不能超过16个字',
            icon: 'none',
            duration: 2000
          });
        } else if (len < 1) {
          wx.showToast({
            title: '请输入昵称',
            icon: 'none',
            duration: 2000
          });
        } else {
          this.store.dispatch(_actions.changeMineName.apply(this.store, [payload])).then(function (res) {
            wx.navigateBack();
          });
        }
      },
      deleteName: function deleteName() {
        this.name = '';
      },
      changeNick: function changeNick(e) {
        this.name = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.name = options.name;
      this.userId = options.userId;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine/mine-change-name/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJhdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwibmFtZSIsInVzZXJJZCIsIm5pY2tOYW1lIiwic3RvcmUiLCJtZXRob2RzIiwiZ2V0TmV3TmFtZSIsInBheWxvYWQiLCJuaWNrbmFtZSIsImxlbiIsImxlbmd0aCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJkaXNwYXRjaCIsImFwcGx5IiwidGhlbiIsInJlcyIsIm5hdmlnYXRlQmFjayIsImRlbGV0ZU5hbWUiLCJjaGFuZ2VOaWNrIiwiZSIsImRldGFpbCIsInZhbHVlIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0IsTUFGakI7QUFHUEMsbUNBQTZCO0FBSHRCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLENBRkg7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxhQUFPO0FBSkYsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCxZQUFNQyxVQUFVO0FBQ2RDLG9CQUFVLEtBQUtQLElBREQ7QUFFZEMsa0JBQVEsS0FBS0E7QUFGQyxTQUFoQjtBQUlBLFlBQUlPLE1BQU0sS0FBS1IsSUFBTCxDQUFVUyxNQUFwQjtBQUNBLFlBQUlELE1BQU0sRUFBVixFQUFjO0FBQ1pFLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxjQURJO0FBRVhDLGtCQUFNLE1BRks7QUFHWEMsc0JBQVU7QUFIQyxXQUFiO0FBS0QsU0FORCxNQU1PLElBQUlOLE1BQU0sQ0FBVixFQUFhO0FBQ2xCRSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sT0FESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtELFNBTk0sTUFNQTtBQUNMLGVBQUtYLEtBQUwsQ0FDR1ksUUFESCxDQUNZLHdCQUFlQyxLQUFmLENBQXFCLEtBQUtiLEtBQTFCLEVBQWlDLENBQUNHLE9BQUQsQ0FBakMsQ0FEWixFQUN5RFcsSUFEekQsQ0FDOEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ25FUixlQUFHUyxZQUFIO0FBQ0QsV0FISDtBQUlEO0FBQ0YsT0F6Qk87QUEyQlJDLGdCQTNCUSx3QkEyQks7QUFDWCxhQUFLcEIsSUFBTCxHQUFZLEVBQVo7QUFDRCxPQTdCTztBQStCUnFCLGdCQS9CUSxzQkErQkdDLENBL0JILEVBK0JNO0FBQ1osYUFBS3RCLElBQUwsR0FBWXNCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDtBQWpDTyxLOzs7OzsyQkFvQ0hDLE8sRUFBUztBQUNkLFdBQUt6QixJQUFMLEdBQVl5QixRQUFRekIsSUFBcEI7QUFDQSxXQUFLQyxNQUFMLEdBQWN3QixRQUFReEIsTUFBdEI7QUFDRDs7OztFQXJEZ0MsZUFBS3lCLEk7O2tCQUFuQmhDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgZ2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgeyBjaGFuZ2VNaW5lTmFtZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S/ruaUueaYteensCcsXG4gICAgICBhdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHVzZXJJZDogMCxcbiAgICAgIG5pY2tOYW1lOiAnJyxcbiAgICAgIHN0b3JlOiBnZXRTdG9yZSgpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdldE5ld05hbWUoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgbmlja25hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubmFtZS5sZW5ndGhcbiAgICAgICAgaWYgKGxlbiA+IDE2KSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pi156ew6ZW/5bqm5LiN6IO96LaF6L+HMTbkuKrlrZcnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGxlbiA8IDEpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmmLXnp7AnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgICAgIC5kaXNwYXRjaChjaGFuZ2VNaW5lTmFtZS5hcHBseSh0aGlzLnN0b3JlLCBbcGF5bG9hZF0pKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGRlbGV0ZU5hbWUoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICcnXG4gICAgICB9LFxuXG4gICAgICBjaGFuZ2VOaWNrKGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lXG4gICAgICB0aGlzLnVzZXJJZCA9IG9wdGlvbnMudXNlcklkXG4gICAgfVxuICB9XG4iXX0=