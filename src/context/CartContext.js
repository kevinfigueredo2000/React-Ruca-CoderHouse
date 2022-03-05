import { createContext, useContext, useState } from "react";
import React  from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children })=>{
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0)

    const addItem = (item, quantity) => {
        const newItem = { item, quantity };
        console.log("se agregó al carrito: ", newItem)
        console.log(cart)
        setCart((prevState)=> [...prevState, newItem]);
        setCantidad((prevState)=> prevState+ quantity);
    };

    const removeItem=(id)=>{
        setCart((prev)=>prev.filter((element)=>element.item.id !== id));
        //setCantidad((prevState)=> prevState) como??
    }

    const clearAll=()=>{
        setCart([]);
        setCantidad(0);
    }
    
    const calcularTotal=()=>{
        const preTotal = cart.map(x=>x.price * x.quantity);
        let total = 0;
        for(let elemento of preTotal){
            total = total + elemento;
        }
        return total;
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearAll, calcularTotal, cantidad }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=> useContext(CartContext);