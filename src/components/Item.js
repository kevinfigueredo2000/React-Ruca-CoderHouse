import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from "./ItemCount";
import "./Item.css";

function Item({product}){
    return(
        <>
            <div className="card mt-3 mx-3 shadow carta">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <img className="imagen-card img-thumbnail imag" src={product.img}/>
                    <button className="col-sm-8 mt-3">Ver detalle del producto</button>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </>
    );
}

export default Item;