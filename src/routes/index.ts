import { Router } from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";
import { validateToken } from "../middleware/validateTokenHandler";
import cartRouter from "./cartRouter";

export const router = Router();

router.use('/', userRouter);
router.use('/', productRouter);
router.use(validateToken);
router.use('/', cartRouter);

export default router