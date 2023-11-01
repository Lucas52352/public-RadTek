URL DEPLOY --> https://private-radtek-server.onrender.com

After this URL, you must add the endpoint you need. Here's a list of the currently available endpoints:

○ PRODUCT ROUTES

GET

- ALL PRODUCTS: Get a list of all products.

        URL: https://private-radtek-server.onrender.com/products

- PRODUCT BY ID: Get a product by its ID.

        URL: https://private-radtek-server.onrender.com/product/:_id

- PRODUCT BY NAME: Get a product by its name.

        URL: https://private-radtek-server.onrender.com/product

POST

- CREATE PRODUCT: Create a new product.

        URL: https://private-radtek-server.onrender.com/product

PUT

- UPDATE PRODUCT: Update a product by its ID.

        URL: https://private-radtek-server.onrender.com/product/:_id

DELETE

- DELETE PRODUCT: Delete a product by its ID.

        URL: https://private-radtek-server.onrender.com/product/:id

○ USER ROUTES

GET

- GET ALL USERS: Get a list of all users.

        URL: https://private-radtek-server.onrender.com/users

- GET CURRENT USER: Get the current user (authentication required).

        URL: https://private-radtek-server.onrender.com/users/current

POST

- REGISTER USER: Register a new user.

        URL: https://private-radtek-server.onrender.com/users/register

- LOGIN USER: Log in with an existing user.

        URL: https://private-radtek-server.onrender.com/users/login

PUT

Soon... :)

DELETE

- DELETE USER: Delete a user by their ID.

        URL: https://private-radtek-server.onrender.com/users/:id

○ CART ROUTES

GET

- GET CART: Get cart information.

        URL: https://private-radtek-server.onrender.com/cart

POST

- ADD CART: Add a product to the cart.

        URL: https://private-radtek-server.onrender.com/cart

PUT

- UPDATE CART: Update the quantity of a product in the cart.

        URL: https://private-radtek-server.onrender.com/cart

DELETE

- DELETE CART: Delete a product from the cart.

        URL: https://private-radtek-server.onrender.com/cart
