import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemList from "../ItemList/ItemList";
import { Container } from "react-bootstrap";

const ItemListContainer =()=>{
    return(
        <Container><ItemList/></Container>
    );
}
export default ItemListContainer;