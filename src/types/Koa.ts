
import { IRouterContext } from "koa-router";

export interface KoaContext extends IRouterContext {
  user: {
    nome: string;
    email: string;
  };
}