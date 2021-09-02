import { createServer } from "http";
import app from "./app";
import { config } from "./config";

(async () => {
  const server = createServer(app.callback());

  server.listen(config.PORT, () => {
    console.log(`server running at http://localhost/${config.PORT}`);
  });
})();








// import { PrismaClient } from '@prisma/client'

// const app = express();

// const prisma = new PrismaClient();

// app.get("/", async (req, res) => {
//   const user = await prisma.usuario.findMany({
//     where: {
//       id: 901
//     },
//     include: {
//       lancamento: {
//         select: {
//           id: true,
//           valor: true,
//           usuarioId: true,
//         }
//       }
//     }
//   })


//   res.send(user);

// })

// app.listen(5000, () => {
//   console.log("servidor rodando na porta 5000");
// })