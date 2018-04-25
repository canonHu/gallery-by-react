export const login = {
    "success": true,
    "errorCode": 710000,
    "msg": "OK",
    "data": {
        userId: '123',
        nickname: 'canon',
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJUu2ic7ibfAMbINsQgka3mX8wfXE0UJRjaVkp4T0kyNBNGEicoEnABZPzGG9Iib1GKk8V1OOc8avIibtQ/0',
        publishCount: 4,   //发布数量
        collectCount: 4    //收藏数量
    }
}

export const responseRelease = {
    success: true,
    errorCode: 710000,
    msg: "OK",
    data: {
        count: 100, // 总页数
        list: [
            {
                originId: 1,   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: false,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            }
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
                poiList: [
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
                userInfo: {
                    userId: 111,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 2,   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
              poiList: [
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
                userInfo: {
                    userId: 222,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 3,   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
              poiList: [
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
                userInfo: {
                    userId: 333,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 4,   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
              poiList: [
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
                userInfo: {
                    userId: 333,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            }
        ]
    }
}

export const responseCollection = {
    success: true,
    errorCode: 710000,
    msg: "OK",
    data: {
        count: 100, // 总页数
        list: [
            {
                originId: 'xxxxx',   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: false,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            }
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
                poiList: [
                    {
                        "name": "大连",
                        "parent_id": 40682,
                        "id": 788012,
                        "type_id": 23
                    }
                ],
                userInfo: {
                    userId: 123,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: '大斌'
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 123,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 'xxxxx',   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
                poiList: [
                    {
                        "name": "南京夫子庙江南贡院",
                        "parent_id": 40682,
                        "id": 788012,
                        "type_id": 23
                    }
                ],
                userInfo: {
                    userId: 222,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 'xxxxx',   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                            {
                                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png',
                            },
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
                poiList: [
                    {
                        "name": "北京",
                        "parent_id": 40682,
                        "id": 788012,
                        "type_id": 23
                    }
                ],
                userInfo: {
                    userId: 333,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            },
            {
                originId: 'xxxxx',   // 心得原id
                currentId: 'xxxx',   // 当前引用后id
                hasQuote: true,    // 是否是引用
                publishTime: 'xxx',  // 发布时间
                title: '测试标题',
                elements: [
                    {
                        elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                        title: '文字标题',
                        content: '测试内容',
                        elementId: 0, // 索引（数组下标）用于图文排序&封面设置
                    },
                    {
                        elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                        imgs: [
                        ],
                        elementId: 1,
                    },
                    {
                        elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                        productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                        productType: 102,
                        elementId: 2,
                    }
                ],
                poiList: [
                    {
                        "name": "上海",
                        "parent_id": 40682,
                        "id": 788012,
                        "type_id": 23
                    }
                ],
                userInfo: {
                    userId: 333,
                    userName: 11,
                    headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                    nickName: 11
                },
                hasTop: false,   // 是否置顶
                hasCollection: false,
                collectionCnt: 0,
                pv: 0,
                shareCnt: 0,
                shareTitle: 'xxxxx'
            }
        ]
    }
}
