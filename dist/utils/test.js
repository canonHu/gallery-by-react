'use strict';

var obj = {};

obj.testData = [{
  spaceId: '1',
  spaceName: '日本',
  spaceEnName: 'Japan',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '2',
  spaceName: '泰国',
  spaceEnName: 'Thailand',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '3',
  spaceName: '英国',
  spaceEnName: 'Britain',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '4',
  spaceName: '日本',
  spaceEnName: 'Japan',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '5',
  spaceName: '泰国',
  spaceEnName: 'Thailand',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '6',
  spaceName: '英国',
  spaceEnName: 'Britain',
  authority: 1,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '7',
  spaceName: '日本',
  spaceEnName: 'Japan',
  authority: 0,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '8',
  spaceName: '泰国',
  spaceEnName: 'Thailand',
  authority: 0,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}, {
  spaceId: '9',
  spaceName: '英国',
  spaceEnName: 'Britain',
  authority: 0,
  pv: 13242, // 浏览数
  coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
  hasNew: true
}];

obj.squareIconList = [{
  iconImg: '../../../images/tn-wx-pop-content-new.png',
  iconText: '写旅行心得',
  iconUrl: ''
}, {
  iconImg: '../../../images/tn-wx-pop-content-history.png',
  iconText: '历史发布',
  iconUrl: ''
}];

obj.spaceIconLit = [{
  iconImg: '../../../images/tn-wx-pop-content-new.png',
  iconText: '写旅行心得',
  iconUrl: '../../editor/title-editor/index'
}, {
  iconImg: '../../../images/tn-wx-pop-content-quote.png',
  iconText: '引用广场内容',
  iconUrl: ''
}, {
  iconImg: '../../../images/tn-wx-pop-content-history.png',
  iconText: '历史发布/收藏',
  iconUrl: ''
}];

obj.testSpaceListData = [{
  originId: 1, // 心得原id
  currentId: '1', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '日本公共交通内不能大声喧哗',
  userInfo: {
    userId: 17,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  tagList: [{
    id: 1,
    name: '交通'
  }, {
    id: 2,
    name: '酒店'
  }, {
    id: 3,
    name: '美食'
  }],
  poiList: [{
    "name": "南京",
    "parent_id": 40682,
    "id": 788012,
    "type_id": 23
  }, {
    "name": "南京夫子庙江南贡院",
    "parent_id": 40682,
    "id": 788012,
    "type_id": 23
  }, {
    "name": "南京夫子庙江南贡院",
    "parent_id": 40682,
    "id": 788012,
    "type_id": 23
  }, {
    "name": "南京夫子庙江南贡院",
    "parent_id": 40682,
    "id": 788012,
    "type_id": 23
  }],
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: 8, // 心得原id
  currentId: '2', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 14,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '3', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 14,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 14,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: false, // 是否是引用
  publishTime: '2017/4/3 15:44', // 发布时间
  title: '日本是卡洛斯的咖啡机阿克琉斯阿克苏老地方',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 123523,
  shareCnt: 20,
  shareTitle: '',
  tagList: [{
    id: 6,
    name: '航班行李'
  }, {
    id: 7,
    name: 'WIFI签证退税'
  }],
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '2017/2/30 25:44', // 发布时间
  title: '阿斯顿离开了卡；上岛咖啡；；拉上岛咖啡了；撒大',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '叶问'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 1342,
  shareCnt: 20,
  shareTitle: '',
  tagList: [{
    id: 3,
    name: '美食'
  }, {
    id: 4,
    name: '购物'
  }],
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }, {
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: true, // 是否是引用
  publishTime: '今天 12:33', // 发布时间
  title: '测试标题',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '离开地球表面'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 12353434,
  shareCnt: 20,
  shareTitle: '',
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }, {
    elementType: 1,
    imgs: [{
      imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
    }],
    elementId: 2
  }]
}, {
  originId: '', // 心得原id
  currentId: '', // 当前引用后id
  hasQuote: false, // 是否是引用
  publishTime: '2017/2/24 03:44', // 发布时间
  title: '南家三框架搭建发哈接口收到回复',
  userInfo: {
    userId: 12341234,
    headImage: '../../../images/test.png',
    nickName: '我爱蜗牛'
  },
  hasCollection: true,
  collectionCnt: 100,
  pv: 0,
  shareCnt: 20,
  shareTitle: '',
  tagList: [{
    id: 0,
    name: '贴士'
  }],
  elements: [{
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 0
  }, {
    elementType: 0,
    title: '文字标题asdd',
    content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
    elementId: 1
  }]
}];

obj.testTabData = [{
  id: 0,
  name: '贴士'
}, {
  id: 1,
  name: '交通'
}, {
  id: 2,
  name: '酒店'
}, {
  id: 3,
  name: '美食'
}, {
  id: 4,
  name: '购物'
}, {
  id: 5,
  name: '景点'
}, {
  id: 6,
  name: '航班行李'
}, {
  id: 7,
  name: 'WIFI签证退税'
}];

