import Router from "koa-router";
import { getAllUsers } from "./UsuariosController";
// import { } from "./UsuariosController";

const router = new Router();

router.get("/api/getAllUsers", getAllUsers);

export { router as routerUsuarios };