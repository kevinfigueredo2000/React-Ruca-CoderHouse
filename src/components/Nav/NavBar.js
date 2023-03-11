import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget.js";
import Cart from "../../images/Cart.png"
import { Link } from "react-router-dom";
import { Form, FormControl, InputGroup, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Search } from 'react-bootstrap-icons';
import React/* , { useState } */ from 'react';
import "./NavBar.css"
import { useAltPag } from "../../context/AlturaPag.jsx";
import { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
    const { ubicacionPrincipal, desplazamiento_Actual, setDesplazamiento_Actual, setUbicacionPrincipal } = useAltPag()
    const DivNav = useRef()

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
            <Navbar>
                <button className="hamburger" id="hamburger" onClick={handleShow}>
                    <FaBars className="fas fa-bars" />
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Ruca</Offcanvas.Title>
                    </Offcanvas.Header>
                    
                        <div style={{padding:"0rem 1rem"}}>
                            <li className="nav nav-item mb-3">
                                <Link to="/" activeClassName="active" className="vinculo" id="inicio" onClick={handleClose}>Inicio</Link>
                            </li>
                            <li className="nav nav-item my-3">
                                <Link to={"tienda"} activeClassName="active" className="vinculo" id="tienda" onClick={handleClose}>Tienda</Link>
                            </li>
                            <li className="nav nav-item my-3">
                                <Link to="sobre-nosotros" activeClassName="active" className="vinculo" onClick={handleClose}>Sobre nosotros</Link>
                            </li>
                            <li className="nav nav-item my-3">
                                <Link to="contacto" activeClassName="active" className="vinculo" onClick={handleClose}>Contacto</Link>
                            </li>
                        </div>
                    
                </Offcanvas>
                <h1 className="nombreH1 col-sm rucaNav">Ruca</h1>
                <ul id="ulNav">
                    <li className="nav-item col-sm my-auto inicioNav">
                        <Link to="/" activeClassName="active" className="vinculo" id="inicio">Inicio</Link>
                    </li>
                    <li className="nav-item col-sm my-auto">
                        <Link to={"tienda"} activeClassName="active" className="vinculo" id="tienda">Tienda</Link>
                    </li>
                    <li className="nav-item col-sm my-auto">
                        <Link to="sobre-nosotros" activeClassName="active" className="vinculo">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item col-sm m-auto">
                        <Link to="contacto" activeClassName="active" className="vinculo">Contacto</Link>
                    </li>
                    <div className="nav-item col-sm-3 m-auto" id="busqueda">
                        <Form className="d-flex">
                            <InputGroup>
                                <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
                                <InputGroup.Text><Search /></InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>
                </ul>
                <li className="nav-item col-sm cartNav" id="cart"><Link to="/cart"><CartWidget Cart={Cart} /></Link></li>
            </Navbar>
        </section>
    );
}
export default NavBar;