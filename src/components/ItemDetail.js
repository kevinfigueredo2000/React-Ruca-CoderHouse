import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row} from 'react-bootstrap/';
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import './ItemDetail.css'
import { useCart } from "./CartContext";

function ItemDetail(){
    const { cart, addItem } = useCart();
    const { productID }  = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function handleClick(){
        addItem(product);
    }

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
                            <img className="imagen-card shadow img-thumbnail imag col-sm-6 my-5" src={product.img} alt={product.name}/>
                            <hr/>
                            <div>   
                                <p><h4>Tipo de mate:</h4>{product.tipodemate}</p>
                                <hr/>
                                <p><h4>Descripcion:</h4>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 card shadow mt-3" id="cardDerecha">
                    <h1 className="card-title mt-3">{product.tipodemate}-{product.name}</h1>
                    <h2 className="mt-3">${product.price}</h2>
                    <p className="mt-5">
                    <i class="fas fa-truck"></i> Envío gratis
                    </p>
                    <p className="mt-3">
                        Stock disponible: <bold>{product.stock}</bold>
                    </p>
                        <ItemCount stock={product.stock} initial={1}/>
                    <button className="mx-auto my-3 col-sm-6">Comprar ahora</button>
                    <button onClick={handleClick} className="mx-auto my-3 col-sm-6">Agregar al carrito</button>
                </div>
            </Row>
        </Container>
    );
}

export default ItemDetail;