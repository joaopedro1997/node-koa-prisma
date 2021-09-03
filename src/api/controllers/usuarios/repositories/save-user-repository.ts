import { PrismaClient, usuario } from "@prisma/client";

const prisma = new PrismaClient();

export const saveUser = async (email: string, nome: string) => {

  try {

    const usuarios = await prisma.usuario.create({
      data: {
        email: email,
        nome: nome
      }
    });

    return usuarios;

  } catch (error) {
    return { error };
  }
};