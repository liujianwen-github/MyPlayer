"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var basicStyle_1 = require("./basicStyle");
// import theme from ''
var style = {
    /**
     * 上半部分列表
     */
    //整行
    line: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
    },
    // 左侧图片
    itemImage: {
        height: 20,
        width: 20,
        margin: 10
    },
    // 文字描述组
    itemTextGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        //以上跟父级元素line相同
        borderBottomWidth: 1,
        borderColor: basicStyle_1.default.lightGrey,
    },
    // title
    itemText: {
        color: basicStyle_1.default.font,
        fontSize: 16,
    },
    itemCount: {
        color: basicStyle_1.default.grey,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14
    },
    /**
     * 下半部分列表
     */
    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 25,
        // color:'white',
        backgroundColor: '#CACACA'
    },
    outerTouch: {
        flex: 1,
        flexDirection: 'row',
    },
    sectionTitleGroup: {
        flex: 1,
        flexDirection: 'row',
        height: 25,
        position: 'relative',
        alignItems: 'center'
    },
    settings: {
        position: 'absolute',
        right: 0
    }
};
exports.default = react_native_1.StyleSheet.create(style);
//# sourceMappingURL=personal.js.map