import "../CartWidget/CartWidget.css"
import "bootstrap/dist/css/bootstrap.css"
import { useCart } from "../../context/CartContext";
import React  from 'react';

function CartWidget ({Cart}){
    const {cantidad} = useCart();
    return(
        <><img className=" cart" src={Cart} alt="cart" />{cantidad === 0 ?  "" : <span className="position-absolute top-20 start-70 translate-middle badge rounded-pill bg-danger">{cantidad}</span>}</>
    );
}
export default CartWidget;