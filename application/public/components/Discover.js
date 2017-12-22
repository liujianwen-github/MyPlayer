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
var Discover = /** @class */ (function (_super) {
    __extends(Discover, _super);
    function Discover(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            username: 'sup1',
            password: '12345we6',
            btnFlag: true,
        };
        _this.btnfn.bind(_this);
        return _this;
    }
    Discover.prototype.btnfn = function () {
        console.log(this);
    };
    Discover.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.Text>discover</react_native_1.Text>
         <react_native_1.Button title="12" onPress={function () { console.log('11'); }}/>
       </react_native_1.View>);
    };
    return Discover;
}(React.Component));
function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
    };
}
exports.default = react_redux_1.connect(select)(Discover);
//# sourceMappingURL=Discover.js.map