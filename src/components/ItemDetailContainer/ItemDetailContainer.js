import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { BLatItemDetail } from "../itemDetail/BLatItemDetail";
import { ItemDetail } from "../itemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);
        selectedProduct
            .get()
            .then((response) => {
                setProduct({ ...response.data(), id: response.id })
                // setIsLoading(false)
            })
    }, [productID]);
    if (window.innerWidth <= 768) {
        return (
            < Container className=" col-sm-8" id="prueba" >
                <div className="row" >
                    <div>
                        <ItemDetail />
                    </div>
                    <div className=" col-12 my-5">
                        <BLatItemDetail />
                    </div>
                    <hr className=" mx-auto" />
                    <div className=" ms-sm-5 mt-3 mb-5">
                        <h5 className="my-3">Descripción:</h5>
                        <span>{product.description}</span>
                    </div>
                    <h4 className="text-center mb-5 ">Productos relacionados</h4>
                    {/* <Row className="justify-content-center">
                        <ProductosRelacionados />
                    </Row> */}
                </div>
            </Container >
        )

    } else{
        return (
        <Container className="card col-sm-8" id="prueba">
            <div className="row" >
                <div className="col-sm-8 my-5">
                    <ItemDetail />
                </div>
                <div className="col-sm-4 col-12 my-5">
                    <BLatItemDetail />
                </div>
                <hr className="col-sm-11 mx-auto" />
                <div className="col-sm-11 ms-sm-5 mt-3 mb-5">
                    <h5 className="my-3">Descripción:</h5>
                    <span>{product.description}</span>
                </div>
            </div>
        </Container>
    )
}}
/* <h4 className="text-center mb-5 ">Productos relacionados</h4>
                <div className="d-flex flex-row justify-content-center">
                    <ProductosRelacionados />
                </div> */