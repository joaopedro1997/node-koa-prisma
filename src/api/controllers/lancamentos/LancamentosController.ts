import { lancamento, usuario } from "@prisma/client";
import { IRouterContext } from "koa-router";
import { saveLaunch } from "./repositories/save-lancamento-repository";

export const store = async (ctx: IRouterContext) => {

  const lancamento: lancamento = ctx.request.body;

  try {

    const lancamentoSalvo = await saveLaunch(lancamento);

    if(lancamentoSalvo === null){
      ctx.status = 404;
      ctx.body = { message: "Usuário não encontrado" };
      return;
    };

    ctx.body = lancamentoSalvo;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  };
};
