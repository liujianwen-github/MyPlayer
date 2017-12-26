import * as TYPES from './types';
import * as Redux from 'redux'
import {ADDUSER} from './types'
import {cloneDeep} from '../common'

const initialState={
	// name:'default',
	users:[]
}
function userReducers(state, action){
	switch(action.type){
		case ADDUSER:
			let newState = cloneDeep(state)
			console.log('====================================');
			console.log(newState===state)
			console.log(action)
			console.log('====================================');
			newState.users.push(action.user)
			return newState;
		default: 
			return state;
	}

}
export default userReducers
// export default Redux.combineReducers({
//   userReducers
// })