import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row, Button} from 'react-bootstrap/';
import ItemCount from "./ItemCount"

function ItemDetail({product}){
    return(
        <Container className="text-center">
            <Row>
                <div className="col-sm-8">
                    <div className="card mt-3 mx-3 shadow carta">
                        <div className="card-body">
                            <img className="imagen-card img-thumbnail imag col-sm-6" src={product.img}/>
                            <div className="col-sm-6">   
                                <h5 className="card-title">{product.name}</h5>
                                <p>Tipo de mate:{product.tipodemate}</p>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 card shadow">
                    <p>
                        Envío gratis
                    </p>
                    <p>
                        Stock disponible: {product.stock}
                    </p>
                    <>
                        <ItemCount stock={product.stock}/>
                    </>
                    <Button value="Comprar ahora"/>
                </div>
            </Row>
        </Container>
    );
}

export default ItemDetail;