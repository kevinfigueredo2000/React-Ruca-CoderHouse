import "bootstrap/dist/css/bootstrap.css";
import { Item } from "./Item/Item";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Categories.css"
import { useTiendaContext } from "../context/TiendaContext";
import Filtrado from "./Filtrado/Filtrado";

const Categories = () => {
    const { productos, category } = useTiendaContext()

    return (
        <Container>
            <Row>
                <h1 className="col-sm-3">{category}</h1>
                <Filtrado className="col-sm-9" />
            </Row>
            <Row>
                {
                    productos.filter(word => word.category === category).map((product) => {
                        return (<div className="col-xxl-2 col-sm-3 col-6"><Item key={product.id} product={product} /></div>)
                    }
                    )
                }
            </Row>
        </Container>
    )
}
export default Categories;