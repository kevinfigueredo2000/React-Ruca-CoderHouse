import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import UserData from "../userData";

function Cart() {
    const { cart, removeItem, clearAll } = useCart();

    const getTotal = (cart) => {
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }
    return (
        <>
            <Container>
                <Row className="mt-3">

                    {cart[0] != null && <div className="col-sm-10 mx-auto card mb-4" style={{ padding: 25 }}>
                        <div className="row my-3">{cart[0] != null &&
                            <h3 className="mx-auto col-sm-4">Total:$ {getTotal(cart)}</h3>}{cart[0] != null && <button className="btn mx-auto col-sm-2" style={{ backgroundColor: "rgba(65,137,230,.15)", color: "#3483fa" }} onClick={clearAll}>Eliminar todos</button>}
                        </div>
                    </div>}
                    {cart[0] != null && <UserData />}
                </Row>
            </Container>
        </>
    )
}
export default Cart;