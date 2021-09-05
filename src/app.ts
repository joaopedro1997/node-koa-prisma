import cors from '@koa/cors';
import koa from 'koa';
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import serve from "koa-static";
import Router from "koa-router";
import { createErrorMiddleware } from "koa-yup-validator";
import path from "path";
import { routerUsuarios } from './api/controllers/usuarios/usuarios-routes';
import { routerLancamentos } from './api/controllers/lancamentos/lancamentos-routes';
import { auth } from './auth/auth';
import { authLogin } from './api/auth/authLogin';

const app = new koa();

const routerOpen = new Router();
const routerAuth = new Router();

const staticDirPath = path.join(__dirname, "public");

app.use(logger());

app.use(cors({ maxAge: 86400 }));

app.use(bodyParser());

app.use(serve(staticDirPath));

app.use(createErrorMiddleware());


routerOpen.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = {
    status: "OK",
    version: "1.0"
  };
});



routerOpen.post("/api/auth/login", authLogin);

app.use(routerOpen.routes());

routerAuth.use(auth);

routerAuth.use(routerUsuarios.routes());

routerOpen.use(routerLancamentos.routes());



app.use(routerAuth.routes());

app.use((ctx) => {
  ctx.body = "Não encontrado";
  ctx.status = 404;
});

export default app;
