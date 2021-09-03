import { lancamento, PrismaClient, usuario } from "@prisma/client";
import { Console } from "console";
import { resolvePtr } from "dns";
import { ServerResponse } from "http";
import { json } from "stream/consumers";

const prisma = new PrismaClient();

export const savelaunch = async (lancamento: lancamento) => {

  const { id_usuario, valor, descricao, data } = lancamento

  try {

    const usuario = ""
    // await prisma.usuario.findFirst({
    //   where: {
    //     id: id_usuario as number,
    //   }
    // });

    if (!usuario) {
      throw new Error('tetse');
    }


    const lancamento = await prisma.lancamento.create({
      data: {
        id_usuario: id_usuario,
        valor: valor,
        descricao: descricao,
        data: data,
      }
    });

    return lancamento;

  } catch (error) {
    const teste = error;
    console.log(error)
    return teste;
  }
};