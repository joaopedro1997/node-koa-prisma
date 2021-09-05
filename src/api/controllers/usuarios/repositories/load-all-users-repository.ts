import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {

  try {

    const usuarios = await prisma.usuario.findMany({
      where: {
        NOT: {
          status: 0
        }
      },
      select: {
        nome: true,
        email: true,
        id: true,
        lancamento:{
          select:{
            valor: true,
            descricao: true
          }
        }
      }
    });

    console.log(usuarios)

    return usuarios;

  } catch (error) {
    return { error };
  }
};