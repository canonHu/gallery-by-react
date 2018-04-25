'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _experienceItem = require('./../../../components/experience-item.js');

var _experienceItem2 = _interopRequireDefault(_experienceItem);

var _replyItem = require('./../../../components/reply-item.js');

var _replyItem2 = _interopRequireDefault(_replyItem);

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
      navigationBarTitleText: '空间动态'
    }, _this.$repeat = { "experienceList": { "com": "experienceitem", "props": "item" }, "replyList": { "com": "replyitem", "props": "item" }, "praiseList": { "com": "experienceitem", "props": "item" } }, _this.$props = { "experienceitem": { "xmlns:v-bind": { "value": "", "for": "experienceList", "item": "item", "index": "index", "key": "index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "praiseList", "item": "item", "index": "index", "key": "index" } }, "replyitem": { "v-bind:item.once": { "value": "item", "type": "item", "for": "replyList", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "replyList", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "replyitem": { "v-on:replyEvent": "clickedReplyButton" } }, _this.components = {
      experienceitem: _experienceItem2.default,
      replyitem: _replyItem2.default
    }, _this.data = {
      showInputView: false,
      placeHolder: '',
      initInputValue: '',
      replyInfo: {
        userId: 0,
        replyText: ''
      },
      focus: true,
      tabs: [{
        type: 'experience',
        title: '心得',
        titleColor: '#ff7733',
        titleBold: 'bold',
        indicatorColor: '#ff7733',
        showIndicator: true,
        hideRedDot: true
      }, {
        type: 'reply',
        title: '回复',
        titleColor: '#222222',
        titleBold: 'normal',
        indicatorColor: 'transparent',
        showIndicator: false,
        hideRedDot: false
      }, {
        type: 'praise',
        title: '点赞',
        titleColor: '#222222',
        titleBold: 'normal',
        indicatorColor: 'transparent',
        showIndicator: false,
        hideRedDot: false
      }],
      scrollToView: 'experience',

      experienceList: [{
        dynamicType: 'experience',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'experience',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'experience',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'experience',
        replyType: 'reply',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '',
        askUserName: '叶问',
        askContent: '阿技术的开发环境撒开房间看啥地方哈框架收到尽快发哈就开始倒海翻江阿斯顿发好几个撒的合法身份更好阿斯顿减肥开始啦大家发撒肌肤'
      }],

      replyList: [{
        dynamicType: 'reply',
        replyType: 'experience',
        dateTime: '09月23日',
        userName: '叶问',
        userId: 1,
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍',
        spaceName: '日本七日游',
        content: '这家确实很好次，强烈推荐～'
      }, {
        dynamicType: 'reply',
        replyType: 'experience',
        dateTime: '09月23日',
        userName: '李小龙',
        userId: 2,
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍',
        spaceName: '日本七日游',
        content: '这家确实很好次，强烈推荐～'
      }, {
        dynamicType: 'reply',
        replyType: 'experience',
        dateTime: '09月23日',
        userName: '黄飞鸿',
        userId: 3,
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍',
        spaceName: '日本七日游',
        content: '这家确实很好次，强烈推荐～'
      }, {
        dynamicType: 'reply',
        replyType: 'reply',
        dateTime: '09月23日',
        userName: '霍元甲',
        userId: 4,
        headImage: '../../../images/test.png',
        content: '这家确实很好次，强烈推荐～',
        spaceName: '日本七日游',
        askUserName: '叶问',
        askContent: '阿技术的开发环境撒开房间看啥地方哈框架收到尽快发哈就开始倒海翻江阿斯顿发好几个撒的合法身份更好阿斯顿减肥开始啦大家发撒肌肤'
      }],

      praiseList: [{
        dynamicType: 'praise',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'praise',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'praise',
        replyType: 'experience',
        userName: '叶问',
        headImage: '../../../images/test.png',
        experienceName: '东京的地铁乘坐秘籍'
      }, {
        dynamicType: 'praise',
        replyType: 'reply',
        userName: '叶问',
        headImage: '../../../images/test.png',
        askUserName: '叶问',
        askContent: '阿技术的开发环境撒开房间看啥地方哈框架收到尽快发哈就开始倒海翻江阿斯顿发好几个撒的合法身份更好阿斯顿减肥开始啦大家发撒肌肤'
      }]
    }, _this.computed = {
      getScreenHeight: function getScreenHeight() {
        return this.$parent.globalData.screenHeight - 170;
      },
      checkExperienceStatus: function checkExperienceStatus() {
        return this.scrollToView === 'experience';
      },
      checkReplyStatus: function checkReplyStatus() {
        return this.scrollToView === 'reply';
      },
      checkPraiseStatus: function checkPraiseStatus() {
        return this.scrollToView === 'praise';
      },
      checkIsEmptyStatus: function checkIsEmptyStatus() {
        switch (this.scrollToView) {
          case 'experience':
            return !(this.experienceList && this.experienceList.length > 0);
          case 'reply':
            return !(this.replyList && this.replyList.length > 0);
          case 'praise':
            return !(this.praiseList && this.praiseList.length > 0);
          default:
            return true;
        }
      },
      getBackgroundColor: function getBackgroundColor() {
        return this.checkIsEmptyStatus ? 'white' : 'transparent';
      }
    }, _this.methods = {
      clickedCurrentTab: function clickedCurrentTab(num, evt) {
        var currentTab = num.currentTarget.id;
        if (this.scrollToView !== currentTab) {
          this.tabs = this.methods.switchTab(this.scrollToView, currentTab, this.tabs);
          this.scrollToView = currentTab;
        }
      },
      switchTab: function switchTab(lastTab, currentTab, tabs) {
        if (lastTab !== currentTab) {
          // 点击同一个tab，不响应
          tabs.forEach(function (item, index) {
            if (item.type === lastTab) {
              item.titleColor = '#222222';
              item.titleBold = 'normal';
              item.indicatorColor = 'transparent';
              item.showIndicator = false;
              item.hideRedDot = false;
            } else if (item.type === currentTab) {
              item.titleColor = '#FF7733';
              item.titleBold = 'bold';
              item.indicatorColor = '#FF7733';
              item.showIndicator = true;
              item.hideRedDot = true;
            }
          });
        }
        return tabs;
      },
      clickedReplyButton: function clickedReplyButton(value, evt) {
        if (this.replyInfo.userId === 0 || this.replyInfo.userId !== value.userId) {
          // 如果和上一次不是同一人，则重置；（由于在真机调试中，this.replyInfo.replyText无法正常给input赋值，所以这里使用了中间变量）
          this.replyInfo.replyText = this.initInputValue = '';
          this.replyInfo.userId = value.userId;
        } else {
          this.initInputValue = this.replyInfo.replyText;
        }

        this.placeHolder = '\u56DE\u590D' + value.userName;
        this.showInputView = true;
      },
      bindblur: function bindblur(item) {
        // 失焦，保存当前已输入文本
        this.replyInfo.replyText = item.detail.value;
        this.showInputView = false;
      },
      bindconfirm: function bindconfirm(item) {
        var _this2 = this;

        var replyText = item.detail.value;

        this.replyInfo.replyText = '';
        this.replyInfo.userId = 0;

        if (replyText === undefined || replyText === '') {
          return;
        }

        wx.showLoading({
          title: '回复中...'
        });

        setTimeout(function () {
          wx.hideLoading();
          wx.showToast({
            title: '回复成功',
            icon: 'success',
            duration: 2000
          });
          _this2.showInputView = false;
        }, 2000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/space/dynamic-list/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZXhwZXJpZW5jZWl0ZW0iLCJyZXBseWl0ZW0iLCJkYXRhIiwic2hvd0lucHV0VmlldyIsInBsYWNlSG9sZGVyIiwiaW5pdElucHV0VmFsdWUiLCJyZXBseUluZm8iLCJ1c2VySWQiLCJyZXBseVRleHQiLCJmb2N1cyIsInRhYnMiLCJ0eXBlIiwidGl0bGUiLCJ0aXRsZUNvbG9yIiwidGl0bGVCb2xkIiwiaW5kaWNhdG9yQ29sb3IiLCJzaG93SW5kaWNhdG9yIiwiaGlkZVJlZERvdCIsInNjcm9sbFRvVmlldyIsImV4cGVyaWVuY2VMaXN0IiwiZHluYW1pY1R5cGUiLCJyZXBseVR5cGUiLCJ1c2VyTmFtZSIsImhlYWRJbWFnZSIsImV4cGVyaWVuY2VOYW1lIiwiYXNrVXNlck5hbWUiLCJhc2tDb250ZW50IiwicmVwbHlMaXN0IiwiZGF0ZVRpbWUiLCJzcGFjZU5hbWUiLCJjb250ZW50IiwicHJhaXNlTGlzdCIsImNvbXB1dGVkIiwiZ2V0U2NyZWVuSGVpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzY3JlZW5IZWlnaHQiLCJjaGVja0V4cGVyaWVuY2VTdGF0dXMiLCJjaGVja1JlcGx5U3RhdHVzIiwiY2hlY2tQcmFpc2VTdGF0dXMiLCJjaGVja0lzRW1wdHlTdGF0dXMiLCJsZW5ndGgiLCJnZXRCYWNrZ3JvdW5kQ29sb3IiLCJtZXRob2RzIiwiY2xpY2tlZEN1cnJlbnRUYWIiLCJudW0iLCJldnQiLCJjdXJyZW50VGFiIiwiY3VycmVudFRhcmdldCIsImlkIiwic3dpdGNoVGFiIiwibGFzdFRhYiIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjbGlja2VkUmVwbHlCdXR0b24iLCJ2YWx1ZSIsImJpbmRibHVyIiwiZGV0YWlsIiwiYmluZGNvbmZpcm0iLCJ1bmRlZmluZWQiLCJ3eCIsInNob3dMb2FkaW5nIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixTQUR2QjtBQUVQQyw4QkFBd0IsT0FGakI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVkMsTyxHQUFVLEVBQUMsa0JBQWlCLEVBQUMsT0FBTSxnQkFBUCxFQUF3QixTQUFRLE1BQWhDLEVBQWxCLEVBQTBELGFBQVksRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxNQUEzQixFQUF0RSxFQUF5RyxjQUFhLEVBQUMsT0FBTSxnQkFBUCxFQUF3QixTQUFRLE1BQWhDLEVBQXRILEUsUUFDYkMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGdCQUFsQixFQUFtQyxRQUFPLE1BQTFDLEVBQWlELFNBQVEsT0FBekQsRUFBaUUsT0FBTSxPQUF2RSxFQUFoQixFQUFnRyxvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFlBQXBDLEVBQWlELFFBQU8sTUFBeEQsRUFBK0QsU0FBUSxPQUF2RSxFQUErRSxPQUFNLE9BQXJGLEVBQW5ILEVBQWxCLEVBQW9PLGFBQVksRUFBQyxvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFdBQXBDLEVBQWdELFFBQU8sTUFBdkQsRUFBOEQsU0FBUSxPQUF0RSxFQUE4RSxPQUFNLE9BQXBGLEVBQXBCLEVBQWlILGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFdBQWxCLEVBQThCLFFBQU8sTUFBckMs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QUtLLE1BQUwsQ0FBWUYsS0FBNUI7O0FBRUEsYUFBS2xELFNBQUwsQ0FBZUUsU0FBZixHQUEyQixFQUEzQjtBQUNBLGFBQUtGLFNBQUwsQ0FBZUMsTUFBZixHQUF3QixDQUF4Qjs7QUFFQSxZQUFJQyxjQUFjb0QsU0FBZCxJQUEyQnBELGNBQWMsRUFBN0MsRUFBaUQ7QUFDL0M7QUFDRDs7QUFFRHFELFdBQUdDLFdBQUgsQ0FBZTtBQUNibEQsaUJBQU87QUFETSxTQUFmOztBQUlBbUQsbUJBQVcsWUFBTTtBQUNmRixhQUFHRyxXQUFIO0FBQ0FILGFBQUdJLFNBQUgsQ0FBYTtBQUNYckQsbUJBQU8sTUFESTtBQUVYc0Qsa0JBQU0sU0FGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLQSxpQkFBS2hFLGFBQUwsR0FBcUIsS0FBckI7QUFDRCxTQVJELEVBUUcsSUFSSDtBQVNEO0FBdEVPLEs7Ozs7OzZCQXlFRCxDQUVSOzs7O0VBbFJnQyxlQUFLaUUsSTs7a0JBQW5CN0UsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgRXhwZXJpZW5jZUl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9leHBlcmllbmNlLWl0ZW0nXG4gIGltcG9ydCBSZXBseUl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZXBseS1pdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+epuumXtOWKqOaAgSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJleHBlcmllbmNlTGlzdFwiOntcImNvbVwiOlwiZXhwZXJpZW5jZWl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9LFwicmVwbHlMaXN0XCI6e1wiY29tXCI6XCJyZXBseWl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9LFwicHJhaXNlTGlzdFwiOntcImNvbVwiOlwiZXhwZXJpZW5jZWl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wiZXhwZXJpZW5jZWl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImV4cGVyaWVuY2VMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwicHJhaXNlTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInJlcGx5aXRlbVwiOntcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJyZXBseUxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcInJlcGx5TGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJyZXBseWl0ZW1cIjp7XCJ2LW9uOnJlcGx5RXZlbnRcIjpcImNsaWNrZWRSZXBseUJ1dHRvblwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZXhwZXJpZW5jZWl0ZW06IEV4cGVyaWVuY2VJdGVtLFxuICAgICAgcmVwbHlpdGVtOiBSZXBseUl0ZW1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc2hvd0lucHV0VmlldzogZmFsc2UsXG4gICAgICBwbGFjZUhvbGRlcjogJycsXG4gICAgICBpbml0SW5wdXRWYWx1ZTogJycsXG4gICAgICByZXBseUluZm86IHtcbiAgICAgICAgdXNlcklkOiAwLFxuICAgICAgICByZXBseVRleHQ6ICcnXG4gICAgICB9LFxuICAgICAgZm9jdXM6IHRydWUsXG4gICAgICB0YWJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgICAgdGl0bGU6ICflv4PlvpcnLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICcjZmY3NzMzJyxcbiAgICAgICAgICB0aXRsZUJvbGQ6ICdib2xkJyxcbiAgICAgICAgICBpbmRpY2F0b3JDb2xvcjogJyNmZjc3MzMnLFxuICAgICAgICAgIHNob3dJbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgaGlkZVJlZERvdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3JlcGx5JyxcbiAgICAgICAgICB0aXRsZTogJ+WbnuWkjScsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMyMjIyMjInLFxuICAgICAgICAgIHRpdGxlQm9sZDogJ25vcm1hbCcsXG4gICAgICAgICAgaW5kaWNhdG9yQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgc2hvd0luZGljYXRvcjogZmFsc2UsXG4gICAgICAgICAgaGlkZVJlZERvdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdwcmFpc2UnLFxuICAgICAgICAgIHRpdGxlOiAn54K56LWeJyxcbiAgICAgICAgICB0aXRsZUNvbG9yOiAnIzIyMjIyMicsXG4gICAgICAgICAgdGl0bGVCb2xkOiAnbm9ybWFsJyxcbiAgICAgICAgICBpbmRpY2F0b3JDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBzaG93SW5kaWNhdG9yOiBmYWxzZSxcbiAgICAgICAgICBoaWRlUmVkRG90OiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc2Nyb2xsVG9WaWV3OiAnZXhwZXJpZW5jZScsXG5cbiAgICAgIGV4cGVyaWVuY2VMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkeW5hbWljVHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICAgIHJlcGx5VHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICAgIHVzZXJOYW1lOiAn5Y+26ZeuJyxcbiAgICAgICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgICAgIGV4cGVyaWVuY2VOYW1lOiAn5Lic5Lqs55qE5Zyw6ZOB5LmY5Z2Q56eY57GNJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZHluYW1pY1R5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICByZXBseVR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJ+S4nOS6rOeahOWcsOmTgeS5mOWdkOenmOexjSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgICAgcmVwbHlUeXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgICAgdXNlck5hbWU6ICflj7bpl64nLFxuICAgICAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICAgICAgZXhwZXJpZW5jZU5hbWU6ICfkuJzkuqznmoTlnLDpk4HkuZjlnZDnp5jnsY0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkeW5hbWljVHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICAgIHJlcGx5VHlwZTogJ3JlcGx5JyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJycsXG4gICAgICAgICAgYXNrVXNlck5hbWU6ICflj7bpl64nLFxuICAgICAgICAgIGFza0NvbnRlbnQ6ICfpmL/mioDmnK/nmoTlvIDlj5Hnjq/looPmkpLlvIDmiL/pl7TnnIvllaXlnLDmlrnlk4jmoYbmnrbmlLbliLDlsL3lv6vlj5Hlk4jlsLHlvIDlp4vlgJLmtbfnv7vmsZ/pmL/mlq/pob/lj5Hlpb3lh6DkuKrmkpLnmoTlkIjms5Xouqvku73mm7Tlpb3pmL/mlq/pob/lh4/ogqXlvIDlp4vllablpKflrrblj5HmkpLogozogqQnXG4gICAgICAgIH1cbiAgICAgIF0sXG5cbiAgICAgIHJlcGx5TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgZHluYW1pY1R5cGU6ICdyZXBseScsXG4gICAgICAgICAgcmVwbHlUeXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgICAgZGF0ZVRpbWU6ICcwOeaciDIz5pelJyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgdXNlcklkOiAxLFxuICAgICAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICAgICAgZXhwZXJpZW5jZU5hbWU6ICfkuJzkuqznmoTlnLDpk4HkuZjlnZDnp5jnsY0nLFxuICAgICAgICAgIHNwYWNlTmFtZTogJ+aXpeacrOS4g+aXpea4uCcsXG4gICAgICAgICAgY29udGVudDogJ+i/meWutuehruWunuW+iOWlveasoe+8jOW8uueDiOaOqOiNkO+9nidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAncmVwbHknLFxuICAgICAgICAgIHJlcGx5VHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICAgIGRhdGVUaW1lOiAnMDnmnIgyM+aXpScsXG4gICAgICAgICAgdXNlck5hbWU6ICfmnY7lsI/pvpknLFxuICAgICAgICAgIHVzZXJJZDogMixcbiAgICAgICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgICAgIGV4cGVyaWVuY2VOYW1lOiAn5Lic5Lqs55qE5Zyw6ZOB5LmY5Z2Q56eY57GNJyxcbiAgICAgICAgICBzcGFjZU5hbWU6ICfml6XmnKzkuIPml6XmuLgnLFxuICAgICAgICAgIGNvbnRlbnQ6ICfov5nlrrbnoa7lrp7lvojlpb3mrKHvvIzlvLrng4jmjqjojZDvvZ4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkeW5hbWljVHlwZTogJ3JlcGx5JyxcbiAgICAgICAgICByZXBseVR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICBkYXRlVGltZTogJzA55pyIMjPml6UnLFxuICAgICAgICAgIHVzZXJOYW1lOiAn6buE6aOe6bi/JyxcbiAgICAgICAgICB1c2VySWQ6IDMsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJ+S4nOS6rOeahOWcsOmTgeS5mOWdkOenmOexjScsXG4gICAgICAgICAgc3BhY2VOYW1lOiAn5pel5pys5LiD5pel5ri4JyxcbiAgICAgICAgICBjb250ZW50OiAn6L+Z5a6256Gu5a6e5b6I5aW95qyh77yM5by654OI5o6o6I2Q772eJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZHluYW1pY1R5cGU6ICdyZXBseScsXG4gICAgICAgICAgcmVwbHlUeXBlOiAncmVwbHknLFxuICAgICAgICAgIGRhdGVUaW1lOiAnMDnmnIgyM+aXpScsXG4gICAgICAgICAgdXNlck5hbWU6ICfpnI3lhYPnlLInLFxuICAgICAgICAgIHVzZXJJZDogNCxcbiAgICAgICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgICAgIGNvbnRlbnQ6ICfov5nlrrbnoa7lrp7lvojlpb3mrKHvvIzlvLrng4jmjqjojZDvvZ4nLFxuICAgICAgICAgIHNwYWNlTmFtZTogJ+aXpeacrOS4g+aXpea4uCcsXG4gICAgICAgICAgYXNrVXNlck5hbWU6ICflj7bpl64nLFxuICAgICAgICAgIGFza0NvbnRlbnQ6ICfpmL/mioDmnK/nmoTlvIDlj5Hnjq/looPmkpLlvIDmiL/pl7TnnIvllaXlnLDmlrnlk4jmoYbmnrbmlLbliLDlsL3lv6vlj5Hlk4jlsLHlvIDlp4vlgJLmtbfnv7vmsZ/pmL/mlq/pob/lj5Hlpb3lh6DkuKrmkpLnmoTlkIjms5Xouqvku73mm7Tlpb3pmL/mlq/pob/lh4/ogqXlvIDlp4vllablpKflrrblj5HmkpLogozogqQnXG4gICAgICAgIH1cbiAgICAgIF0sXG5cbiAgICAgIHByYWlzZUxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAncHJhaXNlJyxcbiAgICAgICAgICByZXBseVR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJ+S4nOS6rOeahOWcsOmTgeS5mOWdkOenmOexjSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAncHJhaXNlJyxcbiAgICAgICAgICByZXBseVR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJ+S4nOS6rOeahOWcsOmTgeS5mOWdkOenmOexjSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAncHJhaXNlJyxcbiAgICAgICAgICByZXBseVR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgICB1c2VyTmFtZTogJ+WPtumXricsXG4gICAgICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgICAgICBleHBlcmllbmNlTmFtZTogJ+S4nOS6rOeahOWcsOmTgeS5mOWdkOenmOexjSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR5bmFtaWNUeXBlOiAncHJhaXNlJyxcbiAgICAgICAgICByZXBseVR5cGU6ICdyZXBseScsXG4gICAgICAgICAgdXNlck5hbWU6ICflj7bpl64nLFxuICAgICAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICAgICAgYXNrVXNlck5hbWU6ICflj7bpl64nLFxuICAgICAgICAgIGFza0NvbnRlbnQ6ICfpmL/mioDmnK/nmoTlvIDlj5Hnjq/looPmkpLlvIDmiL/pl7TnnIvllaXlnLDmlrnlk4jmoYbmnrbmlLbliLDlsL3lv6vlj5Hlk4jlsLHlvIDlp4vlgJLmtbfnv7vmsZ/pmL/mlq/pob/lj5Hlpb3lh6DkuKrmkpLnmoTlkIjms5Xouqvku73mm7Tlpb3pmL/mlq/pob/lh4/ogqXlvIDlp4vllablpKflrrblj5HmkpLogozogqQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldFNjcmVlbkhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbkhlaWdodCAtIDE3MFxuICAgICAgfSxcbiAgICAgIGNoZWNrRXhwZXJpZW5jZVN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjcm9sbFRvVmlldyA9PT0gJ2V4cGVyaWVuY2UnKVxuICAgICAgfSxcbiAgICAgIGNoZWNrUmVwbHlTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY3JvbGxUb1ZpZXcgPT09ICdyZXBseScpXG4gICAgICB9LFxuICAgICAgY2hlY2tQcmFpc2VTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY3JvbGxUb1ZpZXcgPT09ICdwcmFpc2UnKVxuICAgICAgfSxcbiAgICAgIGNoZWNrSXNFbXB0eVN0YXR1cygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNjcm9sbFRvVmlldykge1xuICAgICAgICAgIGNhc2UgJ2V4cGVyaWVuY2UnOlxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5leHBlcmllbmNlTGlzdCAmJiB0aGlzLmV4cGVyaWVuY2VMaXN0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgY2FzZSAncmVwbHknOlxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5yZXBseUxpc3QgJiYgdGhpcy5yZXBseUxpc3QubGVuZ3RoID4gMClcbiAgICAgICAgICBjYXNlICdwcmFpc2UnOlxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5wcmFpc2VMaXN0ICYmIHRoaXMucHJhaXNlTGlzdC5sZW5ndGggPiAwKVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0QmFja2dyb3VuZENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0lzRW1wdHlTdGF0dXMgPyAnd2hpdGUnIDogJ3RyYW5zcGFyZW50J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGlja2VkQ3VycmVudFRhYihudW0sIGV2dCkge1xuICAgICAgICBsZXQgY3VycmVudFRhYiA9IG51bS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFRvVmlldyAhPT0gY3VycmVudFRhYikge1xuICAgICAgICAgIHRoaXMudGFicyA9IHRoaXMubWV0aG9kcy5zd2l0Y2hUYWIodGhpcy5zY3JvbGxUb1ZpZXcsIGN1cnJlbnRUYWIsIHRoaXMudGFicylcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvVmlldyA9IGN1cnJlbnRUYWJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN3aXRjaFRhYihsYXN0VGFiLCBjdXJyZW50VGFiLCB0YWJzKSB7XG4gICAgICAgIGlmIChsYXN0VGFiICE9PSBjdXJyZW50VGFiKSB7IC8vIOeCueWHu+WQjOS4gOS4qnRhYu+8jOS4jeWTjeW6lFxuICAgICAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IGxhc3RUYWIpIHtcbiAgICAgICAgICAgICAgaXRlbS50aXRsZUNvbG9yID0gJyMyMjIyMjInXG4gICAgICAgICAgICAgIGl0ZW0udGl0bGVCb2xkID0gJ25vcm1hbCdcbiAgICAgICAgICAgICAgaXRlbS5pbmRpY2F0b3JDb2xvciA9ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgaXRlbS5zaG93SW5kaWNhdG9yID0gZmFsc2VcbiAgICAgICAgICAgICAgaXRlbS5oaWRlUmVkRG90ID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSBjdXJyZW50VGFiKSB7XG4gICAgICAgICAgICAgIGl0ZW0udGl0bGVDb2xvciA9ICcjRkY3NzMzJ1xuICAgICAgICAgICAgICBpdGVtLnRpdGxlQm9sZCA9ICdib2xkJ1xuICAgICAgICAgICAgICBpdGVtLmluZGljYXRvckNvbG9yID0gJyNGRjc3MzMnXG4gICAgICAgICAgICAgIGl0ZW0uc2hvd0luZGljYXRvciA9IHRydWVcbiAgICAgICAgICAgICAgaXRlbS5oaWRlUmVkRG90ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhYnNcbiAgICAgIH0sXG5cbiAgICAgIGNsaWNrZWRSZXBseUJ1dHRvbih2YWx1ZSwgZXZ0KSB7XG4gICAgICAgIGlmICh0aGlzLnJlcGx5SW5mby51c2VySWQgPT09IDAgfHwgdGhpcy5yZXBseUluZm8udXNlcklkICE9PSB2YWx1ZS51c2VySWQpIHtcbiAgICAgICAgICAvLyDlpoLmnpzlkozkuIrkuIDmrKHkuI3mmK/lkIzkuIDkurrvvIzliJnph43nva7vvJvvvIjnlLHkuo7lnKjnnJ/mnLrosIPor5XkuK3vvIx0aGlzLnJlcGx5SW5mby5yZXBseVRleHTml6Dms5XmraPluLjnu5lpbnB1dOi1i+WAvO+8jOaJgOS7pei/memHjOS9v+eUqOS6huS4remXtOWPmOmHj++8iVxuICAgICAgICAgIHRoaXMucmVwbHlJbmZvLnJlcGx5VGV4dCA9IHRoaXMuaW5pdElucHV0VmFsdWUgPSAnJ1xuICAgICAgICAgIHRoaXMucmVwbHlJbmZvLnVzZXJJZCA9IHZhbHVlLnVzZXJJZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5pdElucHV0VmFsdWUgPSB0aGlzLnJlcGx5SW5mby5yZXBseVRleHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSBg5Zue5aSNJHt2YWx1ZS51c2VyTmFtZX1gXG4gICAgICAgIHRoaXMuc2hvd0lucHV0VmlldyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBiaW5kYmx1cihpdGVtKSB7XG4gICAgICAgIC8vIOWkseeEpu+8jOS/neWtmOW9k+WJjeW3sui+k+WFpeaWh+acrFxuICAgICAgICB0aGlzLnJlcGx5SW5mby5yZXBseVRleHQgPSBpdGVtLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLnNob3dJbnB1dFZpZXcgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGJpbmRjb25maXJtKGl0ZW0pIHtcblxuICAgICAgICBsZXQgcmVwbHlUZXh0ID0gaXRlbS5kZXRhaWwudmFsdWVcblxuICAgICAgICB0aGlzLnJlcGx5SW5mby5yZXBseVRleHQgPSAnJ1xuICAgICAgICB0aGlzLnJlcGx5SW5mby51c2VySWQgPSAwXG5cbiAgICAgICAgaWYgKHJlcGx5VGV4dCA9PT0gdW5kZWZpbmVkIHx8IHJlcGx5VGV4dCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WbnuWkjeS4rS4uLidcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Zue5aSN5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnNob3dJbnB1dFZpZXcgPSBmYWxzZVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcblxuICAgIH1cbiAgfVxuIl19