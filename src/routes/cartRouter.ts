import { Router } from 'express';

const cartRouter = Router();

cartRouter.get('/cart', /* getUserProducts */)
cartRouter.delete('/cart', /* deleteCartProduct */)
cartRouter.post('/cart', /* postCartProduct */)

export default cartRouter;