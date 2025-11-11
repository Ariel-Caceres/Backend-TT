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
            console.log("el producto a mostras", producto)
            res.json(producto)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    },

    async createProduct(req, res) {
        try {
            let { price, category, name } = req.body
            let nuevoProducto = {
                price: price,
                category: category,
                name: name
            }
            const producto = await productsService.createProduct(nuevoProducto)
            res.status(200).json({ message: "god" })
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    },
    async deleteProduct(req, res) {
        try {
            let id = req.params.id
            const productoABorrar = await productsService.deleteProductById(id)
            res.status(200).json({ message: "god" })

        } catch (e) {
            res.status(500).json({ error: e.message })

        }
    },
    async updateProduct(req, res) {
        try {
            let id = req.params.id
            let { name, price, category } = req.body
            const productoAActualizar = await productsService.updateProduct(id,
                {
                    name: name,
                    price: price,
                    category: category
                })
            res.status(200).json({ message: "actualizado con exito " })
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }
}