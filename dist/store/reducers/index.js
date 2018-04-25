'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./../../npm/redux/lib/index.js');

var _counter = require('./counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _mine = require('./mine.js');

var _mine2 = _interopRequireDefault(_mine);

var _editor = require('./editor.js');

var _editor2 = _interopRequireDefault(_editor);

var _request = require('./request.js');

var _request2 = _interopRequireDefault(_request);

var _space = require('./space.js');

var _space2 = _interopRequireDefault(_space);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  mine: _mine2.default,
  editor: _editor2.default,
  request: _request2.default,
  space: _space2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJtaW5lIiwiZWRpdG9yIiwicmVxdWVzdCIsInNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCQSw0QkFENkI7QUFFN0JDLHNCQUY2QjtBQUc3QkMsMEJBSDZCO0FBSTdCQyw0QkFKNkI7QUFLN0JDO0FBTDZCLENBQWhCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlcidcbmltcG9ydCBtaW5lIGZyb20gJy4vbWluZSdcbmltcG9ydCBlZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnXG5pbXBvcnQgc3BhY2UgZnJvbSAnLi9zcGFjZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgY291bnRlcixcbiAgbWluZSxcbiAgZWRpdG9yLFxuICByZXF1ZXN0LFxuICBzcGFjZSxcbn0pXG4iXX0=