import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import React from 'react';

export const Item = ({ product }) => {
    let navigate = useNavigate();
    return (
        <div className="card mt-3 shadow" style={{height:"32vh"}}>
            <div className="card-body text-center">
                <img className="img-thumbnail" src={product.img} alt={product.name} style={{height:"17vh", width:"auto"}}/>
                <h6 className="card-title mt-3">{product.name.length >= 25 ?  product.name.slice(0, 25) + "..." : product.name}</h6>
                <button onClick={() => navigate(`/productos/${product.id}`)} className="btn btn-primary mb-3">Ver detalle</button>
            </div>
        </div>
    );
}