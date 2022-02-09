import * as React from "react";
import { useCart } from "./CartContext";

function Cart(){
    const { cart, removeItem, clearAll } = useCart();
    return(
        <div>
            {cart.map((purchase)=>{
                return(
                    <div key={purchase.id}>
                        <div key={purchase.item.id} >
                            <div>
                                <img src = {purchase.item.img} alt={purchase.item.name} />
                            </div>
                            <div>
                                <p>Producto: {purchase.item.name}</p>
                                <p>Cantidad: {purchase.count}</p>  
                                <p>Precio: ${parseInt(purchase.count * purchase.item.price)}</p>  
                                <button>Comprar</button>  
                                <button>Eliminar</button>  
                            </div>
                        </div>
                    <div/>
                )})}
        </div>
    )
}

export default Cart;