import { PrismaClient } from "@prisma/client";
import { RouterContext } from "koa-router";

const prisma = new PrismaClient();

export const GetAllUsers = async (ctx: RouterContext) => {
  try {

    const usuarios = await prisma.usuario.findMany({
      where: {
        NOT: {
          status: 0
        }
      },
      include: {
        lancamento: {
          select: {
            id: true,
            valor: true,
            usuarioId: true,
          }
        }
      }
    });

    ctx.body = usuarios;

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
};