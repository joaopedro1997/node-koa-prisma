import Router from "koa-router";
import { GetAllUsers } from "./UsuariosController";
// import { } from "./UsuariosController";

const router = new Router();

router.get("/api/getAllUsers", GetAllUsers);

export { router as routerUsuarios };