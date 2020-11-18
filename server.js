/* eslint-disable*/

const Koa = require('koa'); // 引入 koa
const next = require('next'); // nextjs 作为中间件

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa(); // 声明一个 server

  //
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.response = false;
  });
  server.listen(3000);
});
