import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import React from 'react';
import "./Item.css"
import { useState } from "react";

export const Item = ({ product }) => {
    const [inspeccionar, setInspeccionar] = useState()

    if (window.innerWidth <= 768) {
        return (
            <Link to={`/productos/${product.id}`} id="link">
                <div className="card my-sm-5 my-3">
                    <div className="text-center pt-3" style={{height:"32vh"}}>
                        <img className="img-item" src={product.img} alt={product.name} />
                        <h6 className="precio mt-3 color-precio_nombre"><b>${product.price}</b></h6>
                        <p className="color-precio_nombre">{product.name.length >= 25 ? product.name.slice(0, 25) + "..." : product.name}</p>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to={`/productos/${product.id}`} id="link">
                <div className="card my-sm-5  my-3" onMouseEnter={() => setInspeccionar("expandir")} onMouseLeave={() => setInspeccionar("")} id={inspeccionar}>
                    <div className="card-body text-center">
                        <img className="img-item" src={product.img} alt={product.name} />
                        <h6 className="precio mt-3 color-precio_nombre"><b>${product.price}</b></h6>
                        <p className="card-title mt-3 color-precio_nombre" style={inspeccionar === "expandir" ? { display: "contents" } : { display: "none" }}>{product.name.length >= 25 ? product.name.slice(0, 25) + "..." : product.name}</p>
                    </div>
                </div>
            </Link>
        );
    }
}