import React from "react";
import {useState} from "react";
import Item from "./Item";
import {useEffect} from "react";
import {getProductos} from "./BaseDeDatos";

function ItemList(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getProductos()
        .then((data)=> {setProducts(data)})
        .catch((error)=> {console.error(error)})
        .finally(()=> setIsLoading(false))
    }, []);
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