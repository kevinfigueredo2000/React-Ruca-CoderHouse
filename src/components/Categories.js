import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories=()=>{
    const [products, setProducts] =useState();
    const [isLoading, setIsLoading] =useState(false)
    useEffect(()=>{
        const URL = `http://localhost:3001/productos`;
        setIsLoading(true)
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally(()=> setIsLoading(false))
    }, []);
    if(isLoading || !products) return <p className="text-center" style={{fontSize:"30px"}}>Cargando...</p>
    return(
        
        <>
            {products.map((product)=>(
                    <div className="col-12 text-center" key={product.id}>
                        <Link to="/" style={{textDecoration:"none"}}><p style={{fontSize:"30px", color:"black"}}>{product.category}</p></Link>
                    </div>
            ))}
        </>
    )
}
export default Categories;