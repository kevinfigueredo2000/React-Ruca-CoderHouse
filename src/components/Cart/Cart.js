import * as React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart(){
    const { cart, removeItem, clearAll, calcularTotal } = useCart();

    const handleClick=()=>{
        calcularTotal();
    }
    return(
        <Container>
            <div className="card text-center mt-5">
                {cart[0] == null && <div className="my-5"><h1>Ups! Parece que no tenes nada en el carrito.</h1><Link to="/"><button className="btn btn-primary mt-5">Volver a la tienda</button></Link></div>}
                {cart.map((purchase)=>{
                        return (
                        <div className="mx-2" key={purchase.item.id}>
                            <div  className="card text-center mt-3" style={{justifyContent:"center", width:"90%", height:"50%"}}>
                            <div className="row my-2 mx-2">
                                <div className="col-2">
                                    <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                                </div>
                                <div className="col-10">
                                    <p className="mt-2">Producto: {purchase.item.name}</p>
                                    <p>Cantidad: {purchase.count}</p>
                                    <p>Precio: ${parseInt(purchase.quantity * purchase.item.price)}</p>
                                    <button className="btn btn-primary mt-3 mx-3" >Comprar</button>
                                    <button className="btn btn-primary mt-3" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )})}
                    {cart[0] != null && <h3>Total: $ {handleClick}</h3>}
                    {cart[0] != null && <button className="btn mt-5" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto", float:"right"}} onClick={clearAll}>Eliminar todos</button>}
            </div>
        </Container>

    )
}
export default Cart;