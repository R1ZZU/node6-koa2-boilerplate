const PORT = 3223;

import Koa from 'koa';
import route from 'koa-route';
import serveStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import convert from 'koa-convert';

const app = new Koa();
app.use(convert(session(app)));
app.use(bodyParser());

app.use(serveStatic(process.cwd() + '/static'));

app.use(route.get('/ping', async (ctx, next) => ctx.body = "Hi there! I'm working"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
