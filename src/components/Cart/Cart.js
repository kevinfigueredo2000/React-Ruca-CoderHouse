import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import UserData from "../userData";

function Cart(){
    const { cart, removeItem, clearAll } = useCart();

    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }
    return(
        <>
        {cart[0] == null && <div className="container card text-center mt-3">{cart[0] == null && <div className="my-5"><h1>Ups! Parece que no tenes nada en el carrito.</h1><Link to="/"><button className="btn btn-primary mt-5">Volver a la tienda</button></Link></div>}</div>}
        <Container>
            <Row className="mt-3">
                {cart.map((purchase)=>{
                    return (
                        <>
                            <div className="col-sm-10 mx-auto card" key={purchase.item.id}>
                                <Row className="mb-3">
                                    <div className="col-sm-2 mt-4 pb-2">
                                        <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                                    </div>
                                    <div className="col-sm-8 mt-4 my-auto">
                                        <p><b>Producto:</b>{purchase.item.name}</p>
                                        <p><b>Cantidad:</b>{purchase.quantity}</p>
                                        <p><b>Precio:</b>${parseInt(purchase.quantity * purchase.item.price)}</p>
                                    </div>
                                    <div className="col-sm my-auto">
                                        <button className="btn btn-primary" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                                    </div>
                                </Row>
                            </div>
                        </>
                        
                    )})}
                    {cart[0] != null && <div className="col-sm-10 mx-auto card mb-4" style={{padding:25}}>
                        <div className="row my-3">{cart[0] != null && 
                        <h3 className="mx-auto col-sm-4">Total:$ {getTotal(cart)}</h3>}{cart[0] != null && <button className="btn mx-auto col-sm-2" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa"}} onClick={clearAll}>Eliminar todos</button>}
                            </div>
                            </div>}
                    {cart[0] != null && <UserData/>}
            </Row>
        </Container>
        </>
        
    )
}
export default Cart;