'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// 模拟数据


var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mine = require('./../types/mine.js');

var _testJson = require('./../../mixins/testJson.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var jsonData = function jsonData(res) {
  var dataList = res.data.list;
  dataList.forEach(function (item, i) {
    item.flag = true;
    item.imageNumber = 0;
    item.imagesList = [];
    item.elementContent = '';
    item.imagesNumberFlag = false;
  });

  dataList.forEach(function (detail, j) {
    detail.elements.forEach(function (item, i) {
      if (item.elementId === 0) {
        detail.elementContent = item.content;
      } else if (item.elementId === 1) {
        item.imgs.forEach(function (value, index) {
          detail.imageNumber++;
          if (detail.imagesList.length < 3) {
            detail.imagesList.push(value.imgUrl);
            if (detail.imagesList.length === 3) {
              detail.imagesNumberFlag = true;
            }
          } else {
            detail.imagesNumberFlag = true;
          }
        });
      }
    });
  });

  return dataList;
};

var mutations = (_mutations = {}, _defineProperty(_mutations, _mine.CHANGE_NAME, function (state, action) {

  return _extends({}, state, {
    nickName: action.payload
  });
}), _defineProperty(_mutations, _mine.RES_DATA, function (state, action) {
  var dataList = [];
  if (_testJson.responseCollection.success) {
    dataList = jsonData(_testJson.responseCollection);
  }

  return _extends({}, state, {
    resList: dataList
  });
}), _defineProperty(_mutations, _mine.CANCEL, function (state, action) {
  wx.showToast({
    title: '删除成功',
    icon: 'none',
    duration: 2000
  });

  return _extends({}, state);
}), _mutations);

var changeState = {
  nickName: '',
  resList: null
};

