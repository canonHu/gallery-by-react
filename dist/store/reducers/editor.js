'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _editor = require('./../types/editor.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var constructElementInfo = function constructElementInfo(data) {
  var element = void 0;
  switch (data.elementType) {
    case 0:
      {
        element = {
          elementType: 0,
          title: data.title,
          content: data.content,
          elementId: data.elementId
        };
      }
      break;
    case 1:
      {
        element = {
          elementType: 1,
          imgs: data.imgs,
          elementId: data.elementId
        };
      }
      break;
    default:
      break;
  }

  return element;
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _editor.EDITOR_CONTENT_CLEAR, function (state, action) {
  return _extends({}, state, {
    title: '',
    contents: [],
    poiList: [],
    tagList: []
  });
}), _defineProperty(_handleActions, _editor.CHANGE_PARAGRAGH_DATA, function (state, action) {

  var data = action.payload !== undefined ? action.payload.source.data : action.element;

  if (data.elementType === 0) {
    if (data.content.length <= 0) {
      wx.showToast({
        title: '没有填正文',
        icon: 'none',
        duration: 2000
      });

      return;
    } else {
      wx.navigateBack();
    }
  }

  var element = constructElementInfo(data);

  if (data.isEditor === true) {
    state.contents[element.elementId] = element;
  } else if (state.contents.length === element.elementId) {
    state.contents.push(element);
  } else {
    state.contents.splice(element.elementId, 0, element);
  }

  return _extends({}, state, {
    contents: state.contents
  });
}), _defineProperty(_handleActions, _editor.CHANGE_CONTENT_TITLE, function (state, action) {
  var title = state.title;
  if (action.payload.source.data.title.length <= 0) {
    wx.showToast({
      title: '标题不能为空',
      icon: 'none',
      duration: 2000
    });
  } else {
    title = action.payload.source.data.title;

    if (action.payload.source.data.isEditor === true) {
      wx.navigateBack();
    } else {
      wx.redirectTo({
        url: '../content-editor/index?type=' + action.payload.source.data.type + '&spacePois=' + action.payload.source.data.spacePois
      });
    }
  }

  return _extends({}, state, {
    title: title
  });
}), _defineProperty(_handleActions, _editor.CHANGE_CONTENT_POI_LIST, function (state, action) {
  return _extends({}, state, {
    poiList: action.poiList
  });
}), _defineProperty(_handleActions, _editor.CHANGE_CONTENT_TAG_LIST, function (state, action) {
  return _extends({}, state, {
    tagList: action.tagList
  });
}), _handleActions), {
  title: '',
  contents: [],
  poiList: [],
  tagList: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RFbGVtZW50SW5mbyIsImVsZW1lbnQiLCJkYXRhIiwiZWxlbWVudFR5cGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJlbGVtZW50SWQiLCJpbWdzIiwic3RhdGUiLCJhY3Rpb24iLCJjb250ZW50cyIsInBvaUxpc3QiLCJ0YWdMaXN0IiwicGF5bG9hZCIsInVuZGVmaW5lZCIsInNvdXJjZSIsImxlbmd0aCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwibmF2aWdhdGVCYWNrIiwiaXNFZGl0b3IiLCJwdXNoIiwic3BsaWNlIiwicmVkaXJlY3RUbyIsInVybCIsInR5cGUiLCJzcGFjZVBvaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQVNBLElBQUlBLHVCQUF1QixTQUF2QkEsb0JBQXVCLE9BQVE7QUFDakMsTUFBSUMsZ0JBQUo7QUFDQSxVQUFRQyxLQUFLQyxXQUFiO0FBQ0UsU0FBSyxDQUFMO0FBQ0E7QUFDRUYsa0JBQVU7QUFDUkUsdUJBQWEsQ0FETDtBQUVSQyxpQkFBT0YsS0FBS0UsS0FGSjtBQUdSQyxtQkFBU0gsS0FBS0csT0FITjtBQUlSQyxxQkFBV0osS0FBS0k7QUFKUixTQUFWO0FBTUQ7QUFDQztBQUNGLFNBQUssQ0FBTDtBQUNBO0FBQ0VMLGtCQUFVO0FBQ1JFLHVCQUFhLENBREw7QUFFUkksZ0JBQU1MLEtBQUtLLElBRkg7QUFHUkQscUJBQVdKLEtBQUtJO0FBSFIsU0FBVjtBQUtEO0FBQ0M7QUFDRjtBQUNFO0FBckJKOztBQXdCQSxTQUFPTCxPQUFQO0FBQ0QsQ0EzQkQ7O2tCQTZCZSwrSEFDV08sS0FEWCxFQUNrQkMsTUFEbEIsRUFDMEI7QUFDckMsc0JBQ0tELEtBREw7QUFFRUosV0FBTyxFQUZUO0FBR0VNLGNBQVUsRUFIWjtBQUlFQyxhQUFTLEVBSlg7QUFLRUMsYUFBUztBQUxYO0FBT0QsQ0FUWSw0RUFVWUosS0FWWixFQVVtQkMsTUFWbkIsRUFVMkI7O0FBRXRDLE1BQUlQLE9BQU9PLE9BQU9JLE9BQVAsS0FBbUJDLFNBQW5CLEdBQStCTCxPQUFPSSxPQUFQLENBQWVFLE1BQWYsQ0FBc0JiLElBQXJELEdBQTRETyxPQUFPUixPQUE5RTs7QUFFQSxNQUFHQyxLQUFLQyxXQUFMLEtBQXFCLENBQXhCLEVBQTJCO0FBQ3pCLFFBQUlELEtBQUtHLE9BQUwsQ0FBYVcsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM1QkMsU0FBR0MsU0FBSCxDQUFhO0FBQ1hkLGVBQU8sT0FESTtBQUVYZSxjQUFNLE1BRks7QUFHWEMsa0JBQVU7QUFIQyxPQUFiOztBQU1BO0FBQ0QsS0FSRCxNQVFPO0FBQ0xILFNBQUdJLFlBQUg7QUFDRDtBQUNGOztBQUVELE1BQUlwQixVQUFVRCxxQkFBcUJFLElBQXJCLENBQWQ7O0FBRUEsTUFBSUEsS0FBS29CLFFBQUwsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUJkLFVBQU1FLFFBQU4sQ0FBZVQsUUFBUUssU0FBdkIsSUFBb0NMLE9BQXBDO0FBQ0QsR0FGRCxNQUVPLElBQUlPLE1BQU1FLFFBQU4sQ0FBZU0sTUFBZixLQUEwQmYsUUFBUUssU0FBdEMsRUFBaUQ7QUFDdERFLFVBQU1FLFFBQU4sQ0FBZWEsSUFBZixDQUFvQnRCLE9BQXBCO0FBQ0QsR0FGTSxNQUVBO0FBQ0xPLFVBQU1FLFFBQU4sQ0FBZWMsTUFBZixDQUFzQnZCLFFBQVFLLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDTCxPQUE1QztBQUNEOztBQUVELHNCQUNLTyxLQURMO0FBRUVFLGNBQVVGLE1BQU1FO0FBRmxCO0FBSUQsQ0ExQ1ksMkVBNENXRixLQTVDWCxFQTRDa0JDLE1BNUNsQixFQTRDMEI7QUFDckMsTUFBSUwsUUFBUUksTUFBTUosS0FBbEI7QUFDQSxNQUFJSyxPQUFPSSxPQUFQLENBQWVFLE1BQWYsQ0FBc0JiLElBQXRCLENBQTJCRSxLQUEzQixDQUFpQ1ksTUFBakMsSUFBMkMsQ0FBL0MsRUFBa0Q7QUFDaERDLE9BQUdDLFNBQUgsQ0FBYTtBQUNYZCxhQUFPLFFBREk7QUFFWGUsWUFBTSxNQUZLO0FBR1hDLGdCQUFVO0FBSEMsS0FBYjtBQUtELEdBTkQsTUFNTztBQUNMaEIsWUFBUUssT0FBT0ksT0FBUCxDQUFlRSxNQUFmLENBQXNCYixJQUF0QixDQUEyQkUsS0FBbkM7O0FBRUEsUUFBSUssT0FBT0ksT0FBUCxDQUFlRSxNQUFmLENBQXNCYixJQUF0QixDQUEyQm9CLFFBQTNCLEtBQXdDLElBQTVDLEVBQWtEO0FBQ2hETCxTQUFHSSxZQUFIO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKLFNBQUdRLFVBQUgsQ0FBYztBQUNaQywrQ0FBcUNqQixPQUFPSSxPQUFQLENBQWVFLE1BQWYsQ0FBc0JiLElBQXRCLENBQTJCeUIsSUFBaEUsbUJBQWtGbEIsT0FBT0ksT0FBUCxDQUFlRSxNQUFmLENBQXNCYixJQUF0QixDQUEyQjBCO0FBRGpHLE9BQWQ7QUFHRDtBQUNGOztBQUVELHNCQUNLcEIsS0FETDtBQUVFSixXQUFPQTtBQUZUO0FBSUQsQ0FwRVksOEVBc0VjSSxLQXRFZCxFQXNFcUJDLE1BdEVyQixFQXNFNkI7QUFDeEMsc0JBQ0tELEtBREw7QUFFRUcsYUFBU0YsT0FBT0U7QUFGbEI7QUFJRCxDQTNFWSw4RUE2RWNILEtBN0VkLEVBNkVxQkMsTUE3RXJCLEVBNkU2QjtBQUN4QyxzQkFDS0QsS0FETDtBQUVFSSxhQUFTSCxPQUFPRztBQUZsQjtBQUlELENBbEZZLG9CQW1GWjtBQUNEUixTQUFPLEVBRE47QUFFRE0sWUFBVSxFQUZUO0FBR0RDLFdBQVMsRUFIUjtBQUlEQyxXQUFTO0FBSlIsQ0FuRlksQyIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmltcG9ydCB7XG4gIENIQU5HRV9QQVJBR1JBR0hfREFUQSxcbiAgQ0hBTkdFX0NPTlRFTlRfVElUTEUsXG4gIENIQU5HRV9DT05URU5UX1BPSV9MSVNULFxuICBDSEFOR0VfQ09OVEVOVF9UQUdfTElTVCxcbiAgRURJVE9SX0NPTlRFTlRfQ0xFQVJcbn0gZnJvbSAnLi4vdHlwZXMvZWRpdG9yJ1xuXG5cbmxldCBjb25zdHJ1Y3RFbGVtZW50SW5mbyA9IGRhdGEgPT4ge1xuICBsZXQgZWxlbWVudFxuICBzd2l0Y2ggKGRhdGEuZWxlbWVudFR5cGUpIHtcbiAgICBjYXNlIDA6XG4gICAge1xuICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgIGVsZW1lbnRJZDogZGF0YS5lbGVtZW50SWQsXG4gICAgICB9XG4gICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIDE6XG4gICAge1xuICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDEsXG4gICAgICAgIGltZ3M6IGRhdGEuaW1ncyxcbiAgICAgICAgZWxlbWVudElkOiBkYXRhLmVsZW1lbnRJZCxcbiAgICAgIH1cbiAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtFRElUT1JfQ09OVEVOVF9DTEVBUl0gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250ZW50czogW10sXG4gICAgICBwb2lMaXN0OiBbXSxcbiAgICAgIHRhZ0xpc3Q6IFtdLFxuICAgIH1cbiAgfSxcbiAgW0NIQU5HRV9QQVJBR1JBR0hfREFUQV0gKHN0YXRlLCBhY3Rpb24pIHtcblxuICAgIGxldCBkYXRhID0gYWN0aW9uLnBheWxvYWQgIT09IHVuZGVmaW5lZCA/IGFjdGlvbi5wYXlsb2FkLnNvdXJjZS5kYXRhIDogYWN0aW9uLmVsZW1lbnRcblxuICAgIGlmKGRhdGEuZWxlbWVudFR5cGUgPT09IDApIHtcbiAgICAgIGlmIChkYXRhLmNvbnRlbnQubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ayoeacieWhq+ato+aWhycsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBlbGVtZW50ID0gY29uc3RydWN0RWxlbWVudEluZm8oZGF0YSlcblxuICAgIGlmIChkYXRhLmlzRWRpdG9yID09PSB0cnVlKSB7XG4gICAgICBzdGF0ZS5jb250ZW50c1tlbGVtZW50LmVsZW1lbnRJZF0gPSBlbGVtZW50XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5jb250ZW50cy5sZW5ndGggPT09IGVsZW1lbnQuZWxlbWVudElkKSB7XG4gICAgICBzdGF0ZS5jb250ZW50cy5wdXNoKGVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmNvbnRlbnRzLnNwbGljZShlbGVtZW50LmVsZW1lbnRJZCwgMCwgZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjb250ZW50czogc3RhdGUuY29udGVudHNcbiAgICB9XG4gIH0sXG5cbiAgW0NIQU5HRV9DT05URU5UX1RJVExFXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIGxldCB0aXRsZSA9IHN0YXRlLnRpdGxlXG4gICAgaWYgKGFjdGlvbi5wYXlsb2FkLnNvdXJjZS5kYXRhLnRpdGxlLmxlbmd0aCA8PSAwKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+agh+mimOS4jeiDveS4uuepuicsXG4gICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gYWN0aW9uLnBheWxvYWQuc291cmNlLmRhdGEudGl0bGVcblxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnNvdXJjZS5kYXRhLmlzRWRpdG9yID09PSB0cnVlKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IGAuLi9jb250ZW50LWVkaXRvci9pbmRleD90eXBlPSR7YWN0aW9uLnBheWxvYWQuc291cmNlLmRhdGEudHlwZX0mc3BhY2VQb2lzPSR7YWN0aW9uLnBheWxvYWQuc291cmNlLmRhdGEuc3BhY2VQb2lzfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB0aXRsZTogdGl0bGVcbiAgICB9XG4gIH0sXG5cbiAgW0NIQU5HRV9DT05URU5UX1BPSV9MSVNUXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHBvaUxpc3Q6IGFjdGlvbi5wb2lMaXN0XG4gICAgfVxuICB9LFxuXG4gIFtDSEFOR0VfQ09OVEVOVF9UQUdfTElTVF0gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB0YWdMaXN0OiBhY3Rpb24udGFnTGlzdFxuICAgIH1cbiAgfVxufSwge1xuICB0aXRsZTogJycsXG4gIGNvbnRlbnRzOiBbXSxcbiAgcG9pTGlzdDogW10sXG4gIHRhZ0xpc3Q6IFtdLFxufSlcbiJdfQ==