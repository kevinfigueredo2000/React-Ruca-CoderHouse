import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"

export const Contacto=()=>{
    let sp = {
        fontSize: 25,
        color: "black"
    }
    return(
        <Container>
            <h1>Contacto</h1>
            <Row>
                <div className="col-sm-4">
                    <span className="col-sm-12">Horarios de atención telefónica de 9 a 17hs, de Lunes a viernes</span><br/>
                    <FontAwesomeIcon icon={faWhatsapp} style={sp} className="mt-2"/><span className="mx-3">1515151515</span><br/>
                    <FontAwesomeIcon icon={faPhone} style={sp} className="mt-2"/><span className="mx-3">+54-15-1515-1515</span><br/>
                    <FontAwesomeIcon icon={faEnvelope} style={sp} className="mt-2"/><span className="mx-3">Ruca@mail.com</span><br/>
                </div>
                <div className="col-sm card py-3">
                    <label for="nom" className="">Nombre:</label>
                    <input type="text" id="nom" className=""/>
                    <label for="mail" className="mt-3">Email:</label>
                    <input type="text" id="mail" className=""/>
                    <label for="tel" className="mt-3">Teléfono:</label>
                    <input type="text" id="tel" className=""/>
                    <label for="msg" className="mt-3">Mensaje:</label>
                    <textarea id="msg" name="Mensaje"></textarea>
                    <Button className="col-sm-2 my-3">Enviar</Button>
                </div>
            </Row>
        </Container>
    )
}