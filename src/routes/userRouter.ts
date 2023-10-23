import { Router } from "express";
import { requiresAuth } from 'express-openid-connect';
import {Request, Response} from 'express';
import { UserModel } from "models/user";
import { register } from "../handlers/users/registerHandler";
import { current } from "../handlers/users/currentHandler";
import { login } from "../handlers/users/loginlHandler";

const userRouter = Router();

// userRouter.get('/user', requiresAuth(), (req: Request, res: Response) => {
    
// res.send(req.oidc.user);
// });
userRouter.get('/users', /* getAllUsers */);
userRouter.get('/users/:id', /*getOneUser */);
userRouter.get('/users/current', current);
userRouter.post('/users/register', register);
userRouter.post('/users/login', login);

export default userRouter;
