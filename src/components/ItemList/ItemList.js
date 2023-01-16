import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { Row } from "react-bootstrap";
import "./ItemList.css"
import React  from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTiendaContext } from "../../context/TiendaContext.jsx";

function ItemList (prop){
    const { productos } = useTiendaContext()
    const [isLoading, setIsLoading] = useState(false);
    const numSlice = prop.numSlice;

    if(isLoading || !productos) return <p className="text-center my-5"><Box> <CircularProgress /></Box></p>;
    return(
        <Row>
            {(productos.slice(numSlice - 6, numSlice).map((product)=>(
                <div className="col-sm-2 col-6 mx-auto" key={product.id}>
                    <Item key={product.id} product={product} id={product.id}/>
                </div>
            )))}
        </Row>
    )
}
export default ItemList;