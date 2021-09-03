import { lancamento, usuario } from "@prisma/client";
import { IRouterContext } from "koa-router";
import { savelaunch } from "./repositories/save-user-repository";

export const store = async (ctx: IRouterContext) => {

  const lancamento: lancamento = ctx.request.body

  try {

    const lancamentoSalvo = await savelaunch(lancamento);
    ctx.body = lancamentoSalvo;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }

}
