const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller')

const app = new Koa();

// add router middleware:
app.use(bodyParser())
app.use(router.routes());
app.use(controller())
app.listen(3000);
console.log('app started at port 3000...');