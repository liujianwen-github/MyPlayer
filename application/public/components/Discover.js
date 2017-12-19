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
 * 发现模块
 *
 * @export
 * @class Discover
 * @extends {Component}
 */
var Discover = /** @class */ (function (_super) {
    __extends(Discover, _super);
    function Discover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Discover.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.Text>discover</react_native_1.Text>
       </react_native_1.View>);
    };
    return Discover;
}(React.Component));
exports.default = Discover;
//# sourceMappingURL=Discover.js.map