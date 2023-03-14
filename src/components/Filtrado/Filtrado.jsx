import { Link } from "react-router-dom";
import { Container, Dropdown, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";
import React from "react";
import { Search } from "react-bootstrap-icons";
import { InputGroupText } from "reactstrap";

const Filtrado = (prop) => {
    const { categorias, setCategory, setProductos, productos } = useTiendaContext()
    const cat = prop.cat

    const buscador = (e) =>{
        console.log(e.target.value)
    }

    return (
        <>
            <>
                <div className="nav-item col-sm-3 m-auto" id="busqueda">
                    <Form className="d-flex">
                        <InputGroup>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" onChange={buscador}/>
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
        </>
    )
}

export default Filtrado;