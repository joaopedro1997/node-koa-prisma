import { PrismaClient, usuario } from "@prisma/client";
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export const saveUser = async (usuario: usuario) => {

  const { email, nome, password } = usuario;

  const passwordHash = await hash(password,8);

  try {

    const usuarios = await prisma.usuario.create({
      data: {
        email: email,
        nome: nome,
        password: passwordHash
      }
    });

    return usuarios;

  } catch (error) {
    return { error };
  }
};