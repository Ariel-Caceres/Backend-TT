import cors from "cors";
import express from "express";
import routerProductos from "./src/routes/products.routes.js";
import routerLogin from "./src/routes/auth.routes.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", routerProductos)
app.use("/api", routerLogin)



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});