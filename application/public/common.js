"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 深拷贝对象
function cloneDeep(obj) {
    var res = {};
    for (var i in obj) {
        if (typeof obj === 'object') {
            if (obj[i].__proto__ === Array.prototype) {
                res[i] = cloneArray(obj[i]);
            }
            else {
                res[i] = cloneDeep(obj[i]);
            }
        }
        else {
            res[i] = obj[i];
        }
    }
    return res;
}
exports.cloneDeep = cloneDeep;
// 深拷贝数组
function cloneArray(arr) {
    var res = [];
    for (var i in arr) {
        res[i] = typeof arr[i] === 'object' ? cloneDeep(res[i]) : arr[i];
    }
    return res;
}
exports.cloneArray = cloneArray;
//# sourceMappingURL=common.js.map