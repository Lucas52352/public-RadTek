import { Router } from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";

export const router = Router();

router.use('/', userRouter)
router.use('/', productRouter)

export default router