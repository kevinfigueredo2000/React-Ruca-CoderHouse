import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart(){
    const { cart, removeItem, clearAll, calcularTotal } = useCart();

    const handleClick=()=>{
        calcularTotal();
    }
    return(
        <Container>
            <div className="card text-center mt-3">{cart[0] == null && <div className="my-5"><h1>Ups! Parece que no tenes nada en el carrito.</h1><Link to="/"><button className="btn btn-primary mt-5">Volver a la tienda</button></Link></div>}</div>
            {cart.map((purchase)=>{
                    return (
                        <Row className="mt-3">
                            <div className="col-sm-8 mx-auto card" key={purchase.item.id}>
                                <Row>
                                    <div className="col-sm-2 mt-4">
                                        <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                                    </div>
                                    <div className="col-sm-8 mt-4">
                                        <p><b>Producto:</b>{purchase.item.name}</p>
                                        <p><b>Cantidad:</b>{purchase.item.quantity}</p>
                                        <p><b>Precio:</b>${parseInt(purchase.quantity * purchase.item.price)}</p>
                                    </div>
                                    <div className="col-sm my-auto">
                                        <button className="btn btn-primary" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                                    </div>
                                </Row>
                            </div>
                            <div className="col-sm-3 card">
                                {cart[0] != null && <h3>Total:$ {handleClick}</h3>}
                                <button className="btn btn-primary my-3" >Realizar compra</button>
                                {cart[0] != null && <button className="btn mb-3" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto", float:"right"}} onClick={clearAll}>Eliminar todos</button>}
                            </div>
                        </Row>
                    )})}
        </Container>
    )
}
export default Cart;