import ItemList from "../ItemList/ItemList"
import React from "react";
import Filtrado from "../Filtrado/Filtrado";
import { Container, Row } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";

const TiendaContainer = () => {
    const { category } = useTiendaContext()
    return (
        <Container style={{ minHeight: "736px", height: "auto" }}>
            <Row>
                <h1 className="col-sm-3">{category ? category : "Productos"}</h1>
                <Filtrado className="col-sm-9" />
            </Row>
            <ItemList />
        </Container>
    )
}

export default TiendaContainer;


