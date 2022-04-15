import React from "react";
import { Container, Row } from "react-bootstrap";

export const SNosotros = ()=>{
    return(
        <Container>
            <h1 className="mt-3">Nuestra historia</h1>
            <Row>
                <div className="col-sm-6 card my-3 py-3">
                    <h3>Inicio:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla. Quis auctor elit sed vulputate. Ut tellus elementum sagittis vitae. Massa ultricies mi quis hendrerit dolor magna eget est. Ultrices dui sapien eget mi proin sed. Placerat vestibulum lectus mauris ultrices. At ultrices mi tempus imperdiet nulla malesuada. Vel eros donec ac odio tempor. Commodo nulla facilisi nullam vehicula ipsum a. Sit amet purus gravida quis. Id leo in vitae turpis massa.
                        sed elementum tempus egestas. Augue neque gravida in fermentum et. Etiam erat velit scelerisque in dictum non consectetur.
                    </p>
                    <h3>Trayectoria:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla. Quis auctor elit sed vulputate. Ut tellus elementum sagittis vitae. Massa ultricies mi quis hendrerit dolor magna eget est. Ultrices dui sapien eget mi proin sed. Placerat vestibulum lectus mauris ultrices. At ultrices mi tempus imperdiet nulla malesuada. Vel eros donec ac odio tempor. Commodo nulla facilisi nullam vehicula ipsum a. Sit amet purus gravida quis. Id leo in vitae turpis massa.
                        t aliquam etiam erat. Augue neque gravida in fermentum et. Etiam erat velit scelerisque in dictum non consectetur.
                    </p>
                </div>
                <div className="col-sm-6 my-3">
                    <img src="https://i.pinimg.com/originals/15/1b/40/151b407993b747a2f9019c88f788e326.jpg" alt="imagen" className="img-thumbnail"/>
                </div>
            </Row>
        </Container>
    )
}