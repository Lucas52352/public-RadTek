import { Router } from 'express'; import { deleteCartProduct } from '../handlers/cart/deleteCartProductHandler';
import { getUserProducts } from '../handlers/cart/getUserProductsHandler';
import { postCartProduct } from '../handlers/cart/postCartProductHandler';
import { updateCartProductHandler } from '../handlers/cart/updateCartProductHandler';

const cartRouter = Router();

cartRouter.get('/cart', getUserProducts)
cartRouter.delete('/cart', deleteCartProduct)
cartRouter.post('/cart', postCartProduct)
cartRouter.put('/cart', updateCartProductHandler)

export default cartRouter;