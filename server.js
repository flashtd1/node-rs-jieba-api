const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { load, tag } = require('@node-rs/jieba')
const app = new Koa()
load()
let port = '5020'
app.use(bodyParser())
app.use(async (ctx, next) => {
    const { text } = ctx.request.body
    try {
        let result = tag(text, false)
        ctx.body = result
    } catch (e) {
        console.log(e)
        ctx.body = e.message
    }
})


app.listen(port)
console.log(`listening on *:${port}`)