"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var login = exports.login = {
    "success": true,
    "errorCode": 710000,
    "msg": "OK",
    "data": {
        userId: '123',
        nickname: 'canon',
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJUu2ic7ibfAMbINsQgka3mX8wfXE0UJRjaVkp4T0kyNBNGEicoEnABZPzGG9Iib1GKk8V1OOc8avIibtQ/0',
        publishCount: 4, //发布数量
        collectCount: 4 //收藏数量
    }
};

var responseRelease = exports.responseRelease = {
    success: true,
    errorCode: 710000,
    msg: "OK",
    data: {
        count: 100, // 总页数
        list: [{
            originId: 1, // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: false, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
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
            userInfo: {
                userId: 111,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 2, // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
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
            userInfo: {
                userId: 222,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 3, // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
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
            userInfo: {
                userId: 333,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 4, // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
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
            userInfo: {
                userId: 333,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }]
    }
};

var responseCollection = exports.responseCollection = {
    success: true,
    errorCode: 710000,
    msg: "OK",
    data: {
        count: 100, // 总页数
        list: [{
            originId: 'xxxxx', // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: false, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
                "name": "大连",
                "parent_id": 40682,
                "id": 788012,
                "type_id": 23
            }],
            userInfo: {
                userId: 123,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: '大斌'
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 123,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 'xxxxx', // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
                "name": "南京夫子庙江南贡院",
                "parent_id": 40682,
                "id": 788012,
                "type_id": 23
            }],
            userInfo: {
                userId: 222,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 'xxxxx', // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [{
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }, {
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524218545198&di=eefac6b7d065b4e7fe0d1f30f2808d29&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140314%2F13846792_122025679182_2.png'
                }],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
                "name": "北京",
                "parent_id": 40682,
                "id": 788012,
                "type_id": 23
            }],
            userInfo: {
                userId: 333,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }, {
            originId: 'xxxxx', // 心得原id
            currentId: 'xxxx', // 当前引用后id
            hasQuote: true, // 是否是引用
            publishTime: 'xxx', // 发布时间
            title: '测试标题',
            elements: [{
                elementType: 0, // 0：文字  1：图片  2：产品    3：视频
                title: '文字标题',
                content: '测试内容',
                elementId: 0 // 索引（数组下标）用于图文排序&封面设置
            }, {
                elementType: 1, // 0：文字  1：图片  2：产品   3：视频
                imgs: [],
                elementId: 1
            }, {
                elementType: 3, // 0：文字  1：图片  2：产品   3：视频
                productId: 60000123, // 外部拿到数据后使用此Id获取最新的产品信息进行处理
                productType: 102,
                elementId: 2
            }],
            poiList: [{
                "name": "上海",
                "parent_id": 40682,
                "id": 788012,
                "type_id": 23
            }],
            userInfo: {
                userId: 333,
                userName: 11,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524216382730&di=47392a5c9815d11d7b29bfb401429b7c&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140926%2F17654682_215920199818_2.png',
                nickName: 11
            },
            hasTop: false, // 是否置顶
            hasCollection: false,
            collectionCnt: 0,
            pv: 0,
            shareCnt: 0,
            shareTitle: 'xxxxx'
        }]
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RKc29uLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwidXNlcklkIiwibmlja25hbWUiLCJoZWFkSW1nIiwicHVibGlzaENvdW50IiwiY29sbGVjdENvdW50IiwicmVzcG9uc2VSZWxlYXNlIiwic3VjY2VzcyIsImVycm9yQ29kZSIsIm1zZyIsImRhdGEiLCJjb3VudCIsImxpc3QiLCJvcmlnaW5JZCIsImN1cnJlbnRJZCIsImhhc1F1b3RlIiwicHVibGlzaFRpbWUiLCJ0aXRsZSIsImVsZW1lbnRzIiwiZWxlbWVudFR5cGUiLCJjb250ZW50IiwiZWxlbWVudElkIiwiaW1ncyIsImltZ1VybCIsInByb2R1Y3RJZCIsInByb2R1Y3RUeXBlIiwicG9pTGlzdCIsInVzZXJJbmZvIiwidXNlck5hbWUiLCJoZWFkSW1hZ2UiLCJuaWNrTmFtZSIsImhhc1RvcCIsImhhc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uQ250IiwicHYiLCJzaGFyZUNudCIsInNoYXJlVGl0bGUiLCJyZXNwb25zZUNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsd0JBQVE7QUFDakIsZUFBVyxJQURNO0FBRWpCLGlCQUFhLE1BRkk7QUFHakIsV0FBTyxJQUhVO0FBSWpCLFlBQVE7QUFDSkMsZ0JBQVEsS0FESjtBQUVKQyxrQkFBVSxPQUZOO0FBR0pDLGlCQUFTLGdJQUhMO0FBSUpDLHNCQUFjLENBSlYsRUFJZTtBQUNuQkMsc0JBQWMsQ0FMVixDQUtlO0FBTGY7QUFKUyxDQUFkOztBQWFBLElBQU1DLDRDQUFrQjtBQUMzQkMsYUFBUyxJQURrQjtBQUUzQkMsZUFBVyxNQUZnQjtBQUczQkMsU0FBSyxJQUhzQjtBQUkzQkMsVUFBTTtBQUNGQyxlQUFPLEdBREwsRUFDVTtBQUNaQyxjQUFNLENBQ0Y7QUFDSUMsc0JBQVUsQ0FEZCxFQUNtQjtBQUNmQyx1QkFBVyxNQUZmLEVBRXlCO0FBQ3JCQyxzQkFBVSxLQUhkLEVBR3dCO0FBQ3BCQyx5QkFBYSxLQUpqQixFQUl5QjtB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a05BSEw7QUFJTkMsMEJBQVU7QUFKSixhQWxDZDtBQXdDSUMsb0JBQVEsS0F4Q1osRUF3Q3FCO0FBQ2pCQywyQkFBZSxLQXpDbkI7QUEwQ0lDLDJCQUFlLENBMUNuQjtBQTJDSUMsZ0JBQUksQ0EzQ1I7QUE0Q0lDLHNCQUFVLENBNUNkO0FBNkNJQyx3QkFBWTtBQTdDaEIsU0F0S0U7QUFGSjtBQUp3QixDQUEzQiIsImZpbGUiOiJ0ZXN0SnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsb2dpbiA9IHtcbiAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAgICBcImVycm9yQ29kZVwiOiA3MTAwMDAsXG4gICAgXCJtc2dcIjogXCJPS1wiLFxuICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIHVzZXJJZDogJzEyMycsXG4gICAgICAgIG5pY2tuYW1lOiAnY2Fub24nLFxuICAgICAgICBoZWFkSW1nOiAnaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVEpVdTJpYzdpYmZBTWJJTnNRZ2thM21YOHdmWEUwVUpSamFWa3A0VDBreU5CTkdFaWNvRW5BQlpQekdHOUlpYjFHS2s4VjFPT2M4YXZJaWJ0US8wJyxcbiAgICAgICAgcHVibGlzaENvdW50OiA0LCAgIC8v5Y+R5biD5pWw6YePXG4gICAgICAgIGNvbGxlY3RDb3VudDogNCAgICAvL+aUtuiXj+aVsOmHj1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNlUmVsZWFzZSA9IHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGVycm9yQ29kZTogNzEwMDAwLFxuICAgIG1zZzogXCJPS1wiLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY291bnQ6IDEwMCwgLy8g5oC76aG15pWwXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5JZDogMSwgICAvLyDlv4Plvpfljp9pZFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZDogJ3h4eHgnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgICAgICAgICAgICAgaGFzUXVvdGU6IGZhbHNlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICAgICAgICAgICAgICBwdWJsaXNoVGltZTogJ3h4eCcsICAvLyDlj5HluIPml7bpl7RcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a1i+ivleagh+mimCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDAsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpopgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+a1i+ivleWGheWuuScsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDAsIC8vIOe0ouW8le+8iOaVsOe7hOS4i+agh++8ieeUqOS6juWbvuaWh+aOkuW6jyblsIHpnaLorr7nva5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDEsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTg1NDUxOTgmZGk9ZWVmYWM2YjdkMDY1YjRlN2ZlMGQxZjMwZjI4MDhkMjkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzkubmlwaWMuY29tJTJGMjAxNDAzMTQlMkYxMzg0Njc5Ml8xMjIwMjU2NzkxODJfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAzLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiA2MDAwMDEyMywgLy8g5aSW6YOo5ou/5Yiw5pWw5o2u5ZCO5L2/55So5q2kSWTojrflj5bmnIDmlrDnmoTkuqflk4Hkv6Hmga/ov5vooYzlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlOiAxMDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBvaUxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5Y2X5Lqs5aSr5a2Q5bqZ5rGf5Y2X6LSh6ZmiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IDQwNjgyLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlX2lkXCI6IDIzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLljZfkuqzlpKvlrZDlupnmsZ/ljZfotKHpmaJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogMTExLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJbWFnZTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxNjM4MjczMCZkaT00NzM5MmE1Yzk4MTVkMTFkN2IyOWJmYjQwMTQyOWI3YyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWM0OS5uaXBpYy5jb20lMkZmaWxlJTJGMjAxNDA5MjYlMkYxNzY1NDY4Ml8yMTU5MjAxOTk4MThfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogMTFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhc1RvcDogZmFsc2UsICAgLy8g5piv5ZCm572u6aG2XG4gICAgICAgICAgICAgICAgaGFzQ29sbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNudDogMCxcbiAgICAgICAgICAgICAgICBwdjogMCxcbiAgICAgICAgICAgICAgICBzaGFyZUNudDogMCxcbiAgICAgICAgICAgICAgICBzaGFyZVRpdGxlOiAneHh4eHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yaWdpbklkOiAyLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgICAgICAgICAgICAgY3VycmVudElkOiAneHh4eCcsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICAgICAgICAgICAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgICAgICAgICAgICAgcHVibGlzaFRpbWU6ICd4eHgnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmtYvor5XmoIfpopgnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAwLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmtYvor5XlhoXlrrknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAwLCAvLyDntKLlvJXvvIjmlbDnu4TkuIvmoIfvvInnlKjkuo7lm77mlofmjpLluo8m5bCB6Z2i6K6+572uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAxLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDMsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IDYwMDAwMTIzLCAvLyDlpJbpg6jmi7/liLDmlbDmja7lkI7kvb/nlKjmraRJZOiOt+WPluacgOaWsOeahOS6p+WTgeS/oeaBr+i/m+ihjOWkhOeQhlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGU6IDEwMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHBvaUxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLljZfkuqzlpKvlrZDlupnmsZ/ljZfotKHpmaJcIixcbiAgICAgICAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IDQwNjgyLFxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiA3ODgwMTIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuWNl+S6rOWkq+WtkOW6meaxn+WNl+i0oemZolwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgICAgICAgICAgIFwidHlwZV9pZFwiOiAyM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IDIyMixcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IDExLFxuICAgICAgICAgICAgICAgICAgICBoZWFkSW1hZ2U6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTYzODI3MzAmZGk9NDczOTJhNWM5ODE1ZDExZDdiMjliZmI0MDE0MjliN2MmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljNDkubmlwaWMuY29tJTJGZmlsZSUyRjIwMTQwOTI2JTJGMTc2NTQ2ODJfMjE1OTIwMTk5ODE4XzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IDExXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYXNUb3A6IGZhbHNlLCAgIC8vIOaYr+WQpue9rumhtlxuICAgICAgICAgICAgICAgIGhhc0NvbGxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25DbnQ6IDAsXG4gICAgICAgICAgICAgICAgcHY6IDAsXG4gICAgICAgICAgICAgICAgc2hhcmVDbnQ6IDAsXG4gICAgICAgICAgICAgICAgc2hhcmVUaXRsZTogJ3h4eHh4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5JZDogMywgICAvLyDlv4Plvpfljp9pZFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZDogJ3h4eHgnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgICAgICAgICAgICAgaGFzUXVvdGU6IHRydWUsICAgIC8vIOaYr+WQpuaYr+W8leeUqFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hUaW1lOiAneHh4JywgIC8vIOWPkeW4g+aXtumXtFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMCwgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5rWL6K+V5YaF5a65JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMCwgLy8g57Si5byV77yI5pWw57uE5LiL5qCH77yJ55So5LqO5Zu+5paH5o6S5bqPJuWwgemdouiuvue9rlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMSwgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxODU0NTE5OCZkaT1lZWZhYzZiN2QwNjViNGU3ZmUwZDFmMzBmMjgwOGQyOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMzOS5uaXBpYy5jb20lMkYyMDE0MDMxNCUyRjEzODQ2NzkyXzEyMjAyNTY3OTE4Ml8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxODU0NTE5OCZkaT1lZWZhYzZiN2QwNjViNGU3ZmUwZDFmMzBmMjgwOGQyOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMzOS5uaXBpYy5jb20lMkYyMDE0MDMxNCUyRjEzODQ2NzkyXzEyMjAyNTY3OTE4Ml8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxODU0NTE5OCZkaT1lZWZhYzZiN2QwNjViNGU3ZmUwZDFmMzBmMjgwOGQyOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMzOS5uaXBpYy5jb20lMkYyMDE0MDMxNCUyRjEzODQ2NzkyXzEyMjAyNTY3OTE4Ml8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxODU0NTE5OCZkaT1lZWZhYzZiN2QwNjViNGU3ZmUwZDFmMzBmMjgwOGQyOSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMzOS5uaXBpYy5jb20lMkYyMDE0MDMxNCUyRjEzODQ2NzkyXzEyMjAyNTY3OTE4Ml8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAzLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiA2MDAwMDEyMywgLy8g5aSW6YOo5ou/5Yiw5pWw5o2u5ZCO5L2/55So5q2kSWTojrflj5bmnIDmlrDnmoTkuqflk4Hkv6Hmga/ov5vooYzlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlOiAxMDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBwb2lMaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5Y2X5Lqs5aSr5a2Q5bqZ5rGf5Y2X6LSh6ZmiXCIsXG4gICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiA0MDY4MixcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlX2lkXCI6IDIzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLljZfkuqzlpKvlrZDlupnmsZ/ljZfotKHpmaJcIixcbiAgICAgICAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IDQwNjgyLFxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiA3ODgwMTIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAzMzMsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZEltYWdlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE2MzgyNzMwJmRpPTQ3MzkyYTVjOTgxNWQxMWQ3YjI5YmZiNDAxNDI5YjdjJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzQ5Lm5pcGljLmNvbSUyRmZpbGUlMkYyMDE0MDkyNiUyRjE3NjU0NjgyXzIxNTkyMDE5OTgxOF8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAxMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFzVG9wOiBmYWxzZSwgICAvLyDmmK/lkKbnva7pobZcbiAgICAgICAgICAgICAgICBoYXNDb2xsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ250OiAwLFxuICAgICAgICAgICAgICAgIHB2OiAwLFxuICAgICAgICAgICAgICAgIHNoYXJlQ250OiAwLFxuICAgICAgICAgICAgICAgIHNoYXJlVGl0bGU6ICd4eHh4eCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JpZ2luSWQ6IDQsICAgLy8g5b+D5b6X5Y6faWRcbiAgICAgICAgICAgICAgICBjdXJyZW50SWQ6ICd4eHh4JywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgICAgICAgICAgICAgIGhhc1F1b3RlOiB0cnVlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICAgICAgICAgICAgICBwdWJsaXNoVGltZTogJ3h4eCcsICAvLyDlj5HluIPml7bpl7RcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a1i+ivleagh+mimCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDAsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpopgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+a1i+ivleWGheWuuScsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDAsIC8vIOe0ouW8le+8iOaVsOe7hOS4i+agh++8ieeUqOS6juWbvuaWh+aOkuW6jyblsIHpnaLorr7nva5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDEsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMywgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogNjAwMDAxMjMsIC8vIOWklumDqOaLv+WIsOaVsOaNruWQjuS9v+eUqOatpElk6I635Y+W5pyA5paw55qE5Lqn5ZOB5L+h5oGv6L+b6KGM5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogMTAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAyLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcG9pTGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuWNl+S6rOWkq+WtkOW6meaxn+WNl+i0oemZolwiLFxuICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgICAgICAgICAgIFwidHlwZV9pZFwiOiAyM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5Y2X5Lqs5aSr5a2Q5bqZ5rGf5Y2X6LSh6ZmiXCIsXG4gICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiA0MDY4MixcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlX2lkXCI6IDIzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogMzMzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJbWFnZTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxNjM4MjczMCZkaT00NzM5MmE1Yzk4MTVkMTFkN2IyOWJmYjQwMTQyOWI3YyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWM0OS5uaXBpYy5jb20lMkZmaWxlJTJGMjAxNDA5MjYlMkYxNzY1NDY4Ml8yMTU5MjAxOTk4MThfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogMTFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhc1RvcDogZmFsc2UsICAgLy8g5piv5ZCm572u6aG2XG4gICAgICAgICAgICAgICAgaGFzQ29sbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNudDogMCxcbiAgICAgICAgICAgICAgICBwdjogMCxcbiAgICAgICAgICAgICAgICBzaGFyZUNudDogMCxcbiAgICAgICAgICAgICAgICBzaGFyZVRpdGxlOiAneHh4eHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZUNvbGxlY3Rpb24gPSB7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBlcnJvckNvZGU6IDcxMDAwMCxcbiAgICBtc2c6IFwiT0tcIixcbiAgICBkYXRhOiB7XG4gICAgICAgIGNvdW50OiAxMDAsIC8vIOaAu+mhteaVsFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JpZ2luSWQ6ICd4eHh4eCcsICAgLy8g5b+D5b6X5Y6faWRcbiAgICAgICAgICAgICAgICBjdXJyZW50SWQ6ICd4eHh4JywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgICAgICAgICAgICAgIGhhc1F1b3RlOiBmYWxzZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgICAgICAgICAgICAgcHVibGlzaFRpbWU6ICd4eHgnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopjmloflrZfmoIfpopgnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAwLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrnmtYvor5XlhoXlrrknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAwLCAvLyDntKLlvJXvvIjmlbDnu4TkuIvmoIfvvInnlKjkuo7lm77mlofmjpLluo8m5bCB6Z2i6K6+572uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAxLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMywgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogNjAwMDAxMjMsIC8vIOWklumDqOaLv+WIsOaVsOaNruWQjuS9v+eUqOatpElk6I635Y+W5pyA5paw55qE5Lqn5ZOB5L+h5oGv6L+b6KGM5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogMTAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAyLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBwb2lMaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuWkp+i/nlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZV9pZFwiOiAyM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IDEyMyxcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IDExLFxuICAgICAgICAgICAgICAgICAgICBoZWFkSW1hZ2U6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTYzODI3MzAmZGk9NDczOTJhNWM5ODE1ZDExZDdiMjliZmI0MDE0MjliN2MmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljNDkubmlwaWMuY29tJTJGZmlsZSUyRjIwMTQwOTI2JTJGMTc2NTQ2ODJfMjE1OTIwMTk5ODE4XzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6ICflpKfmlownXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYXNUb3A6IGZhbHNlLCAgIC8vIOaYr+WQpue9rumhtlxuICAgICAgICAgICAgICAgIGhhc0NvbGxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25DbnQ6IDAsXG4gICAgICAgICAgICAgICAgcHY6IDEyMyxcbiAgICAgICAgICAgICAgICBzaGFyZUNudDogMCxcbiAgICAgICAgICAgICAgICBzaGFyZVRpdGxlOiAneHh4eHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yaWdpbklkOiAneHh4eHgnLCAgIC8vIOW/g+W+l+WOn2lkXG4gICAgICAgICAgICAgICAgY3VycmVudElkOiAneHh4eCcsICAgLy8g5b2T5YmN5byV55So5ZCOaWRcbiAgICAgICAgICAgICAgICBoYXNRdW90ZTogdHJ1ZSwgICAgLy8g5piv5ZCm5piv5byV55SoXG4gICAgICAgICAgICAgICAgcHVibGlzaFRpbWU6ICd4eHgnLCAgLy8g5Y+R5biD5pe26Ze0XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmtYvor5XmoIfpopgnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAwLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5paH5a2X5qCH6aKYJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmtYvor5XlhoXlrrknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAwLCAvLyDntKLlvJXvvIjmlbDnu4TkuIvmoIfvvInnlKjkuo7lm77mlofmjpLluo8m5bCB6Z2i6K6+572uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAxLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE4NTQ1MTk4JmRpPWVlZmFjNmI3ZDA2NWI0ZTdmZTBkMWYzMGYyODA4ZDI5JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzM5Lm5pcGljLmNvbSUyRjIwMTQwMzE0JTJGMTM4NDY3OTJfMTIyMDI1Njc5MTgyXzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDMsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IDYwMDAwMTIzLCAvLyDlpJbpg6jmi7/liLDmlbDmja7lkI7kvb/nlKjmraRJZOiOt+WPluacgOaWsOeahOS6p+WTgeS/oeaBr+i/m+ihjOWkhOeQhlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGU6IDEwMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcG9pTGlzdDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLljZfkuqzlpKvlrZDlupnmsZ/ljZfotKHpmaJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyZW50X2lkXCI6IDQwNjgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiA3ODgwMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVfaWRcIjogMjNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiAyMjIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZEltYWdlOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTI0MjE2MzgyNzMwJmRpPTQ3MzkyYTVjOTgxNWQxMWQ3YjI5YmZiNDAxNDI5YjdjJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzQ5Lm5pcGljLmNvbSUyRmZpbGUlMkYyMDE0MDkyNiUyRjE3NjU0NjgyXzIxNTkyMDE5OTgxOF8yLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAxMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFzVG9wOiBmYWxzZSwgICAvLyDmmK/lkKbnva7pobZcbiAgICAgICAgICAgICAgICBoYXNDb2xsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ250OiAwLFxuICAgICAgICAgICAgICAgIHB2OiAwLFxuICAgICAgICAgICAgICAgIHNoYXJlQ250OiAwLFxuICAgICAgICAgICAgICAgIHNoYXJlVGl0bGU6ICd4eHh4eCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JpZ2luSWQ6ICd4eHh4eCcsICAgLy8g5b+D5b6X5Y6faWRcbiAgICAgICAgICAgICAgICBjdXJyZW50SWQ6ICd4eHh4JywgICAvLyDlvZPliY3lvJXnlKjlkI5pZFxuICAgICAgICAgICAgICAgIGhhc1F1b3RlOiB0cnVlLCAgICAvLyDmmK/lkKbmmK/lvJXnlKhcbiAgICAgICAgICAgICAgICBwdWJsaXNoVGltZTogJ3h4eCcsICAvLyDlj5HluIPml7bpl7RcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a1i+ivleagh+mimCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDAsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmloflrZfmoIfpopgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+a1i+ivleWGheWuuScsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDAsIC8vIOe0ouW8le+8iOaVsOe7hOS4i+agh++8ieeUqOS6juWbvuaWh+aOkuW6jyblsIHpnaLorr7nva5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IDEsIC8vIDDvvJrmloflrZcgIDHvvJrlm77niYcgIDLvvJrkuqflk4EgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTg1NDUxOTgmZGk9ZWVmYWM2YjdkMDY1YjRlN2ZlMGQxZjMwZjI4MDhkMjkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzkubmlwaWMuY29tJTJGMjAxNDAzMTQlMkYxMzg0Njc5Ml8xMjIwMjU2NzkxODJfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTg1NDUxOTgmZGk9ZWVmYWM2YjdkMDY1YjRlN2ZlMGQxZjMwZjI4MDhkMjkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzkubmlwaWMuY29tJTJGMjAxNDAzMTQlMkYxMzg0Njc5Ml8xMjIwMjU2NzkxODJfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTg1NDUxOTgmZGk9ZWVmYWM2YjdkMDY1YjRlN2ZlMGQxZjMwZjI4MDhkMjkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzkubmlwaWMuY29tJTJGMjAxNDAzMTQlMkYxMzg0Njc5Ml8xMjIwMjU2NzkxODJfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTg1NDUxOTgmZGk9ZWVmYWM2YjdkMDY1YjRlN2ZlMGQxZjMwZjI4MDhkMjkmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzkubmlwaWMuY29tJTJGMjAxNDAzMTQlMkYxMzg0Njc5Ml8xMjIwMjU2NzkxODJfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMywgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogNjAwMDAxMjMsIC8vIOWklumDqOaLv+WIsOaVsOaNruWQjuS9v+eUqOatpElk6I635Y+W5pyA5paw55qE5Lqn5ZOB5L+h5oGv6L+b6KGM5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogMTAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudElkOiAyLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBwb2lMaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuWMl+S6rFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogNDA2ODIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDc4ODAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZV9pZFwiOiAyM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IDMzMyxcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IDExLFxuICAgICAgICAgICAgICAgICAgICBoZWFkSW1hZ2U6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MjQyMTYzODI3MzAmZGk9NDczOTJhNWM5ODE1ZDExZDdiMjliZmI0MDE0MjliN2MmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljNDkubmlwaWMuY29tJTJGZmlsZSUyRjIwMTQwOTI2JTJGMTc2NTQ2ODJfMjE1OTIwMTk5ODE4XzIucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IDExXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYXNUb3A6IGZhbHNlLCAgIC8vIOaYr+WQpue9rumhtlxuICAgICAgICAgICAgICAgIGhhc0NvbGxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25DbnQ6IDAsXG4gICAgICAgICAgICAgICAgcHY6IDAsXG4gICAgICAgICAgICAgICAgc2hhcmVDbnQ6IDAsXG4gICAgICAgICAgICAgICAgc2hhcmVUaXRsZTogJ3h4eHh4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5JZDogJ3h4eHh4JywgICAvLyDlv4Plvpfljp9pZFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZDogJ3h4eHgnLCAgIC8vIOW9k+WJjeW8leeUqOWQjmlkXG4gICAgICAgICAgICAgICAgaGFzUXVvdGU6IHRydWUsICAgIC8vIOaYr+WQpuaYr+W8leeUqFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hUaW1lOiAneHh4JywgIC8vIOWPkeW4g+aXtumXtFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMCwgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgICAz77ya6KeG6aKRXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aWh+Wtl+agh+mimCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5rWL6K+V5YaF5a65JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogMCwgLy8g57Si5byV77yI5pWw57uE5LiL5qCH77yJ55So5LqO5Zu+5paH5o6S5bqPJuWwgemdouiuvue9rlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogMSwgLy8gMO+8muaWh+WtlyAgMe+8muWbvueJhyAgMu+8muS6p+WTgSAgIDPvvJrop4bpopFcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAzLCAvLyAw77ya5paH5a2XICAx77ya5Zu+54mHICAy77ya5Lqn5ZOBICAgM++8muinhumikVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiA2MDAwMDEyMywgLy8g5aSW6YOo5ou/5Yiw5pWw5o2u5ZCO5L2/55So5q2kSWTojrflj5bmnIDmlrDnmoTkuqflk4Hkv6Hmga/ov5vooYzlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUeXBlOiAxMDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBvaUxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi5LiK5rW3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiA0MDY4MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogNzg4MDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlX2lkXCI6IDIzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogMzMzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJbWFnZTogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUyNDIxNjM4MjczMCZkaT00NzM5MmE1Yzk4MTVkMTFkN2IyOWJmYjQwMTQyOWI3YyZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWM0OS5uaXBpYy5jb20lMkZmaWxlJTJGMjAxNDA5MjYlMkYxNzY1NDY4Ml8yMTU5MjAxOTk4MThfMi5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogMTFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhc1RvcDogZmFsc2UsICAgLy8g5piv5ZCm572u6aG2XG4gICAgICAgICAgICAgICAgaGFzQ29sbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbkNudDogMCxcbiAgICAgICAgICAgICAgICBwdjogMCxcbiAgICAgICAgICAgICAgICBzaGFyZUNudDogMCxcbiAgICAgICAgICAgICAgICBzaGFyZVRpdGxlOiAneHh4eHgnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG4iXX0=