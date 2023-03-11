import { Row, Container } from "react-bootstrap";
import "./Etiquetas.css"
import { Link } from "react-router-dom";
import React  from 'react';

export const Etiquetas=()=>{
    return(
        <>
            <h3 className="LGris my-3">Descubrí</h3>
            <Container id="descubri-pc">
                <Row>
                    <div className="card col-sm col-12 mb-lg-0 mb-3 me-lg-1 shadow">
                        <Row className="my-lg-3 my-3">
                            <div className="col-lg mt-lg-4 mx-lg-4">
                                <h6 className="LGrisChico">Para compartir con amigos</h6>
                                <h2>Hasta 12x sin interés</h2>
                                <Link to="/categorias/2"><button className="btn btn-primary verMas1">Ver más</button></Link>
                            </div>
                            <div className="col-lg col-12">
                                <Row>
                                    <img className="col-sm-6 col-8 prueba" alt="imgsRandom" src="https://http2.mlstatic.com/termos-thermos-pack-2-liq-color-1lt-acero-inoxidable-surtido-D_NQ_NP_631127-MLC26776791371_022018-F.jpg"/>
                                    <Link to="/categorias/1" className="col-lg-3 col-4 link"><button className="btn btn-primary verMas2">Ver más</button></Link>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <div className="card col-sm col-12 ms-lg-1 shadow">
                        <Row className="my-lg-3 my-3">
                            <div className="col-lg mt-lg-4 mx-lg-4">
                                <h6 className="LGrisChico">Para disfrutar solo</h6>
                                <h2>Hasta 6x sin interés</h2>
                                <Link to="/categorias/1"><button className="btn btn-primary verMas1">Ver más</button></Link>
                            </div>
                            <div className="col-lg col-12">
                                <Row>
                                    <img className="col-lg-6 col-8  prueba" alt="imgsRandom" src='https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/de2a16161-241c2e1eb65d04468e16070467527067-1024-1024.jpg'/>
                                    <Link to="/categorias/1" className="col-lg-3 col-4 link"><button className="btn btn-primary verMas2">Ver más</button></Link>
                                </Row>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}