import cors from '@koa/cors';
import koa from 'koa';
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import serve from "koa-static";
import Router from "koa-router";
import path from "path";
import { routerUsuarios } from './api/usuarios/routes';

const app = new koa();

app.use(logger());
app.use(cors({ maxAge: 86400 }));
app.use(bodyParser());

const staticDirPath = path.join(__dirname, "public");

app.use(serve(staticDirPath));

const routerOpen = new Router();

routerOpen.get("/", (ctx) => {
  console.log("teste")
  ctx.status = 200;
  ctx.body = {
    status: "OK",
    version: "1.0"
  };
});

app.use(routerOpen.routes());


app.use((ctx) => {
  ctx.body = "Não encontrado";
  ctx.status = 404;
});

routerOpen.use(routerUsuarios.routes());

export default app;
