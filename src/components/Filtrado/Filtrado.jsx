import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";
import React from "react";

const Filtrado = () => {
    const { categorias, setCategory } = useTiendaContext()

    return (
            <Dropdown className="col-sm-3 my-auto" id="categorias" style={{float:"right"}}>
                <Dropdown.Toggle >
                    <span className="vinculo">Categorias</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categorias.map((cats) => (
                        <Dropdown.Item>
                            <Link to={"categorias/" + cats.id} onClick={() => { setCategory(cats.name) }} style={{ textDecoration: "none", color: "black", paddingRight: 100 }} >{cats.name}</Link>
                        </Dropdown.Item>
                    )
                    )}
                </Dropdown.Menu>
            </Dropdown>
    
    )

}

export default Filtrado;