module.exports = obj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsib2JqIiwidGVzdERhdGEiLCJzcGFjZUlkIiwic3BhY2VOYW1lIiwic3BhY2VFbk5hbWUiLCJhdXRob3JpdHkiLCJwdiIsImNvdmVySW1hZ2VVcmwiLCJoYXNOZXciLCJzcXVhcmVJY29uTGlzdCIsImljb25JbWciLCJpY29uVGV4dCIsImljb25VcmwiLCJzcGFjZUljb25MaXQiLCJ0ZXN0U3BhY2VMaXN0RGF0YSIsIm9yaWdpbklkIiwiY3VycmVudElkIiwiaGFzUXVvdGUiLCJwdWJsaXNoVGltZSIsInRpdGxlIiwidXNlckluZm8iLCJ1c2VySWQiLCJoZWFkSW1hZ2UiLCJuaWNrTmFtZSIsImhhc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uQ250Iiwic2hhcmVDbnQiLCJzaGFyZVRpdGxlIiwidGFnTGlzdCIsImlkIiwibmFtZSIsInBvaUxpc3QiLCJlbGVtZW50cyIsImVsZW1lbnRUeXBlIiwiY29udGVudCIsImVsZW1lbnRJZCIsImltZ3MiLCJpbWdVcmwiLCJ0ZXN0VGFiRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTSxFQUFWOztBQUVBQSxJQUFJQyxRQUFKLEdBQWUsQ0FDYjtBQUNFQyxXQUFTLEdBRFg7QUFFRUMsYUFBVyxJQUZiO0FBR0VDLGVBQWEsT0FIZjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsTUFBSSxLQUxOLEVBS2E7QUFDWEMsaUJBQWUsNkdBTmpCO0FBT0VDLFVBQVE7QUFQVixDQURhLEVBVWI7QUFDRU4sV0FBUyxHQURYO0FBRUVDLGFBQVcsSUFGYjtBQUdFQyxlQUFhLFVBSGY7QUFJRUMsYUFBVyxDQUpiO0FBS0VDLE1BQUksS0FMTixFQUthO0FBQ1hDLGlCQUFlLDZHQU5qQjtBQU9FQyxVQUFRO0FBUFYsQ0FWYSxFQW1CYjtBQUNFTixXQUFTLEdBRFg7QUFFRUMsYUFBVyxJQUZiO0FBR0VDLGVBQWEsU0FIZjtBQUlFQyxhQUFXLENBSmI7QUFLRUMs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QixNQUFJLENBYk47QUFjRW9CLFlBQVUsRUFkWjtBQWVFQyxjQUFZLEVBZmQ7QUFnQkVDLFdBQVMsQ0FDUDtBQUNFQyxRQUFJLENBRE47QUFFRUMsVUFBTTtBQUZSLEdBRE8sQ0FoQlg7QUFzQkVFLFlBQVUsQ0FDUjtBQUNFQyxpQkFBYSxDQURmO0FBRUVkLFdBQU8sVUFGVDtBQUdFZSxhQUFTLHVDQUhYO0FBSUVDLGVBQVc7QUFKYixHQURRLEVBT1I7QUFDRUYsaUJBQWEsQ0FEZjtBQUVFZCxXQUFPLFVBRlQ7QUFHRWUsYUFBUyx1Q0FIWDtBQUlFQyxlQUFXO0FBSmIsR0FQUTtBQXRCWixDQXZnQnNCLENBQXhCOztBQThpQkFuQyxJQUFJc0MsV0FBSixHQUFrQixDQUNoQjtBQUNFVCxNQUFJLENBRE47QUFFRUMsUUFBTTtBQUZSLENBRGdCLEVBS2hCO0FBQ0VELE1BQUksQ0FETjtBQUVFQyxRQUFNO0FBRlIsQ0FMZ0IsRUFTaEI7QUFDRUQsTUFBSSxDQUROO0FBRUVDLFFBQU07QUFGUixDQVRnQixFQWFoQjtBQUNFRCxNQUFJLENBRE47QUFFRUMsUUFBTTtBQUZSLENBYmdCLEVBaUJoQjtBQUNFRCxNQUFJLENBRE47QUFFRUMsUUFBTTtBQUZSLENBakJnQixFQXFCaEI7QUFDRUQsTUFBSSxDQUROO0FBRUVDLFFBQU07QUFGUixDQXJCZ0IsRUF5QmhCO0FBQ0VELE1BQUksQ0FETjtBQUVFQyxRQUFNO0FBRlIsQ0F6QmdCLEVBNkJoQjtBQUNFRCxNQUFJLENBRE47QUFFRUMsUUFBTTtBQUZSLENBN0JnQixDQUFsQjs7QUFtQ0FTLE9BQU9DLE9BQVAsR0FBaUJ4QyxHQUFqQiIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG9iaiA9IHt9XG5cbm9iai50ZXN0RGF0YSA9IFtcbiAge1xuICAgIHNwYWNlSWQ6ICcxJyxcbiAgICBzcGFjZU5hbWU6ICfml6XmnKwnLFxuICAgIHNwYWNlRW5OYW1lOiAnSmFwYW4nLFxuICAgIGF1dGhvcml0eTogMSxcbiAgICBwdjogMTMyNDIsIC8vIOa1j+iniOaVsFxuICAgIGNvdmVySW1hZ2VVcmw6ICdodHRwczovL20udHVuaXVjZG4uY29tL2ZiMi90MS9HMS9NMDAvOTAvREUvQ2lpOUVWY2ZEVGlJR0J2NkFBTE1RRC1SeWk0QUFFYktRS1gtQTBBQXN4WTM1Ml93ODAwX2gwX2MwX3QwLmpwZycsXG4gICAgaGFzTmV3OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzcGFjZUlkOiAnMicsXG4gICAgc3BhY2VOYW1lOiAn5rOw5Zu9JyxcbiAgICBzcGFjZUVuTmFtZTogJ1RoYWlsYW5kJyxcbiAgICBhdXRob3JpdHk6IDEsXG4gICAgcHY6IDEzMjQyLCAvLyDmtY/op4jmlbBcbiAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9tLnR1bml1Y2RuLmNvbS9mYjIvdDEvRzEvTTAwLzkwL0RFL0NpaTlFVmNmRFRpSUdCdjZBQUxNUUQtUnlpNEFBRWJLUUtYLUEwQUFzeFkzNTJfdzgwMF9oMF9jMF90MC5qcGcnLFxuICAgIGhhc05ldzogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3BhY2VJZDogJzMnLFxuICAgIHNwYWNlTmFtZTogJ+iLseWbvScsXG4gICAgc3BhY2VFbk5hbWU6ICdCcml0YWluJyxcbiAgICBhdXRob3JpdHk6IDEsXG4gICAgcHY6IDEzMjQyLCAvLyDmtY/op4jmlbBcbiAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9tLnR1bml1Y2RuLmNvbS9mYjIvdDEvRzEvTTAwLzkwL0RFL0NpaTlFVmNmRFRpSUdCdjZBQUxNUUQtUnlpNEFBRWJLUUtYLUEwQUFzeFkzNTJfdzgwMF9oMF9jMF90MC5qcGcnLFxuICAgIGhhc05ldzogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3BhY2VJZDogJzQnLFxuICAgIHNwYWNlTmFtZTogJ+aXpeacrCcsXG4gICAgc3BhY2VFbk5hbWU6ICdKYXBhbicsXG4gICAgYXV0aG9yaXR5OiAxLFxuICAgIHB2OiAxMzI0MiwgLy8g5rWP6KeI5pWwXG4gICAgY292ZXJJbWFnZVVybDogJ2h0dHBzOi8vbS50dW5pdWNkbi5jb20vZmIyL3QxL0cxL00wMC85MC9ERS9DaWk5RVZjZkRUaUlHQnY2QUFMTVFELVJ5aTRBQUViS1FLWC1BMEFBc3hZMzUyX3c4MDBfaDBfYzBfdDAuanBnJyxcbiAgICBoYXNOZXc6IHRydWVcbiAgfSxcbiAge1xuICAgIHNwYWNlSWQ6ICc1JyxcbiAgICBzcGFjZU5hbWU6ICfms7Dlm70nLFxuICAgIHNwYWNlRW5OYW1lOiAnVGhhaWxhbmQnLFxuICAgIGF1dGhvcml0eTogMSxcbiAgICBwdjogMTMyNDIsIC8vIOa1j+iniOaVsFxuICAgIGNvdmVySW1hZ2VVcmw6ICdodHRwczovL20udHVuaXVjZG4uY29tL2ZiMi90MS9HMS9NMDAvOTAvREUvQ2lpOUVWY2ZEVGlJR0J2NkFBTE1RRC1SeWk0QUFFYktRS1gtQTBBQXN4WTM1Ml93ODAwX2gwX2MwX3QwLmpwZycsXG4gICAgaGFzTmV3OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzcGFjZUlkOiAnNicsXG4gICAgc3BhY2VOYW1lOiAn6Iux5Zu9JyxcbiAgICBzcGFjZUVuTmFtZTogJ0JyaXRhaW4nLFxuICAgIGF1dGhvcml0eTogMSxcbiAgICBwdjogMTMyNDIsIC8vIOa1j+iniOaVsFxuICAgIGNvdmVySW1hZ2VVcmw6ICdodHRwczovL20udHVuaXVjZG4uY29tL2ZiMi90MS9HMS9NMDAvOTAvREUvQ2lpOUVWY2ZEVGlJR0J2NkFBTE1RRC1SeWk0QUFFYktRS1gtQTBBQXN4WTM1Ml93ODAwX2gwX2MwX3QwLmpwZycsXG4gICAgaGFzTmV3OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzcGFjZUlkOiAnNycsXG4gICAgc3BhY2VOYW1lOiAn5pel5pysJyxcbiAgICBzcGFjZUVuTmFtZTogJ0phcGFuJyxcbiAgICBhdXRob3JpdHk6IDAsXG4gICAgcHY6IDEzMjQyLCAvLyDmtY/op4jmlbBcbiAgICBjb3ZlckltYWdlVXJsOiAnaHR0cHM6Ly9tLnR1bml1Y2RuLmNvbS9mYjIvdDEvRzEvTTAwLzkwL0RFL0NpaTlFVmNmRFRpSUdCdjZBQUxNUUQtUnlpNEFBRWJLUUtYLUEwQUFzeFkzNTJfdzgwMF9oMF9jMF90MC5qcGcnLFxuICAgIGhhc05ldzogdHJ1ZVxuICB9LFxuICB7XG4gICAgc3BhY2VJZDogJzgnLFxuICAgIHNwYWNlTmFtZTogJ+azsOWbvScsXG4gICAgc3BhY2VFbk5hbWU6ICdUaGFpbGFuZCcsXG4gICAgYXV0aG9yaXR5OiAwLFxuICAgIHB2OiAxMzI0MiwgLy8g5rWP6KeI5pWwXG4gICAgY292ZXJJbWFnZVVybDogJ2h0dHBzOi8vbS50dW5pdWNkbi5jb20vZmIyL3QxL0cxL00wMC85MC9ERS9DaWk5RVZjZkRUaUlHQnY2QUFMTVFELVJ5aTRBQUViS1FLWC1BMEFBc3hZMzUyX3c4MDBfaDBfYzBfdDAuanBnJyxcbiAgICBoYXNOZXc6IHRydWVcbiAgfSxcbiAge1xuICAgIHNwYWNlSWQ6ICc5JyxcbiAgICBzcGFjZU5hbWU6ICfoi7Hlm70nLFxuICAgIHNwYWNlRW5OYW1lOiAnQnJpdGFpbicsXG4gICAgYXV0aG9yaXR5OiAwLFxuICAgIHB2OiAxMzI0MiwgLy8g5rWP6KeI5pWwXG4gICAgY292ZXJJbWFnZVVybDogJ2h0dHBzOi8vbS50dW5pdWNkbi5jb20vZmIyL3QxL0cxL00wMC85MC9ERS9DaWk5RVZjZkRUaUlHQnY2QUFMTVFELVJ5aTRBQUViS1FLWC1BMEFBc3hZMzUyX3c4MDBfaDBfYzBfdDAuanBnJyxcbiAgICBoYXNOZXc6IHRydWVcbiAgfVxuXVxuXG5vYmouc3F1YXJlSWNvbkxpc3QgPSBbXG4gIHtcbiAgICBpY29uSW1nOiAnLi4vLi4vLi4vaW1hZ2VzL3RuLXd4LXBvcC1jb250ZW50LW5ldy5wbmcnLFxuICAgIGljb25UZXh0OiAn5YaZ5peF6KGM5b+D5b6XJyxcbiAgICBpY29uVXJsOiAnJ1xuICB9LFxuICB7XG4gICAgaWNvbkltZzogJy4uLy4uLy4uL2ltYWdlcy90bi13eC1wb3AtY29udGVudC1oaXN0b3J5LnBuZycsXG4gICAgaWNvblRleHQ6ICfljoblj7Llj5HluIMnLFxuICAgIGljb25Vcmw6ICcnXG4gIH1cbl1cblxub2JqLnNwYWNlSWNvbkxpdCA9IFtcbiAge1xuICAgIGljb25JbWc6ICcuLi8uLi8uLi9pbWFnZXMvdG4td3gtcG9wLWNvbnRlbnQtbmV3LnBuZycsXG4gICAgaWNvblRleHQ6ICflhpnml4XooYzlv4PlvpcnLFxuICAgIGljb25Vcmw6ICcuLi8uLi9lZGl0b3IvdGl0bGUtZWRpdG9yL2luZGV4J1xuICB9LFxuICB7XG4gICAgaWNvbkltZzogJy4uLy4uLy4uL2ltYWdlcy90bi13eC1wb3AtY29udGVudC1xdW90ZS5wbmcnLFxuICAgIGljb25UZXh0OiAn5byV55So5bm/5Zy65YaF5a65JyxcbiAgICBpY29uVXJsOiAnJ1xuICB9LFxuICB7XG4gICAgaWNvbkltZzogJy4uLy4uLy4uL2ltYWdlcy90bi13eC1wb3AtY29udGVudC1oaXN0b3J5LnBuZycsXG4gICAgaWNvblRleHQ6ICfljoblj7Llj5HluIMv5pS26JePJyxcbiAgICBpY29uVXJsOiAnJ1xuICB9XG5dXG5cbm9iai50ZXN0U3BhY2VMaXN0RGF0YSA9IFtcbiAge1xuICAgIG9yaWdpbklkOiAxLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgY3VycmVudElkOiAnMScsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgcHVibGlzaFRpbWU6ICfku4rlpKkgMTI6MzMnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgdGl0bGU6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5cnLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICB1c2VySWQ6IDE3LFxuICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgIG5pY2tOYW1lOiAn56a75byA5Zyw55CD6KGo6Z2iJ1xuICAgIH0sXG4gICAgaGFzQ29sbGVjdGlvbjogdHJ1ZSxcbiAgICBjb2xsZWN0aW9uQ250OiAxMDAsXG4gICAgcHY6IDEyMzUzNDM0LFxuICAgIHNoYXJlQ250OiAyMCxcbiAgICBzaGFyZVRpdGxlOiAnJyxcbiAgICB0YWdMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn5Lqk6YCaJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAn6YWS5bqXJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICfnvo7po58nXG4gICAgICB9LFxuICAgIF0sXG4gICAgcG9pTGlzdDogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCLljZfkuqxcIixcbiAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIuWNl+S6rOWkq+WtkOW6meaxn+WNl+i0oemZolwiLFxuICAgICAgICBcInBhcmVudF9pZFwiOiA0MDY4MixcbiAgICAgICAgXCJpZFwiOiA3ODgwMTIsXG4gICAgICAgIFwidHlwZV9pZFwiOiAyM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwi5Y2X5Lqs5aSr5a2Q5bqZ5rGf5Y2X6LSh6ZmiXCIsXG4gICAgICAgIFwicGFyZW50X2lkXCI6IDQwNjgyLFxuICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgXCJ0eXBlX2lkXCI6IDIzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCLljZfkuqzlpKvlrZDlupnmsZ/ljZfotKHpmaJcIixcbiAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgIH1cbiAgICBdLFxuICAgIGVsZW1lbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDEsXG4gICAgICAgIGltZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWdVcmw6ICdodHRwOi8vaW1nMy50dW5pdWNkbi5jb20vdS9tYWlucGljL2xvZ28vbG9nb18yMDE3MDEyNC5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBlbGVtZW50SWQ6IDJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5JZDogOCwgICAvLyDlv4Plvpfljp9pZFxuICAgIGN1cnJlbnRJZDogJzInLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgaGFzUXVvdGU6IHRydWUsICAgIC8vIOaYr+WQpuaYr+W8leeUqFxuICAgIHB1Ymxpc2hUaW1lOiAn5LuK5aSpIDEyOjMzJywgIC8vIOWPkeW4g+aXtumXtFxuICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyxcbiAgICB1c2VySW5mbzoge1xuICAgICAgdXNlcklkOiAxNCxcbiAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICBuaWNrTmFtZTogJ+emu+W8gOWcsOeQg+ihqOmdoidcbiAgICB9LFxuICAgIGhhc0NvbGxlY3Rpb246IHRydWUsXG4gICAgY29sbGVjdGlvbkNudDogMTAwLFxuICAgIHB2OiAxMjM1MzQzNCxcbiAgICBzaGFyZUNudDogMjAsXG4gICAgc2hhcmVUaXRsZTogJycsXG4gICAgZWxlbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMSxcbiAgICAgICAgaW1nczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGVsZW1lbnRJZDogMlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG9yaWdpbklkOiAnJywgICAvLyDlv4Plvpfljp9pZFxuICAgIGN1cnJlbnRJZDogJzMnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgaGFzUXVvdGU6IHRydWUsICAgIC8vIOaYr+WQpuaYr+W8leeUqFxuICAgIHB1Ymxpc2hUaW1lOiAn5LuK5aSpIDEyOjMzJywgIC8vIOWPkeW4g+aXtumXtFxuICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyxcbiAgICB1c2VySW5mbzoge1xuICAgICAgdXNlcklkOiAxNCxcbiAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICBuaWNrTmFtZTogJ+emu+W8gOWcsOeQg+ihqOmdoidcbiAgICB9LFxuICAgIGhhc0NvbGxlY3Rpb246IHRydWUsXG4gICAgY29sbGVjdGlvbkNudDogMTAwLFxuICAgIHB2OiAxMjM1MzQzNCxcbiAgICBzaGFyZUNudDogMjAsXG4gICAgc2hhcmVUaXRsZTogJycsXG4gICAgZWxlbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMSxcbiAgICAgICAgaW1nczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGVsZW1lbnRJZDogMlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG9yaWdpbklkOiAnJywgICAvLyDlv4Plvpfljp9pZFxuICAgIGN1cnJlbnRJZDogJycsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgcHVibGlzaFRpbWU6ICfku4rlpKkgMTI6MzMnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgdGl0bGU6ICfmtYvor5XmoIfpopgnLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICB1c2VySWQ6IDE0LFxuICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgIG5pY2tOYW1lOiAn56a75byA5Zyw55CD6KGo6Z2iJ1xuICAgIH0sXG4gICAgaGFzQ29sbGVjdGlvbjogdHJ1ZSxcbiAgICBjb2xsZWN0aW9uQ250OiAxMDAsXG4gICAgcHY6IDEyMzUzNDM0LFxuICAgIHNoYXJlQ250OiAyMCxcbiAgICBzaGFyZVRpdGxlOiAnJyxcbiAgICBlbGVtZW50czogW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAxLFxuICAgICAgICBpbWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nVXJsOiAnaHR0cDovL2ltZzMudHVuaXVjZG4uY29tL3UvbWFpbnBpYy9sb2dvL2xvZ29fMjAxNzAxMjQucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZWxlbWVudElkOiAyXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgb3JpZ2luSWQ6ICcnLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgY3VycmVudElkOiAnJywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgIGhhc1F1b3RlOiB0cnVlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICBwdWJsaXNoVGltZTogJ+S7iuWkqSAxMjozMycsICAvLyDlj5HluIPml7bpl7RcbiAgICB0aXRsZTogJ+a1i+ivleagh+mimCcsXG4gICAgdXNlckluZm86IHtcbiAgICAgIHVzZXJJZDogMTIzNDEyMzQsXG4gICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgbmlja05hbWU6ICfnprvlvIDlnLDnkIPooajpnaInXG4gICAgfSxcbiAgICBoYXNDb2xsZWN0aW9uOiB0cnVlLFxuICAgIGNvbGxlY3Rpb25DbnQ6IDEwMCxcbiAgICBwdjogMTIzNTM0MzQsXG4gICAgc2hhcmVDbnQ6IDIwLFxuICAgIHNoYXJlVGl0bGU6ICcnLFxuICAgIGVsZW1lbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDEsXG4gICAgICAgIGltZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWdVcmw6ICdodHRwOi8vaW1nMy50dW5pdWNkbi5jb20vdS9tYWlucGljL2xvZ28vbG9nb18yMDE3MDEyNC5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBlbGVtZW50SWQ6IDJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5JZDogJycsICAgLy8g5b+D5b6X5Y6faWRcbiAgICBjdXJyZW50SWQ6ICcnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgaGFzUXVvdGU6IGZhbHNlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICBwdWJsaXNoVGltZTogJzIwMTcvNC8zIDE1OjQ0JywgIC8vIOWPkeW4g+aXtumXtFxuICAgIHRpdGxlOiAn5pel5pys5piv5Y2h5rSb5pav55qE5ZKW5ZWh5py66Zi/5YWL55CJ5pav6Zi/5YWL6IuP6ICB5Zyw5pa5JyxcbiAgICB1c2VySW5mbzoge1xuICAgICAgdXNlcklkOiAxMjM0MTIzNCxcbiAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICBuaWNrTmFtZTogJ+emu+W8gOWcsCdcbiAgICB9LFxuICAgIGhhc0NvbGxlY3Rpb246IHRydWUsXG4gICAgY29sbGVjdGlvbkNudDogMTAwLFxuICAgIHB2OiAxMjM1MjMsXG4gICAgc2hhcmVDbnQ6IDIwLFxuICAgIHNoYXJlVGl0bGU6ICcnLFxuICAgIHRhZ0xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6ICfoiKrnj63ooYzmnY4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogJ1dJRknnrb7or4HpgIDnqI4nXG4gICAgICB9XG4gICAgXSxcbiAgICBlbGVtZW50czogW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAxLFxuICAgICAgICBpbWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nVXJsOiAnaHR0cDovL2ltZzMudHVuaXVjZG4uY29tL3UvbWFpbnBpYy9sb2dvL2xvZ29fMjAxNzAxMjQucG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nVXJsOiAnaHR0cDovL2ltZzMudHVuaXVjZG4uY29tL3UvbWFpbnBpYy9sb2dvL2xvZ29fMjAxNzAxMjQucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZWxlbWVudElkOiAyXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgb3JpZ2luSWQ6ICcnLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgY3VycmVudElkOiAnJywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgIGhhc1F1b3RlOiB0cnVlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICBwdWJsaXNoVGltZTogJzIwMTcvMi8zMCAyNTo0NCcsICAvLyDlj5HluIPml7bpl7RcbiAgICB0aXRsZTogJ+mYv+aWr+mhv+emu+W8gOS6huWNoe+8m+S4iuWym+WSluWVoe+8m++8m+aLieS4iuWym+WSluWVoeS6hu+8m+aSkuWkpycsXG4gICAgdXNlckluZm86IHtcbiAgICAgIHVzZXJJZDogMTIzNDEyMzQsXG4gICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgbmlja05hbWU6ICflj7bpl64nXG4gICAgfSxcbiAgICBoYXNDb2xsZWN0aW9uOiB0cnVlLFxuICAgIGNvbGxlY3Rpb25DbnQ6IDEwMCxcbiAgICBwdjogMTM0MixcbiAgICBzaGFyZUNudDogMjAsXG4gICAgc2hhcmVUaXRsZTogJycsXG4gICAgdGFnTGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+e+jumjnydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAn6LSt54mpJ1xuICAgICAgfVxuICAgIF0sXG4gICAgZWxlbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMSxcbiAgICAgICAgaW1nczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGVsZW1lbnRJZDogMlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG9yaWdpbklkOiAnJywgICAvLyDlv4Plvpfljp9pZFxuICAgIGN1cnJlbnRJZDogJycsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgcHVibGlzaFRpbWU6ICfku4rlpKkgMTI6MzMnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgdGl0bGU6ICfmtYvor5XmoIfpopgnLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICB1c2VySWQ6IDEyMzQxMjM0LFxuICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgIG5pY2tOYW1lOiAn56a75byA5Zyw55CD6KGo6Z2iJ1xuICAgIH0sXG4gICAgaGFzQ29sbGVjdGlvbjogdHJ1ZSxcbiAgICBjb2xsZWN0aW9uQ250OiAxMDAsXG4gICAgcHY6IDEyMzUzNDM0LFxuICAgIHNoYXJlQ250OiAyMCxcbiAgICBzaGFyZVRpdGxlOiAnJyxcbiAgICBlbGVtZW50czogW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAxLFxuICAgICAgICBpbWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nVXJsOiAnaHR0cDovL2ltZzMudHVuaXVjZG4uY29tL3UvbWFpbnBpYy9sb2dvL2xvZ29fMjAxNzAxMjQucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZWxlbWVudElkOiAyXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgb3JpZ2luSWQ6ICcnLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgY3VycmVudElkOiAnJywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgIGhhc1F1b3RlOiB0cnVlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICBwdWJsaXNoVGltZTogJ+S7iuWkqSAxMjozMycsICAvLyDlj5HluIPml7bpl7RcbiAgICB0aXRsZTogJ+a1i+ivleagh+mimCcsXG4gICAgdXNlckluZm86IHtcbiAgICAgIHVzZXJJZDogMTIzNDEyMzQsXG4gICAgICBoZWFkSW1hZ2U6ICcuLi8uLi8uLi9pbWFnZXMvdGVzdC5wbmcnLFxuICAgICAgbmlja05hbWU6ICfnprvlvIDlnLDnkIPooajpnaInXG4gICAgfSxcbiAgICBoYXNDb2xsZWN0aW9uOiB0cnVlLFxuICAgIGNvbGxlY3Rpb25DbnQ6IDEwMCxcbiAgICBwdjogMTIzNTM0MzQsXG4gICAgc2hhcmVDbnQ6IDIwLFxuICAgIHNoYXJlVGl0bGU6ICcnLFxuICAgIGVsZW1lbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDEsXG4gICAgICAgIGltZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWdVcmw6ICdodHRwOi8vaW1nMy50dW5pdWNkbi5jb20vdS9tYWlucGljL2xvZ28vbG9nb18yMDE3MDEyNC5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBlbGVtZW50SWQ6IDJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5JZDogJycsICAgLy8g5b+D5b6X5Y6faWRcbiAgICBjdXJyZW50SWQ6ICcnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgaGFzUXVvdGU6IHRydWUsICAgIC8vIOaYr+WQpuaYr+W8leeUqFxuICAgIHB1Ymxpc2hUaW1lOiAn5LuK5aSpIDEyOjMzJywgIC8vIOWPkeW4g+aXtumXtFxuICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyxcbiAgICB1c2VySW5mbzoge1xuICAgICAgdXNlcklkOiAxMjM0MTIzNCxcbiAgICAgIGhlYWRJbWFnZTogJy4uLy4uLy4uL2ltYWdlcy90ZXN0LnBuZycsXG4gICAgICBuaWNrTmFtZTogJ+emu+W8gOWcsOeQg+ihqOmdoidcbiAgICB9LFxuICAgIGhhc0NvbGxlY3Rpb246IHRydWUsXG4gICAgY29sbGVjdGlvbkNudDogMTAwLFxuICAgIHB2OiAxMjM1MzQzNCxcbiAgICBzaGFyZUNudDogMjAsXG4gICAgc2hhcmVUaXRsZTogJycsXG4gICAgZWxlbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAwLFxuICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimGFzZGQnLFxuICAgICAgICBjb250ZW50OiAn5pel5pys5YWs5YWx5Lqk6YCa5YaF5LiN6IO95aSn5aOw5Zan5ZOX5Y+K5L2/55So5omL5py677yM5Lmf5LiN6IO96aWu6aOf44CC5Zyo5Lic5Lqs55qE5q+P5Liq56uZ5Y+w6YO96K6+5pyJ4oCmJyxcbiAgICAgICAgZWxlbWVudElkOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMSxcbiAgICAgICAgaW1nczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZ1VybDogJ2h0dHA6Ly9pbWczLnR1bml1Y2RuLmNvbS91L21haW5waWMvbG9nby9sb2dvXzIwMTcwMTI0LnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGVsZW1lbnRJZDogMlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG9yaWdpbklkOiAnJywgICAvLyDlv4Plvpfljp9pZFxuICAgIGN1cnJlbnRJZDogJycsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgcHVibGlzaFRpbWU6ICfku4rlpKkgMTI6MzMnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgdGl0bGU6ICfmtYvor5XmoIfpopgnLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICB1c2VySWQ6IDEyMzQxMjM0LFxuICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgIG5pY2tOYW1lOiAn56a75byA5Zyw55CD6KGo6Z2iJ1xuICAgIH0sXG4gICAgaGFzQ29sbGVjdGlvbjogdHJ1ZSxcbiAgICBjb2xsZWN0aW9uQ250OiAxMDAsXG4gICAgcHY6IDEyMzUzNDM0LFxuICAgIHNoYXJlQ250OiAyMCxcbiAgICBzaGFyZVRpdGxlOiAnJyxcbiAgICBlbGVtZW50czogW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnRUeXBlOiAxLFxuICAgICAgICBpbWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nVXJsOiAnaHR0cDovL2ltZzMudHVuaXVjZG4uY29tL3UvbWFpbnBpYy9sb2dvL2xvZ29fMjAxNzAxMjQucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZWxlbWVudElkOiAyXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgb3JpZ2luSWQ6ICcnLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgY3VycmVudElkOiAnJywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgIGhhc1F1b3RlOiBmYWxzZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgcHVibGlzaFRpbWU6ICcyMDE3LzIvMjQgMDM6NDQnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgdGl0bGU6ICfljZflrrbkuInmoYbmnrbmkK3lu7rlj5Hlk4jmjqXlj6PmlLbliLDlm57lpI0nLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICB1c2VySWQ6IDEyMzQxMjM0LFxuICAgICAgaGVhZEltYWdlOiAnLi4vLi4vLi4vaW1hZ2VzL3Rlc3QucG5nJyxcbiAgICAgIG5pY2tOYW1lOiAn5oiR54ix6JyX54mbJ1xuICAgIH0sXG4gICAgaGFzQ29sbGVjdGlvbjogdHJ1ZSxcbiAgICBjb2xsZWN0aW9uQ250OiAxMDAsXG4gICAgcHY6IDAsXG4gICAgc2hhcmVDbnQ6IDIwLFxuICAgIHNoYXJlVGl0bGU6ICcnLFxuICAgIHRhZ0xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICfotLTlo6snXG4gICAgICB9XG4gICAgXSxcbiAgICBlbGVtZW50czogW1xuICAgICAge1xuICAgICAgICBlbGVtZW50VHlwZTogMCxcbiAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpophhc2RkJyxcbiAgICAgICAgY29udGVudDogJ+aXpeacrOWFrOWFseS6pOmAmuWGheS4jeiDveWkp+WjsOWWp+WTl+WPiuS9v+eUqOaJi+acuu+8jOS5n+S4jeiDvemlrumjn+OAguWcqOS4nOS6rOeahOavj+S4quermeWPsOmDveiuvuacieKApicsXG4gICAgICAgIGVsZW1lbnRJZDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudFR5cGU6IDAsXG4gICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYYXNkZCcsXG4gICAgICAgIGNvbnRlbnQ6ICfml6XmnKzlhazlhbHkuqTpgJrlhoXkuI3og73lpKflo7Dllqflk5flj4rkvb/nlKjmiYvmnLrvvIzkuZ/kuI3og73ppa7po5/jgILlnKjkuJzkuqznmoTmr4/kuKrnq5nlj7Dpg73orr7mnInigKYnLFxuICAgICAgICBlbGVtZW50SWQ6IDFcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxub2JqLnRlc3RUYWJEYXRhID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogJ+i0tOWjqydcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICfkuqTpgJonLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ+mFkuW6lydcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICfnvo7po58nXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiAn6LSt54mpJ1xuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogJ+aZr+eCuSdcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6ICfoiKrnj63ooYzmnY4nXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiAnV0lGSeetvuivgemAgOeojidcbiAgfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9ialxuIl19