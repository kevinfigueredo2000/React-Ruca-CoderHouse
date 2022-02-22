import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link } from "react-router-dom";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';


function NavBar(){
    let nombreH1={
        color: "white",
        fontSize: "30px"
    }
    let navBarStyle = {
        backgroundColor: "#1f1f1f"
    }
    let vinculo={
        color: "white",
        textDecorationLine: "none",
    }
    return(
        <div className="flexbox py-2" style={navBarStyle}>
            <div className="row"> 
                <div className="col-sm-1" style={{marginRight:"8vh", marginLeft:"7vh"}}>
                    <Link to="/" style={{textDecoration:"none"}}><h1 style={nombreH1}>Ruca</h1></Link>
                </div>
                <div className="col-sm my-auto" activeclassname="active">
                    <Link to="/" style={vinculo}>Inicio</Link>
                </div>
                <div className="col-sm my-auto " activeclassname="active" >
                    <Link to="/categories" style={vinculo}>Categorias</Link>
                </div>
                <div className="col-sm my-auto" activeclassname="active" >
                    <Link to="" style={vinculo}>Sobre nosotros</Link>
                </div>
                <div className="col-sm my-auto" activeclassname="active">
                    <Link to="" style={vinculo}>login</Link>
                </div>
                <div className="col-sm-2 my-auto">
                    <Form className="d-flex">
                        <InputGroup>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
                            <InputGroup.Text><Search/></InputGroup.Text>
                        </InputGroup>                  
                    </Form> 
                </div>
                <div className="col my-auto fa-cart-shopping" style={{marginLeft:"20vh"}}>
                    <Link to="/cart"><CartWidget Cart={Cart}/></Link>
                </div>       
            </div>
        </div>
    );
}
export default NavBar;