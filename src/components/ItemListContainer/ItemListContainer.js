import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "../ItemList/ItemList";
import { Container } from "react-bootstrap";
import { Etiquetas } from "../Etiquetas/Etiquetas";
import { Slider } from "../Slider/Slider";

const ItemListContainer =()=>{

    return(
        <main name="bodyPrueba">  
            <Slider/>
            <Container>
                <ItemList numSlice={6}/>
                <Etiquetas/>
                <ItemList numSlice={12}/>
            </Container>
        </main>
    );
}
export default ItemListContainer;