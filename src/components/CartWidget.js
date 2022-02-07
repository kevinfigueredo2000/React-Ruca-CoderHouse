import React, { useContext } from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CartWidget.css';
import { CartContext } from "./CartContext";

function CartWidget(){
    const { cartItem } = useContext(CartContext);

    return (
            <a style={{position: "relative", marginLeft: 1000}} 
                href="/#" className="text-right" id="carrito">
                <i class="fas fa-shopping-cart"></i>{cartItem()}
            </a>
    )
}
export default CartWidget;