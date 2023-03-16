import { useEffect, useState } from "react";
import { /* Placeholder, */ Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import "./BLatItemDetail.css"
import currency from "currency.js";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const BLatItemDetail = () => {
    const [counter, setCounter] = useState(1);
    const { addItem/* , cart, */, clearAll } = useCart();
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    // const [loading, setIsLoading] = useState(true)

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

    const handleClick = () => {
        addItem(product, counter);
    };
    const prueba = () => {
        let lista = [];
        for (let i = 1; i <= (product.stock); i++) {
            lista.push(<option key={i} value={i} >{i}</option>)
        }
        return lista
    };

    if (window.innerWidth <= 768) {
        return (
            <div className="col-sm-12 my-4">
                <p className="nombreItem"><b>{product.name}</b></p>
                <p><b>{product.marca}</b></p>
                {/* <p className="estrellas">*****</p> */}
                <span className="precio">{currency(product.price, { decimal: ',', separator: "." }).format()}</span><p className="cuotas">Hasta 12 cuotas sin interés</p>
                <span className=" my-3 ">Envío:<b> Acordar con el vendedor</b></span>
                <button className="my-2 btn_negro w-100"><a style={{ all: "unset" }} onClick={() => { clearAll() }}
                    href={`https://api.whatsapp.com/send?phone=+541151212855&text=%C2%A1Hola!%20Estoy%20interesado%20en%20${(product.name) + "  Cantidad: " + (counter)}%20.`}
                    target="_blank" rel="noopener noreferrer" >Comprar ahora</a>
                </button>
                <button className=" btn_negro col-10 mb-2" onClick={handleClick}>Agregar al carrito</button>
                <select name="quantity" onChange={(evt) => { setCounter(Number(evt.target.value)) }} className="col-sm-2 mt-3 ms-2" style={{ height: "30px" }} >
                    {prueba()}
                </select>
            </div>
        )
    } else {
        return (
            <div className="col-sm-12 my-4">
                <p className="nombreItem"><b>{product.name}</b></p>
                <p><b>{product.marca}</b></p>
                {/* <p className="estrellas">*****</p> */}
                <span className="precio">{currency(product.price, { decimal: ',', separator: "." }).format()}</span><p className="cuotas">Hasta 12 cuotas sin interés</p>
                <span className=" my-3 ">Envío:<b> Acordar con el vendedor</b></span>
                <Link to="/cart">
                    <button className="my-3 col-sm-10 col-10 btn_negro">
                        Comprar ahora
                    </button>
                </Link>
                <Row>
                    <button className="my-3 ms-2 col-sm-7 col-10  btn_negro" onClick={handleClick}>Agregar al carrito</button>
                    <select name="quantity" onChange={(evt) => { setCounter(Number(evt.target.value)) }} className="col-sm-2 mt-3 ms-3" style={{ height: "30px" }} >
                        {prueba()}
                    </select>
                </Row>
            </div>
        )
    }
}