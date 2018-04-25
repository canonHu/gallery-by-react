'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _completeButton = require('./../../../components/complete-button.js');

var _completeButton2 = _interopRequireDefault(_completeButton);

var _contentImagesView = require('./../../../components/content-images-view.js');

var _contentImagesView2 = _interopRequireDefault(_contentImagesView);

var _wepyRedux = require('./../../../npm/wepy-redux/lib/index.js');

var _editor = require('./../../../store/types/editor.js');

var _test = require('./../../../utils/test.js');

var _test2 = _interopRequireDefault(_test);

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
      navigationBarTitleText: '发布旅行心得'
    }, _this.$repeat = { "contents": { "com": "contentimagesview", "props": "" } }, _this.$props = { "contentimagesview": { "xmlns:v-bind": { "value": "", "for": "contents", "item": "item", "index": "index", "key": "index" }, "v-bind:currentIndex.once": { "value": "index", "type": "index", "for": "contents", "item": "item", "index": "index", "key": "index" }, "v-bind:imgs.once": { "value": "item.imgs", "for": "contents", "item": "item", "index": "index", "key": "index" }, "v-bind:sepSize.once": { "value": "getSpaceSepSize", "for": "contents", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "contents", "item": "item", "index": "index", "key": "index" } }, "completebutton": { "v-bind:title.once": "getCompleteText" } }, _this.$events = { "contentimagesview": { "v-on:deleteImg": "clickedDeleteContentImgButton" }, "completebutton": { "v-on:completeEvent": "clickedReleaseButton" } }, _this.components = {
      completebutton: _completeButton2.default,
      contentimagesview: _contentImagesView2.default
    }, _this.data = {
      sourceType: '',
      title: '',
      noData: false,
      addButtonOffsetY: -1,
      currentAddIndex: -1,
      tabs: [],
      contents: [],
      selectTags: [],
      selectedSync: false,
      selectedIcon: '../../../images/tn-wx-editor-select-true.png',
      noselectIcon: '../../../images/tn-wx-editor-select-false.png',

      selectPois: [],

      store: (0, _wepyRedux.getStore)()
    }, _this.computed = {
      getScreenHeight: function getScreenHeight() {
        return this.$parent.globalData.screenHeight;
      },
      getCompleteText: function getCompleteText() {
        return '发布心得';
      },
      checkEmptyContentList: function checkEmptyContentList() {
        return !(this.contents.length > 0);
      },
      getSpaceSepSize: function getSpaceSepSize() {
        return (this.$parent.globalData.screenWidth - 30 - 100 * 3) / 2;
      }
    }, _this.methods = {
      clickedReleaseButton: function clickedReleaseButton() {
        this.addButtonOffsetY = -1;
        if (this.selectTags.length <= 0) {
          wx.showToast({
            title: '板块不能为空～',
            icon: 'none',
            duration: 2000
          });
          return;
        }
      },
      clickedTitleEditorButton: function clickedTitleEditorButton() {
        this.$navigate('../title-editor/index', { isEditor: true, title: this.title });
      },
      clickedContentEditorButton: function clickedContentEditorButton(value) {
        var index = parseInt(value.currentTarget.dataset.id);
        var dataStr = JSON.stringify(this.contents[index]);
        this.$navigate('../paragraph-editor/index', { isEditor: true, index: index, element: dataStr });
      },
      clickedAddButton: function clickedAddButton(num) {
        this.addButtonOffsetY = num.currentTarget.offsetTop + 35;
        this.currentAddIndex = num.currentTarget.dataset.index;
      },
      clickedOtherView: function clickedOtherView() {
        this.addButtonOffsetY = -1;
      },
      clickedAddContentButton: function clickedAddContentButton() {
        var index = parseInt(this.currentAddIndex) === -1 ? this.contents.length : this.currentAddIndex;
        this.$navigate('../paragraph-editor/index', { isEditor: false, index: index });
      },
      clickedAddImageButton: function clickedAddImageButton(num) {
        var self = this;
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var images = res.tempFilePaths;

            // 上传图片

            // 添加到数组
            var contentInfo = {
              elementType: 1,
              imgs: images,
              elementId: parseInt(self.currentAddIndex) === -1 ? self.contents.length : self.currentAddIndex
            };

            self.store.dispatch({ type: _editor.CHANGE_PARAGRAGH_DATA, element: contentInfo });

            self.$apply();
          }
        });
      },
      clickedCurrentTag: function clickedCurrentTag(value, evt) {
        var info = _utils2.default.getSelectTagsInfo(this.tabs, this.selectTags, parseInt(value.currentTarget.id), 3);
        this.tabs = info.tabs;
        this.selectTags = info.selectTags;
        this.store.dispatch({ type: _editor.CHANGE_CONTENT_TAG_LIST, tagList: this.selectTags });
      },
      clickedSyncSquare: function clickedSyncSquare() {
        this.selectedSync = !this.selectedSync;
      },
      clickedDeleteContentButton: function clickedDeleteContentButton(num) {
        var index = num.currentTarget.dataset.index;
        var self = this;
        wx.showModal({
          title: '提示',
          content: '确定要删除吗？',
          success: function success(res) {
            if (res.confirm) {
              self.contents.splice(index, 1);
              self.$apply();
            } else if (res.cancel) {}
          }
        });
      },
      clickedDeletePoiButton: function clickedDeletePoiButton() {
        var clickedItem = value.currentTarget.dataset.info;
        this.selectPois = _utils2.default.deleteCityFromArray(this.selectPois, clickedItem, function (old, news) {
          return old.poiName === news.poiName;
        });
        this.store.dispatch({ type: _editor.CHANGE_CONTENT_POI_LIST, poiList: this.selectPois });
      },
      clickedAddPoiButton: function clickedAddPoiButton() {
        this.$navigate('../../space/add-destination/index', {});
      },
      clickedDeleteContentImgButton: function clickedDeleteContentImgButton(num) {
        var currentItem = this.contents[num.currentIndex];
        var self = this;
        wx.showModal({
          title: '提示',
          content: '确定要删除吗？',
          success: function success(res) {
            if (res.confirm) {
              if (currentItem.elementType === 1) {
                currentItem.imgs.splice(num.imgIndex, 1);
                self.contents[num.imgIndex] = currentItem;
              }

              if (currentItem.imgs.length <= 0) {
                self.contents.splice(num.currentIndex, 1);
              }

              self.$apply();
            } else if (res.cancel) {}
          }
        });
      },
      clickedSortButton: function clickedSortButton() {
        this.$navigate('../sort-editor/index', {});
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.title = options.title;
      this.tabs = _test2.default.testTabData;
      this.sourceType = options.type;
      this.selectedSync = this.sourceType === 'space';
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var store = (0, _wepyRedux.getStore)();
      var state = store.getState();
      this.title = state.editor.title;
      this.contents = state.editor.contents;
      this.selectTags = state.editor.tagList;

      var self = this;
      wx.getStorage({
        key: _utils2.default.cityStorageKey,
        success: function success(res) {
          var callback = function callback(old, news) {
            return old.poiName === news.poiName;
          };
          self.selectPois = _utils2.default.reContructSelectCitys(self.selectPois, res.data, callback);
          self.store.dispatch({ type: _editor.CHANGE_CONTENT_POI_LIST, poiList: this.selectPois });

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
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.store.dispatch({ type: _editor.EDITOR_CONTENT_CLEAR });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/editor/content-editor/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tcGxldGVidXR0b24iLCJjb250ZW50aW1hZ2VzdmlldyIsImRhdGEiLCJzb3VyY2VUeXBlIiwidGl0bGUiLCJub0RhdGEiLCJhZGRCdXR0b25PZmZzZXRZIiwiY3VycmVudEFkZEluZGV4IiwidGFicyIsImNvbnRlbnRzIiwic2VsZWN0VGFncyIsInNlbGVjdGVkU3luYyIsInNlbGVjdGVkSWNvbiIsIm5vc2VsZWN0SWNvbiIsInNlbGVjdFBvaXMiLCJzdG9yZSIsImNvbXB1dGVkIiwiZ2V0U2NyZWVuSGVpZ2h0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzY3JlZW5IZWlnaHQiLCJnZXRDb21wbGV0ZVRleHQiLCJjaGVja0VtcHR5Q29udGVudExpc3QiLCJsZW5ndGgiLCJnZXRTcGFjZVNlcFNpemUiLCJzY3JlZW5XaWR0aCIsIm1ldGhvZHMiLCJjbGlja2VkUmVsZWFzZUJ1dHRvbiIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiY2xpY2tlZFRpdGxlRWRpdG9yQnV0dG9uIiwiJG5hdmlnYXRlIiwiaXNFZGl0b3IiLCJjbGlja2VkQ29udGVudEVkaXRvckJ1dHRvbiIsInZhbHVlIiwiaW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJkYXRhU3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsImVsZW1lbnQiLCJjbGlja2VkQWRkQnV0dG9uIiwibnVtIiwib2Zmc2V0VG9wIiwiY2xpY2tlZE90aGVyVmlldyIsImNsaWNrZWRBZGRDb250ZW50QnV0dG9uIiwiY2xpY2tlZEFkZEltYWdlQnV0dG9uIiwic2VsZiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJpbWFnZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiY29udGVudEluZm8iLCJlbGVtZW50VHlwZSIsImltZ3MiLCJlbGVtZW50SWQiLCJkaXNwYXRjaCIsInR5cGUiLCIkYXBwbHkiLCJjbGlja2VkQ3VycmVudFRhZyIsImV2dCIsImluZm8iLCJnZXRTZWxlY3RUYWdzSW5mbyIsInRhZ0xpc3QiLCJjbGlja2VkU3luY1NxdWFyZSIsImNsaWNrZWREZWxldGVDb250ZW50QnV0dG9uIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJzcGxpY2UiLCJjYW5jZWwiLCJjbGlja2VkRGVsZXRlUG9pQnV0dG9uIiwiY2xpY2tlZEl0ZW0iLCJkZWxldGVDaXR5RnJvbUFycmF5Iiwib2xkIiwibmV3cyIsInBvaU5hbWUiLCJwb2lMaXN0IiwiY2xpY2tlZEFkZFBvaUJ1dHRvbiIsImNsaWNrZWREZWxldGVDb250ZW50SW1nQnV0dG9uIiwiY3VycmVudEl0ZW0iLCJjdXJyZW50SW5kZXgiLCJpbWdJbmRleCIsImNsaWNrZWRTb3J0QnV0dG9uIiwib3B0aW9ucyIsInRlc3RUYWJEYXRhIiwic3RhdGUiLCJnZXRTdGF0ZSIsImVkaXRvciIsImdldFN0b3JhZ2UiLCJrZXkiLCJjaXR5U3RvcmFnZUtleSIsImNhbGxiYWNrIiwicmVDb250cnVjdFNlbGVjdENpdHlzIiwiY29tcGxldGUiLCJyZW1vdmVTdG9yYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsU0FEdkI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBTVZDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLG1CQUFQLEVBQTJCLFNB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S0FBS0MsT0FBcEM7QUFBQSxXQUFmO0FBQ0FoQyxlQUFLdEMsVUFBTCxHQUFrQixnQkFBTXVGLHFCQUFOLENBQTRCakQsS0FBS3RDLFVBQWpDLEVBQTZDMkMsSUFBSXZELElBQWpELEVBQXVEa0csUUFBdkQsQ0FBbEI7QUFDQWhELGVBQUtyQyxLQUFMLENBQVdpRCxRQUFYLENBQW9CLEVBQUNDLHFDQUFELEVBQWdDb0IsU0FBUyxLQUFLdkUsVUFBOUMsRUFBcEI7O0FBRUFzQyxlQUFLYyxNQUFMO0FBQ0QsU0FSVztBQVNab0Msa0JBQVUsb0JBQVk7QUFDcEIxRSxhQUFHMkUsYUFBSCxDQUFpQjtBQUNmTCxpQkFBSyxnQkFBTUMsY0FESTtBQUVmM0MscUJBQVMsaUJBQVNDLEdBQVQsRUFBYyxDQUN0QjtBQUhjLFdBQWpCO0FBS0Q7QUFmVyxPQUFkO0FBaUJEOzs7K0JBRVU7QUFDVCxXQUFLMUMsS0FBTCxDQUFXaUQsUUFBWCxDQUFvQixFQUFDQyxrQ0FBRCxFQUFwQjtBQUNEOzs7O0VBMU1nQyxlQUFLdUMsSTs7a0JBQW5CakgsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ29tcGxldGVCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS1idXR0b24nXG4gIGltcG9ydCBDb250ZW50SW1hZ2VzVmlldyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbnRlbnQtaW1hZ2VzLXZpZXcnXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgQ0hBTkdFX1BBUkFHUkFHSF9EQVRBLCBDSEFOR0VfQ09OVEVOVF9QT0lfTElTVCwgQ0hBTkdFX0NPTlRFTlRfVEFHX0xJU1QsIEVESVRPUl9DT05URU5UX0NMRUFSIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdHlwZXMvZWRpdG9yJ1xuXG4gIGltcG9ydCB0ZXN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Rlc3QnXG4gIGltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPml4XooYzlv4PlvpcnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wiY29udGVudHNcIjp7XCJjb21cIjpcImNvbnRlbnRpbWFnZXN2aWV3XCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wiY29udGVudGltYWdlc3ZpZXdcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImNvbnRlbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Y3VycmVudEluZGV4Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImNvbnRlbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW1ncy5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uaW1nc1wiLFwiZm9yXCI6XCJjb250ZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnNlcFNpemUub25jZVwiOntcInZhbHVlXCI6XCJnZXRTcGFjZVNlcFNpemVcIixcImZvclwiOlwiY29udGVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImNvbnRlbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiY29tcGxldGVidXR0b25cIjp7XCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwiZ2V0Q29tcGxldGVUZXh0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImNvbnRlbnRpbWFnZXN2aWV3XCI6e1widi1vbjpkZWxldGVJbWdcIjpcImNsaWNrZWREZWxldGVDb250ZW50SW1nQnV0dG9uXCJ9LFwiY29tcGxldGVidXR0b25cIjp7XCJ2LW9uOmNvbXBsZXRlRXZlbnRcIjpcImNsaWNrZWRSZWxlYXNlQnV0dG9uXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBjb21wbGV0ZWJ1dHRvbjogQ29tcGxldGVCdXR0b24sXG4gICAgICBjb250ZW50aW1hZ2VzdmlldzogQ29udGVudEltYWdlc1ZpZXdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc291cmNlVHlwZTogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBub0RhdGE6IGZhbHNlLFxuICAgICAgYWRkQnV0dG9uT2Zmc2V0WTogLTEsXG4gICAgICBjdXJyZW50QWRkSW5kZXg6IC0xLFxuICAgICAgdGFiczogW10sXG4gICAgICBjb250ZW50czogW10sXG4gICAgICBzZWxlY3RUYWdzOiBbXSxcbiAgICAgIHNlbGVjdGVkU3luYzogZmFsc2UsXG4gICAgICBzZWxlY3RlZEljb246ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtZWRpdG9yLXNlbGVjdC10cnVlLnBuZycsXG4gICAgICBub3NlbGVjdEljb246ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtZWRpdG9yLXNlbGVjdC1mYWxzZS5wbmcnLFxuXG4gICAgICBzZWxlY3RQb2lzOiBbXSxcblxuICAgICAgc3RvcmU6IGdldFN0b3JlKClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGdldFNjcmVlbkhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbkhlaWdodFxuICAgICAgfSxcbiAgICAgIGdldENvbXBsZXRlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuICflj5HluIPlv4PlvpcnXG4gICAgICB9LFxuICAgICAgY2hlY2tFbXB0eUNvbnRlbnRMaXN0KCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLmNvbnRlbnRzLmxlbmd0aCA+IDApXG4gICAgICB9LFxuICAgICAgZ2V0U3BhY2VTZXBTaXplKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNjcmVlbldpZHRoIC0gMzAgLSAxMDAgKiAzKSAvIDJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xpY2tlZFJlbGVhc2VCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uT2Zmc2V0WSA9IC0xXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFRhZ3MubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmnb/lnZfkuI3og73kuLrnqbrvvZ4nLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xpY2tlZFRpdGxlRWRpdG9yQnV0dG9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vdGl0bGUtZWRpdG9yL2luZGV4Jywge2lzRWRpdG9yOiB0cnVlLCB0aXRsZTogdGhpcy50aXRsZX0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZENvbnRlbnRFZGl0b3JCdXR0b24odmFsdWUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQodmFsdWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgICAgICBsZXQgZGF0YVN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGVudHNbaW5kZXhdKVxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vcGFyYWdyYXBoLWVkaXRvci9pbmRleCcsIHtpc0VkaXRvcjogdHJ1ZSwgaW5kZXg6IGluZGV4LCBlbGVtZW50OiBkYXRhU3RyfSlcbiAgICAgIH0sXG4gICAgICBjbGlja2VkQWRkQnV0dG9uKG51bSkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbk9mZnNldFkgPSBudW0uY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyAzNVxuICAgICAgICB0aGlzLmN1cnJlbnRBZGRJbmRleCA9IG51bS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIH0sXG4gICAgICBjbGlja2VkT3RoZXJWaWV3KCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbk9mZnNldFkgPSAtMVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRBZGRDb250ZW50QnV0dG9uKCkge1xuICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludCh0aGlzLmN1cnJlbnRBZGRJbmRleCkgPT09IC0xID8gdGhpcy5jb250ZW50cy5sZW5ndGggOiB0aGlzLmN1cnJlbnRBZGRJbmRleFxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vcGFyYWdyYXBoLWVkaXRvci9pbmRleCcsIHtpc0VkaXRvcjogZmFsc2UsIGluZGV4OiBpbmRleH0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZEFkZEltYWdlQnV0dG9uKG51bSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIGNvdW50OiA5LCAvLyDpu5jorqQ5XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSByZXMudGVtcEZpbGVQYXRoc1xuXG4gICAgICAgICAgICAvLyDkuIrkvKDlm77niYdcblxuICAgICAgICAgICAgLy8g5re75Yqg5Yiw5pWw57uEXG4gICAgICAgICAgICBsZXQgY29udGVudEluZm8gPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAxLFxuICAgICAgICAgICAgICBpbWdzOiBpbWFnZXMsXG4gICAgICAgICAgICAgIGVsZW1lbnRJZDogcGFyc2VJbnQoc2VsZi5jdXJyZW50QWRkSW5kZXgpID09PSAtMSA/IHNlbGYuY29udGVudHMubGVuZ3RoIDogc2VsZi5jdXJyZW50QWRkSW5kZXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IENIQU5HRV9QQVJBR1JBR0hfREFUQSwgZWxlbWVudDogY29udGVudEluZm8gfSlcblxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbGlja2VkQ3VycmVudFRhZyh2YWx1ZSwgZXZ0KSB7XG4gICAgICAgIGxldCBpbmZvID0gdXRpbHMuZ2V0U2VsZWN0VGFnc0luZm8odGhpcy50YWJzLCB0aGlzLnNlbGVjdFRhZ3MsIHBhcnNlSW50KHZhbHVlLmN1cnJlbnRUYXJnZXQuaWQpLCAzKVxuICAgICAgICB0aGlzLnRhYnMgPSBpbmZvLnRhYnNcbiAgICAgICAgdGhpcy5zZWxlY3RUYWdzID0gaW5mby5zZWxlY3RUYWdzXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6IENIQU5HRV9DT05URU5UX1RBR19MSVNULCB0YWdMaXN0OiB0aGlzLnNlbGVjdFRhZ3N9KVxuICAgICAgfSxcbiAgICAgIGNsaWNrZWRTeW5jU3F1YXJlKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3luYyA9ICF0aGlzLnNlbGVjdGVkU3luY1xuICAgICAgfSxcbiAgICAgIGNsaWNrZWREZWxldGVDb250ZW50QnV0dG9uKG51bSkge1xuICAgICAgICBsZXQgaW5kZXggPSBudW0uY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBjb250ZW50OiAn56Gu5a6a6KaB5Yig6Zmk5ZCX77yfJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICBzZWxmLmNvbnRlbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZERlbGV0ZVBvaUJ1dHRvbigpIHtcbiAgICAgICAgbGV0IGNsaWNrZWRJdGVtID0gdmFsdWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZm9cbiAgICAgICAgdGhpcy5zZWxlY3RQb2lzID0gdXRpbHMuZGVsZXRlQ2l0eUZyb21BcnJheSh0aGlzLnNlbGVjdFBvaXMsIGNsaWNrZWRJdGVtLCAob2xkLCBuZXdzKSA9PiBvbGQucG9pTmFtZSA9PT0gbmV3cy5wb2lOYW1lKVxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHt0eXBlOiBDSEFOR0VfQ09OVEVOVF9QT0lfTElTVCwgcG9pTGlzdDogdGhpcy5zZWxlY3RQb2lzfSlcbiAgICAgIH0sXG4gICAgICBjbGlja2VkQWRkUG9pQnV0dG9uKCkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi4vLi4vc3BhY2UvYWRkLWRlc3RpbmF0aW9uL2luZGV4Jywge30pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZERlbGV0ZUNvbnRlbnRJbWdCdXR0b24obnVtKSB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9IHRoaXMuY29udGVudHNbbnVtLmN1cnJlbnRJbmRleF1cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTlkJfvvJ8nLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5lbGVtZW50VHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmltZ3Muc3BsaWNlKG51bS5pbWdJbmRleCwgMSlcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRlbnRzW251bS5pbWdJbmRleF0gPSBjdXJyZW50SXRlbVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmltZ3MubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRlbnRzLnNwbGljZShudW0uY3VycmVudEluZGV4LCAxKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2xpY2tlZFNvcnRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuLi9zb3J0LWVkaXRvci9pbmRleCcsIHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLnRpdGxlID0gb3B0aW9ucy50aXRsZVxuICAgICAgdGhpcy50YWJzID0gdGVzdC50ZXN0VGFiRGF0YVxuICAgICAgdGhpcy5zb3VyY2VUeXBlID0gb3B0aW9ucy50eXBlXG4gICAgICB0aGlzLnNlbGVjdGVkU3luYyA9ICh0aGlzLnNvdXJjZVR5cGUgPT09ICdzcGFjZScpXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpXG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbiAgICAgIHRoaXMudGl0bGUgPSBzdGF0ZS5lZGl0b3IudGl0bGVcbiAgICAgIHRoaXMuY29udGVudHMgPSBzdGF0ZS5lZGl0b3IuY29udGVudHNcbiAgICAgIHRoaXMuc2VsZWN0VGFncyA9IHN0YXRlLmVkaXRvci50YWdMaXN0XG5cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogdXRpbHMuY2l0eVN0b3JhZ2VLZXksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBjYWxsYmFjayA9IChvbGQsIG5ld3MpID0+IG9sZC5wb2lOYW1lID09PSBuZXdzLnBvaU5hbWVcbiAgICAgICAgICBzZWxmLnNlbGVjdFBvaXMgPSB1dGlscy5yZUNvbnRydWN0U2VsZWN0Q2l0eXMoc2VsZi5zZWxlY3RQb2lzLCByZXMuZGF0YSwgY2FsbGJhY2spXG4gICAgICAgICAgc2VsZi5zdG9yZS5kaXNwYXRjaCh7dHlwZTogQ0hBTkdFX0NPTlRFTlRfUE9JX0xJU1QsIHBvaUxpc3Q6IHRoaXMuc2VsZWN0UG9pc30pXG5cbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IHV0aWxzLmNpdHlTdG9yYWdlS2V5LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblVubG9hZCgpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6IEVESVRPUl9DT05URU5UX0NMRUFSfSlcbiAgICB9XG4gIH1cbiJdfQ==