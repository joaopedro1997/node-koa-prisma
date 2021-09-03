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

    return usuarios;

  } catch (error) {
    return { error };
  }
};