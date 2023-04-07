import { Container, Row } from "react-bootstrap";
import React, { useState } from 'react';
import "./Contacto.css"
import emailjs from "emailjs-com"

export const Contacto = () => {
    const [alertaMensaje, setAlertaMensaje] = useState(true);
    const [alertaMensajeError, setAlertaMensajeError] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            setAlertaMensajeError(false);
            setTimeout(() => {
                setAlertaMensajeError(true);
            }, 1500)
        } else {
            emailjs.sendForm('gmail', 'template_2nq5sgn', e.currentTarget, 'mv7GgMROqQAEVm9eV')
                .then((result) => {
                    console.log(result.text);
                    setAlertaMensaje(false);
                    setTimeout(() => {
                        setAlertaMensaje(true);
                    }, 3500)

                }, (error) => {
                    console.log(error.text);
                    setAlertaMensajeError(false);
                    setTimeout(() => {
                        setAlertaMensajeError(true);
                    }, 3500)
                });
            e.currentTarget.reset();
        }
    };
    return (
        <main className="contacto" id="contacto">
            <Container style={{ minHeight: "712px", height: "auto" }}>
                <h1 className="mb-3 text-center mt-xxl-4 mt-4">Contacto</h1>
                <Row>
                    <div className="col-xxl-6 col-12 col-sm-6">
                        <h4 className="mt-xxl-3">Contactanos en:</h4>
                        <p>Buenos Aires, Argentina</p>
                        <p>+54 1151212682</p>
                        <p>figueredo.kevin2000@gmail.com</p>
                    </div>
                    <div className="col-xxl-6 col-10 mx-auto col-sm-6">
                        <form action="" method="POST" onSubmit={sendEmail}>
                            <div className="mx-xxl-5 mt-3">
                                <label for="txtNombre">Nombre</label>
                                <input type="text" name="txtNombre" id="txtNombre" className="form-control" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mx-xxl-5 mt-2">
                                <label for="txtApellido">Apellido</label>
                                <input type="text" name="txtApellido" id="txtApellido" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mx-xxl-5 mt-2">
                                <label for="txtTelefono">Telefono</label>
                                <input type="number" name="txtTelefono" id="txtTelefono" className="form-control" />
                            </div>
                            <div className="mx-xxl-5 mt-2">
                                <label for="txtEmail">E-mail</label>
                                <input type="email" name="txtEmail" id="txtEmail" className="form-control" />
                            </div>
                            <div className="mx-xxl-5 mt-2">
                                <label for="txtComentario">Comentario</label>
                                <textarea name="message" id="comentarios" placeholder="Comentarios..." cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div id="alertaMensaje">
                                <div className="alert alert-success text-center" hidden={alertaMensaje} role="alert">
                                    ¡Se ha enviado el mensaje correctamente!
                                </div>
                                <div className="alert alert-danger text-center" hidden={alertaMensajeError} role="alert">
                                    ¡Faltan completar datos!
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end mt-3 me-xxl-5 mb-3">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </main>
    )
}