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
var Redux = require("redux");
var types_1 = require("./types");
var initialState = {
    // name:'default',
    users: []
};
function userReducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.ADDUSER:
            state.users.push[action.user];
            return __assign({}, state, { status: 'added' });
        default:
            return state;
    }
}
exports.default = Redux.combineReducers({
    userReducers: userReducers
});
//# sourceMappingURL=reducers.js.map