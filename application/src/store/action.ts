// import { AlertIOS } from 'react-native';

import * as TYPES from './types';
import store from './store'                                                                                                                                                                                                                                                                                                     

// fake user data
let testUser = {
	'name': 'juju',
	'age': '24',
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};

// for skip user 
let skipUser = {
	'name': 'guest',
	'age': 20,
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460',
};
export function addUser(newUser){
	return{
		type:TYPES.ADDUSER,
		user:newUser
	}
}



