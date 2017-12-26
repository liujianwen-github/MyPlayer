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
                    count: 0
                }, {
                    title: '最近播放',
                    count: 0
                }, {
                    title: '下载管理',
                    count: 0
                }, {
                    title: '我的电台',
                    count: 0
                }, {
                    title: '我的收藏',
                    count: 0
                }]
        };
        _this.listRender = _this.listRender.bind(_this);
        return _this;
    }
    Personal.prototype.listRender = function (_a) {
        var item = _a.item, index = _a.index;
        // todo fetchdata
        var count = 10;
        return (<react_native_1.TouchableHighlight>
          <react_native_1.View style={personal_1.default.line}>
            <react_native_1.Image style={personal_1.default.itemImage} source={require('../../assets/img/Conversation.png')}></react_native_1.Image>
            <react_native_1.View style={personal_1.default.itemTextGroup}>
              <react_native_1.Text style={personal_1.default.itemText}>{item.title}</react_native_1.Text>
              <react_native_1.Text>{"(" + count + ")"}</react_native_1.Text>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.TouchableHighlight>);
    };
    Personal.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.ScrollView>
          <react_native_1.FlatList data={this.state.list} renderItem={this.listRender}></react_native_1.FlatList>
          <react_native_1.SectionList renderItem={function (_a) {
            var item = _a.item;
            return <react_native_1.Text>{item}</react_native_1.Text>;
        }} renderSectionHeader={function (_a) {
            var section = _a.section;
            return <react_native_1.Text>{section.key}</react_native_1.Text>;
        }} sections={[
            { data: [1, 2, 3], key: '创建' },
            { data: [4, 5, 6], key: '收藏' }
        ]}/>
         </react_native_1.ScrollView>
       </react_native_1.View>);
    };
    return Personal;
}(React.Component));
exports.default = Personal;
//# sourceMappingURL=Personal.js.map