import Router from "koa-router";
import { store } from "./LancamentosController";
import validator from "koa-yup-validator";
import * as yup from "yup";

const router = new Router();

const postLancamento = yup.object().shape({
  valor: yup.number().required("O Valor é obrigatório"),
  descricao: yup.string().required("A Descrição é obrigatório"),
  data: yup.date().required("A Data é obrigatório"),
  id_usuario: yup.string().required("O id_usuario é obrigatório"),
});

router.post("/api/lancamentos",
  validator({ body: postLancamento }),
  (ctx: any) => store(ctx)
);

export { router as routerLancamentos };