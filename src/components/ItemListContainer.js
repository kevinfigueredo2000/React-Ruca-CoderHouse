import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";
import {useState} from "react";

function ItemListContainer(){
    return(
        <Container className="text-center">
            <h1 className="text-center">Productos</h1>
            <Row>
                <ItemList/>
            </Row>
        </Container>
    );
    }

export default ItemListContainer;