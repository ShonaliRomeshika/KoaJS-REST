// app.js

const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

// middleware
app.use(koaBody());

// Require the routers
let items = require('./items.js');

// use the routes
app.use(items.routes());

app.listen(3000);