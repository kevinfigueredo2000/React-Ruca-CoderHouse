import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "./ItemDetail";
import {Outlet} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getProductos } from "./BaseDeDatos";
import {setOutletContext} from "react-dom"
import {useState} from "react"

function ItemDetailContainer(getProductos){
    const {id} = useParams();
    const [loading, setLoading] = setOutletContext();
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        let mounted = true;
        setLoading(true);
        Promise.all([getProductos(id)])
        .then(results=>{
            return results
            let item = results[0]
            item.description = results[1].plain_text
            if(mounted){
                setProduct(item)
                setTimeout(()=>{
                    setLoading(false)
                },3000)
            }
        })
        return () => mounted = false
    }, [id]);

    return(
        <div>
            {product ? <ItemDetail product={product}/> : null}
        </div>
    );
    }

export default ItemDetailContainer;