import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget.js";
import Cart from "../../images/Cart.png"
import { Link } from "react-router-dom";
import { /* Dropdown, */ Form, FormControl, InputGroup, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Search } from 'react-bootstrap-icons';
import React, { useEffect, useState } from 'react';
import "./NavBar.css"
import { useAltPag } from "../../context/AlturaPag.jsx";
import { useTiendaContext } from "../../context/TiendaContext.jsx";


function NavBar() {
    const [AbrirCerrar, setAbrirCerrar] = useState("hide")
    const { ubicacionPrincipal, desplazamiento_Actual } = useAltPag()
    const { /* categorias, */ setCategory } = useTiendaContext()
    const DivNav = document.getElementById('DivNav');

    useEffect(() => {
        if (DivNav) {
            if (ubicacionPrincipal >= desplazamiento_Actual) {
                DivNav.style.top = '0';
            } else {
                DivNav.style.top = '-105px';
            }
        }
    });

    const handleNav = (prop) =>{
        AbrirCerrar === "hide" && setAbrirCerrar("show")
        AbrirCerrar === "show" && setAbrirCerrar("hide")
        setCategory(prop.name)
    }

    return (
        <section className="py-2 bg-dark" id="DivNav">
            <Navbar>
                <button className="hamburger" id="hamburger" onClick={handleNav}>
                    <FontAwesomeIcon className="fas fa-bars" icon={faBars} />
                </button>
                <h1 className="nombreH1 col-sm rucaNav">Ruca</h1>
                <ul className={`${AbrirCerrar}`} id="ulNav">
                    <li className="nav-item col-sm my-auto inicioNav">
                        <Link to="/" activeClassName="active" className="vinculo" id="inicio" onClick={handleNav}>Inicio</Link>
                    </li>
                    <li className="nav-item col-sm my-auto">
                        <Link to={"tienda"} activeClassName="active" className="vinculo" id="tienda" onClick={handleNav}>Tienda</Link>
                    </li>
                    {/* <li className="nav-item col-sm my-auto">
                        <Dropdown className="col-sm my-auto" id="categorias">
                            <Dropdown.Toggle className="bg-dark border-dark" >
                                <span className="vinculo">Categorias</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categorias.map((cats) => (
                                    <Dropdown.Item>
                                        <Link to={"categorias/" + cats.id} onClick={()=>{handleNav(cats)}} style={{ textDecoration: "none", color: "black", paddingRight: 100 }} >{cats.name}{console.log(cats.name)}</Link>
                                    </Dropdown.Item>
                                )
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="nav-item col-sm my-auto" onClick={handleNav}>
                        <Link to="sobre-nosotros" activeClassName="active" className="vinculo">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item col-sm m-auto" onClick={handleNav}>
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