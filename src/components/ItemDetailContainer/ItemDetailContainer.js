import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { BLatItemDetail } from "../itemDetail/BLatItemDetail";
import { ItemDetail } from "../itemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ItemDetailContainer = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);
        selectedProduct
            .get()
            .then((response) => {
                setProduct({ ...response.data(), id: response.id })
                setIsLoading(false)
            })
    }, [productID]);

    if (isLoading || !product) {return <p className="text-center" style={{margin: "19% 0px 19% 0px"}}><Box> <CircularProgress /></Box></p>}
    if (window.innerWidth <= 768) {
        return (
            < Container className=" col-sm-8" id="prueba" >
                <div className="row" >
                    <div>
                        <ItemDetail/>
                    </div>
                    <div className=" col-12 my-5">
                        <BLatItemDetail />
                    </div>
                    <hr className=" mx-auto" />
                    <div className=" ms-sm-5 mt-3 mb-5">
                        <h5 className="my-3">Descripción:</h5>
                        <p>{product?.description?.length >= 50 && product.description.slice(0,40)}</p>
                    </div>
                </div>
            </Container >
        )

    } else {
        return (
            <Container className="card col-sm-8 my-xxl-5" id="prueba">
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
                        <p>{product.description}</p>
                    </div>
                </div>
            </Container>
        )
    }
}
