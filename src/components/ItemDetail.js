import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row} from 'react-bootstrap/';
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

function ItemDetail(){
    const { productID }  = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        const URL = `http://localhost:3001/productos/${productID}`;
        setIsLoading(true)
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(()=> setIsLoading(false))
    }, [productID]);

    if(isLoading || !product) return <p className="text-center mt-5" style={{fontSize:"30px"}}>Cargando...</p>
    return(
        <Container className="text-center">
            <Row>
                <div className="col-sm-8">
                    <div className="card mt-3 mx-3 shadow carta">
                        <div className="card-body">
                            <img className="imagen-card img-thumbnail imag col-sm-6" src={product.img} alt={product.name}/>
                            <hr/>
                            <div>   
                                <p><h4>Tipo de mate:</h4>{product.tipodemate}</p>
                                <hr/>
                                <p className="card-text"><h4>Descripcion:</h4>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 card shadow mt-3 ">
                    <h1 className="card-title mt-3">{product.name}</h1>
                    <h2 className="mt-3">${product.price}</h2>
                    <p className="mt-5">
                    <i class="fas fa-truck"></i> Envío gratis
                    </p>
                    <p className="mt-3">
                        Stock disponible: <bold>{product.stock}</bold>
                    </p>
                        <ItemCount stock={product.stock} initial={1}/>
                    <button className="m-auto col-sm-6 mb-5">Comprar ahora</button>
                </div>
            </Row>
        </Container>
    );
}

export default ItemDetail;