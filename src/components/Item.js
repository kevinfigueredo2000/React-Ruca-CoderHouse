import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Button} from 'react-bootstrap/';
import {useNavigate} from "react-router";

function Item({product}){
    const navigate = useNavigate();

    return(
        <Container>
            <div className="card mt-3 shadow-sm col">
                <div className="card-body">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <p className="card-text text-center">{product.tipodemate}</p>
                    <img className="img-thumbnail img-fluid text-center" src={product.img} alt={product.name}/>
                    <div className="text-center">
                        <Button className="mt-3 btn btn-secondary col-sm-6" onClick={()=>navigate(`/productos/${product.id}`)}>Ver detalle</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Item;