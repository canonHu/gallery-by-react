'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

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
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '编辑空间'
    }, _this.data = {
      store: (0, _wepyRedux.getStore)(),
      initInputText: '',
      canSetCover: false,

      spaceId: -1,
      coverImageUrl: '',
      spaceName: '',
      permissions: ['所有人可见', '仅自己可见'],
      currentPermissions: 0,
      selectPois: []
    }, _this.methods = {
      bindinput: function bindinput(value, cursor) {
        this.spaceName = value.detail.value;
      },
      clickedPermissionsActionSheet: function clickedPermissionsActionSheet() {
        var self = this;
        wx.showActionSheet({
          itemList: this.permissions,
          itemColor: '#333333',
          success: function success(res) {
            self.currentPermissions = res.tapIndex;
            self.$apply();
          },
          fail: function fail(res) {}
        });
      },
      clickedCoverActionSheet: function clickedCoverActionSheet() {
        var self = this;
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            self.coverImageUrl = res.tempFilePaths;
            self.$apply();
            wx.showToast({
              title: '设置成功',
              icon: 'success',
              duration: 2000
            });
          }
        });
      },
      clickedAddButton: function clickedAddButton() {
        this.$navigate('../add-destination/index', {});
      },
      clickedDeletePoiButton: function clickedDeletePoiButton(value, evt) {
        var clickedItem = value.currentTarget.dataset.info;
        this.selectPois = _utils2.default.deleteCity(this.selectPois, clickedItem, function (old, news) {
          return old.poiName === news.poiName;
        });
      },
      clickedCompleteButton: function clickedCompleteButton() {
        if (this.spaceName === '') {
          wx.showToast({
            title: '空间名不能为空～',
            icon: 'none',
            duration: 1500
          });
          return;
        }

        if (this.isEditor && this.coverImageUrl === '') {
          wx.showToast({
            title: '封面不能为空～',
            icon: 'none',
            duration: 1500
          });
          return;
        }

        if (this.selectPois.length <= 0) {
          wx.showToast({
            title: '请至少选择一个目的地～',
            icon: 'none',
            duration: 1500
          });
          return;
        }

        var poiIds = '';
        this.selectPois.forEach(function (item, index) {
          poiIds += ',' + item.id;
        });

        var spaceInfo = {
          spaceName: this.spaceName,
          power: this.currentPermissions, // 权限 0-所有人可见 1-仅自己
          coverImageUrl: this.coverImageUrl, // 封面图片
          poiIds: poiIds, // poiID的集合英文逗号分割的字符串
          userId: this.$parent.globalData.userInfo.userId // 用户id
        };

        if (this.isEditor) {
          spaceInfo.spaceId = this.spaceId;
        }

        this.store.dispatch(_actions.editorNewSpace.apply(this.store, [spaceInfo]));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.canSetCover = options.isEditor === 'true';

      if (options.spaceInfo !== undefined) {
        var spaceInfo = JSON.parse(options.spaceInfo);
        this.spaceName = spaceInfo.spaceName;
        this.currentPermissions = spaceInfo.power; // 权限 0-所有人可见 1-仅自己
        this.coverImageUrl = spaceInfo.coverImageUrl; // 封面图片
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      wx.getStorage({
        key: _utils2.default.cityStorageKey,
        success: function success(res) {
          var callback = function callback(old, news) {
            return old.poiName === news.poiName;
          };
          if (self.selectPois.length === 10) {
            wx.showToast({
              title: '最多关联10个目的地！',
              icon: 'none',
              duration: 1500
            });
          } else {
            self.selectPois = _utils2.default.reContructSelectCitys(self.selectPois, res.data, callback);
          }
          self.$apply();
        },
        complete: function complete() {
          wx.removeStorage({
            key: _utils2.default.cityStorageKey,
            success: function success(res) {}
          });
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/create-space/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN0b3JlIiwiaW5pdElucHV0VGV4dCIsImNhblNldENvdmVyIiwic3BhY2VJZCIsImNvdmVySW1hZ2VVcmwiLCJzcGFjZU5hbWUiLCJwZXJtaXNzaW9ucyIsImN1cnJlbnRQZXJtaXNzaW9ucyIsInNlbGVjdFBvaXMiLCJtZXRob2RzIiwiYmluZGlucHV0IiwidmFsdWUiLCJjdXJzb3IiLCJkZXRhaWwiLCJjbGlja2VkUGVybWlzc2lvbnNBY3Rpb25TaGVldCIsInNlbGYiLCJ3eCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwiaXRlbUNvbG9yIiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwiJGFwcGx5IiwiZmFpbCIsImNsaWNrZWRDb3ZlckFjdGlvblNoZWV0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNsaWNrZWRBZGRCdXR0b24iLCIkbmF2aWdhdGUiLCJjbGlja2VkRGVsZXRlUG9pQnV0dG9uIiwiZXZ0IiwiY2xpY2tlZEl0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZm8iLCJkZWxldGVDaXR5Iiwib2xkIiwibmV3cyIsInBvaU5hbWUiLCJjbGlja2VkQ29tcGxldGVCdXR0b24iLCJpc0VkaXRvciIsImxlbmd0aCIsInBvaUlkcyIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJpZCIsInNwYWNlSW5mbyIsInBvd2VyIiwidXNlcklkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImRpc3BhdGNoIiwiYXBwbHkiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3RvcmFnZSIsImtleSIsImNpdHlTdG9yYWdlS2V5IiwiY2FsbGJhY2siLCJyZUNvbnRydWN0U2VsZWN0Q2l0eXMiLCJjb21wbGV0ZSIsInJlbW92ZVN0b3JhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLGFBQU8sMEJBREY7QUFFTEMscUJBQWUsRUFGVjtBQUdMQyxtQkFBYSxLQUhSOztBQUtMQyxlQUFTLENBQUMsQ0FMTDtBQU1MQyxxQkFBZSxFQU5WO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsbUJBQWEsQ0FBQyxPQUFELEVBQVUsT0FBVixDQVJSO0FBU0xDLDBCQUFvQixDQVRmO0FBVUxDLGtCQUFZO0FBVlAsSyxRQWFQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsS0FERixFQUNTQyxNQURULEVBQ2lCO0FBQ3ZCLGFBQUtQLFNBQUwsR0FBaUJNLE1BQU1FLE1BQU4sQ0FBYUYsS0FBOUI7QUFDRCxPQUhPO0FBSVJHLG1DQUpRLDJDQUl3QjtBQUM5QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0MsZUFBSCxDQUFtQjtBQUNqQkMsb0JBQVUsS0FBS1osV0FERTtBQUVqQmEscUJBQVcsU0FGTTtBQUdqQkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4saUJBQUtSLGtCQUFMLEdBQTBCYyxJQUFJQyxRQUE5QjtBQUNBUCxpQkFBS1EsTUFBTDtBQUNELFdBTmdCO0FBT2pCQyxnQkFBTSxjQUFTSCxHQUFULEVBQWMsQ0FFbkI7QUFUZ0IsU0FBbkI7QUFXRCxPQWpCTztBQWtCUkksNkJBbEJRLHFDQWtCa0I7QUFDeEIsWUFBSVYsT0FBTyxJQUFYO0FBQ0FDLFdB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LEdBQWlCa0QsVUFBVWxELFNBQTNCO0FBQ0EsYUFBS0Usa0JBQUwsR0FBMEJnRCxVQUFVQyxLQUFwQyxDQUhtQyxDQUdPO0FBQzFDLGFBQUtwRCxhQUFMLEdBQXFCbUQsVUFBVW5ELGFBQS9CLENBSm1DLENBSVU7QUFDOUM7QUFDRjs7OzZCQUVRO0FBQ1AsVUFBSVcsT0FBTyxJQUFYO0FBQ0FDLFNBQUdtRCxVQUFILENBQWM7QUFDWkMsYUFBSyxnQkFBTUMsY0FEQztBQUVaakQsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJaUQsV0FBVyxTQUFYQSxRQUFXLENBQUMxQixHQUFELEVBQU1DLElBQU47QUFBQSxtQkFBZUQsSUFBSUUsT0FBSixLQUFnQkQsS0FBS0MsT0FBcEM7QUFBQSxXQUFmO0FBQ0EsY0FBSS9CLEtBQUtQLFVBQUwsQ0FBZ0J5QyxNQUFoQixLQUEyQixFQUEvQixFQUFtQztBQUNqQ2pDLGVBQUdlLFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxhQURJO0FBRVhDLG9CQUFNLE1BRks7QUFHWEMsd0JBQVU7QUFIQyxhQUFiO0FBS0QsV0FORCxNQU1PO0FBQ0xuQixpQkFBS1AsVUFBTCxHQUFrQixnQkFBTStELHFCQUFOLENBQTRCeEQsS0FBS1AsVUFBakMsRUFBNkNhLElBQUl0QixJQUFqRCxFQUF1RHVFLFFBQXZELENBQWxCO0FBQ0Q7QUFDRHZELGVBQUtRLE1BQUw7QUFDRCxTQWRXO0FBZVppRCxrQkFBVSxvQkFBWTtBQUNwQnhELGFBQUd5RCxhQUFILENBQWlCO0FBQ2ZMLGlCQUFLLGdCQUFNQyxjQURJO0FBRWZqRCxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjLENBQ3RCO0FBSGMsV0FBakI7QUFLRDtBQXJCVyxPQUFkO0FBdUJEOzs7O0VBdkpnQyxlQUFLcUQsSTs7a0JBQW5CaEYsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgZWRpdG9yTmV3U3BhY2UgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+keepuumXtCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc3RvcmU6IGdldFN0b3JlKCksXG4gICAgICBpbml0SW5wdXRUZXh0OiAnJyxcbiAgICAgIGNhblNldENvdmVyOiBmYWxzZSxcblxuICAgICAgc3BhY2VJZDogLTEsXG4gICAgICBjb3ZlckltYWdlVXJsOiAnJyxcbiAgICAgIHNwYWNlTmFtZTogJycsXG4gICAgICBwZXJtaXNzaW9uczogWyfmiYDmnInkurrlj6/op4EnLCAn5LuF6Ieq5bex5Y+v6KeBJ10sXG4gICAgICBjdXJyZW50UGVybWlzc2lvbnM6IDAsXG4gICAgICBzZWxlY3RQb2lzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kaW5wdXQodmFsdWUsIGN1cnNvcikge1xuICAgICAgICB0aGlzLnNwYWNlTmFtZSA9IHZhbHVlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRQZXJtaXNzaW9uc0FjdGlvblNoZWV0KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogdGhpcy5wZXJtaXNzaW9ucyxcbiAgICAgICAgICBpdGVtQ29sb3I6ICcjMzMzMzMzJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFBlcm1pc3Npb25zID0gcmVzLnRhcEluZGV4XG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbGlja2VkQ292ZXJBY3Rpb25TaGVldCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgICAgICBzZWxmLmNvdmVySW1hZ2VVcmwgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICforr7nva7miJDlip8nLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIGNsaWNrZWRBZGRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuLi9hZGQtZGVzdGluYXRpb24vaW5kZXgnLCB7fSlcbiAgICAgIH0sXG5cbiAgICAgIGNsaWNrZWREZWxldGVQb2lCdXR0b24odmFsdWUsIGV2dCkge1xuICAgICAgICBsZXQgY2xpY2tlZEl0ZW0gPSB2YWx1ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5mb1xuICAgICAgICB0aGlzLnNlbGVjdFBvaXMgPSB1dGlscy5kZWxldGVDaXR5KHRoaXMuc2VsZWN0UG9pcywgY2xpY2tlZEl0ZW0sIChvbGQsIG5ld3MpID0+IG9sZC5wb2lOYW1lID09PSBuZXdzLnBvaU5hbWUpXG4gICAgICB9LFxuXG4gICAgICBjbGlja2VkQ29tcGxldGVCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNwYWNlTmFtZSA9PT0gJycpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfnqbrpl7TlkI3kuI3og73kuLrnqbrvvZ4nLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IgJiYgdGhpcy5jb3ZlckltYWdlVXJsID09PSAnJykge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WwgemdouS4jeiDveS4uuepuu+9nicsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RQb2lzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6K+36Iez5bCR6YCJ5oup5LiA5Liq55uu55qE5Zyw772eJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb2lJZHMgPSAnJ1xuICAgICAgICB0aGlzLnNlbGVjdFBvaXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBwb2lJZHMgKz0gYCwke2l0ZW0uaWR9YFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzcGFjZUluZm8gPSB7XG4gICAgICAgICAgc3BhY2VOYW1lOiB0aGlzLnNwYWNlTmFtZSxcbiAgICAgICAgICBwb3dlcjogdGhpcy5jdXJyZW50UGVybWlzc2lvbnMsIC8vIOadg+mZkCAwLeaJgOacieS6uuWPr+ingSAxLeS7heiHquW3sVxuICAgICAgICAgIGNvdmVySW1hZ2VVcmw6IHRoaXMuY292ZXJJbWFnZVVybCwgLy8g5bCB6Z2i5Zu+54mHXG4gICAgICAgICAgcG9pSWRzOiBwb2lJZHMsIC8vIHBvaUlE55qE6ZuG5ZCI6Iux5paH6YCX5Y+35YiG5Ymy55qE5a2X56ym5LiyXG4gICAgICAgICAgdXNlcklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby51c2VySWQgLy8g55So5oi3aWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdG9yKSB7XG4gICAgICAgICAgc3BhY2VJbmZvLnNwYWNlSWQgPSB0aGlzLnNwYWNlSWRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goZWRpdG9yTmV3U3BhY2UuYXBwbHkodGhpcy5zdG9yZSwgW3NwYWNlSW5mb10pKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLmNhblNldENvdmVyID0gKG9wdGlvbnMuaXNFZGl0b3IgPT09ICd0cnVlJylcblxuICAgICAgaWYgKG9wdGlvbnMuc3BhY2VJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IEpTT04ucGFyc2Uob3B0aW9ucy5zcGFjZUluZm8pXG4gICAgICAgIHRoaXMuc3BhY2VOYW1lID0gc3BhY2VJbmZvLnNwYWNlTmFtZVxuICAgICAgICB0aGlzLmN1cnJlbnRQZXJtaXNzaW9ucyA9IHNwYWNlSW5mby5wb3dlciAvLyDmnYPpmZAgMC3miYDmnInkurrlj6/op4EgMS3ku4Xoh6rlt7FcbiAgICAgICAgdGhpcy5jb3ZlckltYWdlVXJsID0gc3BhY2VJbmZvLmNvdmVySW1hZ2VVcmwgLy8g5bCB6Z2i5Zu+54mHXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiB1dGlscy5jaXR5U3RvcmFnZUtleSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgbGV0IGNhbGxiYWNrID0gKG9sZCwgbmV3cykgPT4gb2xkLnBvaU5hbWUgPT09IG5ld3MucG9pTmFtZVxuICAgICAgICAgIGlmIChzZWxmLnNlbGVjdFBvaXMubGVuZ3RoID09PSAxMCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmnIDlpJrlhbPogZQxMOS4quebrueahOWcsO+8gScsXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0UG9pcyA9IHV0aWxzLnJlQ29udHJ1Y3RTZWxlY3RDaXR5cyhzZWxmLnNlbGVjdFBvaXMsIHJlcy5kYXRhLCBjYWxsYmFjaylcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiB1dGlscy5jaXR5U3RvcmFnZUtleSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=