import { db } from "../../data/data.js";

import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
const productsRef = collection(db, "products");


// const obtenerProducto = async () => {

//     const docRef = doc(db, "products", "lnUX8zpbiWtPkiyWz1QI");

//     // Get a document, forcing the SDK to fetch from the offline cache.
//     try {
//         const doc = await getDoc(docRef);

//         // Document was found in the cache. If no cached document exists,
//         // an error will be returned to the 'catch' block below.
//         console.log("Cached document data:", doc.data());
//     } catch (e) {
//         console.log("Error getting cached document:", e);
//     }
// }
// obtenerProducto()

// const obtenerTodosLosProductos = async () => {
//     const docRef = doc(db, "products", "lnUX8zpbiWtPkiyWz1QI");

//     const querySnapshot = await getDocs(collection(db, "products"));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// }
// obtenerTodosLosProductos()




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