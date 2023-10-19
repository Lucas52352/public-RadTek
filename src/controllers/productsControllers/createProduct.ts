import Product, { IProduct } from "../../models/products";


export const createProduct = async (product: IProduct) => {
    const newProduct = new Product({
        id: product.id,
        category: product.category,
        price: product.price,
        name: product.name,
        image: product.image,
        color: product.color,
        description: product.description,
        brand: product.brand,
        stock: product.stock
    })

    console.log(newProduct, 'product created')

    if(newProduct.id || newProduct.name) throw new Error(`This product already exists:  ${newProduct.name}`)

    await newProduct.save();
    return [newProduct, 'Product created successfully'];
}