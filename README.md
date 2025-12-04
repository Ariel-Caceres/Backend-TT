# 📦 Backend API – Node.js + Express + JWT

Backend desarrollado con **Node.js**, **Express** y **JWT**, ideal como base para autenticación, CRUD de productos y deployment en **Render**

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **CORS**
- **dotenv**
- **Firebase / Firebase Admin**
- **JSON Web Token (JWT)**

---

## 🔐 Autenticación (JWT)

Este backend implementa login con generación de tokens JWT.  
Para acceder a los endpoints protegidos se debe enviar el token en el header:

---

## 🧪 Endpoints principales

## 📦 Productos

📄 Obtener todos los productos

GET /products

🔍 Obtener un producto por ID

GET /products/:id

➕ Crear producto

POST /products

✏️ Actualizar producto

PUT /products/:id

🗑️ Eliminar producto

DELETE /products/:id

### 🔑 **Login – obtener token JWT**

`POST /login`

#### Body esperado:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

#### Respuesta:

{
"token": "<jwt_token>"
}
