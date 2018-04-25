'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _space = require('./../types/space.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _space.SPACE_HOME_USERS, function (state, action) {
  return _extends({}, state, {
    users: action.payload
  });
}), _defineProperty(_handleActions, _space.SPACE_LIST, function (state, action) {
  return _extends({}, state, {
    spaceList: action.payload
  });
}), _defineProperty(_handleActions, _space.SPACE_EDITOR, function (state, action) {
  return _extends({}, state, {
    spaceList: action.payload
  });
}), _handleActions), {
  users: 0,
  spaceList: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidXNlcnMiLCJwYXlsb2FkIiwic3BhY2VMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7a0JBTWUsMEhBQ09BLEtBRFAsRUFDY0MsTUFEZCxFQUNzQjtBQUNqQyxzQkFDS0QsS0FETDtBQUVFRSxXQUFPRCxPQUFPRTtBQUZoQjtBQUlELENBTlksZ0VBUUNILEtBUkQsRUFRUUMsTUFSUixFQVFnQjtBQUMzQixzQkFDS0QsS0FETDtBQUVFSSxlQUFXSCxPQUFPRTtBQUZwQjtBQUlELENBYlksa0VBZUdILEtBZkgsRUFlVUMsTUFmVixFQWVrQjtBQUM3QixzQkFDS0QsS0FETDtBQUVFSSxlQUFXSCxPQUFPRTtBQUZwQjtBQUlELENBcEJZLG9CQXFCWjtBQUNERCxTQUFPLENBRE47QUFFREUsYUFBVztBQUZWLENBckJZLEMiLCJmaWxlIjoic3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7XG4gIFNQQUNFX0hPTUVfVVNFUlMsXG4gIFNQQUNFX0xJU1QsXG4gIFNQQUNFX0VESVRPUlxufSBmcm9tICcuLi90eXBlcy9zcGFjZSdcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtTUEFDRV9IT01FX1VTRVJTXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfSxcblxuICBbU1BBQ0VfTElTVF0gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGFjZUxpc3Q6IGFjdGlvbi5wYXlsb2FkXG4gICAgfVxuICB9LFxuXG4gIFtTUEFDRV9FRElUT1JdIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3BhY2VMaXN0OiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfVxufSwge1xuICB1c2VyczogMCxcbiAgc3BhY2VMaXN0OiBbXSxcbn0pXG4iXX0=