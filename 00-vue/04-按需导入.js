//按需导入的成员名称必须和按需导出的成员名称保持一致
//按需导入时可以使用as关键字进行重命名
//info代表默认导入的成员
import info, { s1, s2 as str, say } from './03-按需导出.js'

console.log(s1);

//console.log(s2);

console.log(str);

console.log(say);

//按需导入可以和默认导入一起使用
console.log(info);