import { Router } from 'express';
import { deleteCartProduct } from '../handlers/cart/deleteCartProductHandler';
import { getUserProducts } from '../handlers/cart/getUserProductsHandler';
import { postCartProduct } from '../handlers/cart/postCartProductHandler';

const cartRouter = Router();

cartRouter.get('/cart',  getUserProducts )
cartRouter.delete('/cart/:id', deleteCartProduct )
cartRouter.post('/cart', postCartProduct )

export default cartRouter;