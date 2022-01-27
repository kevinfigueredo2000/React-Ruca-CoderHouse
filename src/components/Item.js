import "bootstrap/dist/css/bootstrap.min.css"
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function Item({product}){
    return(
        <>
            <div className="card mt-3 mx-2 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.tipodemate}</p>
                    <img className="imagen-card img-thumbnail imag"src={product.img}/>
                    <Router><Switch><a className="mt-3 btn btn-secondary" to="/Detalles">Ver detalle</a></Switch></Router>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </>
    );
}

export default Item;