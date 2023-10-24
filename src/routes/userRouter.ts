import { Router } from "express";
import { register } from "../handlers/users/registerHandler";
import { current } from "../handlers/users/currentHandler";
import { login } from "../handlers/users/loginlHandler";
import { validateToken } from "../middleware/validateTokenHandler";
import { getAllUsers } from "../handlers/users/getUsersHandler";
import { deleteTheUser } from "../handlers/users/deleteUserHandler";

const userRouter = Router();

// userRouter.get('/user', requiresAuth(), (req: Request, res: Response) => {
    
// res.send(req.oidc.user);
// });s
userRouter.get('/users',  getAllUsers);
userRouter.get('/users/current', validateToken, current);
userRouter.post('/users/register', register);
userRouter.post('/users/login', login);
userRouter.delete('/users/:id', deleteTheUser);
userRouter.post('/users/login',validateToken, login);

export default userRouter;
