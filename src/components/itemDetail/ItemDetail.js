import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { Container, /* Modal, */ Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import React from 'react';
import "./ItemDetail.css";

// export const MostrarProducto = (prop) => {
//     const prueba = prop.abrir
//     const prueba2 = prop.productImg
//     const prueba3 = prop.cerrar

//     return (
//         < Modal
//             show={prueba}
//             onHide={prueba3}
//             style={{
//                 marginTop: "5%", width: "68vh",
//                 left: "65vh"
//             }}
//         >
//             <Modal.Body style={{ padding: "0px" }}>
//                 <img src={prueba2} alt="" />
//             </Modal.Body>
//         </Modal>
//     )
// }


export const ItemDetail = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [selectedImg, setSelectedImg] = useState(null)
    const [active, setActive] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    // const [abrir, setAbrir] = useState(false)

    const cambiarImg = (imagen) => {
        setSelectedImg(imagen)
        setActive(imagen)
    }

    useEffect(() => {
        const db = getFirestore()
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);
        selectedProduct
            .get()
            .then((response) => {
                setProduct({ ...response.data(), id: response.id })
                // setIsLoading(false)
            })
    }, [productID]);

    // if (isLoading || !product) return <p className="text-center mt-5" style={{ fontSize: "30px" }}>Cargando...</p>
    if (window.innerWidth <= 768) {
        return (
            <>
                {/* <MostrarProducto abrir={abrir} cerrar={() => setAbrir(false)} productImg={selectedImg ? selectedImg : product.img} /> */}
                <img src={product.img} className="img-fluid" alt={product.id} /* onClick={() => setAbrir(true)} */ />
                    {/* <Carousel.Item >
                        <img src={product.img} className="img-fluid" alt={product.id} onClick={() => setAbrir(true)} />
                    </Carousel.Item>
                    {product.imgsSec && (product.imgsSec).map((i) => {
                        return (
                            <Carousel.Item >
                                <img src={i} className="img-fluid" alt={i} />
                            </Carousel.Item>
                        )
                    })}
                    no lo toma */} 
                
            </>
        )
    } else {
        return (
            <Container>
                <Row>
                    <div className="card col-sm-1 col-2 py-3">
                        <img src={product.img} className={`mb-3 ${active === product.img ? "activeIMG" : ""}`} alt={product.id} onMouseEnter={() => { cambiarImg(product.img) }} />
                        {product.imgsSec && (product.imgsSec).map((i) => {
                            return (<img src={i} alt={i} className={`mb-3 ${active === i ? "activeIMG" : ""}`} onMouseEnter={() => { cambiarImg(i) }} />)
                        })}

                    </div>
                    {/* <MostrarProducto abrir={abrir} cerrar={() => setAbrir(false)} productImg={selectedImg ? selectedImg : product.img} /> */}
                    <div className="col-sm-11 col-8 text-center my-4">
                        <img src={selectedImg ? selectedImg : product.img} className="imgsProductosMenu" alt={product.id} /* onClick={() => setAbrir(true)}  */ />
                    </div>
                </Row>
            </Container>
        )
    }
}
