import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

export const CartContext = createContext([]);

export const CartProvider = ({ children })=>{
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0)
    const { productID } = useParams();
    const [product, setProduct] =useState({});

    useEffect(()=>{
        const db = getFirestore() 
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);

        // setIsLoading(true);
        selectedProduct
        .get()
        .then((response)=>{
        setProduct({...response.data(), id: response.id})
    })
        // .finally(()=> setIsLoading(false));
    }, [productID]);

    const addItem = (item, quantity) => {
        const newItem = { item, quantity };
        console.log("se agregó al carrito: ", newItem)
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
        <CartContext.Provider value={{cart, addItem, removeItem, clearAll, calcularTotal, cantidad, product, setProduct }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=> useContext(CartContext);