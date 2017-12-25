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
/**
 * 我的消息
 *
 *
 * @class MyNews
 * @extends {React.Component}
 */
var MyNews = /** @class */ (function (_super) {
    __extends(MyNews, _super);
    function MyNews(props) {
        var _this = _super.call(this, props) || this;
        _this.go = _this.go.bind(_this);
        return _this;
    }
    MyNews.prototype.go = function () {
        var navigate = this.props.navigation.navigate;
        console.log('1');
        navigate('Home');
    };
    MyNews.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.Text>mynews</react_native_1.Text>
         <react_native_1.Button title="go" onPress={this.go}></react_native_1.Button>
       </react_native_1.View>);
    };
    return MyNews;
}(React.Component));
//  stack配置
var newsStack = Navigation.StackNavigator({
    Home: {
        screen: MyNews,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                title: "我的消息",
            });
        }
    }
}, {});
exports.default = newsStack;
//# sourceMappingURL=MyNews.js.map