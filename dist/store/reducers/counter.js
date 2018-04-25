'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.INCREMENT, function (state) {
  return _extends({}, state, {
    num: state.num + 1
  });
}), _defineProperty(_handleActions, _counter.DECREMENT, function (state) {
  return _extends({}, state, {
    num: state.num - 1
  });
}), _defineProperty(_handleActions, _counter.ASYNC_INCREMENT, function (state, action) {
  return _extends({}, state, {
    asyncNum: state.asyncNum + action.payload
  });
}), _defineProperty(_handleActions, _counter.CHANGE_NAME, function (state, action) {
  wx.navigateBack();

  return _extends({}, state, {
    nickName: action.payload.source.data.name
  });
}), _handleActions), {
  num: 0,
  asyncNum: 0,
  nickName: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJudW0iLCJhY3Rpb24iLCJhc3luY051bSIsInBheWxvYWQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsIm5pY2tOYW1lIiwic291cmNlIiwiZGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztrQkFFZSxxSEFDQUEsS0FEQSxFQUNPO0FBQ2xCLHNCQUNLQSxLQURMO0FBRUVDLFNBQUtELE1BQU1DLEdBQU4sR0FBWTtBQUZuQjtBQUlELENBTlksaUVBT0FELEtBUEEsRUFPTztBQUNsQixzQkFDS0EsS0FETDtBQUVFQyxTQUFLRCxNQUFNQyxHQUFOLEdBQVk7QUFGbkI7QUFJRCxDQVpZLHVFQWFNRCxLQWJOLEVBYWFFLE1BYmIsRUFhcUI7QUFDaEMsc0JBQ0tGLEtBREw7QUFFRUcsY0FBVUgsTUFBTUcsUUFBTixHQUFpQkQsT0FBT0U7QUFGcEM7QUFJRCxDQWxCWSxtRUFtQkVKLEtBbkJGLEVBbUJTRSxNQW5CVCxFQW1CaUI7QUFDNUJHLEtBQUdDLFlBQUg7O0FBRUEsc0JBQ0tOLEtBREw7QUFFRU8sY0FBVUwsT0FBT0UsT0FBUCxDQUFlSSxNQUFmLENBQXNCQyxJQUF0QixDQUEyQkM7QUFGdkM7QUFJRCxDQTFCWSxvQkEyQlo7QUFDRFQsT0FBSyxDQURKO0FBRURFLFlBQVUsQ0FGVDtBQUdESSxZQUFVO0FBSFQsQ0EzQlksQyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCwgQVNZTkNfSU5DUkVNRU5ULCBDSEFOR0VfTkFNRSB9IGZyb20gJy4uL3R5cGVzL2NvdW50ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbSU5DUkVNRU5UXSAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBudW06IHN0YXRlLm51bSArIDFcbiAgICB9XG4gIH0sXG4gIFtERUNSRU1FTlRdIChzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG51bTogc3RhdGUubnVtIC0gMVxuICAgIH1cbiAgfSxcbiAgW0FTWU5DX0lOQ1JFTUVOVF0gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhc3luY051bTogc3RhdGUuYXN5bmNOdW0gKyBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfSxcbiAgW0NIQU5HRV9OQU1FXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmlja05hbWU6IGFjdGlvbi5wYXlsb2FkLnNvdXJjZS5kYXRhLm5hbWVcbiAgICB9XG4gIH1cbn0sIHtcbiAgbnVtOiAwLFxuICBhc3luY051bTogMCxcbiAgbmlja05hbWU6ICcnXG59KSJdfQ==