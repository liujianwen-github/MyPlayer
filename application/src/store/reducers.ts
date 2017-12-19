import * as TYPES from './types';
import * as Redux from 'redux'

const initialState = {
	isLoggedIn: false,
	user: {},
	status: null,
};

function userReducers(state=initialState, action){

	switch(action.type){
		case TYPES.LOGGED_DOING:
			return {
				...state,
				status: 'doing'
			};

		case TYPES.LOGGED_IN:
			return {
				...state,
				isLoggedIn: true,
				user: action.user,
				status: 'done'
			};

		case TYPES.LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
				user: {},
				status: null
			};
		case TYPES.LOGGED_ERROR:
			return {
				...state,
				isLoggedIn: false,
				user: {},
				status: null
			}

		default: 
			return state;
	}

}
export default Redux.combineReducers({
  userStore:userReducers
})