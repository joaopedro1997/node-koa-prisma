import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "../../auth/generateToken";

const prisma = new PrismaClient();

export const authLogin = async (ctx:any) => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = 401;
    ctx.body = {
      message: "Usuário ou senha não informados",
    };
    return;
  }

  const usuario = await prisma.usuario.findFirst({
    where:{
      email: email,
      status: 1
    }
  })

  console.log(usuario)

  if (usuario === null) {
    ctx.status = 401;
    ctx.body = {
      message: "Usuário não encontrado",
    };
    return;
  }

  let correctPassword;

  try {
    correctPassword = await bcrypt.compare(password, usuario.password);
  } catch {
    ctx.status = 401;
    ctx.body = {
      message: "E-mail ou senha incorretos.",
    };
    return;
  }

  if (!correctPassword) {
    ctx.status = 401;
    ctx.body = {
      message: "E-mail ou senha incorretos.",
    };
    return;
  }

  

  ctx.status = 200;
  ctx.body = {
    message: "Usuário autenticado com sucesso",
    token: generateToken(usuario),
    usuarioLogado: {
      email: usuario.email,
      nome: usuario.nome
    }
  };
};