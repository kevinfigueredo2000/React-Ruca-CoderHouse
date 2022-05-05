import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "../ItemList/ItemList";
import { Container } from "react-bootstrap";
import { Etiquetas } from "../Etiquetas/Etiquetas";
import { Slider } from "../Slider/Slider";

const ItemListContainer =()=>{
    return(
        <>  
            <Slider/>
            <Container>
                <ItemList/>
                <Etiquetas/>
                <ItemList/>
            </Container>
        </>
    );
}
export default ItemListContainer;