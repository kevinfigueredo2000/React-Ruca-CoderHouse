import ItemList from "../ItemList/ItemList"
import React from "react";
import Filtrado from "../Filtrado/Filtrado";
import { Container,/* , Row */ 
Row} from "react-bootstrap";

const TiendaContainer = () => {
    return (
        <Container>
            <Row>
                <h1 className="col-sm-3">Productos</h1>
                <Filtrado cat="categorias/" className="col-sm-9"/>
            </Row>
            <ItemList />
        </Container>
    )
}

export default TiendaContainer;


