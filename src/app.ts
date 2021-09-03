import cors from '@koa/cors';
import koa from 'koa';
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import serve from "koa-static";
import Router from "koa-router";
import { createErrorMiddleware } from "koa-yup-validator";
import path from "path";
import { routerUsuarios } from './api/controllers/usuarios/usuarios-routes';

const app = new koa();
const routerOpen = new Router();

const staticDirPath = path.join(__dirname, "public");

app.use(logger());

app.use(cors({ maxAge: 86400 }));

app.use(bodyParser());

app.use(serve(staticDirPath));

app.use(createErrorMiddleware());

app.use(routerOpen.routes());

routerOpen.get("/", (ctx) => {
  console.log("teste")
  ctx.status = 200;
  ctx.body = {
    status: "OK",
    version: "1.0"
  };
});

app.use((ctx) => {
  ctx.body = "Não encontrado";
  ctx.status = 404;
});

routerOpen.use(routerUsuarios.routes());

export default app;
