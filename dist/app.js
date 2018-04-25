'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/space/space-home/index', 'pages/space/create-space/index', 'pages/space/dynamic-list/index', 'pages/space/space-list/index', 'pages/space/space-detail/index', 'pages/space/add-destination/index', 'pages/space/change-tab/index', 'pages/editor/content-editor/index', 'pages/editor/title-editor/index', 'pages/editor/paragraph-editor/index', 'pages/editor/sort-editor/index', 'pages/square/square-home/index', 'pages/square/square-quote/index', 'pages/mine/mine-home/index', 'pages/mine/mine-release/index', 'pages/mine/mine-collection/index', 'pages/mine/mine-change-name/index', 'pages/error/authority-fail/index', 'pages/pop/content-post/index', 'pages/search/content-search/index', 'pages/article/article-detail/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'white',
        navigationBarTitleText: '空间',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#92979F',
        selectedColor: '#051B28',
        backgroundColor: '#ffffff',
        borderStyle: 'rgba(0,0,0,0.10)',
        position: 'bottom',
        list: [{
          pagePath: 'pages/space/space-home/index',
          text: '空间',
          iconPath: 'images/tn-wx-tab-space.png',
          selectedIconPath: 'images/tn-wx-tab-space-highlight.png'
        }, {
          pagePath: 'pages/square/square-home/index',
          text: '广场',
          iconPath: 'images/tn-wx-tab-square.png',
          selectedIconPath: 'images/tn-wx-tab-square-highlight.png'
        }, {
          pagePath: 'pages/mine/mine-home/index',
          text: '我的',
          iconPath: 'images/tn-wx-tab-mine.png',
          selectedIconPath: 'images/tn-wx-tab-mine-highlight.png'
        }]
      },
      networkTimeout: {
        request: 10000,
        connectSocket: 10000,
        uploadFile: 100000,
        downloadFile: 100000
      },

      debug: true,

      getPhoneNumber: function getPhoneNumber(e) {
        console.log(e.detail.errMsg);
        console.log(e.detail.iv);
        console.log(e.detail.encrypedData);
      }
    };
    _this.globalData = {
      screenHeight: wx.getSystemInfoSync().screenHeight,
      screenWidth: wx.getSystemInfoSync().screenWidth,
      spaceItemWidth: Math.ceil((wx.getSystemInfoSync().screenWidth - 4 * 20 - 8) / 3)
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onHide',
    value: function onHide() {}
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwicG9zaXRpb24iLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwibmV0d29ya1RpbWVvdXQiLCJyZXF1ZXN0IiwiY29ubmVjdFNvY2tldCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJkZWJ1ZyIsImdldFBob25lTnVtYmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJlcnJNc2ciLCJpdiIsImVuY3J5cGVkRGF0YSIsImdsb2JhbERhdGEiLCJzY3JlZW5IZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwic2NyZWVuV2lkdGgiLCJzcGFjZUl0ZW1XaWR0aCIsIk1hdGgiLCJjZWlsIiwidXNlIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBeUZFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF0RmZDLE1Bc0ZlLEdBdEZOO0FBQ1BDLGFBQU8sQ0FFTCw4QkFGSyxFQUdMLGdDQUhLLEVBSUwsZ0NBSkssRUFLTCw4QkFMSyxFQU1MLGdDQU5LLEVBT0wsbUNBUEssRUFRTCw4QkFSSyxFQVVMLG1DQVZLLEVBV0wsaUNBWEssRUFZTCxxQ0FaSyxFQWFMLGdDQWJLLEVBZUwsZ0NBZkssRUFnQkwsaUNBaEJLLEVBa0JMLDRCQWxCSyxFQW1CTCwrQkFuQkssRUFvQkwsa0NBcEJLLEVBcUJMLG1DQXJCSyxFQXVCTCxrQ0F2QkssRUF5QkwsOEJBekJLLEVBMEJMLG1DQTFCSyxFQTRCTCxvQ0E1QkssQ0FEQTtBQStCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsT0FGeEI7QUFHTkMsZ0NBQXdCLElBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQS9CRDtBQXFDUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyx5QkFBaUIsU0FIWDtBQUlOQyxxQkFBYSxrQkFKUDtBQUtOQyxrQkFBVSxRQUxKO0FBTU5DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSw4QkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDRCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBT0o7QUFDRUgsb0JBQVUsZ0NBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSw2QkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLDRCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsMkJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBYkk7QUFOQSxPQXJDRDtBQWdFUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLEtBREs7QUFFZEMsdUJBQWUsS0FGRDtBQUdkQyxvQkFBWSxNQUhFO0FBSWRDLHNCQUFjO0FBSkEsT0FoRVQ7O0FBdUVQQyxhQUFPLElBdkVBOztBQXlFUEMsc0JBQWdCLHdCQUFTQyxDQUFULEVBQVk7QUFDMUJDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsTUFBckI7QUFDQUgsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTRSxFQUFyQjtBQUNBSixnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNHLFlBQXJCO0FBQ0Q7QUE3RU0sS0FzRk07QUFBQSxVQU5mQyxVQU1lLEdBTkY7QUFDWEMsb0JBQWNDLEdBQUdDLGlCQUFILEdBQXVCRixZQUQxQjtBQUVYRyxtQkFBYUYsR0FBR0MsaUJBQUgsR0FBdUJDLFdBRnpCO0FBR1hDLHNCQUFnQkMsS0FBS0MsSUFBTCxDQUFVLENBQUNMLEdBQUdDLGlCQUFILEdBQXVCQyxXQUF2QixHQUFxQyxJQUFJLEVBQXpDLEdBQThDLENBQS9DLElBQW9ELENBQTlEO0FBSEwsS0FNRTs7QUFFYixVQUFLSSxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVUsQ0FDVjs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7NkJBRVEsQ0FDUjs7OzZCQUVRLENBRVI7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05yQix3QkFBUUMsR0FBUixDQUFZb0IsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhIeUIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG5cbiAgICAgICdwYWdlcy9zcGFjZS9zcGFjZS1ob21lL2luZGV4JyxcbiAgICAgICdwYWdlcy9zcGFjZS9jcmVhdGUtc3BhY2UvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3NwYWNlL2R5bmFtaWMtbGlzdC9pbmRleCcsXG4gICAgICAncGFnZXMvc3BhY2Uvc3BhY2UtbGlzdC9pbmRleCcsXG4gICAgICAncGFnZXMvc3BhY2Uvc3BhY2UtZGV0YWlsL2luZGV4JyxcbiAgICAgICdwYWdlcy9zcGFjZS9hZGQtZGVzdGluYXRpb24vaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3NwYWNlL2NoYW5nZS10YWIvaW5kZXgnLFxuXG4gICAgICAncGFnZXMvZWRpdG9yL2NvbnRlbnQtZWRpdG9yL2luZGV4JyxcbiAgICAgICdwYWdlcy9lZGl0b3IvdGl0bGUtZWRpdG9yL2luZGV4JyxcbiAgICAgICdwYWdlcy9lZGl0b3IvcGFyYWdyYXBoLWVkaXRvci9pbmRleCcsXG4gICAgICAncGFnZXMvZWRpdG9yL3NvcnQtZWRpdG9yL2luZGV4JyxcblxuICAgICAgJ3BhZ2VzL3NxdWFyZS9zcXVhcmUtaG9tZS9pbmRleCcsXG4gICAgICAncGFnZXMvc3F1YXJlL3NxdWFyZS1xdW90ZS9pbmRleCcsXG5cbiAgICAgICdwYWdlcy9taW5lL21pbmUtaG9tZS9pbmRleCcsXG4gICAgICAncGFnZXMvbWluZS9taW5lLXJlbGVhc2UvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvbWluZS1jb2xsZWN0aW9uL2luZGV4JyxcbiAgICAgICdwYWdlcy9taW5lL21pbmUtY2hhbmdlLW5hbWUvaW5kZXgnLFxuXG4gICAgICAncGFnZXMvZXJyb3IvYXV0aG9yaXR5LWZhaWwvaW5kZXgnLFxuXG4gICAgICAncGFnZXMvcG9wL2NvbnRlbnQtcG9zdC9pbmRleCcsXG4gICAgICAncGFnZXMvc2VhcmNoL2NvbnRlbnQtc2VhcmNoL2luZGV4JyxcblxuICAgICAgJ3BhZ2VzL2FydGljbGUvYXJ0aWNsZS1kZXRhaWwvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+epuumXtCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzkyOTc5RicsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzA1MUIyOCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclN0eWxlOiAncmdiYSgwLDAsMCwwLjEwKScsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3NwYWNlL3NwYWNlLWhvbWUvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfnqbrpl7QnLFxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RuLXd4LXRhYi1zcGFjZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdG4td3gtdGFiLXNwYWNlLWhpZ2hsaWdodC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3NxdWFyZS9zcXVhcmUtaG9tZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+W5v+WcuicsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdG4td3gtdGFiLXNxdWFyZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdG4td3gtdGFiLXNxdWFyZS1oaWdobGlnaHQucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lL21pbmUtaG9tZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdG4td3gtdGFiLW1pbmUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RuLXd4LXRhYi1taW5lLWhpZ2hsaWdodC5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiAxMDAwMCxcbiAgICAgIGNvbm5lY3RTb2NrZXQ6IDEwMDAwLFxuICAgICAgdXBsb2FkRmlsZTogMTAwMDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiAxMDAwMDBcbiAgICB9LFxuXG4gICAgZGVidWc6IHRydWUsXG5cbiAgICBnZXRQaG9uZU51bWJlcjogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuZXJyTXNnKVxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuaXYpXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5lbmNyeXBlZERhdGEpXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBzY3JlZW5IZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0LFxuICAgIHNjcmVlbldpZHRoOiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoLFxuICAgIHNwYWNlSXRlbVdpZHRoOiBNYXRoLmNlaWwoKHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuV2lkdGggLSA0ICogMjAgLSA4KSAvIDMpXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICB9XG5cbiAgc2xlZXAgKHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgfSwgcyAqIDEwMDApXG4gICAgfSlcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgfVxuXG4gIG9uSGlkZSgpIHtcblxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbn1cbiJdfQ==