import React from "react";
import ItemCount from "./ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemListContainer(){
    return(
        <Container className="text-center">
            <h1 className="text-center">Productos</h1>
            <Row>
                <Col className="card shadow col-sm m-3">
                    <div><img className="img-fluid" src="../foto1.jpg"></img></div>
                    <p className="text-center">Producto3</p>
                    <ItemCount/>
                </Col>
                <Col className="card shadow col-sm m-3">
                    <div><img className="img-fluid" src="../foto2.jpg"></img></div>
                    <p className="text-center">Producto3</p>
                    <ItemCount/>
                </Col>
                <Col className="card shadow col-sm m-3">
                    <div><img className="img-fluid" src="../foto3.jpg"></img></div>
                    <p className="text-center">Producto3</p>
                    <ItemCount/>
                </Col>
            </Row>
        </Container>
    );
    }

export default ItemListContainer;