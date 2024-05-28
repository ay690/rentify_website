import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return errorHandler(403, "Forbidden or token is not valid!!!");
    //if no error, we need to send it to updateUser api making use of next
    req.user = user;
    next();
  });
};
