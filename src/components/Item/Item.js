import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import React  from 'react';

export const Item =({product})=>{
    let navigate = useNavigate();
    return(
        <div className="card mt-3 shadow">
            <div className="card-body text-center">
                <img className="img-thumbnail im" src={product.img} alt={product.name}/>
                <h5 className="card-title mt-3">{product.name}</h5>
                <button onClick={()=>navigate(`/productos/${product.id}`)} className="btn btn-primary mb-3">Ver detalle</button>
            </div>
        </div>
    );
}