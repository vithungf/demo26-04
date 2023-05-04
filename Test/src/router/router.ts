import {Router} from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;