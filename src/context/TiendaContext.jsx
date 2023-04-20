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


    const ordenarMayor = (productos) => {
        productos.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            else if (a.name > b.name) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    const ordenarMenor = (productos) => {
        productos.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            }
            else if (a.name > b.name) {
                return -1
            }
            else {
                return 0
            }
        })
    }
    const ordenarPrecioMayor = (productos) => {
        productos.sort(function (a, b) { return a.price - b.price })
    }
    const ordenarPrecioMenor = (productos) => {
        productos.sort(function (a, b) { return b.price - a.price })
    }
    const handleSort = (value) => {
        switch (value) {
            case 1:
                ordenarMayor(productos); setFiltered([...productos])
                break;
            case 2:
                ordenarMenor(productos); setFiltered([...productos])
                break;
            case 3:
                ordenarPrecioMayor(productos); setFiltered([...productos])
                break;
            case 4:
                ordenarPrecioMenor(productos); setFiltered([...productos])
                break;
            default:
                console.log("ok")
        }
    }

    function filtrar(prop) {
        const result = (productos).filter((pr) => {
            return pr.category.includes(prop.name)
        })
        setFiltered(result)
    }


    return (
        <TiendaContext.Provider value={{
            filtered,
            setFiltered,
            categorias,
            setCategorias,
            productos,
            setProductos,
            setCategory,
            category,
            handleSort,
            filtrar
        }}>
            {children}
        </TiendaContext.Provider>
    )
}
export const useTiendaContext = () => useContext(TiendaContext);