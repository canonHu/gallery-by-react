'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _dec, _class;

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _releaseItem = require('./../../../components/release-item.js');

var _releaseItem2 = _interopRequireDefault(_releaseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _wepyRedux.connect)({
  arr: function arr(state) {
    return state.mine.resList;
  }
}, {}), _dec(_class = function (_wepy$page) {
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
      navigationBarTitleText: '我的发布'
    }, _this.$repeat = { "arr": { "com": "releaseitem", "props": "items" } }, _this.$props = { "releaseitem": { "xmlns:v-bind": { "value": "", "for": "arr", "item": "item", "index": "index", "key": "index" }, "v-bind:items.once": { "value": "item", "type": "item", "for": "arr", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "arr", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "arr", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "releaseitem": { "v-on:tapEvent": "changeedit" } }, _this.components = {
      releaseitem: _releaseItem2.default
    }, _this.data = {
      arr: [],
      imageNumber: 0,
      imagesList: []
    }, _this.methods = {
      changeedit: function changeedit(num, evt) {
        this.$navigate('../../article/article-detail/index', {
          id: this.arr[num.index].originId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine/mine-release/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiYXJyIiwic3RhdGUiLCJtaW5lIiwicmVzTGlzdCIsImNvbmZpZyIsImF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmVsZWFzZWl0ZW0iLCJkYXRhIiwiaW1hZ2VOdW1iZXIiLCJpbWFnZXNMaXN0IiwibWV0aG9kcyIsImNoYW5nZWVkaXQiLCJudW0iLCJldnQiLCIkbmF2aWdhdGUiLCJpZCIsImluZGV4Iiwib3JpZ2luSWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFTcUJBLEssV0FQcEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxJQUFOLENBQVdDLE9BQWxCO0FBQ0Q7QUFITSxDQUFSLEVBSUUsRUFKRixDOzs7Ozs7Ozs7Ozs7OztvTEFRQ0MsTSxHQUFTO0FBQ1BDLG1DQUE2QixTQUR0QjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVkMsTyxHQUFVLEVBQUMsT0FBTSxFQUFDLE9BQU0sYUFBUCxFQUFxQixTQUFRLE9BQTdCLEVBQVAsRSxRQUNiQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLEtBQWxCLEVBQXdCLFFBQU8sTUFBL0IsRUFBc0MsU0FBUSxPQUE5QyxFQUFzRCxPQUFNLE9BQTVELEVBQWhCLEVBQXFGLHFCQUFvQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sS0FBcEMsRUFBMEMsUUFBTyxNQUFqRCxFQUF3RCxTQUFRLE9BQWhFLEVBQXdFLE9BQU0sT0FBOUUsRUFBekcsRUFBZ00scUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxLQUF0QyxFQUE0QyxRQUFPLE1BQW5ELEVBQTBELFNBQVEsT0FBbEUsRUFBMEUsT0FBTSxPQUFoRixFQUFwTixFQUE2UyxjQUFhLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxLQUFsQixFQUF3QixRQUFPLE1BQS9CLEVBQXNDLFNBQVEsT0FBOUMsRUFBc0QsT0FBTSxPQUE1RCxFQUExVCxFQUFmLEUsUUFDVEMsTyxHQUFVLEVBQUMsZUFBYyxFQUFDLGlCQUFnQixZQUFqQixFQUFmLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxJLEdBQU87QUFDTGIsV0FBSyxFQURBO0FBRUxjLG1CQUFhLENBRlI7QUFHTEMsa0JBQVk7QUFIUCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsR0FESCxFQUNRQyxHQURSLEVBQ2E7QUFDbkIsYUFBS0MsU0FBTCxDQUFlLG9DQUFmLEVBQXFEO0FBQ25EQyxjQUFJLEtBQUtyQixHQUFMLENBQVNrQixJQUFJSSxLQUFiLEVBQW9CQztBQUQyQixTQUFyRDtBQUdEO0FBTE8sSzs7OztFQXBCdUIsZUFBS0MsSTtrQkFBbkJ6QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgUmVsZWFzZUl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZWxlYXNlLWl0ZW0nXG4gIFxuICBAY29ubmVjdCh7XG4gICAgYXJyIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm1pbmUucmVzTGlzdFxuICAgIH1cbiAgfSwge1xuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBhdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y+R5biDJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImFyclwiOntcImNvbVwiOlwicmVsZWFzZWl0ZW1cIixcInByb3BzXCI6XCJpdGVtc1wifX07XHJcbiRwcm9wcyA9IHtcInJlbGVhc2VpdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppdGVtcy5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiYXJyXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwiYXJyXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wicmVsZWFzZWl0ZW1cIjp7XCJ2LW9uOnRhcEV2ZW50XCI6XCJjaGFuZ2VlZGl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICByZWxlYXNlaXRlbTogUmVsZWFzZUl0ZW1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYXJyOiBbXSxcbiAgICAgIGltYWdlTnVtYmVyOiAwLFxuICAgICAgaW1hZ2VzTGlzdDogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlZWRpdChudW0sIGV2dCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vYXJ0aWNsZS9hcnRpY2xlLWRldGFpbC9pbmRleCcsIHtcbiAgICAgICAgICBpZDogdGhpcy5hcnJbbnVtLmluZGV4XS5vcmlnaW5JZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19