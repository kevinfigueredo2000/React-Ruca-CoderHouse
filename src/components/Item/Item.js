import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
export const Item =({product})=>{
    let navigate = useNavigate();


    return(
            <div className="card mt-3 mx-3 shadow">
                <div className="card-body">
                    <img className="imagen-card img-thumbnail" src={product.img} alt={product.name}/>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <button onClick={()=>navigate(`/productos/${product.id}`)} className="btn btn-light mb-3">Ver detalle</button>
                </div>
            </div>
    );
}