import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";
import React from "react";
import { Search } from "react-bootstrap-icons";
import { InputGroupText } from "reactstrap";

const Filtrado = () => {
    const { categorias, setCategory, setFiltered, productos, handleSort, filtrar } = useTiendaContext();

    function buscador(e) {
        const result = (productos).filter((pr) => {
            return pr.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFiltered(result)
    }
    
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
                    <Dropdown.Item>
                        <p onClick={() => { setFiltered(productos); setCategory(null) }} key="Sin filtros">Sin filtros</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p onClick={() => { handleSort(Number(1)); setCategory(null) }} key="A-Z">Alfabeticamente A-Z</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p onClick={() => { handleSort(Number(2)); setCategory(null) }} key="Z-A">Alfabeticamente Z-A</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p onClick={() => { handleSort(Number(3)); setCategory(null) }} key="MAY-MENOR">Precio Menor-Mayor</p>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <p onClick={() => { handleSort(Number(4)); setCategory(null) }} key="MENOR-MAY">Precio Mayor-Menor</p>
                    </Dropdown.Item>
                    {categorias.map((cats) => (
                        <Dropdown.Item>
                            <p onClick={() => { filtrar(cats); setCategory(cats.name) }} key={cats.name} style={{ textDecoration: "none", color: "black", paddingRight: 100 }} >{cats.name}</p>
                        </Dropdown.Item>
                    )
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Filtrado;