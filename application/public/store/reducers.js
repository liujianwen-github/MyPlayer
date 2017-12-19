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
var TYPES = require("./types");
var Redux = require("redux");
var initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
};
function userReducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case TYPES.LOGGED_DOING:
            return __assign({}, state, { status: 'doing' });
        case TYPES.LOGGED_IN:
            return __assign({}, state, { isLoggedIn: true, user: action.user, status: 'done' });
        case TYPES.LOGGED_OUT:
            return __assign({}, state, { isLoggedIn: false, user: {}, status: null });
        case TYPES.LOGGED_ERROR:
            return __assign({}, state, { isLoggedIn: false, user: {}, status: null });
        default:
            return state;
    }
}
exports.default = Redux.combineReducers({
    userStore: userReducers
});
//# sourceMappingURL=reducers.js.map