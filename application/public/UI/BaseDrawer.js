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
var Navigation = require("react-navigation");
// components
var BaseTab_1 = require("./BaseTab");
var MyNews_1 = require("../components/MyNews");
/**
 * 根导航目录
 *
 *
 * @class BaseNav
 * @extends {React.Component}
 */
var BaseDrawer = /** @class */ (function (_super) {
    __extends(BaseDrawer, _super);
    function BaseDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseDrawer.prototype.render = function () {
        return (<react_native_1.View></react_native_1.View>);
    };
    return BaseDrawer;
}(React.Component));
/**
 * drawer配置
 * @export
 */
var MainDrawer = Navigation.DrawerNavigator({
    DrawerDefault: {
        screen: BaseTab_1.default,
        navigationOptions: {
            tabBarLabel: '默认',
        }
    },
    MyNews: {
        screen: MyNews_1.default,
        navigationOptions: {
            tabBarLabel: '我的消息',
        }
    }
}, {
    drawerWidth: 200,
    drawerPosition: 'left',
    // contentComponent: 自定义目录
    initialRouteName: "DrawerDefault",
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#ff8500',
        inactiveTintColor: '#666',
        inactiveBackgroundColor: '#fff',
        style: {}
    }
});
exports.default = MainDrawer;
