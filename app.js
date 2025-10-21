import { error } from "console";
import cors from "cors";
import express from "express";
import fs from "fs/promises";
const app = express();
const PORT = 3000;
import path from "path"
import { fileURLToPath } from "url";

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const leerjson = async (jsonNombre) => {
    const filePath = path.join(__dirname, `data/${jsonNombre}`)
    let dataJson = await fs.readFile(filePath, "utf-8")
    let data = JSON.parse(dataJson)
    return data
}

const crearJson = async (parametro, nombreArchivo) => {
    const filePath = path.join(__dirname, `data/${nombreArchivo}`)
    await fs.writeFile(filePath, JSON.stringify(parametro, null, 2), "utf-8");
};

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente")
})

app.get("/products", async (req, res) => {
    try {
        const productos = await leerjson("productos.json")
        res.status(200).json(productos);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
})

app.get("/products/:id", async (req, res) => {
    let idProducto = req.params.id
    try {
        const response = await leerjson("productos.json")
        const producto = response.filter(p => p.id == idProducto)
        if (producto.length == 0) {
            res.status(404).json({ error: "Error al obtener el producto" });
        } else {
            res.status(200).json(producto)
        }
    } catch (error) {
        res.status(404).json({ error: "Error al obtener el producto" });
    }
})

app.delete("/products/:id", async (req, res) => {
    let idProducto = Number(req.params.id)
    try {
        const response = await leerjson("productos.json")
        const productoBorrado = response.filter(p => p.id !== idProducto)
        let cantAntes = response.length
        let cantDespues = productoBorrado.length
        await crearJson(productoBorrado, "productos.json")
        if (cantAntes == cantDespues) {
            res.status(404).json({ error: "No se encontro el producto a borrar" })
        } else {
            res.status(200).json({ message: "Producto eliminado correctamente", nuevosProductos });
        }
    } catch (error) {
        res.json("error al eliminar el producto")
    }
})

app.post("/add", async (req, res) => {

    try {
        const { id, title, price, category, description, image } = req.body;
        const productos = await leerjson("productos.json")
        productos.push({ id, title, price, category, description, image })
        await crearJson(productos, "productos.json")
        res.status(201).json({ message: "Producto agregado con exito" })
    } catch (error) {
        res.status(500).json({ message: "Error al agregar producto" })

    }
})

app.put("/edit/:id", async (req, res) => {
    let idProductoAEditar = Number(req.params.id)
    try {
        const nuevaData = req.body
        let productos = await leerjson("productos.json")
        let productoEncontrado = productos.find(p => p.id == idProductoAEditar)
        console.log("producto a editar", productoEncontrado)

        if (!productoEncontrado) {
            res.status(404).json({ message: "Error al editar producto, producto no encontrado" })
        } else {
            res.status(200).json({ message: "Producto editado con exito" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al editar producto" })
    }
})

app.use((req, res) => {
    res.status(404).send("Rescuso no encontrado o ruta invalida")
})
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});