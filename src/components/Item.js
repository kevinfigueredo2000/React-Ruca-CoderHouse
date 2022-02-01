import "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from "./ItemCount";
import {Container,Row, Button} from 'react-bootstrap/';
import {useNavigate} from "react-router";

function Item({product}){
    const navigate = useNavigate();

    return(
        <Container>
            <div className="card mt-3 mx-2 shadow-sm col">
                <div className="card-body">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <p className="card-text text-center">{product.tipodemate}</p>
                    <img className="imagen-card img-thumbnail imag text-center" src={product.name} alt={product.img}/>
                    <Button className="mt-3 btn btn-secondary col-sm-6 text-center" onClick={()=>navigate(`/productos/${product.id}`)}>Ver detalle</Button>
                    <ItemCount stock={product.stock} initial={1}/>
                </div>
            </div>
        </Container>
    );
}

export default Item;