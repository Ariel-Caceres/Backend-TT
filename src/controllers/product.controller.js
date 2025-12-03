import { productsService } from "../services/product.service.js";

export const productsController = {
    async getAll(req, res) {
        try {
            const productos = await productsService.getAllProducts()
            res.json(productos)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getOne(req, res) {
        try {
            const producto = await productsService.getProductById(req.params.id)
            console.log("el producto a mostrar", producto)
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.json(producto)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },

    async createProduct(req, res) {
        try {
            let { price, category, name, } = req.body
            if (!name || !price || !category) {
                return res.status(400).json({
                    success: false,
                    message: "Faltan campos obligatorios"
                });
            }
            let nuevoProducto = {
                price: price,
                category: category,
                name: name
            }
            const producto = await productsService.createProduct(nuevoProducto)
            res.status(201).json({ message: "Producto creado con exito" })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error al crear producto",
                details: error.message
            }
            )

        }
    },

    async deleteProduct(req, res) {
        try {
            let id = req.params.id
            const productoABorrar = await productsService.deleteProductById(id)
            res.status(200).json({ message: "Producto borrado con exito" })

        } catch (e) {
            res.status(500).json({ error: e.message })

        }
    },

    async updateProduct(req, res) {
        try {
            let id = req.params.id
            let { name, price, category } = req.body
            if (!name || !price || !category) {
                return res.status(400).json({
                    success: false,
                    message: "Faltan campos obligatorios"
                });
            }
            const productoAActualizar = await productsService.updateProduct(id,
                {
                    name: name,
                    price: price,
                    category: category
                })

            res.status(201).json({
                message: "Producto Aactualizado con éxito",
                product: productoAActualizar
            });

        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }
}