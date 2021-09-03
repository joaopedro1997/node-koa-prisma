import { PrismaClient, } from "@prisma/client";

const prisma = new PrismaClient();

export const removeUser = async (id: number) => {

  try {

    const usuarios = await prisma.usuario.delete({
      where: {
        id: id
      }
    });

    return usuarios;

  } catch (error) {
    return { error };
  }
};