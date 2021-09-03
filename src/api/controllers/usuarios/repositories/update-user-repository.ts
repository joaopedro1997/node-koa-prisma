import { PrismaClient, usuario, } from "@prisma/client";

const prisma = new PrismaClient();

export const updateUser = async (usuario: usuario) => {

  const { nome, email, id } = usuario;

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