import "bootstrap/dist/css/bootstrap.css";
import { Item } from "./Item/Item";
import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css"
import { useTiendaContext } from "../context/TiendaContext";
import Filtrado from "./Filtrado/Filtrado";

const Categories = () => {
    const { productos, category } = useTiendaContext()

    return (
        <Container>
            <h1>{category}</h1>
            <Filtrado/>
            <div className="row">
                {
                    productos.filter(word => word.category === category).map((product) => {
                        return (<div className="col-sm-2 col-6"><Item key={product.id} product={product} /></div>)
                    }
                    )
                }
            </div>
        </Container>

    )


}
export default Categories;