import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    let sp = {
        fontSize: 25,
        color: "white"
    }
    let letras = {
        color: "white"
    }
    return(
        <div className="mt-3 py-4 bg-dark">
            <Container>
                <Row>
                    <h4 className='col-sm-6' style={letras}>Nuestras redes:</h4>
                    <h4 className='col-sm-6' style={letras}>Contactanos:</h4>
                </Row>
                <Row>
                    <div className="col-sm-1 mt-2">
                        <FontAwesomeIcon icon={faTwitter} style={sp}/>
                    </div>
                    <div className="col-sm-1 mt-2">
                        <FontAwesomeIcon icon={faWhatsapp} style={sp}/>
                    </div>
                    <div className="col-sm-1 mt-2">
                        <FontAwesomeIcon icon={faInstagram} style={sp}/>
                    </div>
                    <div className="col-sm-3 mt-2">
                        <FontAwesomeIcon icon={faFacebook} style={sp}/>
                    </div>
                    <div className="col-sm-3 m-auto">
                        <a style={letras}>Mail: Ruca@mail.com</a>
                    </div>
                    <div className="col-sm-3 m-auto">
                        <a style={letras}>Telefono: 1515151515</a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;