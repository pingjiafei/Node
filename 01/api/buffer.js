// 创建长度为10的空Buffer
const buf = Buffer.alloc(10)
console.log('bf1',buf)

// 从字符串创建一个buffer
const buf2 = Buffer.from('a')
const buf3 = Buffer.from('中')
console.log(buf2,buf3)

const buf4 = Buffer.concat([buf2,buf3])
console.log(buf4)
