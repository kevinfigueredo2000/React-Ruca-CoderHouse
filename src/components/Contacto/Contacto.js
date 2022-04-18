import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import React, { useRef, useState } from 'react';
import "./Contacto.css"
import emailjs from "emailjs-com"

export const Contacto=()=>{
    const [alertaMensaje, setAlertaMensaje] = useState(true);
    const form = useRef();

    function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_2nq5sgn', e.target, 'mv7GgMROqQAEVm9eV')
          .then((result) => {
              console.log(result.text);
              setAlertaMensaje(false);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <Container className="mt-3 col" id="contacto">
            <h1 className="mt-3">Contacto</h1>
            <Row>
                <div className="col-sm-4 mb-3">
                    <span className="col-sm-12">Horarios de atención telefónica de 9 a 17hs, de Lunes a viernes</span><br/>
                    <FontAwesomeIcon icon={faWhatsapp} className="mt-2 sp"/><span className="mx-3">1515151515</span><br/>
                    <FontAwesomeIcon icon={faPhone} className="mt-2 sp"/><span className="mx-3">+54-15-1515-1515</span><br/>
                    <FontAwesomeIcon icon={faEnvelope} className="mt-2 sp"/><span className="mx-3">Ruca@mail.com</span><br/>
                </div>
                    <div className="card col-12 col-sm-8 py-3">
                        <form onSubmit={sendEmail} ref={form} method="POST" action="">
                            <input type="text" name="name" id="name" placeholder="Nombre" className="form-control"/><br/>
                            <input type="email" name="email" id="email" placeholder="Email" className="form-control mb-4"/>
                            <textarea name="message" id="message" cols="78" rows="10" placeholder="Comentarios..." className="form-control"/>
                            <div id="alertaMensaje">
                                <div className="alert alert-success" hidden={alertaMensaje} role="alert">
                                    ¡Se ha enviado el mensaje correctamente!
                                </div>
                            </div>
                            <div className="mt-3 col-12 col-sm-12">
                                <input type="submit" value="Enviar" id="enviar" className="btn btn-primary"/>
                            </div>
                        </form>
                </div>
            </Row>
        </Container>
    )
}