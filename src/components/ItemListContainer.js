import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";
import {useState} from "react";

function ItemListContainer(){
    const [count, setCount] = useState([
        {nombre:"Mate Pokemon", producto:"Mate", stock: 5},
        {nombre:"Mate Groot", producto:"Mate", stock: 3},
        {nombre:"Mate f", producto:"Mate", stock: 10}
    ]);
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