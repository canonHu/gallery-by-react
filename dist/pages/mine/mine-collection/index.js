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

var _mine = require('./../../../store/types/mine.js');

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
      navigationBarTitleText: '我的收藏'
    }, _this.$repeat = { "arr": { "com": "releaseitem", "props": "items" } }, _this.$props = { "releaseitem": { "xmlns:v-bind": { "value": "", "for": "arr", "item": "item", "index": "index", "key": "index" }, "v-bind:cancelFlag.once": { "value": "cancelFlag", "for": "arr", "item": "item", "index": "index", "key": "index" }, "v-bind:items.once": { "value": "item", "type": "item", "for": "arr", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "arr", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "arr", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "releaseitem": { "v-on:tapEvent": "changeedit" } }, _this.components = {
      releaseitem: _releaseItem2.default
    }, _this.data = {
      arr: [],
      color: '0.5',
      cancelArr: [],
      imageNumber: 0,
      imagesList: [],
      cancel: 'cancel',
      store: (0, _wepyRedux.getStore)(),
      cancelFlag: false
    }, _this.watch = {
      arr: function arr(newValue, oldValue) {
        var _this2 = this;

        this.cancelArr = [];
        newValue.forEach(function (item, i) {
          if (!item.flag) {
            _this2.cancelArr.push(item.userInfo.userId);
          }
        });
        if (this.cancelArr.length === 0) {
          this.color = '0.5';
        } else {
          this.color = '1';
        }
      }
    }, _this.methods = {
      edit: function edit() {
        this.cancelFlag = !this.cancelFlag;
      },
      changeedit: function changeedit(num, evt) {
        if (this.cancelFlag) {
          this.arr[num.index].flag = !num.flag;
        } else {
          this.$navigate('../../article/article-detail/index', {
            id: this.arr[num.index].originId
          });
        }
      },
      cancel: function cancel() {
        if (this.color === '1') {
          this.cancelFlag = false;
          var payloads = {
            circleId: this.cancelArr,
            openId: 'lalal',
            type: 1
          };
          this.store.dispatch({
            type: _mine.CANCEL,
            payloads: payloads,
            name: 'collection'
          });
        } else {
          wx.showToast({
            title: '请至少选择一项',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page)) || _class);

Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine/mine-collection/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiYXJyIiwic3RhdGUiLCJtaW5lIiwicmVzTGlzdCIsImNvbmZpZyIsImF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmVsZWFzZWl0ZW0iLCJkYXRhIiwiY29sb3IiLCJjYW5jZWxBcnIiLCJpbWFnZU51bWJlciIsImltYWdlc0xpc3QiLCJjYW5jZWwiLCJzdG9yZSIsImNhbmNlbEZsYWciLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJmbGFnIiwicHVzaCIsInVzZXJJbmZvIiwidXNlcklkIiwibGVuZ3RoIiwibWV0aG9kcyIsImVkaXQiLCJjaGFuZ2VlZGl0IiwibnVtIiwiZXZ0IiwiaW5kZXgiLCIkbmF2aWdhdGUiLCJpZCIsIm9yaWdpbklkIiwicGF5bG9hZHMiLCJjaXJjbGVJZCIsIm9wZW5JZCIsInR5cGUiLCJkaXNwYXRjaCIsIm5hbWUiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBU3FCQSxLLFdBUHBCLHdCQUFRO0FBQ1BDLEtBRE8sZUFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsSUFBTixDQUFXQyxPQUFsQjtBQUNEO0FBSE0sQ0FBUixFQUlFLEVBSkYsQzs7Ozs7Ozs7Ozs7Ozs7b0xBUUNDLE0sR0FBUztBQUNQQyxtQ0FBNkIsU0FEdEI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBTVZDLE8sR0FBVSxFQUFDLE9BQU0sRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxPQUE3QixF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TEMsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLFNBREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLRDtBQUNGO0FBbkNPLEs7Ozs7RUF6Q3VCLGVBQUtDLEk7a0JBQW5CckQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBnZXRTdG9yZSwgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBSZWxlYXNlSXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JlbGVhc2UtaXRlbSdcbiAgaW1wb3J0IHsgQ0FOQ0VMIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdHlwZXMvbWluZSdcbiAgXG4gIEBjb25uZWN0KHtcbiAgICBhcnIgKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUubWluZS5yZXNMaXN0XG4gICAgfVxuICB9LCB7XG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIGF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlLbol48nXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wiYXJyXCI6e1wiY29tXCI6XCJyZWxlYXNlaXRlbVwiLFwicHJvcHNcIjpcIml0ZW1zXCJ9fTtcclxuJHByb3BzID0ge1wicmVsZWFzZWl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFyclwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmNhbmNlbEZsYWcub25jZVwiOntcInZhbHVlXCI6XCJjYW5jZWxGbGFnXCIsXCJmb3JcIjpcImFyclwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOml0ZW1zLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJhcnJcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFyclwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJyZWxlYXNlaXRlbVwiOntcInYtb246dGFwRXZlbnRcIjpcImNoYW5nZWVkaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHJlbGVhc2VpdGVtOiBSZWxlYXNlSXRlbVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBhcnI6IFtdLFxuICAgICAgY29sb3I6ICcwLjUnLFxuICAgICAgY2FuY2VsQXJyOiBbXSxcbiAgICAgIGltYWdlTnVtYmVyOiAwLFxuICAgICAgaW1hZ2VzTGlzdDogW10sXG4gICAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgICAgc3RvcmU6IGdldFN0b3JlKCksXG4gICAgICBjYW5jZWxGbGFnOiBmYWxzZVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgYXJyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhbmNlbEFyciA9IFtdXG4gICAgICAgIG5ld1ZhbHVlLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoIWl0ZW0uZmxhZykge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxBcnIucHVzaChpdGVtLnVzZXJJbmZvLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLmNhbmNlbEFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gJzAuNSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gJzEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZWRpdCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxGbGFnID0gIXRoaXMuY2FuY2VsRmxhZ1xuICAgICAgfSxcblxuICAgICAgY2hhbmdlZWRpdChudW0sIGV2dCkge1xuICAgICAgICBpZiAodGhpcy5jYW5jZWxGbGFnKSB7XG4gICAgICAgICAgdGhpcy5hcnJbbnVtLmluZGV4XS5mbGFnID0gIW51bS5mbGFnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4uLy4uL2FydGljbGUvYXJ0aWNsZS1kZXRhaWwvaW5kZXgnLCB7XG4gICAgICAgICAgICBpZDogdGhpcy5hcnJbbnVtLmluZGV4XS5vcmlnaW5JZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IgPT09ICcxJykge1xuICAgICAgICAgIHRoaXMuY2FuY2VsRmxhZyA9IGZhbHNlXG4gICAgICAgICAgY29uc3QgcGF5bG9hZHMgPSB7XG4gICAgICAgICAgICBjaXJjbGVJZDogdGhpcy5jYW5jZWxBcnIsXG4gICAgICAgICAgICBvcGVuSWQ6ICdsYWxhbCcsXG4gICAgICAgICAgICB0eXBlOiAxXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0FOQ0VMLFxuICAgICAgICAgICAgcGF5bG9hZHMsXG4gICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+iHs+WwkemAieaLqeS4gOmhuScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==