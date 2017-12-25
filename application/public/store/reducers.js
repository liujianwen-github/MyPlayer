"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var common_1 = require("../common");
var initialState = {
    // name:'default',
    users: []
};
function userReducers(state, action) {
    switch (action.type) {
        case types_1.ADDUSER:
            var newState = common_1.cloneDeep(state);
            newState.users.push(action.user);
            return __assign({}, newState, { status: 'added' });
        default:
            return state;
    }
}
exports.default = userReducers;
// export default Redux.combineReducers({
//   userReducers
// }) 
//# sourceMappingURL=reducers.js.map