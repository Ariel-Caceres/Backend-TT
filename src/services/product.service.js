import firebase from "firebase/compat/app";
import { firebaseModel } from "../models/firebase.js";

export const productsService = {
    async getAllProducts() {
        return await firebaseModel.getAll()
    },

    async getProductById(id) {
        if (!id) throw new Error("Id invalido")
        return await firebaseModel.getById(id)
    },

    async createProduct(nuevoProducto) {
        if (!nuevoProducto) throw new Error("producto invalido")
        return await firebaseModel.create(nuevoProducto)
    },

    async deleteProductById(id) {
        if (!id) throw new Error("Id invalido")
        return await firebaseModel.delete(id)
    },
    async updateProduct(id, nuevaData) {
        if (!id) throw new Error("id invalido")
        if (!nuevaData) throw new Error("datos invalido")
        return await firebaseModel.update(id, nuevaData)
    }
}