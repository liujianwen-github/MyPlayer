"use strict";
// import { AlertIOS } from 'react-native';
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = require("./types");
var store_1 = require("./store");
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
// export function logIn(opt){
// 	return (dispatch) => {
// 		dispatch({'type': TYPES.LOGGED_DOING});
// 		// let inner_get = fetch('http://www.baidu.com')
// 		// 	.then((res)=>{
// 		// 		dispatch({'type': TYPES.LOGGED_IN, user: testUser});
// 		// 	}).catch((e)=>{
// 		// 		AlertIOS.alert(e.message);
// 		// 		dispatch({'type': TYPES.LOGGED_ERROR, error: e});
// 		// 	});
// 	}
// }
function addUser(newUser) {
    return function () {
        store_1.userStore.dispatch({ type: TYPES.ADDUSER, user: newUser });
    };
}
exports.addUser = addUser;
//# sourceMappingURL=action.js.map