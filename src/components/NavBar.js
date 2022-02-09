import React from "react";
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { CartContext } from "./CartContext";

function NavBarComponent(){
    return (
        <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="">Ruca</NavBar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">pricing</Nav.Link>
                    <CartContext><CartWidget/></CartContext>
                </Nav>
            </Container>
        </NavBar>
    )
}
export default NavBarComponent;