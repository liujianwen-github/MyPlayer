"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigation = require("react-navigation");
var React = require("react");
var react_native_1 = require("react-native");
// components
var Personal_1 = require("../components/Personal");
var Conversation_1 = require("../components/Conversation");
var Discover_1 = require("../components/Discover");
// style
var ChineseRed_1 = require("../theme/ChineseRed");
var tabBar_1 = require("../styles/tabBar");
/**
 * TabNavigator配置
 */
var BaseTab = Navigation.TabNavigator({
    Personal: {
        screen: Personal_1.default,
        navigationOprions: {
            tabBarLabel: '个人',
            tabBarIcon: function (_a) {
                var tintColor = _a.tintColor;
                return (<react_native_1.Image source={require('../../assets/img/Discover.png')} style={[tabBar_1.default.tabBarItem, { tintColor: tintColor }]}/>);
            }
        }
    },
    Discover: {
        screen: Discover_1.default,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: function (_a) {
                var tintColor = _a.tintColor;
                return (<react_native_1.Image source={require('../../assets/img/Discover.png')} style={[tabBar_1.default.tabBarItem, { tintColor: tintColor }]}/>);
            }
        }
    },
    Conversation: {
        screen: Conversation_1.default,
        navigationOptions: {
            tabBarLabel: '社交',
            tabBarIcon: function (_a) {
                var tintColor = _a.tintColor;
                return (<react_native_1.Image source={require('../../assets/img/Conversation.png')} style={[tabBar_1.default.tabBarItem, { tintColor: tintColor }]}/>);
            }
        }
    }
}, {
    initialRouteName: "Discover",
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeTintColor: "#FFF",
        inactiveTintColor: "#898989",
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: ChineseRed_1.default.background,
            height: 50,
        },
    }
});
exports.default = BaseTab;
