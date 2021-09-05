import { lancamento, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveLaunch = async (lancamento: lancamento) => {

  const { id_usuario, valor, descricao, data } = lancamento;

  try {

    const usuario = await prisma.usuario.findFirst({
      where: {
        id: id_usuario as string,
      }
    });

    if(usuario === null){
      return usuario;
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
    return error
  }
};