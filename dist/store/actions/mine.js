'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.changeMineName = undefined;

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _api = require('./../../utils/api.js');

var _mine = require('./../types/mine.js');

var changeMineName = (0, _reduxActions.createAction)(_mine.CHANGE_NAME, function (payload) {
	return new Promise(function (resolve, reject) {
		(0, _api.request)(resolve, reject, payload, 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/guideUser/editUserNickname', function (resolve, res, otherRes) {
			// res 接口返回的数据
			// otherRes 你自己传入的数据

			resolve(otherRes);
		});
	});
});

exports.changeMineName = changeMineName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiY2hhbmdlTWluZU5hbWUiLCJwYXlsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXMiLCJvdGhlclJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUlBLElBQU1BLGlCQUFpQixtREFBMEIsVUFBQ0MsT0FBRCxFQUFhO0FBQzdELFFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QyxvQkFDQ0QsT0FERCxFQUVDQyxNQUZELEVBR0NILE9BSEQsRUFJQyxtRUFKRCxFQUtDLFVBQUNFLE9BQUQsRUFBVUUsR0FBVixFQUFlQyxRQUFmLEVBQTRCO0FBQzNCO0FBQ0E7O0FBRUFILFdBQVFHLFFBQVI7QUFDQSxHQVZGO0FBWUEsRUFiTSxDQUFQO0FBY0EsQ0Fmc0IsQ0FBdkI7O1FBa0JDTixjLEdBQUFBLGMiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHtcblx0Q0hBTkdFX05BTUVcbn0gZnJvbSAnLi4vdHlwZXMvbWluZSdcblxuY29uc3QgY2hhbmdlTWluZU5hbWUgPSBjcmVhdGVBY3Rpb24oQ0hBTkdFX05BTUUsIChwYXlsb2FkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0cmVxdWVzdChcblx0XHRcdHJlc29sdmUsXG5cdFx0XHRyZWplY3QsXG5cdFx0XHRwYXlsb2FkLFxuXHRcdFx0J2h0dHA6Ly9jbXQtdGdzcC5hcGkudHVuaXUtc3N0Lm9yZy90Z3NwL2d1aWRlVXNlci9lZGl0VXNlck5pY2tuYW1lJyxcblx0XHRcdChyZXNvbHZlLCByZXMsIG90aGVyUmVzKSA9PiB7XG5cdFx0XHRcdC8vIHJlcyDmjqXlj6Pov5Tlm57nmoTmlbDmja5cblx0XHRcdFx0Ly8gb3RoZXJSZXMg5L2g6Ieq5bex5Lyg5YWl55qE5pWw5o2uXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlKG90aGVyUmVzKVxuXHRcdFx0fVxuXHRcdClcblx0fSlcbn0pXG5cbmV4cG9ydCB7XG5cdGNoYW5nZU1pbmVOYW1lXG59XG4iXX0=