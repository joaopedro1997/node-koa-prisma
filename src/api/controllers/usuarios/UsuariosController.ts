import { usuario } from "@prisma/client";
import { IRouterContext, RouterContext } from "koa-router";
import { getAllUsers } from './repositories/load-all-users-repository'
import { removeUser } from "./repositories/remove-user-repository";
import { saveUser } from "./repositories/save-user-repository";
import { updateUser } from "./repositories/update-user-repository";

export const index = async (ctx: RouterContext) => {

  try {

    const usuarios = await getAllUsers();
    ctx.body = usuarios;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }
};

export const store = async (ctx: IRouterContext) => {

  const usuario: usuario = ctx.request.body

  try {

    const usuarioSalvo = await saveUser(usuario);
    ctx.body = usuarioSalvo;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }
}

export const update = async (ctx: IRouterContext) => {

  const usuario: usuario = ctx.request.body

  try {

    const usuarioUpdated = await updateUser(usuario);
    ctx.body = usuarioUpdated;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }
}

export const remove = async (ctx: IRouterContext) => {

  const usuario: usuario = ctx.request.body

  try {

    const usuarioRemovido = await removeUser(usuario);
    ctx.body = usuarioRemovido;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }
}