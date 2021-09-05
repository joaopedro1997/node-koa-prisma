import jwt from "jsonwebtoken";
import { config } from "../config";

export const generateToken = (usuario:any) => {
  return jwt.sign({ usuario: usuario.id }, config.JWT_SECRET,{expiresIn:"59s"});
};