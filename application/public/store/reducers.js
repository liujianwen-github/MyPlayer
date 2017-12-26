"use strict";
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
            console.log('====================================');
            console.log(newState === state);
            console.log(action);
            console.log('====================================');
            newState.users.push(action.user);
            return newState;
        default:
            return state;
    }
}
exports.default = userReducers;
// export default Redux.combineReducers({
//   userReducers
// }) 
//# sourceMappingURL=reducers.js.map