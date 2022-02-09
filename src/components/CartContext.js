import { useState, createContext, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children })=>{

    const [cart, setCart] = useState([])

    function addItem(product, count){
        const newItem = {product, count}
        setCart((prevState)=> [...prevState, newItem]);
    }
    function removeItem(id){
        setCart((prev)=> prev.filter((element)=> element.item.id !== id));
    }
    function clear(){
        cart = setCart(0);
    }
    return(
        <CartContext.Provider value={{ addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=> useContext(CartContext);