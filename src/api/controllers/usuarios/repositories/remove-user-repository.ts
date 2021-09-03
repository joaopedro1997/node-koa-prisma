import { PrismaClient, usuario } from "@prisma/client";

const prisma = new PrismaClient();

export const removeUser = async (usuario: usuario) => {

  const { id } = usuario;

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