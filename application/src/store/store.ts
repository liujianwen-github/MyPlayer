import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';
import {ADDUSER} from './types'
// const logger = store => next => action => {
// 	if(typeof action === 'function') console.log('dispatching a function');
// 	else console.log('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// }
const logger = createLogger()
let middlewares = [
	logger
	// thunk
];
const initialState={
	// name:'default',
	users:[]
}
// // let createAppStore = applyMiddleware(...middlewares)(createStore); //添加action中间件
// // let 

// // export default function configureStore(onComplete: ()=>void){
// export default function configureStore(initialState?:any){
// 	// const store = autoRehydrate()(createAppStore)(reducers);
// 	const store = createStore(reducers,initialState,applyMiddleware(...middlewares))
// 	let opt = {
// 		storage: AsyncStorage,
// 		transform: [],
// 		//whitelist: ['userStore'],
// 	};
// 	// persistStore(store, opt, onComplete);//store存储到本地
// 	return store;
// }
export const userStore = createStore(reducers,initialState,applyMiddleware(...middlewares))
