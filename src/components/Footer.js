import React from 'react';
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    let sp = {
        fontSize: 25,
        color: "white"
    }
    let letras = {
        color: "white"
    }
    return (
        <div className=" py-4 bg-dark" id="footer">
            <Container>
                <Row>
                    <h4 className='col-sm-6' style={letras}>Nuestras redes:</h4>
                    <h4 className='col-sm-6' style={letras} id="contactanos1">Contactanos:</h4>
                </Row>
                <Row>
                    <div className="col-sm-1 col mt-2">
                        <a href='https://twitter.com/home'><FontAwesomeIcon icon={faTwitter} style={sp} /></a>
                    </div>
                    <div className="col-sm-1 col mt-2">
                        <a href='https://web.whatsapp.com/'><FontAwesomeIcon icon={faWhatsapp} style={sp} /></a>
                    </div>
                    <div className="col-sm-1 col mt-2">
                        <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} style={sp} /></a>
                    </div>
                    <div className="col-sm-3 col mt-2">
                        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} style={sp} /></a>
                    </div>
                    <h4 className='col-sm-6' style={letras} id="contactanos2">Contactanos:</h4>
                    <div className="col-sm-3 col m-auto">
                        <p style={letras}>figueredo.kevin2000@gmail.com</p>
                    </div>
                    <div className="col-sm-3 col m-auto">
                        <p style={letras}>Telefono: +54 1151212682</p>
                    </div>
                </Row>
                <Row style={letras} className='mt-4'>
                    <Col>
                        <p>Proyecto: de Kevin Figueredo</p>
                        <p>Portfolio: <a href='https://kevinfigueredo.netlify.app/' style={letras}>https://kevinfigueredo.netlify.app/</a></p>
                    </Col>
                    <Col>
                        <p>Proyecto hecho con: React js, Javascript, Firebase, Css y bootstrap</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;