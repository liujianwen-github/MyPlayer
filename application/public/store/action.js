"use strict";
// import { AlertIOS } from 'react-native';
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
function addUser(newUser) {
    return {
        type: TYPES.ADDUSER,
        user: newUser
    };
}
exports.addUser = addUser;
//# sourceMappingURL=action.js.map