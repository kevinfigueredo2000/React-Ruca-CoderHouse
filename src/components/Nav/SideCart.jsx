import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../../context/CartContext';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import { FiCheckSquare } from "react-icons/fi"
import currency from 'currency.js';

export const SideCart = () => {
    const { showCart, handleCloseCart, cart, clearAll, removeItem, actualizarCarrito, cantidadCarrito, setContenedor, contenedor } = useCart();
    const [edit, setEdit] = useState(false);
    const [currentID, setCurrentID] = useState("")
    // let navigate = useNavigate();

    const getTotal = (cart) => {
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return currency(total, { decimal: ',', separator: "." }).format();
    }
    const handleClick = (id, prodQuantity, contenedor) => {
        setEdit(!edit)
        setCurrentID(id)
        actualizarCarrito(prodQuantity, contenedor)
    }

    return (
        <Offcanvas placement="end" show={showCart} onHide={handleCloseCart}>
            <Offcanvas.Header className="bg-dark">
                <Offcanvas.Title style={{ color: "white" }}>Carrito</Offcanvas.Title>
                <h2 onClick={handleCloseCart} style={{ color: "white" }}>x</h2>
            </Offcanvas.Header>
            {cart.length === 0 ? <p className='text-center'>No tienes productos en el carrito!</p> : cart.map((prod) => {
                return (
                    <Card className='m-2 p-sm-2' style={{ position: "relative" }} onClick={() => { /* navigate(`/productos/${prod.item.id}`); */ handleCloseCart() }}>
                        <Row>
                            <Col className='col-3 text-center'>
                                <img className='img-fluid my-1' alt={`imagen de ${prod.item.img}`} style={{ height: "70px" }} src={prod.item.img} />
                            </Col>
                            <Col>
                                <Row>
                                    <p className='col-6'>Nombre</p>
                                    <p className='col-4'>Cantidad</p>
                                    <FaRegTrashAlt alt="eliminar del carrito" className='col-2 mt-1' style={{ cursor: "pointer" }} onClick={(evt) => { evt.preventDefault(); evt.stopPropagation(); removeItem(prod.item.id) }}></FaRegTrashAlt>
                                </Row>
                                <Row>
                                    <p className='col-6'>{prod.item.name}</p>
                                    {prod.item.id === currentID && edit === true ?
                                        <input className='col-sm-3 col-3 ms-sm-2 ms-2 text-center' onClick={(evt) => { evt.preventDefault(); evt.stopPropagation() }} onInputCapture={(evt) => { prod.quantity = Number(evt.target.value); setContenedor(Number(evt.target.value)) }} defaultValue={prod.quantity} type="number" min={1} max={prod.item.stock} inputMode="numeric" style={{ height: "20px", textAlign: "center" }} />
                                        :
                                        <p className='col-4 text-center'>{prod.quantity}</p>
                                    }
                                    {prod.item.id === currentID && edit === true ? <FiCheckSquare className="col-2" style={{ cursor: "pointer", marginLeft: "5%" }} onClick={(evt) => { handleClick(prod.item.id, cantidadCarrito, contenedor); evt.preventDefault(); evt.stopPropagation(); prod.quantity === 0 && removeItem(prod.item.id) }} /> : <FaRegEdit style={{ cursor: "pointer" }} className='col-2 ' onClick={(evt) => { handleClick(prod.item.id); evt.preventDefault(); evt.stopPropagation() }} />}

                                </Row>
                                <Row className='float-end mx-5'>
                                    <b>${prod.quantity * prod.item.price}</b>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                )
            })}
            {cart.length === 0 ? "" : <Row><h4 className='text-end'>Total: {getTotal(cart)}</h4></Row>}
            {cart.length === 0 ? "" : <button className='btn btn-primary mb-5 col-sm-10 mx-sm-auto' onClick={() => { clearAll() }}>Limpiar Carrito</button>}
            {cart.length === 0 ? "" :
                <button className=' col-sm-10 btn btn-primary mb-2' style={{ position: "absolute", bottom: "0", left:"8%" }}>
                    {/* <a style={{ all: "unset" }} href={"#"} rel="noopener noreferrer" >Comprar ahora</a> */}
                </button>
            }
        </Offcanvas>
    )
}