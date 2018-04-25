'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editorNewSpace = exports.getSpaceList = exports.getUsersCount = undefined;

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _space = require('./../types/space.js');

var getUsersCount = (0, _reduxActions.createAction)(_space.SPACE_HOME_USERS, function (userId) {
  return new Promise(function (resolve) {
    wx.request({
      url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/users?{"userId":' + userId + '}',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        if (res.data.data !== null) {
          resolve && resolve(res.data.data.users);
        }
      },
      fail: function fail(e) {
        console.log(e);
      },
      complete: function complete(e) {
        console.log(e);
      }
    });
  });
});

var getSpaceList = (0, _reduxActions.createAction)(_space.SPACE_LIST, function (userId) {
  return new Promise(function (resolve) {
    wx.request({
      url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/list?{"userId":' + userId + '}',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        if (res.data.data !== null) {
          resolve && resolve(res.data.data.dataList);
        }
      },
      fail: function fail(e) {
        console.log(e);
      },
      complete: function complete(e) {
        console.log(e);
      }
    });
  });
});

var editorNewSpace = (0, _reduxActions.createAction)(_space.SPACE_EDITOR, function (spaceInfo) {
  return new Promise(function (resolve) {
    wx.request({
      url: 'http://cmt-tgsp.api.tuniu-sst.org/tgsp/space/add',
      method: 'POST',
      data: spaceInfo,
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        if (res.data.data !== null) {
          wx.showToast({
            title: '创建成功',
            icon: 'none',
            duration: 2000
          });
          wx.navigateBack();
          resolve && resolve(res.data.data.dataList);
        }
      },
      fail: function fail(e) {
        wx.showToast({
          title: '创建失败',
          icon: 'none',
          duration: 2000
        });
        console.log(e);
      },
      complete: function complete(e) {
        console.log(e);
      }
    });
  });
});

