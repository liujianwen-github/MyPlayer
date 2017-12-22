"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var reducers_1 = require("./reducers");
// const logger = store => next => action => {
// 	if(typeof action === 'function') console.log('dispatching a function');
// 	else console.log('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// }
var logger = redux_logger_1.createLogger();
var middlewares = [
    logger
    // thunk
];
var initialState = {
    // name:'default',
    users: []
};
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
exports.userStore = redux_1.createStore(reducers_1.default, initialState, redux_1.applyMiddleware.apply(void 0, middlewares));
//# sourceMappingURL=store.js.map