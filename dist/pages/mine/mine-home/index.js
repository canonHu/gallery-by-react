'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _mine = require('./../../../store/types/mine.js');

var _mineHomeHead = require('./../../../components/mine/mine-home-head.js');

var _mineHomeHead2 = _interopRequireDefault(_mineHomeHead);

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
      avigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '我的'
    }, _this.$repeat = {}, _this.$props = { "mineHomeHead": { "xmlns:v-bind": "", "v-bind:name.sync": "name", "v-bind:userInfo.sync": "userInfo", "xmlns:v-on": "" } }, _this.$events = { "mineHomeHead": { "v-on:toChangeName": "changeName" } }, _this.components = {
      mineHomeHead: _mineHomeHead2.default
    }, _this.data = {
      userInfo: {
        nickName: '加载中...'
      },
      name: '加载中...',
      store: (0, _wepyRedux.getStore)(),
      userId: 0
    }, _this.methods = {
      mineRelease: function mineRelease(num, evt) {
        this.getData('release');
        this.$navigate('../mine-release/index', {});
      },
      mineCollection: function mineCollection(num, evt) {
        this.getData('collection');
        this.$navigate('../mine-collection/index', {});
      },
      changeName: function changeName(num, evt) {
        this.$navigate('../mine-change-name/index', {
          name: this.name,
          userId: this.userId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getData',
    value: function getData(name) {
      var payLoads = {
        openId: '123',
        limit: 10,
        page: 1
      };
      this.store.dispatch({
        type: _mine.RES_DATA,
        name: name,
        payLoads: payLoads
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var state = this.store.getState();
      var nickName = state.mine.nickName;
      var userInfo = state.request.userInfo;
      if (nickName) {
        if (nickName !== this.name) {
          this.name = nickName;
          wx.showToast({
            title: '修改成功',
            icon: 'none',
            duration: 2000
          });
        }
      } else {
        if (userInfo) {
          this.userInfo = userInfo;
          this.userId = userInfo.userId;
          this.name = userInfo.nickname;
        } else {
          wx.showToast({
            title: '数据获取失败',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine/mine-home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtaW5lSG9tZUhlYWQiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm5hbWUiLCJzdG9yZSIsInVzZXJJZCIsIm1ldGhvZHMiLCJtaW5lUmVsZWFzZSIsIm51bSIsImV2dCIsImdldERhdGEiLCIkbmF2aWdhdGUiLCJtaW5lQ29sbGVjdGlvbiIsImNoYW5nZU5hbWUiLCJwYXlMb2FkcyIsIm9wZW5JZCIsImxpbWl0IiwicGFnZSIsImRpc3BhdGNoIiwidHlwZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtaW5lIiwicmVxdWVzdCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxtQ0FBNkIsU0FEdEI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBTVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLE1BQXRDLEVBQTZDLHdCQUF1QixVQUFwRSxFQUErRSxjQUFhLEVBQTVGLEVBQWhCLEUsUUFDVEMsTyxHQUFVLEVBQUMsZ0JBQWUsRUFBQyxxQkFBb0IsWUFBckIsRUFBaEIsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BREw7QUFJTEMsWUFBTSxRQUpEO0FBS0xDLGFBQU8sMEJBTEY7QUFNTEMsY0FBUTtBQU5ILEssUUFTUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxHQURKLEVBQ1NDLEdBRFQsRUFDYztBQUNwQixhQUFLQyxPQUFMLENBQWEsU0FBYjtBQUNBLGFBQUtDLFNBQUwsQ0FBZSx1QkFBZixFQUF3QyxFQUF4QztBQUNELE9BSk87QUFNUkMsb0JBTlEsMEJBTU9KLEdBTlAsRUFNWUMsR0FOWixFQU1pQjtBQUN2QixhQUFLQyxPQUFMLENBQWEsWUFBYjtBQUNBLGFBQUtDLFNBQUwsQ0FBZSwwQkFBZixFQUEyQyxFQUEzQztBQUNELE9BVE87QUFXUkUsZ0JBWFEsc0JBV0dMLEdBWEgsRUFXUUMsR0FYUixFQVdhO0FBQ25CLGFBQUtFLFNBQUwsQ0FBZSwyQkFBZixFQUE0QztBQUMxQ1IsZ0JBQU0sS0FBS0EsSUFEK0I7QUFFMUNFLGtCQUFRLEtBQUtBO0FBRjZCLFNBQTVDO0FBSUQ7QUFoQk8sSzs7Ozs7NEJBbUJGRixJLEVBQU07QUFDWixVQUFJVyxXQUFXO0FBQ2JDLGdCQUFRLEtBREs7QUFFYkMsZUFBTyxFQUZNO0FBR2JDLGNBQU07QUFITyxPQUFmO0FBS0EsV0FBS2IsS0FBTCxDQUFXYyxRQUFYLENBQW9CO0FBQ2xCQyw0QkFEa0I7QUFFbEJoQixrQkFGa0I7QUFHbEJXO0FBSGtCLE9BQXBCO0FBS0Q7Ozs2QkFFUTtBQUNQLFVBQU1NLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV2lCLFFBQVgsRUFBZDtBQUNBLFVBQU1uQixXQUFXa0IsTUFBTUUsSUFBTixDQUFXcEIsUUFBNUI7QUFDQSxVQUFNRCxXQUFXbUIsTUFBTUcsT0FBTixDQUFjdEIsUUFBL0I7QUFDQSxVQUFJQyxRQUFKLEVBQWM7QUFDWixZQUFJQSxhQUFhLEtBQUtDLElBQXRCLEVBQTRCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUQsUUFBWjtBQUNBc0IsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLE1BREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRDtBQUNGLE9BVEQsTUFTTztBQUNMLFlBQUkzQixRQUFKLEVBQWM7QUFDWixlQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGVBQUtJLE1BQUwsR0FBY0osU0FBU0ksTUFBdkI7QUFDQSxlQUFLRixJQUFMLEdBQVlGLFNBQVM0QixRQUFyQjtBQUNELFNBSkQsTUFJTztBQUNMTCxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sUUFESTtBQUVYQyxrQkFBTSxNQUZLO0FBR1hDLHNCQUFVO0FBSEMsV0FBYjtBQUtEO0FBQ0Y7QUFDRjs7OztFQWpGZ0MsZUFBS1gsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBnZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IFJFU19EQVRBIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdHlwZXMvbWluZSdcbiAgaW1wb3J0IE1pbmVIb21lSGVhZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21pbmUvbWluZS1ob21lLWhlYWQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIGF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm1pbmVIb21lSGVhZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmFtZS5zeW5jXCI6XCJuYW1lXCIsXCJ2LWJpbmQ6dXNlckluZm8uc3luY1wiOlwidXNlckluZm9cIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJtaW5lSG9tZUhlYWRcIjp7XCJ2LW9uOnRvQ2hhbmdlTmFtZVwiOlwiY2hhbmdlTmFtZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbWluZUhvbWVIZWFkOiBNaW5lSG9tZUhlYWRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLicsXG4gICAgICBzdG9yZTogZ2V0U3RvcmUoKSxcbiAgICAgIHVzZXJJZDogMFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBtaW5lUmVsZWFzZShudW0sIGV2dCkge1xuICAgICAgICB0aGlzLmdldERhdGEoJ3JlbGVhc2UnKVxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vbWluZS1yZWxlYXNlL2luZGV4Jywge30pXG4gICAgICB9LFxuXG4gICAgICBtaW5lQ29sbGVjdGlvbihudW0sIGV2dCkge1xuICAgICAgICB0aGlzLmdldERhdGEoJ2NvbGxlY3Rpb24nKVxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vbWluZS1jb2xsZWN0aW9uL2luZGV4Jywge30pXG4gICAgICB9LFxuXG4gICAgICBjaGFuZ2VOYW1lKG51bSwgZXZ0KSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuLi9taW5lLWNoYW5nZS1uYW1lL2luZGV4Jywge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0YShuYW1lKSB7XG4gICAgICBsZXQgcGF5TG9hZHMgPSB7XG4gICAgICAgIG9wZW5JZDogJzEyMycsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgcGFnZTogMVxuICAgICAgfVxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFU19EQVRBLFxuICAgICAgICBuYW1lLFxuICAgICAgICBwYXlMb2Fkc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgY29uc3Qgbmlja05hbWUgPSBzdGF0ZS5taW5lLm5pY2tOYW1lXG4gICAgICBjb25zdCB1c2VySW5mbyA9IHN0YXRlLnJlcXVlc3QudXNlckluZm9cbiAgICAgIGlmIChuaWNrTmFtZSkge1xuICAgICAgICBpZiAobmlja05hbWUgIT09IHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IG5pY2tOYW1lXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5L+u5pS55oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySW5mby51c2VySWRcbiAgICAgICAgICB0aGlzLm5hbWUgPSB1c2VySW5mby5uaWNrbmFtZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aVsOaNruiOt+WPluWksei0pScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==