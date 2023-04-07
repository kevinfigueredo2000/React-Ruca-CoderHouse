import React, { useEffect, useState } from "react";
import { Carousel, Container, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import "./ItemDetail.css";

export const MostrarProducto = (prop) => {
    const prueba = prop.abrir
    const prueba2 = prop.productImg
    const prueba3 = prop.cerrar

    return (
        < Modal
            show={prueba}
            onHide={prueba3}
            style={window.innerWidth <= 768 ? { marginTop: "25%" } : { marginTop: "5%" }}
        >
            <img src={prueba2} alt="" style={{ height: "auto" }} />
        </Modal>
    )
}
export const ItemDetail = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [selectedImg, setSelectedImg] = useState(null)
    const [active, setActive] = useState(null)
    const [abrir, setAbrir] = useState(false)

    useEffect(() => {
        const db = getFirestore()
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);
        selectedProduct
            .get()
            .then((response) => {
                setProduct({ ...response.data(), id: response.id })
            })
    }, [productID]);

    const cambiarImg = (imagen) => {
        setSelectedImg(imagen)
        setActive(imagen)
    }

    if (window.innerWidth <= 768) {
        return (
            <>
                <MostrarProducto abrir={abrir} cerrar={() => setAbrir(false)} productImg={selectedImg ? selectedImg : product.img} />
                {product.imgsSec ? <Carousel className="w-100">
                    <Carousel.Item>
                        <img src={product.img} alt={product.id} onClick={() => { setAbrir(true); cambiarImg(product.img) }} />
                    </Carousel.Item>
                    {(product.imgsSec).map((i) => {
                        return (
                            <Carousel.Item >
                                <img src={i} className="img-fluid" alt={i} onClick={() => { setAbrir(true); cambiarImg(i) }} />
                            </Carousel.Item>
                        )
                    })}
                </Carousel> :
                    <img src={product.img} alt={product.id} className="img-fluid" onClick={() => { setAbrir(true); cambiarImg(product.img) }} />
                }
            </>
        )
    } else {
        return (
            <Container>
                <Row>
                    <div className="card col-xxl-1 col-sm-2 py-xxl-3 py-sm-3">
                        <img src={product.img} className={`mb-3 ${active === product.img ? "activeIMG" : ""}`} alt={product.id} onMouseEnter={() => { cambiarImg(product.img) }} />
                        {product.imgsSec && (product.imgsSec).map((i) => {
                            return (<img src={i} alt={i} className={`mb-3 ${active === i ? "activeIMG" : ""}`} onMouseEnter={() => { cambiarImg(i) }} />)
                        })}
                    </div>
                    <MostrarProducto abrir={abrir} cerrar={() => setAbrir(false)} productImg={selectedImg ? selectedImg : product.img} />
                    <div className="col-xxl-11 col-sm-8 text-center my-xxl-4 my-sm-4">
                        <img src={selectedImg ? selectedImg : product.img} className="imgsProductosMenu" alt={product.id} onClick={() => setAbrir(true)} />
                    </div>
                </Row>
            </Container>
        )
    }
}


