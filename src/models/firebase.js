import { db } from "../../data/data.js";

import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
const productsRef = collection(db, "products");


export const firebaseModel = {
    getAll: async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log(productos)
        return (productos)
    },

    getById: async (id) => {
        try {
            const docRef = doc(db, "products", id);
            const snap = await getDoc(docRef);
            console.log("Cached document data:", snap.data());
            return (snap.data())
        } catch (e) {
            console.log("Error getting cached document:", e);
            throw e
        }
    },

    create: async (nuevoProducto) => {
        try {
            const docRef = await addDoc(collection(db, "products"), nuevoProducto);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.log("Error creating  document:", e);
            throw e
        }
    },

    delete: async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
        } catch (e) {
            console.log("Error deleting  document:", e);
            throw e
        }
    },

    update: async (id, nuevaData) => {
        try {
            const productRef = doc(db, "products", id);
            await updateDoc(productRef, nuevaData);

        } catch (e) {
            console.log("Error deleting  document:", e);
            throw e
        }
    }


}