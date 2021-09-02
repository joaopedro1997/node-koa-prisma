import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  // const user = await prisma.usuario.findMany({
  //   where: {
  //     id: 901
  //   },
  //   include: {
  //     lancamento: {
  //       select: {
  //         id: true,
  //         valor: true,
  //         usuarioId: true,
  //       }
  //     }
  //   }
  // })

  const user = await prisma.$queryRaw(`select * from usuario`);

  res.send(user);

})

app.listen(5000, () => {
  console.log("servidor rodando na porta 5000");
})