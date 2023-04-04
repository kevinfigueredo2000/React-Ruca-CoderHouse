import * as React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import { FiCheckSquare } from "react-icons/fi"
import UserData from "../userData";
import { useState } from "react";

function Cart() {
    const { cart, clearAll, removeItem, contenedor, cantidadCarrito, setContenedor, actualizarCarrito } = useCart();
    const [edit, setEdit] = useState(false);
    const [currentID, setCurrentID] = useState("")

    const getTotal = (cart) => {
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }
    const handleClick = (id, prodQuantity, contenedor) => {
        setEdit(!edit)
        setCurrentID(id)
        actualizarCarrito(prodQuantity, contenedor)
    }

    if (cart[0] != null) {
        return (
            <Container>
                <Row className="mt-3">
                    <div className="col-sm-10 mx-auto card mb-4">
                        <Row>
                            <article style={{ overflow: "auto", maxHeight: "32vh", height: "auto" }}>
                                {cart.map((prod) => {
                                    return (
                                        <Card className='m-2'>
                                            <Row>
                                                <div className='col-xxl-2 col-sm-2 col-3 text-center mt-2'>
                                                    <img className='img-fluid' alt={`imagen de ${prod.item.img}`} style={{ height: "70px" }} src={prod.item.img} />
                                                </div>
                                                <Col className="my-xxl-3 my-sm-3 my-2">
                                                    <Row>
                                                        <p className='col-xxl col-sm col-12'>{prod.item.name}</p>
                                                        {prod.item.id === currentID && edit === true ?
                                                            <input className='col-xxl-1 col-sm-1 col ' onClick={(evt) => { evt.preventDefault(); evt.stopPropagation() }} onInputCapture={(evt) => { prod.quantity = Number(evt.target.value); setContenedor(Number(evt.target.value)) }} defaultValue={prod.quantity} type="number" min={1} max={prod.item.stock} inputMode="numeric" style={{ height: "20px", textAlign: "center" }} />
                                                            :
                                                            <p className='col-xxl-1 col-sm-1 col'>{prod.quantity}</p>
                                                        }
                                                        {
                                                            prod.item.id === currentID && edit === true ?
                                                                <FiCheckSquare className="col-xxl-1 col-sm-1 col-2" style={{ cursor: "pointer", marginLeft: "5%" }} onClick={(evt) => {
                                                                    handleClick(prod.item.id, cantidadCarrito, contenedor);
                                                                    evt.preventDefault(); evt.stopPropagation(); prod.quantity === 0 && removeItem(prod.item.id)
                                                                }} />
                                                                : <FaRegEdit style={{ cursor: "pointer" }} className='col-xxl-1 col-sm-1 col-2' onClick={(evt) => {
                                                                    handleClick(prod.item.id); evt.preventDefault();
                                                                    evt.stopPropagation()
                                                                }} />
                                                        }
                                                        <FaRegTrashAlt alt="eliminar del carrito" className='col-xxl-1 col-sm-1 col-2' style={{ cursor: "pointer" }} onClick={(evt) => { evt.preventDefault(); evt.stopPropagation(); removeItem(prod.item.id) }}></FaRegTrashAlt>
                                                    </Row>
                                                    <div className='float-end me-xxl-3 me-sm-2'>
                                                        <b>${prod.quantity * prod.item.price}</b>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )
                                })}
                            </article>
                            <hr />
                            <Row className="mb-xxl-3 mx-xxl-auto mx-sm-auto mx-auto mb-3">
                                {cart[0] != null &&
                                    <div className="col-xxl-9 col-sm-9 col">
                                        <button className="btn col-xxl col-sm col" style={{ backgroundColor: "rgba(65,137,230,.15)", color: "#3483fa" }}
                                            onClick={clearAll}>Eliminar todos
                                        </button>
                                    </div>

                                }
                                {cart[0] != null && <h3 className="col-xxl col-sm ms-xxl-5 col">Total:$ {getTotal(cart)}</h3>}
                            </Row>
                        </Row>
                    </div>
                    <UserData />
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row>
                    <div className="col-sm-12 text-center" style={{ margin: "26% 0px" }} >
                        <h1>¡Todavía no tienes productos en el carrito!</h1>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default Cart;