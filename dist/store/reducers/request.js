'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _request = require('./../types/request.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _request.OBTAIN_USER_INFO, function (state, action) {
  return _extends({}, state, {
    userInfo: action.payload
  });
}), {
  userInfo: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ1c2VySW5mbyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7a0JBSWUsMEZBQ09BLEtBRFAsRUFDY0MsTUFEZCxFQUNzQjtBQUNqQyxzQkFDS0QsS0FETDtBQUVFRSxjQUFVRCxPQUFPRTtBQUZuQjtBQUlELENBTlksR0FPWjtBQUNERCxZQUFVO0FBRFQsQ0FQWSxDIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7XG4gIE9CVEFJTl9VU0VSX0lORk9cbn0gZnJvbSAnLi4vdHlwZXMvcmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtPQlRBSU5fVVNFUl9JTkZPXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfVxufSwge1xuICB1c2VySW5mbzoge31cbn0pXG4iXX0=