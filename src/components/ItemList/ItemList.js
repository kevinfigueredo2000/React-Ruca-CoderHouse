import React from "react";
import {useState} from "react";
import Item from "./Item";
import {useEffect} from "react";

function ItemList(){
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const URL = "http://localhost:3001/productos"
        setIsLoading(true)
        fetch(URL)
        .then((response)=> response.json())
        .then((json) =>setProducts(json))
        .catch((error)=> {console.error(error)})
        .finally(()=> setIsLoading(false))
    },[]);

    return(
        <div className="row">
            {isLoading? (<p className="text-center">Cargando...</p>): (products.map((product)=>(
                    <div className="col" key={product.id}>
                        <Item key={product.id} product={product}/>
                    </div>
            )))}
            
        </div>
    )
}

export default ItemList;