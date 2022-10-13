import thenFs from "then-fs";

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]

//Promise.all():所有异步操作完成,再执行下一步的.then操作
// Promise.all(promiseArr).then(result => {
//     console.log(result);
// })

//Promise.race():任何一个异步操作完成,就立即执行下一步的.then操作
Promise.race(promiseArr).then(result => {
    console.log(result);
})
