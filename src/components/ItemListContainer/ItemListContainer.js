import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "../ItemList/ItemList";
import { Container } from "react-bootstrap";
import { Etiquetas } from "../Etiquetas/Etiquetas";
import { CBanner } from "../CBanner/CBanner";
import Banner from "../../images/Banner.jpg";

const ItemListContainer =()=>{
    return(
        <>  
            <CBanner Banner={Banner}  alt="Banner"/>
            <Container>
                <ItemList/>
                <Etiquetas/>
            </Container>
        </>
    );
}
export default ItemListContainer;