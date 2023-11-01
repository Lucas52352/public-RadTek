import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string,
        email: string,
        admin: boolean,
        id: string
      }; // Ajusta el tipo de 'user' según tus necesidades
    }
  }
}


export const validateToken = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  let token: string;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && typeof authHeader === 'string' && authHeader.startsWith("Bearer"))
    token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: err.message })
    } else if (decoded && typeof decoded === 'object' && 'user' in decoded) {
      req.user = decoded.user;
      next();
    }
    if (!token) {
      res.status(401).send({ message: 'User is not authorized or token is missing' })
    }
  })

})