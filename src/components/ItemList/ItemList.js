import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { Container, Row } from "react-bootstrap";
import "./ItemList.css"
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTiendaContext } from "../../context/TiendaContext.jsx";

function ItemList(prop) {
    const { productos } = useTiendaContext()
    const [isLoading, setIsLoading] = useState(true);
    const numSlice = prop.numSlice;

    setTimeout(() => {
        setIsLoading(false)
    }, 1500)

    if (isLoading || !productos) {
        return (
            <p className="text-center" style={{margin: "25% 0px 25% 0px"}}><Box> <CircularProgress /></Box></p>
        );

    } else if (window.innerWidth <= 768) {
        return (
            <Container>
                <Row>
                    {numSlice ? (productos.slice(Number(numSlice) - 5, Number(numSlice) - 1).map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-sm col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))) : productos.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-sm col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))}
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row>
                    {numSlice ? (productos.slice(Number(numSlice) - 5, numSlice).map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-sm col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))) : productos.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-sm-2 col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))}
                </Row>
            </Container>

        )
    }
}
export default ItemList;