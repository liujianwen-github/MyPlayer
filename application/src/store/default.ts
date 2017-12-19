
// actions
const actionType = {
  ADD:"ADD",
  DELETE:"DELETE"
}
function add(opt){
  return (dispatch)=>{
    dispatch({'type':actionType.ADD,opt})
  }
}
function deletetest(){
  return{
    'type':actionType.DELETE
  }
}
// reducer
const initialState = {
  data:[1,2,3]
}
// function reducers(state=initialState,action){
//   switch(action.type){
//     case actionType.ADD:
//       return{...state,d}
//   }
// }
