import "bootstrap/dist/css/bootstrap.min.css"
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import {useNavigate} from "react-router";

function Item({product}){
    const {id, name, img, tipodemate, price, permalink} = product;
    const navigate = useNavigate();

    const goToProduct = () =>{
        navigate(`/Detalles/${id}`)
    }

    return(
        <>
            <div className="card mt-3 mx-2 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.tipodemate}</p>
                    <img className="imagen-card img-thumbnail imag"src={product.img}/>
                    <a className="mt-3 btn btn-secondary" onClick={()=> goToProduct()}>Ver detalle</a>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </>
    );
}

export default Item;