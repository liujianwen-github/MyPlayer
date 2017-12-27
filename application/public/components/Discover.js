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
/**
 * redux UI组件
 *
 * @class UIDiscover
 * @extends {React.Component<null, null>}
 */
var UIDiscover = /** @class */ (function (_super) {
    __extends(UIDiscover, _super);
    function UIDiscover(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            text: ''
        };
        _this.btnfn = _this.btnfn.bind(_this);
        return _this;
    }
    UIDiscover.prototype.btnfn = function () {
        console.log(this);
        var addUser = this.props.addUser;
        var user = this.state.text;
        addUser(user);
        this.setState({ text: '' });
        console.log(this.state);
    };
    UIDiscover.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View>
        
        <react_native_1.TextInput style={{ height: 40 }} placeholder="Type here to translate!" onChangeText={function (text) { return _this.setState({ text: text }); }} value={this.state.text}/>
        <react_native_1.Button title="12" onPress={this.btnfn}/>
        <react_native_1.FlatList data={this.props.users} renderItem={function (_a) {
            var item = _a.item;
            return <react_native_1.Text>{item}</react_native_1.Text>;
        }}/>
      </react_native_1.View>);
    };
    return UIDiscover;
}(React.Component));
/**
 * 输出Discover组件
 *
 * @class Discover
 * @extends {React.Component<DiscoverProps, DiscoverStates>}
 */
var Discover = /** @class */ (function (_super) {
    __extends(Discover, _super);
    function Discover(props) {
        return _super.call(this, props) || this;
    }
    Discover.prototype.render = function () {
        return (<react_native_1.View>
         <react_native_1.Text>discover</react_native_1.Text>
         <UI />
       </react_native_1.View>);
    };
    return Discover;
}(React.Component));
exports.default = Discover;
var mapStateToProps = function (state, props) {
    return {
        users: state.users
    };
};
var mapDispatchToProps = function (dispatch, props) {
    return {
        addUser: function (arg) { return dispatch({ type: "ADD_USER", user: arg }); }
    };
};
var UI = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UIDiscover);
// export default UIDiscover
// export default Discover 
//# sourceMappingURL=Discover.js.map