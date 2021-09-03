import { PrismaClient, } from "@prisma/client";

const prisma = new PrismaClient();

export const updateUser = async (email: string, nome: string, id: number) => {

  try {

    const usuarios = await prisma.usuario.update({
      data: {
        nome: nome,
        email: email,
      },
      where: {
        id: id
      }
    });

    return usuarios;

  } catch (error) {
    return { error };
  }
};