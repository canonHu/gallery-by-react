let obj = {}

obj.testData = [
  {
    spaceId: '1',
    spaceName: '日本',
    spaceEnName: 'Japan',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '2',
    spaceName: '泰国',
    spaceEnName: 'Thailand',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '3',
    spaceName: '英国',
    spaceEnName: 'Britain',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '4',
    spaceName: '日本',
    spaceEnName: 'Japan',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '5',
    spaceName: '泰国',
    spaceEnName: 'Thailand',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '6',
    spaceName: '英国',
    spaceEnName: 'Britain',
    authority: 1,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '7',
    spaceName: '日本',
    spaceEnName: 'Japan',
    authority: 0,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '8',
    spaceName: '泰国',
    spaceEnName: 'Thailand',
    authority: 0,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  },
  {
    spaceId: '9',
    spaceName: '英国',
    spaceEnName: 'Britain',
    authority: 0,
    pv: 13242, // 浏览数
    coverImageUrl: 'https://m.tuniucdn.com/fb2/t1/G1/M00/90/DE/Cii9EVcfDTiIGBv6AALMQD-Ryi4AAEbKQKX-A0AAsxY352_w800_h0_c0_t0.jpg',
    hasNew: true
  }
]

obj.squareIconList = [
  {
    iconImg: '../../../images/tn-wx-pop-content-new.png',
    iconText: '写旅行心得',
    iconUrl: ''
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-history.png',
    iconText: '历史发布',
    iconUrl: ''
  }
]

obj.spaceIconLit = [
  {
    iconImg: '../../../images/tn-wx-pop-content-new.png',
    iconText: '写旅行心得',
    iconUrl: '../../editor/title-editor/index'
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-quote.png',
    iconText: '引用广场内容',
    iconUrl: ''
  },
  {
    iconImg: '../../../images/tn-wx-pop-content-history.png',
    iconText: '历史发布/收藏',
    iconUrl: ''
  }
]

obj.testSpaceListData = [
  {
    originId: 1,   // 心得原id
    currentId: '1',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    tagList: [
      {
        id: 1,
        name: '交通',
      },
      {
        id: 2,
        name: '酒店'
      },
      {
        id: 3,
        name: '美食'
      },
    ],
    poiList: [
      {
        "name": "南京",
        "parent_id": 40682,
        "id": 788012,
        "type_id": 23
      },
      {
        "name": "南京夫子庙江南贡院",
        "parent_id": 40682,
        "id": 788012,
        "type_id": 23
      },
      {
        "name": "南京夫子庙江南贡院",
        "parent_id": 40682,
        "id": 788012,
        "type_id": 23
      },
      {
        "name": "南京夫子庙江南贡院",
        "parent_id": 40682,
        "id": 788012,
        "type_id": 23
      }
    ],
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: 8,   // 心得原id
    currentId: '2',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '3',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: false,    // 是否是引用
    publishTime: '2017/4/3 15:44',  // 发布时间
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
    tagList: [
      {
        id: 6,
        name: '航班行李'
      },
      {
        id: 7,
        name: 'WIFI签证退税'
      }
    ],
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '2017/2/30 25:44',  // 发布时间
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
    tagList: [
      {
        id: 3,
        name: '美食'
      },
      {
        id: 4,
        name: '购物'
      }
    ],
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          },
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: true,    // 是否是引用
    publishTime: '今天 12:33',  // 发布时间
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
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      },
      {
        elementType: 1,
        imgs: [
          {
            imgUrl: 'http://img3.tuniucdn.com/u/mainpic/logo/logo_20170124.png'
          }
        ],
        elementId: 2
      }
    ]
  },
  {
    originId: '',   // 心得原id
    currentId: '',   // 当前引用后id
    hasQuote: false,    // 是否是引用
    publishTime: '2017/2/24 03:44',  // 发布时间
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
    tagList: [
      {
        id: 0,
        name: '贴士'
      }
    ],
    elements: [
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 0
      },
      {
        elementType: 0,
        title: '文字标题asdd',
        content: '日本公共交通内不能大声喧哗及使用手机，也不能饮食。在东京的每个站台都设有…',
        elementId: 1
      }
    ]
  }
]

obj.testTabData = [
  {
    id: 0,
    name: '贴士'
  },
  {
    id: 1,
    name: '交通',
  },
  {
    id: 2,
    name: '酒店'
  },
  {
    id: 3,
    name: '美食'
  },
  {
    id: 4,
    name: '购物'
  },
  {
    id: 5,
    name: '景点'
  },
  {
    id: 6,
    name: '航班行李'
  },
  {
    id: 7,
    name: 'WIFI签证退税'
  }
]

module.exports = obj
