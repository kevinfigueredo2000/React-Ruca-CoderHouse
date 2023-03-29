import { Container, Row } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import "./Contacto.css"
// import emailjs from "emailjs-com"
// import { GrMail } from "react-icons/gr";
import emailjs from '@emailjs/browser';

export const Contacto = () => {
    const [alertaMensaje, setAlertaMensaje] = useState(true);
    const [alertaMensajeError, setAlertaMensajeError] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            setAlertaMensajeError(false);
            setTimeout(() => {
                setAlertaMensajeError(true);
            }, 1000)
        }
        else {
            emailjs.sendForm('service_het4gxb', 'template_hdtm9gg', form.current, 'nWo_Xw4wadg0Ssnry')
                .then((result) => {
                    console.log(result.text);
                    setAlertaMensaje(false);
                    setAlertaMensajeError(true)
                    setTimeout(() => {
                        setAlertaMensaje(true);
                        alertaMensajeError ? setAlertaMensajeError(true) : setAlertaMensajeError(false)
                    }, 1000)
                    setName("")
                    setEmail("")
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
        }


    };
    // const [alertaMensaje, setAlertaMensaje] = useState(true);
    // const form = useRef();

    // function sendEmail(e) {
    //     e.preventDefault()
    //     emailjs.sendForm('gmail', 'template_2nq5sgn', e.target, 'mv7GgMROqQAEVm9eV')
    //         .then((result) => {
    //             console.log(result.text);
    //             setAlertaMensaje(false);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset();
    // };
    return (
        <main className="contacto" id="contacto">
            <Container >
                <h1 className="mb-3 text-center mt-xxl-4 mt-4">Contacto</h1>
                <Row>
                    <div className="col-xxl-6 col-12">
                        <h4 className="mt-xxl-3">Contactanos en:</h4>
                        <p>Escribinos para coordinar unavisita y conocer nuestros productos</p>
                        <p>Showroom - Rosario, Santa Fe</p>
                        <p>+54 9 341 3591112</p>
                        <p>ventas@chemate.com.ar</p>
                    </div>
                    <div className="col-xxl-6 col-10 mx-auto">
                        <form action="" method="POST" ref={form} onSubmit={sendEmail}>
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
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </main>
    )
}