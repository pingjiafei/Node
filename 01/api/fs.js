// 以文件形式读取
const fs = require('fs')

// 默认以异步的方式读取

// 同步
// TODO: Buffer 缓冲区 描述二进制数据
const data = fs.readFileSync('./conf.js')
console.log('data1',data.toString())

// 异步  错误优先
fs.readFile('./conf.js',(err,data)=>{
    if(err) console.log(err)
    console.log('data2',data.toString())
})

// 异步流程控制方法
// 1 promise  2 async/await 3 generator  4event emit 订阅发布
// promise形式的包
const fsp = require('fs').promises
fsp.readFile('./conf.js')
.then((data)=>{
    console.log('data3',data.toString())
})

// 修饰
const {promisify} = require('util')
// 回调风格该promise风格
const readFile = promisify(fs.readFile)
readFile('./conf.js')
.then(data => {
    console.log('data4',data.toString())
})