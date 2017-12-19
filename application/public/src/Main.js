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
// const configureStore = 
// components
var BaseDrawer_1 = require("./UI/BaseDrawer");
/**
 * 主入口文件
 *
 * @export
 * @class
 * @extends {React.Component}
 */
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
        <BaseDrawer_1.default />
      </react_native_1.View>);
    };
    return default_1;
}(React.Component));
exports.default = default_1;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    safeArea: {}
});
