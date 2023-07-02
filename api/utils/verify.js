import jwt from "jsonwebtoken";
import { createError } from "./error.js";
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies["access_token"];
    if (!token) return next(createError(403, "You are not authenticated."));
    const decoded = await jwt.verify(token, process.env.JWT);
    req.user = decoded;
    next();
  } catch (err) {
    next(createError(403, "Invalid token"));
  }
};

const verifyUser = async (req, res, next) => {
  if (req.user.id == req.params.id || req.user.isAdmin == true) {
    next();
  } else {
    return next(createError(403, "You are not authorized"));
  }
};

const verifyAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    next(createError(403, "You are not authorized"));
  }
};

export { verifyToken, verifyUser, verifyAdmin };
