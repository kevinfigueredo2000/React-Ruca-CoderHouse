import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import React from 'react';
import "./Item.css"
import { useState } from "react";

export const Item = ({ product }) => {
    const [inspeccionar, setInspeccionar] = useState()
    
    return (
        <Link to={`/productos/${product.id}`} id="link">
            <div className="card my-sm-5  my-3" onMouseEnter={()=>setInspeccionar("expandir")} onMouseLeave={()=>setInspeccionar("")}  id={inspeccionar}>
                <div className="card-body text-center">
                    <img className="img-item" src={product.img} alt={product.name}/>
                    <h6 className="precio mt-3"><b>${product.price}</b></h6>
                    <p className="card-title mt-3" style={inspeccionar === "expandir" ? {display:"contents"} : {display:"none"}}>{product.name.length >= 25 ? product.name.slice(0, 25) + "..." : product.name}</p>
                </div>
            </div>
        </Link>
    );
}