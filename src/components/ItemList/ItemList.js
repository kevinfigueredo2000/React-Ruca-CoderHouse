// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { Container, Row } from "react-bootstrap";
import "./ItemList.css"
import React  from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import { useTiendaContext } from "../../context/TiendaContext.jsx";

function ItemList (prop){
    const { productos } = useTiendaContext()
    // const [isLoading, setIsLoading] = useState(false);
    const numSlice = prop.numSlice;

    // if(isLoading || !productos) return <p className="text-center my-5"><Box> <CircularProgress /></Box></p>;
    return(
        <Container>
            <Row>
            {(productos.slice(Number(numSlice) - 5, numSlice).map((product)=>( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                <div className="col-sm col-6 mx-auto" key={product.id}>
                    <Item key={product.id} product={product} id={product.id}/>
                </div>
            )))}
        </Row>
        </Container>
        
    )
}
export default ItemList;