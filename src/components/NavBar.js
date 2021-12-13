import React from "react";
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavBarComponent(){
    return (
        <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="">Navbar</NavBar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">pricing</Nav.Link>
                </Nav>
            </Container>
        </NavBar>
    )
}
export default NavBarComponent;