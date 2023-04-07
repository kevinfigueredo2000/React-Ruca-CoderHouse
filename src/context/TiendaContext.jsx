import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { getFirestore } from "../firebase";

export const TiendaContext = createContext([]);

export const TiendaContextProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [category, setCategory] = useState();
    const [filtered, setFiltered] = useState()
    
    useEffect(() => {
        const db = getFirestore()
        const categoriasCollection = db.collection("Categories");
        const productosCollection = db.collection("items");
        
        const setCategoriasFromFirestore = async () => {
            const response = await categoriasCollection.get();
            setCategorias(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        const setProductosFromFirestore = async () => {
            const response = await productosCollection.get();
            setProductos(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        setCategoriasFromFirestore();
        setProductosFromFirestore();
    }, [filtered]);
    

    return (
        <TiendaContext.Provider value={{ filtered, setFiltered,/* isLoading, */ categorias, setCategorias, productos, setProductos, setCategory, category
        /* handleSort, ordenarPrecioMenor, ordenarPrecioMayor, ordenarMenor, ordenarMayor, cargarMas, sliceParam, setSliceParam */ }}>
            {children}
        </TiendaContext.Provider>
    )
}
export const useTiendaContext = () => useContext(TiendaContext);