// 深拷贝对象
export function cloneDeep(obj:object){
  let res:object = {}
  for(let i in obj){
    if(typeof obj === 'object'){
      if(obj[i].__proto__ === Array.prototype){
        res[i] = cloneArray(obj[i])  
      }else{
        res[i] = cloneDeep(obj[i])
      }
    }else{
      res[i] = obj[i]
    }
  }
  return res
}
// 深拷贝数组
export function cloneArray(arr:Array<any>){
  let res:Array<any> = []
  for(let i in arr){
    res[i] = typeof arr[i] === 'object' ? cloneDeep(res[i]) : arr[i]
  }
  return res
}