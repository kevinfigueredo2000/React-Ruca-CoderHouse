import { Link } from "react-router-dom";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";
import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { InputGroupText } from "reactstrap";

const Filtrado = (prop) => {
    const { categorias, setCategory } = useTiendaContext()
    const cat = prop.cat
    const [prueba, setPrueba] = useState("")

    const buscador = (e) => {
        setPrueba(e.target.value)
    }

    /* const filteredProducts = data.filter(
        prods => {
            return (
                prods.name.toLowerCase().includes(prueba.toLowerCase())
            );
        }
    ); */

    return (
        <>
            <div className="nav-item col-sm-3 m-auto" id="busqueda">
                <Form className="d-flex">
                    <InputGroup>
                        <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" onChange={buscador} />
                        <InputGroupText><Search /></InputGroupText>
                    </InputGroup>
                </Form>
            </div>
            <Dropdown id="categorias" className="mt-3 col-sm-3">
                <Dropdown.Toggle variant="secondary" size="sm" style={{ float: "right" }}>
                    Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categorias.map((cats) => (
                        <Dropdown.Item>
                            <Link to={cat ? "categorias/" + cats.id : ""} onClick={() => { setCategory(cats.name) }} style={{ textDecoration: "none", color: "black", paddingRight: 100 }} >{cats.name}</Link>
                        </Dropdown.Item>
                    )
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Filtrado;