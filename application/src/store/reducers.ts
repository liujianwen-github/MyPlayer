import * as TYPES from './types';
import * as Redux from 'redux'
import {ADDUSER} from './types'

const initialState={
	// name:'default',
	users:[]
}
function userReducers(state=initialState, action){

	switch(action.type){
		case ADDUSER:
			state.users.push[action.user]
			return {
				...state,
				status: 'added'
			};
		default: 
			return state;
	}

}
export default Redux.combineReducers({
  userReducers
})