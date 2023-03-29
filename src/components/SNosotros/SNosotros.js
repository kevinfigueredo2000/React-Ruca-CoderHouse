import React from "react";
import { Container, Row } from "react-bootstrap";

export const SNosotros = () => {
    return (
        <Container>
            <h1 className="mt-4 text-center">Quienes somos</h1>
            <Row className="mt-3">
                <div className="col-sm-8 mx-auto text-center">
                    <p>
                        Somos una empresa familiar que desde hace más de 20 años nos dedicamos a la fabricación y venta de mates artesanales personalizados,
                        hechos con materiales de primera calidad y con diseños exclusivos.
                    </p>
                    <p>
                        Nuestra pasión por el mate nos llevó a crear productos que reflejan nuestra
                        cultura y nuestra identidad, y que ofrecen una experiencia única a la hora de compartir esta bebida tan tradicional.
                    </p>
                    <p>
                        En nuestra tienda online podrá
                        encontrar una gran variedad de modelos de mates, bombillas, termos, yerbas y accesorios para disfrutar del mate en cualquier momento y lugar. Lo invitamos a navegar por nuestro catálogo y a contactarnos ante cualquier consulta o sugerencia. Gracias por elegirnos y esperamos
                        que disfrute de nuestros productos.
                    </p>
                </div>
            </Row>
            <hr></hr>
            <h2 className="mt-xxl-4 text-center">Nuestra misión</h2>
            <Row>
                <div className="col-sm-6 mx-auto my-xxl-5 my-3">
                    Nuestra misión como vendedores de productos relacionados al mate es ofrecer a nuestros clientes una experiencia única y auténtica de esta bebida tradicional. Queremos que disfruten de los beneficios que el mate tiene para la salud, el bienestar y la cultura. Por eso, seleccionamos cuidadosamente los mejores productos del mercado, desde yerbas de distintas variedades y procedencias, hasta termos, bombillas y accesorios de calidad. Además, brindamos un servicio personalizado y profesional, asesorando a nuestros clientes sobre las mejores opciones para cada gusto y ocasión. Nuestro objetivo es que cada compra sea una satisfacción y una invitación a compartir un mate con nosotros.
                </div>
                <div className="col-sm-5 mx-auto my-xxl-5 my-3">
                    <img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg" alt="imagen" className="img-fluid" />
                </div>
            </Row>
        </Container>
    )
}