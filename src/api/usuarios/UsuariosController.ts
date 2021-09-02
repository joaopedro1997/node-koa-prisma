import { PrismaClient } from "@prisma/client";
import { RouterContext } from "koa-router";

export const getAllUsers = async (ctx: RouterContext) => {

  const prisma = new PrismaClient();

  try {
    const users = await prisma.$queryRaw("select * from usuario")

    await prisma.$disconnect()
    ctx.body = users;

  } catch (error) {

    ctx.status = 500;
    ctx.body = { error };

  }
};