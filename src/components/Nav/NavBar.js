import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget.js";
import Cart from "../../images/Cart.png"
import { Link } from "react-router-dom";
import { Navbar, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import React from 'react';
import "./NavBar.css"
import { useAltPag } from "../../context/AlturaPag.jsx";
import { useRef, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from "../../context/CartContext.js";
import { SideCart } from "./SideCart.jsx";

function NavBar() {
    const { ubicacionPrincipal, desplazamiento_Actual, setDesplazamiento_Actual, setUbicacionPrincipal } = useAltPag()
    const DivNav = useRef()
    const { handleShowCart, cantidadCarrito } = useCart()

    window.onscroll = function () {
        setDesplazamiento_Actual(window.pageYOffset)
        if (ubicacionPrincipal >= desplazamiento_Actual) {
            DivNav.current?.classList.remove("abrir-Nav")
            DivNav.current?.classList.add("cerrar-Nav")
        } else if (desplazamiento_Actual >= ubicacionPrincipal) {
            DivNav.current?.classList.remove("cerrar-Nav")
            DivNav.current?.classList.add("abrir-Nav")
        }
        setUbicacionPrincipal(desplazamiento_Actual);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="py-2 bg-dark" id="DivNav" ref={DivNav}>
            <Row className="w-100">
                <Navbar>
                    <button className="hamburger" id="hamburger" onClick={handleShow}>
                        <FaBars className="fas fa-bars" />
                    </button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header className="bg-dark">
                            <Offcanvas.Title style={{ color: "white" }}>Ruca</Offcanvas.Title>
                            <h2 onClick={handleClose} style={{ color: "white" }}>x</h2>
                        </Offcanvas.Header>
                        <div style={{ padding: "0rem 1rem" }}>
                            <li className="nav nav-item my-3">
                                <Link to="/" activeClassName="active" className="vinculo" id="inicio" onClick={handleClose}>Inicio</Link>
                            </li><hr />
                            <li className="nav nav-item my-3">
                                <Link to={"tienda"} activeClassName="active" className="vinculo" id="tienda" onClick={handleClose}>Tienda</Link>
                            </li><hr />
                            <li className="nav nav-item my-3">
                                <Link to="sobre-nosotros" activeClassName="active" className="vinculo" onClick={handleClose}>Sobre nosotros</Link>
                            </li><hr />
                            <li className="nav nav-item my-3">
                                <Link to="contacto" activeClassName="active" className="vinculo" onClick={handleClose}>Contacto</Link>
                            </li><hr />
                        </div>
                    </Offcanvas>
                    <h1 className="nombreH1 col-sm-1 rucaNav">Ruca</h1>
                    <ul id="ulNav">
                        <li className="nav-item me-sm-5 my-auto ">
                            <Link to="/" activeClassName="active" className="vinculo" id="inicio">Inicio</Link>
                        </li>
                        <li className="nav-item me-sm-5 my-auto">
                            <Link to={"tienda"} activeClassName="active" className="vinculo" id="tienda">Tienda</Link>
                        </li>
                        <li className="nav-item me-sm-5 my-auto">
                            <Link to="sobre-nosotros" activeClassName="active" className="vinculo">Sobre nosotros</Link>
                        </li>
                        <li className="nav-item me-sm-5 my-auto">
                            <Link to="contacto" activeClassName="active" className="vinculo">Contacto</Link>
                        </li>
                    </ul>
                    <li className="nav-item col-9 col-sm-6" id="cart" >
                        <span className="float-end" onClick={handleShowCart}><CartWidget Cart={Cart} />{cantidadCarrito === 0 ? "" : <span className="badge rounded-pill translate-middle" style={window.innerWidth <= 768 ? { cursor: "pointer", backgroundColor: "#0d6efd", border: "1px solid white" } : { cursor: "pointer", backgroundColor: "#0d6efd", border: "1px solid white" }} onClick={handleShowCart}>{cantidadCarrito}</span>}</span>
                        <><SideCart /></>
                    </li>
                </Navbar>
            </Row>
        </section>
    );
}
export default NavBar;
