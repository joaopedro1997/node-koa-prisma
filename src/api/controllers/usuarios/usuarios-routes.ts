import Router from "koa-router";
import { index, remove, store, update } from "./UsuariosController";
import validator from "koa-yup-validator";
import * as yup from "yup";

const router = new Router();

const postUsuario = yup.object().shape({
  nome: yup.string().required("O Nome é obrigatório"),
  email: yup.string().required("O Email é obrigatório").email("Insira um email válido"),
});

const updateUsuario = yup.object().shape({
  nome: yup.string().required("O Nome é obrigatório"),
  email: yup.string().required("O Email é obrigatório").email("Insira um email válido"),
  id: yup.string().required("O Id é obrigatório")
});

const removeUsuario = yup.object().shape({
  id: yup.string().required("O Id é obrigatório")
});


router.get("/api/usuarios", index);

router.post("/api/usuarios",
  validator({ body: postUsuario }),
  (ctx: any) => store(ctx)
);

router.put("/api/usuarios",
  validator({ body: updateUsuario }),
  (ctx: any) => update(ctx)
);

router.delete("/api/usuarios",
  validator({ body: removeUsuario }),
  (ctx: any) => remove(ctx)
);


export { router as routerUsuarios };