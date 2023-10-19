import { Router } from "express";
import { requiresAuth } from 'express-openid-connect';
import {Request, Response} from 'express';
import { UserModel } from "models/user";

const userRouter = Router();

userRouter.get('/user', requiresAuth(), (req: Request, res: Response) => {
    
  res.send(req.oidc.user);
});
userRouter.get('/users', /* getAllUsers */);
userRouter.get('/users/:id', /*getOneUser */);

export default userRouter;
