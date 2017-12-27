"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
/**
 * 创建歌单
 *
 * @interface createData
 */
// interface createData{
//   [index:number]:{
//     data:{
//       [index:number]:{
//         title:string,
//         totalCount:number,
//         downloadCount?:number,
//         headImage?:string,
//         key?:string
//       }
//     },
//     key:string,
//     // length:number
//   }
// }
/**
 * 下半部分列表模拟数据
 */
var createData = [{
        data: [{
                title: '我喜欢的',
                totalCount: 12,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
                downloadCount: 0,
            }, {
                title: '我喜欢的1',
                totalCount: 12,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
                downloadCount: 0,
            }],
        key: '创建'
    }, {
        data: [{
                title: 'bilibli',
                totalCount: 12,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
                downloadCount: 0,
            }, {
                title: 'bilibli1111',
                totalCount: 12,
                headImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514372348080&di=201e947edfe6e5426601e02c888d1f4d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F19%2F20160319204738_ncLmd.jpeg',
                downloadCount: 0,
            }],
        key: '收藏'
    }];
//style
var basicStyle_1 = require("../styles/basicStyle");
var personal_1 = require("../styles/personal");
/**
 * 个人模块
 *
 * @export
 * @class Personal
 * @extends {Component}
 */
var Personal = /** @class */ (function (_super) {
    __extends(Personal, _super);
    function Personal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: [{
                    title: '本地音乐',
                    count: 0,
                    key: 0
                }, {
                    title: '最近播放',
                    count: 0,
                    key: 1
                }, {
                    title: '下载管理',
                    count: 0,
                    key: 2
                }, {
                    title: '我的电台',
                    count: 0,
                    key: 3
                }, {
                    title: '我的收藏',
                    count: 0,
                    key: 4
                }],
            isRefreshing: false,
            createdStatus: true,
            collectedStatus: true
        };
        _this.listRender = _this.listRender.bind(_this);
        _this.onRefresh = _this.onRefresh.bind(_this);
        _this.skip = _this.skip.bind(_this);
        _this.renderItemTitle = _this.renderItemTitle.bind(_this);
        return _this;
    }
    /**
     * 跳转到子界面
     *
     * @param {any} arg
     * @memberof Personal
     */
    Personal.prototype.skip = function (arg) {
        console.log('====================================');
        console.log(arg);
        console.log('====================================');
    };
    /**
     * 上半部分列表渲染
     *
     * @param {any} {item,index}
     * @returns
     * @memberof Personal
     */
    Personal.prototype.listRender = function (_a) {
        var item = _a.item, index = _a.index;
        // todo fetchdata
        var count = 10;
        return (<react_native_1.View key={index}>
          <react_native_1.TouchableHighlight onPress={this.skip.bind(this, item)} underlayColor={basicStyle_1.default.lightGrey} activeOpacity={0.4}>
            <react_native_1.View style={personal_1.default.line}>
              <react_native_1.Image style={personal_1.default.itemImage} source={require('../../assets/img/Personal.png')}></react_native_1.Image>
              <react_native_1.View style={personal_1.default.itemTextGroup}>
                <react_native_1.Text style={personal_1.default.itemText}>{item.title}</react_native_1.Text>
                <react_native_1.Text>{"(" + count + ")"}</react_native_1.Text>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.TouchableHighlight>
        </react_native_1.View>);
    };
    /**
     * 下拉刷新事件
     *
     * @memberof Personal
     */
    Personal.prototype.onRefresh = function () {
        var _this = this;
        console.log(this);
        this.setState({ isRefreshing: true });
        setTimeout(function () {
            console.log(_this);
            _this.setState({ isRefreshing: false });
        }, 3000);
    };
    /**
     * 下半部分列表项渲染
     *
     * @param {any} {item,index}
     * @returns
     * @memberof Personal
     */
    Personal.prototype.renderItemGroup = function (_a) {
        var item = _a.item, index = _a.index;
        // console.log(require(`'${item.headImage}'`))
        return (<react_native_1.View key={index}>
          <react_native_1.TouchableHighlight>
            <react_native_1.View style={personal_1.default.line}>
              <react_native_1.Image style={personal_1.default.itemImage} source={{ uri: "" + item.headImage }}/>
              <react_native_1.View>
                <react_native_1.Text>{item.title}</react_native_1.Text>
                <react_native_1.Text>{item.totalCount + "\u9996"}</react_native_1.Text>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.TouchableHighlight>
        </react_native_1.View>);
    };
    /**
     * 下半部分列表标题渲染
     *
     * @param {any} {item,index}
     * @returns
     * @memberof Personal
     */
    Personal.prototype.renderItemTitle = function (_a) {
        var section = _a.section;
        console.log(section);
        return (<react_native_1.View key={section} style={personal_1.default.lineContainer}>
          <react_native_1.TouchableHighlight style={personal_1.default.outerTouch}>
            <react_native_1.View style={personal_1.default.sectionTitleGroup}>
              <react_native_1.Image source={require('../../assets/img/Personal.png')}/>
              <react_native_1.Text>{section.key}</react_native_1.Text>
              <react_native_1.Image style={personal_1.default.settings} source={require('../../assets/img/Personal.png')}/>
            </react_native_1.View>
          </react_native_1.TouchableHighlight>
        </react_native_1.View>);
    };
    Personal.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.ScrollView refreshControl={<react_native_1.RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} tintColor="#ff0000" title="Loading..." titleColor="red" colors={['#ff0000', '#00ff00', '#0000ff']} progressBackgroundColor='white'/>}>
          <react_native_1.FlatList data={this.state.list} renderItem={this.listRender}></react_native_1.FlatList>
          <react_native_1.SectionList renderItem={this.renderItemGroup} renderSectionHeader={this.renderItemTitle} sections={createData}/>
         </react_native_1.ScrollView>
       </react_native_1.View>);
    };
    return Personal;
}(React.Component));
exports.default = Personal;
//# sourceMappingURL=Personal.js.map