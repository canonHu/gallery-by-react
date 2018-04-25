'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _editor = require('./../../../store/types/editor.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _wepyRedux.connect)({}, {
  clickedCompleteButton: _editor.CHANGE_CONTENT_TITLE
}), _dec(_class = function (_wepy$page) {
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
      navigationBarTitleText: '发布旅行心得'
    }, _this.data = {
      type: '',
      spacePois: [],
      title: '',
      maxWordCount: 50,
      isEditor: false,
      completeText: '下一步'
    }, _this.computed = {}, _this.methods = {
      bindinput: function bindinput(value, cursor) {
        this.maxWordCount = 50 - value.detail.value.length;
      },
      bindblur: function bindblur(value) {
        this.title = value.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.spacePois = options.spacePois;
      this.type = options.type;
      this.isEditor = options.isEditor === 'true';
      this.completeText = this.isEditor ? '完成' : '下一步';
      this.title = '';
      if (this.isEditor) {
        this.title = options.title;
        this.maxWordCount = 50 - options.title.length;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/editor/title-editor/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY2xpY2tlZENvbXBsZXRlQnV0dG9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInR5cGUiLCJzcGFjZVBvaXMiLCJ0aXRsZSIsIm1heFdvcmRDb3VudCIsImlzRWRpdG9yIiwiY29tcGxldGVUZXh0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiYmluZGlucHV0IiwidmFsdWUiLCJjdXJzb3IiLCJkZXRhaWwiLCJsZW5ndGgiLCJiaW5kYmx1ciIsIm9wdGlvbnMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQVFxQkEsSyxXQU5wQix3QkFBUSxFQUFSLEVBRUU7QUFDREM7QUFEQyxDQUZGLEM7Ozs7Ozs7Ozs7Ozs7O29MQU9DQyxNLEdBQVM7QUFDUEMsb0NBQThCLFNBRHZCO0FBRVBDLDhCQUF3QixPQUZqQjtBQUdQQyw4QkFBd0I7QUFIakIsSyxRQU1UQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGlCQUFXLEVBRk47QUFHTEMsYUFBTyxFQUhGO0FBSUxDLG9CQUFjLEVBSlQ7QUFLTEMsZ0JBQVUsS0FMTDtBQU1MQyxvQkFBYztBQU5ULEssUUFTUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLEtBREYsRUFDU0MsTUFEVCxFQUNpQjtBQUN2QixhQUFLUCxZQUFMLEdBQW9CLEtBQUtNLE1BQU1FLE1BQU4sQ0FBYUYsS0FBYixDQUFtQkcsTUFBNUM7QUFDRCxPQUhPO0FBSVJDLGNBSlEsb0JBSUNKLEtBSkQsRUFJUTtBQUNkLGFBQUtQLEtBQUwsR0FBYU8sTUFBTUUsTUFBTixDQUFhRixLQUExQjtBQUNEO0FBTk8sSzs7Ozs7MkJBU0hLLE8sRUFBUztBQUNkLFdBQUtiLFNBQUwsR0FBaUJhLFFBQVFiLFNBQXpCO0FBQ0EsV0FBS0QsSUFBTCxHQUFZYyxRQUFRZCxJQUFwQjtBQUNBLFdBQUtJLFFBQUwsR0FBaUJVLFFBQVFWLFFBQVIsS0FBcUIsTUFBdEM7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQUtELFFBQUwsR0FBZ0IsSUFBaEIsR0FBdUIsS0FBM0M7QUFDQSxXQUFLRixLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUksS0FBS0UsUUFBVCxFQUFtQjtBQUNqQixhQUFLRixLQUFMLEdBQWFZLFFBQVFaLEtBQXJCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixLQUFLVyxRQUFRWixLQUFSLENBQWNVLE1BQXZDO0FBQ0Q7QUFDRjs7OztFQXJDZ0MsZUFBS0csSTtrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IENIQU5HRV9DT05URU5UX1RJVExFIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdHlwZXMvZWRpdG9yJ1xuXG4gIEBjb25uZWN0KHtcblxuICB9LCB7XG4gICAgY2xpY2tlZENvbXBsZXRlQnV0dG9uOiBDSEFOR0VfQ09OVEVOVF9USVRMRVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+aXheihjOW/g+W+lydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdHlwZTogJycsXG4gICAgICBzcGFjZVBvaXM6IFtdLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgbWF4V29yZENvdW50OiA1MCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGNvbXBsZXRlVGV4dDogJ+S4i+S4gOatpSdcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZGlucHV0KHZhbHVlLCBjdXJzb3IpIHtcbiAgICAgICAgdGhpcy5tYXhXb3JkQ291bnQgPSA1MCAtIHZhbHVlLmRldGFpbC52YWx1ZS5sZW5ndGhcbiAgICAgIH0sXG4gICAgICBiaW5kYmx1cih2YWx1ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc3BhY2VQb2lzID0gb3B0aW9ucy5zcGFjZVBvaXNcbiAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgICAgdGhpcy5pc0VkaXRvciA9IChvcHRpb25zLmlzRWRpdG9yID09PSAndHJ1ZScpXG4gICAgICB0aGlzLmNvbXBsZXRlVGV4dCA9IHRoaXMuaXNFZGl0b3IgPyAn5a6M5oiQJyA6ICfkuIvkuIDmraUnXG4gICAgICB0aGlzLnRpdGxlID0gJydcbiAgICAgIGlmICh0aGlzLmlzRWRpdG9yKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBvcHRpb25zLnRpdGxlXG4gICAgICAgIHRoaXMubWF4V29yZENvdW50ID0gNTAgLSBvcHRpb25zLnRpdGxlLmxlbmd0aFxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19