import { usuario } from ".prisma/client";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const generateToken = (usuario: usuario) => {
  return jwt.sign({ usuario: usuario.id }, config.JWT_SECRET,{expiresIn:"6h"});
};