exports.getUsersCount = getUsersCount;
exports.getSpaceList = getSpaceList;
exports.editorNewSpace = editorNewSpace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLmpzIl0sIm5hbWVzIjpbImdldFVzZXJzQ291bnQiLCJ1c2VySWQiLCJQcm9taXNlIiwid3giLCJyZXF1ZXN0IiwidXJsIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImRhdGEiLCJyZXNvbHZlIiwidXNlcnMiLCJmYWlsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsImdldFNwYWNlTGlzdCIsImRhdGFMaXN0IiwiZWRpdG9yTmV3U3BhY2UiLCJzcGFjZUluZm8iLCJtZXRob2QiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm5hdmlnYXRlQmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQU1BLElBQU1BLGdCQUFnQix5REFBK0IsVUFBQ0MsTUFBRCxFQUFZO0FBQy9ELFNBQU8sSUFBSUMsT0FBSixDQUFZLG1CQUFXO0FBQzVCQyxPQUFHQyxPQUFILENBQVc7QUFDVEMsNkVBQXFFSixNQUFyRSxNQURTO0FBRVRLLGNBQVE7QUFDTix3QkFBZ0I7QUFEVixPQUZDO0FBS1RDLGVBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixZQUFJQSxJQUFJQyxJQUFKLENBQVNBLElBQVQsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUJDLHFCQUFXQSxRQUFRRixJQUFJQyxJQUFKLENBQVNBLElBQVQsQ0FBY0UsS0FBdEIsQ0FBWDtBQUNEO0FBQ0YsT0FUUTtBQVVUQyxZQUFNLGNBQVVDLENBQVYsRUFBYTtBQUNqQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELE9BWlE7QUFhVEcsZ0JBQVUsa0JBQVVILENBQVYsRUFBYTtBQUNyQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBZlEsS0FBWDtBQWlCRCxHQWxCTSxDQUFQO0FBbUJELENBcEJxQixDQUF0Qjs7QUFzQkEsSUFBTUksZUFBZSxtREFBeUIsVUFBQ2hCLE1BQUQsRUFBWTtBQUN4RCxTQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUM1QkMsT0FBR0MsT0FBSCxDQUFXO0FBQ1RDLDRFQUFvRUosTUFBcEUsTUFEUztBQUVUSyxjQUFRO0FBQ04sd0JBQWdCO0FBRFYsT0FGQztBQUtUQyxlQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsWUFBSUEsSUFBSUMsSUFBSixDQUFTQSxJQUFULEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCQyxxQkFBV0EsUUFBUUYsSUFBSUMsSUFBSixDQUFTQSxJQUFULENBQWNTLFFBQXRCLENBQVg7QUFDRDtBQUNGLE9BVFE7QUFVVE4sWUFBTSxjQUFVQyxDQUFWLEVBQWE7QUFDakJDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRCxPQVpRO0FBYVRHLGdCQUFVLGtCQUFVSCxDQUFWLEVBQWE7QUFDckJDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQWZRLEtBQVg7QUFpQkQsR0FsQk0sQ0FBUDtBQW1CRCxDQXBCb0IsQ0FBckI7O0FBc0JBLElBQU1NLGlCQUFpQixxREFBMkIsVUFBQ0MsU0FBRCxFQUFlO0FBQy9ELFNBQU8sSUFBSWxCLE9BQUosQ0FBWSxtQkFBVztBQUM1QkMsT0FBR0MsT0FBSCxDQUFXO0FBQ1RDLDZEQURTO0FBRVRnQixjQUFRLE1BRkM7QUFHVFosWUFBTVcsU0FIRztBQUlUZCxjQUFRO0FBQ04sd0JBQWdCO0FBRFYsT0FKQztBQU9UQyxlQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsWUFBSUEsSUFBSUMsSUFBSixDQUFTQSxJQUFULEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCTixhQUFHbUIsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLE1BREk7QUFFWEMsa0JBQU0sTUFGSztBQUdYQyxzQkFBVTtBQUhDLFdBQWI7QUFLQXRCLGFBQUd1QixZQUFIO0FBQ0FoQixxQkFBV0EsUUFBUUYsSUFBSUMsSUFBSixDQUFTQSxJQUFULENBQWNTLFFBQXRCLENBQVg7QUFDRDtBQUNGLE9BakJRO0FBa0JUTixZQUFNLGNBQVVDLENBQVYsRUFBYTtBQUNqQlYsV0FBR21CLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxNQURJO0FBRVhDLGdCQUFNLE1BRks7QUFHWEMsb0JBQVU7QUFIQyxTQUFiO0FBS0FYLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDRCxPQXpCUTtBQTBCVEcsZ0JBQVUsa0JBQVVILENBQVYsRUFBYTtBQUNyQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBNUJRLEtBQVg7QUE4QkQsR0EvQk0sQ0FBUDtBQWdDRCxDQWpDc0IsQ0FBdkI7O1FBb0NFYixhLEdBQUFBLGE7UUFDQWlCLFksR0FBQUEsWTtRQUNBRSxjLEdBQUFBLGMiLCJmaWxlIjoic3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuXG5pbXBvcnQge1xuICBTUEFDRV9IT01FX1VTRVJTLFxuICBTUEFDRV9MSVNULFxuICBTUEFDRV9FRElUT1Jcbn0gZnJvbSAnLi4vdHlwZXMvc3BhY2UnXG5cbmNvbnN0IGdldFVzZXJzQ291bnQgPSBjcmVhdGVBY3Rpb24oU1BBQ0VfSE9NRV9VU0VSUywgKHVzZXJJZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vY210LXRnc3AuYXBpLnR1bml1LXNzdC5vcmcvdGdzcC9zcGFjZS91c2Vycz97XCJ1c2VySWRcIjoke3VzZXJJZH19YCxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShyZXMuZGF0YS5kYXRhLnVzZXJzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmNvbnN0IGdldFNwYWNlTGlzdCA9IGNyZWF0ZUFjdGlvbihTUEFDRV9MSVNULCAodXNlcklkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9jbXQtdGdzcC5hcGkudHVuaXUtc3N0Lm9yZy90Z3NwL3NwYWNlL2xpc3Q/e1widXNlcklkXCI6JHt1c2VySWR9fWAsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUocmVzLmRhdGEuZGF0YS5kYXRhTGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5jb25zdCBlZGl0b3JOZXdTcGFjZSA9IGNyZWF0ZUFjdGlvbihTUEFDRV9FRElUT1IsIChzcGFjZUluZm8pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2NtdC10Z3NwLmFwaS50dW5pdS1zc3Qub3JnL3Rnc3Avc3BhY2UvYWRkYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogc3BhY2VJbmZvLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yib5bu65oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShyZXMuZGF0YS5kYXRhLmRhdGFMaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfliJvlu7rlpLHotKUnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5leHBvcnQge1xuICBnZXRVc2Vyc0NvdW50LFxuICBnZXRTcGFjZUxpc3QsXG4gIGVkaXRvck5ld1NwYWNlXG59XG4iXX0=