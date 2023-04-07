import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
// import { useParams } from "react-router-dom";
// import { getFirestore } from "../firebase";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0)
    // const { productID } = useParams();
    const [product, setProduct] = useState({});

    const [showCart, setShowCart] = useState(false);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const [contenedor, setContenedor] = useState("")
    const [cantidadCarrito, setCantidadCarrito] = useState(0)

    useEffect(() => {
        const getCantidad = () => {
            let cantidad = 0;
            cart.forEach((compra) => {
                cantidad += compra.quantity;
            });
            setCantidadCarrito(cantidad);
        }
        getCantidad();
    }, [cart, contenedor])


    const actualizarCarrito = (evtQuantity, prodQuantity) => {
        if ((evtQuantity < prodQuantity) && (evtQuantity !== undefined) && (prodQuantity !== undefined)) {
            setContenedor(() => [cantidadCarrito - (evtQuantity - prodQuantity)]);
        }
        else if ((evtQuantity > prodQuantity) && (evtQuantity !== undefined) && (prodQuantity !== undefined)) {
            setContenedor(() => [cantidadCarrito - (evtQuantity - prodQuantity)])
        }
    }

    const addItem = (item, quantity) => {
        const itemEnCarrito = cart.find((compra) => compra.item.id === item.id);
        //SI STOCK > QUANTITY
        if (itemEnCarrito) {
            const actualizarCarrito = cart.map((compra) => {
                if (compra.item.id === item.id) {
                    return { ...compra, quantity: itemEnCarrito.quantity + quantity }
                } else {
                    return compra;
                }
            })
            setCart(actualizarCarrito);
        } else {
            setCart((prev) => [...prev, { item, quantity }])
        }

    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
    }

    const clearAll = () => {
        setCart([]);
        setCantidad(0);
    }

    const calcularTotal = () => {
        const preTotal = cart.map(x => x.price * x.quantity);
        let total = 0;
        for (let elemento of preTotal) {
            total = total + elemento;
        }
        return total;
    }


    return (
        <CartContext.Provider value={{
            cart, addItem, removeItem, clearAll, calcularTotal, cantidad, product, setProduct,
            handleCloseCart, handleShowCart, setShowCart, showCart, actualizarCarrito, cantidadCarrito, setCantidadCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);