import "bootstrap/dist/css/bootstrap.css";
import { Item } from "./Item/Item";
import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css"
import { useTiendaContext } from "../context/TiendaContext";

const Categories = () => {
    const { productos, category } = useTiendaContext()

        return (
            <Container style={{ display: "flex", flexDirection: "column", minHeight: "70vh" }} className="categorias">
                <h1>{category}</h1>
                <div className="row">
                    {
                        productos.map((product) =>{
                            if(product.category === category){
                                return(<div className="col-sm-2 col-6"><Item key={product.id} product={product} /></div>)
                            }}
                        )
                    }
                </div>
            </Container>

        )
    

}
export default Categories;