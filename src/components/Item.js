import "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from "./ItemCount";
import {Button} from 'react-bootstrap/';
import {useNavigate} from "react-router";

function Item({product}){
    const navigate = useNavigate();

    return(
        <>
            <div className="card mt-3 mx-2 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.tipodemate}</p>
                    <img className="imagen-card img-thumbnail imag" src={product.name} alt={product.img}/>
                    <Button className="mt-3 btn btn-secondary" onClick={()=>navigate(`/productos/${product.id}`)}>Ver detalle</Button>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </>
    );
}

export default Item;