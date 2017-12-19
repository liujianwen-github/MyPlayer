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
var react_redux_1 = require("react-redux");
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
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            store: '1'
        };
        return _this;
    }
    default_1.prototype.render = function () {
        return (<react_redux_1.Provider store={this.state.store}>
        <react_native_1.View style={styles.container}>
          <BaseDrawer_1.default />
        </react_native_1.View>
      </react_redux_1.Provider>);
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
//# sourceMappingURL=Main.js.map