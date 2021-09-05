import { PrismaClient } from ".prisma/client";
import jwt from "jsonwebtoken";
import { config } from "../config";

export type Token = {
  idUsuario: string | null;
};

const prisma = new PrismaClient();

export const getToken = (token: string): Token => {
  const usuario:any = jwt.verify(token, config.JWT_SECRET);

  if (!usuario) {
    return {
      idUsuario: null,
    };
  }

  return {
    idUsuario: usuario?.usuario,
  };
};



export const getUser = async (token: string) => {
  const { idUsuario } = getToken(token);

  if (!idUsuario) {
    return null;
  }

  const usuario = await prisma.usuario.findFirst({
    where:{
      id: idUsuario
    }
  });
  // const usuario = await control("usuarios")
  //   .select("id", "acessa_agencias")
  //   .where({ id: idUsuario, status: 1 })
  //   .first();

  return usuario;
};

export const auth = async (ctx:any, next:any) => {
  try {
    const { authorization } = ctx.header;

  if (!authorization) {
    ctx.status = 403;
    ctx.body = {
      message: "Não autorizado",
    };
    return;
  }

  const usuario = await getUser(authorization);

  if (!usuario) {
    ctx.status = 403;
    ctx.body = {
      message: "Não autorizado",
    };
    return;
  }

  ctx.user = usuario;

  await next();
  } catch (error) {
    ctx.status = 403;
    ctx.body = {
      message: error
    }
    return;
  }
};