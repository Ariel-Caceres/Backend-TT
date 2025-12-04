📦 Backend API – Node.js + Express + JWT

Este proyecto es un backend simple desarrollado con Node.js, Express y JWT, pensado como base para autenticación, CRUD de productos y deploy en Render.

🚀 Tecnologías utilizadas

-Node.js

-Express

-CORS

-dotenv

-Firebase / Firebase Admin

-JSON Web Token (JWT)

🧪 Endpoints principales
🔑 Login – obtener token JWT

POST /login

Body esperado:
{
"email": "test@gmail.com",
"password": "123456"
}

#📦 Productos
Obtener todos los productos

GET /products

Obtener un producto por ID

GET /products/:id

Crear producto

POST /products

Actualizar producto

PUT /products/:id

Eliminar producto

DELETE /products/:id
