"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = require("./types");
// fake user data
var testUser = {
    'name': 'juju',
    'age': '24',
    'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};
// for skip user 
var skipUser = {
    'name': 'guest',
    'age': 20,
    'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460',
};
// login
function logIn(opt) {
    return function (dispatch) {
        dispatch({ 'type': TYPES.LOGGED_DOING });
        // let inner_get = fetch('http://www.baidu.com')
        // 	.then((res)=>{
        // 		dispatch({'type': TYPES.LOGGED_IN, user: testUser});
        // 	}).catch((e)=>{
        // 		AlertIOS.alert(e.message);
        // 		dispatch({'type': TYPES.LOGGED_ERROR, error: e});
        // 	});
    };
}
exports.logIn = logIn;
// skip login
function skipLogin() {
    return {
        'type': TYPES.LOGGED_IN,
        'user': skipUser,
    };
}
exports.skipLogin = skipLogin;
// logout
function logOut() {
    return {
        'type': TYPES.LOGGED_OUT
    };
}
exports.logOut = logOut;
//# sourceMappingURL=action.js.map