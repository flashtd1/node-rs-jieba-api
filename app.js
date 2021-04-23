const { cut, load, tag } = require('@node-rs/jieba')
load()

// let result = cut('我们中出了一个叛徒，怎么办？', false)
let result1 = tag('我们中出了一个叛徒，我该怎么办？', false)
// console.log(result)
console.log(result1)