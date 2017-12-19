"use strict";
// actions
var actionType = {
    ADD: "ADD",
    DELETE: "DELETE"
};
function add(opt) {
    return function (dispatch) {
        dispatch({ 'type': actionType.ADD, opt: opt });
    };
}
function deletetest() {
    return {
        'type': actionType.DELETE
    };
}
// reducer
var initialState = {
    data: [1, 2, 3]
};
// function reducers(state=initialState,action){
//   switch(action.type){
//     case actionType.ADD:
//       return{...state,d}
//   }
// }
//# sourceMappingURL=default.js.map