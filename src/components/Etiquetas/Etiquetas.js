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
                    <div className="card col-sm mx-1 shadow">
                        <Row className="my-3">
                            <div className="col-sm mt-4 mx-4">
                                <h6 className="LGrisChico">Para compartir con amigos</h6>
                                <h2>Hasta 12x sin interés</h2>
                                <Link to="/categorias/2"><button className="btn btn-primary verMas1">Ver más</button></Link>
                            </div>
                            <div className="col-sm">
                                <Row>
                                    <img className="imgsRandom col-6" alt="imgsRandom" src="https://http2.mlstatic.com/termos-thermos-pack-2-liq-color-1lt-acero-inoxidable-surtido-D_NQ_NP_631127-MLC26776791371_022018-F.jpg"/>
                                    <Link to="/categorias/1" className="col-3 link"><button className="btn btn-primary verMas2">Ver más</button></Link>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <div className="card col-sm mx-1 shadow">
                        <Row className="my-3">
                            <div className="col-sm mt-4 mx-4">
                                <h6 className="LGrisChico">Para disfrutar solo</h6>
                                <h2>Hasta 6x sin interés</h2>
                                <Link to="/categorias/1"><button className="btn btn-primary verMas1">Ver más</button></Link>
                            </div>
                            <div className="col-sm">
                                <Row>
                                    <img className="imgsRandom col-6" alt="imgsRandom" src='https://th.bing.com/th/id/OIP.GgeVtGBt8j-VYyfbQV07BwHaHa?pid=ImgDet&rs=1'/>
                                    <Link to="/categorias/1" className="col-3 link"><button className="btn btn-primary verMas2">Ver más</button></Link>
                                </Row>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}