import { useCart } from "../../context/CartContext";
import React from "react";

export const CartTotal=()=>{

    const { cart, clearAll, calcularTotal } = useCart();

    const handleClick=()=>{
        calcularTotal();
    }
    return(
        <div className="col-sm-3 card">
            {cart[0] != null && <h3>Total:$ {handleClick}</h3>}
            <button className="btn btn-primary my-3" >Realizar compra</button>
            {cart[0] != null && <button className="btn mb-3" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto", float:"right"}} onClick={clearAll}>Eliminar todos</button>}
        </div>
    )
}