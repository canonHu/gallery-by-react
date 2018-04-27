let obj = {}

obj.cityStorageKey = 'tn_select_city_cache'

obj.editorTitleKey = 'tn_editor_ecitor_title'
obj.editorParagraphKey = 'tn_editor_ecitor_paragraph'

obj.spaceChangeTag = 'tn_space_detail_change_tag'

obj.spaceSearchPOICache = 'tn_search_poi_space_history'
obj.squareSearchPOICache = 'tn_search_poi_square_history'
obj.spaceSearchContentCache = 'tn_search_content_space_history'
obj.squareSearchContentCache = 'tn_search_content_square_history'

obj.squareIconList = [
  {
    iconImg: '../../../images/tn-wx-pop-content-new.png',
    iconText: '写旅行心得',
    iconUrl: '../../editor/title-editor/index',
    isTab: false
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-history.png',
    iconText: '历史发布',
    iconUrl: '',
    isTab: false
  }
]

obj.spaceIconLit = [
  {
    iconImg: '../../../images/tn-wx-pop-content-new.png',
    iconText: '写旅行心得',
    iconUrl: '../../editor/title-editor/index',
    isTab: false
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-quote.png',
    iconText: '引用广场内容',
    iconUrl: '../../square/square-quote/index',
    isTab: false
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-history.png',
    iconText: '历史发布/收藏',
    iconUrl: '',
    isTab: false
  }
]

/* 当前日期 ：星期N */
obj.getGreateWeek = function (date) {
  if (date) {
    var day = date.getDay()
    var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
    if (day >= 0 && day < 7) {
      return week[day]
    }
  }
  return null
}

obj.getMonthYear = function (date) {
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  return month + '/' + year
}


obj.getPVStr = function (pvCount) {
  let pvStr = ''
  if (pvCount > 10000) {
    pvStr = `${(pvCount / 10000.0).toFixed(2)}万`
  } else {
    pvStr = `${pvCount}`
  }

  return pvStr
}

// 选择标签处理逻辑，
obj.getSelectTagsInfo = function (tabs, selectTags, currentIndex, maxCount) {
  let currentSelect = tabs[currentIndex]

  if (currentSelect.isSelect === true) { // 如果已选择，则取消
    currentSelect.isSelect = false
    tabs[currentIndex] = currentSelect
    for (let i = selectTags.length - 1; i >= 0; i--) {
      let temp = selectTags[i]
      if (temp.id === currentSelect.id) {
        selectTags.splice(i, 1)
      }
    }
  } else if (selectTags.length === maxCount) { // 如果未选择，但是已选择超过maxCount个，提示
    wx.showToast({
      title: `最多选择${maxCount}个哦～`,
      icon: 'none',
      duration: 2000
    })
  } else {  // 否则，取消
    currentSelect.isSelect = true
    tabs[currentIndex] = currentSelect
    selectTags.push(currentSelect)
  }

  return {tabs, selectTags}
}

// 重新构建已选择城市
obj.reContructSelectCitys = function(citys, newItem, judgementCallback) {
  citys = this.deleteCityFromArray(citys, newItem, judgementCallback)
  citys.push(newItem)

  return citys
}

// 删除城市
obj.deleteCityFromArray = function(citys, deleteItem, judgementCallback) {
  let currentIndex = -1
  citys.forEach((item, index) => {
    if (judgementCallback(item, deleteItem)) {
      currentIndex = index
    }
  })

  if (currentIndex !== -1) {
    citys.splice(currentIndex, 1)
  }
  return citys
}

obj.getEffectiveIndex = function(currentIndex, totalCount) {
  return currentIndex >= totalCount ? totalCount - 1 : currentIndex
}

/*关键词匹配*/
obj.matchKeyword = function(key, str){
  if (!obj.haveValue(key) || !obj.haveValue(str)) {
    return str
  }
    let pattern = '(' + obj.escapeRegExChars(key) + ')',
      poiNameReg = new RegExp(pattern, 'gi'),
      result = ''

    let wordArray = str
      .replace(poiNameReg , '#')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .split("")

    wordArray.map((word)=>{
      if(word == "#"){
        result += '<span class="key-text">'+ key + '<span/>'
      }else{
        result += '<span class="common-text">'+ word + '</span>'
      }
    })

    return result
  }
obj.escapeRegExChars = function (value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
}

obj.haveValue = function (strOrArr) {
  if (strOrArr && strOrArr.length > 0) {
    return true
  } else {
    return false
  }
}

module.exports = obj
