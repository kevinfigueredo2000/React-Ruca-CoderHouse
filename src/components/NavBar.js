import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link } from "react-router-dom";


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
                <div className="col-sm mx-5">
                    <Link to="/" style={{textDecoration:"none"}}><h1 style={nombreH1}>Ruca</h1></Link>
                </div>
                <div className="col-sm my-auto">
                    <Link to="/" style={vinculo}>Inicio</Link>
                </div>
                <div className="col-sm my-auto">
                    <Link to="/categories" style={vinculo}>Categorias</Link>
                </div>
                <div className="col-sm my-auto">
                    <Link to="" style={vinculo}>Sobre nosotros</Link>
                </div>
                <div className="col-sm my-auto">
                    <Link to="" style={vinculo}>login</Link>
                </div>
                <div className="col my-auto fa-cart-shopping">
                    <Link to="/cart"><CartWidget Cart={Cart}/></Link>
                </div>
                
            </div>
        </div>
    );
}
export default NavBar;