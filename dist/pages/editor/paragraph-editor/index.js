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
  clickedCompleteButton: _editor.CHANGE_PARAGRAGH_DATA
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
      maxTitleWordCount: 30,
      maxContentWordCount: 800,

      elementId: 0,
      elementType: 0,
      title: '',
      content: '',
      isEditor: false
    }, _this.computed = {
      getCompleteText: function getCompleteText() {
        return '完成';
      },
      getSpaceSepSize: function getSpaceSepSize() {
        return (this.$parent.globalData.screenWidth - 30 - 80 * 4) / 3;
      }
    }, _this.methods = {
      bindinput: function bindinput(value, cursor) {
        if (value.currentTarget.id === 'title') {
          this.maxTitleWordCount = 30 - value.detail.value.length;
        } else {
          this.maxContentWordCount = 800 - value.detail.value.length;
        }
      },
      bindblur: function bindblur(value, cursor) {
        var text = value.detail.value;
        if (value.currentTarget.id === 'title') {
          // 段落标题
          this.title = text;
        } else {
          this.content = text;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.isEditor = JSON.parse(options.isEditor);
      if (this.isEditor && options.element !== undefined) {
        var element = JSON.parse(options.element);
        this.elementId = options.index;
        this.elementType = element.elementType;
        this.title = element.title;
        this.content = element.content !== undefined ? element.content : '';

        this.maxTitleWordCount = 30 - this.title.length;
        this.maxContentWordCount = 800 - this.content.length;
      } else {
        this.elementId = options.index;
        this.title = '';
        this.content = '';
      }
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/editor/paragraph-editor/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY2xpY2tlZENvbXBsZXRlQnV0dG9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1heFRpdGxlV29yZENvdW50IiwibWF4Q29udGVudFdvcmRDb3VudCIsImVsZW1lbnRJZCIsImVsZW1lbnRUeXBlIiwidGl0bGUiLCJjb250ZW50IiwiaXNFZGl0b3IiLCJjb21wdXRlZCIsImdldENvbXBsZXRlVGV4dCIsImdldFNwYWNlU2VwU2l6ZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2NyZWVuV2lkdGgiLCJtZXRob2RzIiwiYmluZGlucHV0IiwidmFsdWUiLCJjdXJzb3IiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkZXRhaWwiLCJsZW5ndGgiLCJiaW5kYmx1ciIsInRleHQiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFRcUJBLEssV0FOcEIsd0JBQVEsRUFBUixFQUVFO0FBQ0RDO0FBREMsQ0FGRixDOzs7Ozs7Ozs7Ozs7OztvTEFPQ0MsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVEMsSSxHQUFPO0FBQ0xDLHlCQUFtQixFQURkO0FBRUxDLDJCQUFxQixHQUZoQjs7QUFJTEMsaUJBQVcsQ0FKTjtBQUtMQyxtQkFBYSxDQUxSO0FBTUxDLGFBQU8sRUFORjtBQU9MQyxlQUFTLEVBUEo7QUFRTEMsZ0JBQVU7QUFSTCxLLFFBV1BDLFEsR0FBVztBQUNUQyxxQkFEUyw2QkFDUztBQUNoQixlQUFPLElBQVA7QUFDRCxPQUhRO0FBSVRDLHFCQUpTLDZCQUlTO0FBQ2hCLGVBQU8sQ0FBQyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFdBQXhCLEdBQXNDLEVBQXRDLEdBQTJDLEtBQUssQ0FBakQsSUFBc0QsQ0FBN0Q7QUFDRDtBQU5RLEssUUFTWEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLEtBREYsRUFDU0MsTUFEVCxFQUNpQjtBQUN2QixZQUFJRCxNQUFNRSxhQUFOLENBQW9CQyxFQUFwQixLQUEyQixPQUEvQixFQUF3QztBQUN0QyxlQUFLbEIsaUJBQUwsR0FBeUIsS0FBS2UsTUFBTUksTUFBTixDQUFhSixLQUFiLENBQW1CSyxNQUFqRDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtuQixtQkFBTCxHQUEyQixNQUFNYyxNQUFNSSxNQUFOLENBQWFKLEtBQWIsQ0FBbUJLLE1BQXBEO0FBQ0Q7QUFDRixPQVBPO0FBUVJDLGNBUlEsb0JBUUNOLEtBUkQsRUFRUUMsTUFSUixFQVFnQjtBQUN0QixZQUFJTSxPQUFPUCxNQUFNSSxNQUFOLENBQWFKLEtBQXhCO0FBQ0EsWUFBSUEsTUFBTUUsYUFBTixDQUFvQkMsRUFBcEIsS0FBMkIsT0FBL0IsRUFBd0M7QUFDdEM7QUFDQSxlQUFLZCxLQUFMLEdBQWFrQixJQUFiO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZUFBS2pCLE9BQUwsR0FBZWlCLElBQWY7QUFDRDtBQUNGO0FBaEJPLEs7Ozs7OzJCQW1CSEMsTyxFQUFTO0FBQ2QsV0FBS2pCLFFBQUwsR0FBZ0JrQixLQUFLQyxLQUFMLENBQVdGLFFBQVFqQixRQUFuQixDQUFoQjtBQUNBLFVBQUksS0FBS0EsUUFBTCxJQUFpQmlCLFFBQVFHLE9BQVIsS0FBb0JDLFNBQXpDLEVBQW9EO0FBQ2xELFlBQUlELFVBQVVGLEtBQUtDLEtBQUwsQ0FBV0YsUUFBUUcsT0FBbkIsQ0FBZDtBQUNBLGFBQUt4QixTQUFMLEdBQWlCcUIsUUFBUUssS0FBekI7QUFDQSxhQUFLekIsV0FBTCxHQUFtQnVCLFFBQVF2QixXQUEzQjtBQUNBLGFBQUtDLEtBQUwsR0FBYXNCLFFBQVF0QixLQUFyQjtBQUNBLGFBQUtDLE9BQUwsR0FBZ0JxQixRQUFRckIsT0FBUixLQUFvQnNCLFNBQXBCLEdBQWdDRCxRQUFRckIsT0FBeEMsR0FBa0QsRUFBbEU7O0FBRUEsYUFBS0wsaUJBQUwsR0FBeUIsS0FBSyxLQUFLSSxLQUFMLENBQVdnQixNQUF6QztBQUNBLGFBQUtuQixtQkFBTCxHQUEyQixNQUFNLEtBQUtJLE9BQUwsQ0FBYWUsTUFBOUM7QUFDRCxPQVRELE1BU087QUFDTCxhQUFLbEIsU0FBTCxHQUFpQnFCLFFBQVFLLEtBQXpCO0FBQ0EsYUFBS3hCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDRDtBQUNGOzs7O0VBOURnQyxlQUFLd0IsSTtrQkFBbkJwQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IENIQU5HRV9QQVJBR1JBR0hfREFUQSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3R5cGVzL2VkaXRvcidcblxuICBAY29ubmVjdCh7XG5cbiAgfSwge1xuICAgIGNsaWNrZWRDb21wbGV0ZUJ1dHRvbjogQ0hBTkdFX1BBUkFHUkFHSF9EQVRBXG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R5biD5peF6KGM5b+D5b6XJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBtYXhUaXRsZVdvcmRDb3VudDogMzAsXG4gICAgICBtYXhDb250ZW50V29yZENvdW50OiA4MDAsXG5cbiAgICAgIGVsZW1lbnRJZDogMCxcbiAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogJycsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBnZXRDb21wbGV0ZVRleHQoKSB7XG4gICAgICAgIHJldHVybiAn5a6M5oiQJ1xuICAgICAgfSxcbiAgICAgIGdldFNwYWNlU2VwU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zY3JlZW5XaWR0aCAtIDMwIC0gODAgKiA0KSAvIDNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZGlucHV0KHZhbHVlLCBjdXJzb3IpIHtcbiAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnRUYXJnZXQuaWQgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICB0aGlzLm1heFRpdGxlV29yZENvdW50ID0gMzAgLSB2YWx1ZS5kZXRhaWwudmFsdWUubGVuZ3RoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXhDb250ZW50V29yZENvdW50ID0gODAwIC0gdmFsdWUuZGV0YWlsLnZhbHVlLmxlbmd0aFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmluZGJsdXIodmFsdWUsIGN1cnNvcikge1xuICAgICAgICBsZXQgdGV4dCA9IHZhbHVlLmRldGFpbC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUuY3VycmVudFRhcmdldC5pZCA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgIC8vIOauteiQveagh+mimFxuICAgICAgICAgIHRoaXMudGl0bGUgPSB0ZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50ID0gdGV4dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaXNFZGl0b3IgPSBKU09OLnBhcnNlKG9wdGlvbnMuaXNFZGl0b3IpXG4gICAgICBpZiAodGhpcy5pc0VkaXRvciAmJiBvcHRpb25zLmVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IEpTT04ucGFyc2Uob3B0aW9ucy5lbGVtZW50KVxuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IG9wdGlvbnMuaW5kZXhcbiAgICAgICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnQuZWxlbWVudFR5cGVcbiAgICAgICAgdGhpcy50aXRsZSA9IGVsZW1lbnQudGl0bGVcbiAgICAgICAgdGhpcy5jb250ZW50ID0gKGVsZW1lbnQuY29udGVudCAhPT0gdW5kZWZpbmVkID8gZWxlbWVudC5jb250ZW50IDogJycpXG5cbiAgICAgICAgdGhpcy5tYXhUaXRsZVdvcmRDb3VudCA9IDMwIC0gdGhpcy50aXRsZS5sZW5ndGhcbiAgICAgICAgdGhpcy5tYXhDb250ZW50V29yZENvdW50ID0gODAwIC0gdGhpcy5jb250ZW50Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBvcHRpb25zLmluZGV4XG4gICAgICAgIHRoaXMudGl0bGUgPSAnJ1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19