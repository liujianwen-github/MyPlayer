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
// import configureStore from './store/store'
// let store = configureStore(()=>{console.log('store创建参数')})
// components
var BaseDrawer_1 = require("./UI/BaseDrawer");
/**
 * 主入口文件
 *
 * @export
 * @class
 * @extends {React.Component}
 */
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        return _super.call(this, props) || this;
    }
    Main.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
          <BaseDrawer_1.default />
        </react_native_1.View>);
    };
    return Main;
}(React.Component));
exports.default = Main;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    safeArea: {}
});
//# sourceMappingURL=Main.js.map