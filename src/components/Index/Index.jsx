import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "../ItemList/ItemList";
import { Container } from "react-bootstrap";
import { Etiquetas } from "../Etiquetas/Etiquetas";
import { Slider } from "../Slider/Slider";

const Index =()=>{

    return(
        <main name="bodyPrueba">  
            <Slider/>
            <Container>
                <ItemList numSlice={5}/>
                <Etiquetas/>
                <ItemList numSlice={10}/>
            </Container>
        </main>
    );
}
export default Index;