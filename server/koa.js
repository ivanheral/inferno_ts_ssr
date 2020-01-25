import { renderToString } from 'inferno-server';
import { StaticRouter } from 'inferno-router';
import Koa from 'koa';
import server from 'koa-static';
import Html from './html';
import App from '../client/ts/app';

const app = new Koa();
app.use(server("assets"));
app.use(async(ctx, next) => {

  const context = {};
  const content = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <Html><App/></Html>
    </StaticRouter>
  );

  if (context.url) {
    return ctx.redirect(context.url)
  }
  
  ctx.body = '<!DOCTYPE html>\n' + content;
  await next();
});

app.listen(3000);