exports.default = (0, _reduxActions.handleActions)(mutations, changeState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsianNvbkRhdGEiLCJkYXRhTGlzdCIsInJlcyIsImRhdGEiLCJsaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwiZmxhZyIsImltYWdlTnVtYmVyIiwiaW1hZ2VzTGlzdCIsImVsZW1lbnRDb250ZW50IiwiaW1hZ2VzTnVtYmVyRmxhZyIsImRldGFpbCIsImoiLCJlbGVtZW50cyIsImVsZW1lbnRJZCIsImNvbnRlbnQiLCJpbWdzIiwidmFsdWUiLCJpbmRleCIsImxlbmd0aCIsInB1c2giLCJpbWdVcmwiLCJtdXRhdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsIm5pY2tOYW1lIiwicGF5bG9hZCIsInN1Y2Nlc3MiLCJyZXNMaXN0Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNoYW5nZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUE7OztBQUpBOztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7OztBQUVBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxNQUFPO0FBQ3BCLE1BQUlDLFdBQVdDLElBQUlDLElBQUosQ0FBU0MsSUFBeEI7QUFDQUgsV0FBU0ksT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUM1QkQsU0FBS0UsSUFBTCxHQUFZLElBQVo7QUFDQUYsU0FBS0csV0FBTCxHQUFtQixDQUFuQjtBQUNBSCxTQUFLSSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0FKLFNBQUtLLGNBQUwsR0FBc0IsRUFBdEI7QUFDQUwsU0FBS00sZ0JBQUwsR0FBd0IsS0FBeEI7QUFDRCxHQU5EOztBQVFBWCxXQUFTSSxPQUFULENBQWlCLFVBQUNRLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQzlCRCxXQUFPRSxRQUFQLENBQWdCVixPQUFoQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNuQyxVQUFJRCxLQUFLVSxTQUFMLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCSCxlQUFPRixjQUFQLEdBQXdCTCxLQUFLVyxPQUE3QjtBQUNELE9BRkQsTUFFTyxJQUFJWCxLQUFLVSxTQUFMLEtBQW1CLENBQXZCLEVBQTBCO0FBQy9CVixhQUFLWSxJQUFMLENBQVViLE9BQVYsQ0FBa0IsVUFBQ2MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ2xDUCxpQkFBT0osV0FBUDtBQUNBLGNBQUlJLE9BQU9ILFVBQVAsQ0FBa0JXLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2hDUixtQkFBT0gsVUFBUCxDQUFrQlksSUFBbEIsQ0FBdUJILE1BQU1JLE1BQTdCO0FBQ0EsZ0JBQUlWLE9BQU9ILFVBQVAsQ0FBa0JXLE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2xDUixxQkFBT0QsZ0JBQVAsR0FBMEIsSUFBMUI7QUFDRDtBQUNGLFdBTEQsTUFLTztBQUNMQyxtQkFBT0QsZ0JBQVAsR0FBMEIsSUFBMUI7QUFDRDtBQUNGLFNBVkQ7QUFXRDtBQUNGLEtBaEJEO0FBaUJELEdBbEJEOztBQW9CQSxTQUFPWCxRQUFQO0FBQ0QsQ0EvQkQ7O0FBaUNBLElBQU11Qix1RkFDVUMsS0FEVixFQUNpQkMsTUFEakIsRUFDeUI7O0FBRTNCLHNCQUNLRCxLQURMO0FBRUVFLGNBQVVELE9BQU9FO0FBRm5CO0FBSUQsQ0FQRyx5REFTT0gsS0FUUCxFQVNjQyxNQVRkLEVBU3NCO0FBQ3hCLE1BQUl6QixXQUFXLEVBQWY7QUFDQSxNQUFJLDZCQUFtQjRCLE9BQXZCLEVBQWdDO0FBQzlCNUIsZUFBV0Qsc0NBQVg7QUFDRDs7QUFFRCxzQkFDS3lCLEtBREw7QUFFRUssYUFBUzdCO0FBRlg7QUFJRCxDQW5CRyx1REFxQkt3QixLQXJCTCxFQXFCWUMsTUFyQlosRUFxQm9CO0FBQ3RCSyxLQUFHQyxTQUFILENBQWE7QUFDWEMsV0FBTyxNQURJO0FBRVhDLFVBQU0sTUFGSztBQUdYQyxjQUFVO0FBSEMsR0FBYjs7QUFNQSxzQkFDS1YsS0FETDtBQUdELENBL0JHLGNBQU47O0FBa0NBLElBQU1XLGNBQWM7QUFDbEJULFlBQVUsRUFEUTtBQUVsQkcsV0FBUztBQUZTLENBQXBCOztrQkFLZSxpQ0FBY04sU0FBZCxFQUF5QlksV0FBekIsQyIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgQ0hBTkdFX05BTUUsIFJFU19EQVRBLCBDQU5DRUwgfSBmcm9tICcuLi90eXBlcy9taW5lJ1xuXG4vLyDmqKHmi5/mlbDmja5cbmltcG9ydCB7IHJlc3BvbnNlQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL21peGlucy90ZXN0SnNvbidcblxubGV0IGpzb25EYXRhID0gcmVzID0+IHtcbiAgbGV0IGRhdGFMaXN0ID0gcmVzLmRhdGEubGlzdFxuICBkYXRhTGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgaXRlbS5mbGFnID0gdHJ1ZVxuICAgIGl0ZW0uaW1hZ2VOdW1iZXIgPSAwXG4gICAgaXRlbS5pbWFnZXNMaXN0ID0gW11cbiAgICBpdGVtLmVsZW1lbnRDb250ZW50ID0gJydcbiAgICBpdGVtLmltYWdlc051bWJlckZsYWcgPSBmYWxzZVxuICB9KVxuXG4gIGRhdGFMaXN0LmZvckVhY2goKGRldGFpbCwgaikgPT4ge1xuICAgIGRldGFpbC5lbGVtZW50cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaXRlbS5lbGVtZW50SWQgPT09IDApIHtcbiAgICAgICAgZGV0YWlsLmVsZW1lbnRDb250ZW50ID0gaXRlbS5jb250ZW50XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uZWxlbWVudElkID09PSAxKSB7XG4gICAgICAgIGl0ZW0uaW1ncy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBkZXRhaWwuaW1hZ2VOdW1iZXIrK1xuICAgICAgICAgIGlmIChkZXRhaWwuaW1hZ2VzTGlzdC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBkZXRhaWwuaW1hZ2VzTGlzdC5wdXNoKHZhbHVlLmltZ1VybClcbiAgICAgICAgICAgIGlmIChkZXRhaWwuaW1hZ2VzTGlzdC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgZGV0YWlsLmltYWdlc051bWJlckZsYWcgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbC5pbWFnZXNOdW1iZXJGbGFnID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBkYXRhTGlzdFxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gIFtDSEFOR0VfTkFNRV0oc3RhdGUsIGFjdGlvbikge1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG5pY2tOYW1lOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfSxcblxuICBbUkVTX0RBVEFdKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBsZXQgZGF0YUxpc3QgPSBbXVxuICAgIGlmIChyZXNwb25zZUNvbGxlY3Rpb24uc3VjY2Vzcykge1xuICAgICAgZGF0YUxpc3QgPSBqc29uRGF0YShyZXNwb25zZUNvbGxlY3Rpb24pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcmVzTGlzdDogZGF0YUxpc3RcbiAgICB9XG4gIH0sXG5cbiAgW0NBTkNFTF0oc3RhdGUsIGFjdGlvbikge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnycsXG4gICAgICBpY29uOiAnbm9uZScsXG4gICAgICBkdXJhdGlvbjogMjAwMFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGVcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY2hhbmdlU3RhdGUgPSB7XG4gIG5pY2tOYW1lOiAnJyxcbiAgcmVzTGlzdDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKG11dGF0aW9ucywgY2hhbmdlU3RhdGUpXG4iXX0=