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
    const { productos, filtered } = useTiendaContext()
    const [isLoading, setIsLoading] = useState(true);
    const numSlice = prop.numSlice;

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    if (isLoading || !productos) {
        return (
            <p className="text-center" style={{ minHeight: "394px", height: "auto", marginTop: "270px" }}><Box> <CircularProgress /></Box></p>
        );

    } else if (window.innerWidth <= 768) {
        return (
            <Container>
                <Row>
                    {numSlice ? (productos.slice(Number(numSlice) - 4, Number(numSlice)).map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))) : filtered ? filtered.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-6" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    )) : productos.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-6" key={product.id}>
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
                    {numSlice ? (productos.slice(Number(numSlice) - 4, numSlice).map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-xxl-3 col-sm-3 m-auto" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    ))) : filtered ? filtered.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                        <div className="col-xxl-3 col-sm-3 m-auto" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    )) :
                        productos.map((product) => ( // numSlice es 12; Menos 5 es 1, no es 0, por lo q muestra mal. Después buscar porqué o en donde pongo para mostrar 4 en el de abajo
                            <div className="col-xxl-3 col-sm-3 m-auto" key={product.id}>
                                <Item key={product.id} product={product} id={product.id} />
                            </div>
                        ))}
                </Row>
            </Container>

        )
    }
}
export default ItemList;