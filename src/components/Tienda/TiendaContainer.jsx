import ItemList from "../ItemList/ItemList"
import React from "react";
import Filtrado from "../Filtrado/Filtrado";
import { Container/* , Row */ } from "react-bootstrap";

const TiendaContainer = () => {
    return (
        <Container>
            <Filtrado />
            <ItemList />
        </Container>
    )
}

export default TiendaContainer;


