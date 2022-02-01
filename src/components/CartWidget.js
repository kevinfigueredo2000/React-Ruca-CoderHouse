import React from "react";
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CartWidget.css';

function CartWidget(){
    return (
            <a style={{position: "relative", marginLeft: 1000}} href="/#" className="text-right" id="carrito"><i class="fas fa-shopping-cart"></i></a>
    )
}
export default CartWidget;