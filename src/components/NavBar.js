import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link, useParams } from "react-router-dom";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import React, { useEffect, useState }  from 'react';
import { getFirestore } from "../firebase/index";


function NavBar(){
    let nombreH1={
        color: "white",
        fontSize: "30px"
    }
    let vinculo={
        color: "white",
        textDecorationLine: "none",
    }

    const [product, setProduct] =useState({});
    useEffect(()=>{
        const db = getFirestore() 
        const productCollection = db.collection("items");
        const selectedProduct = productCollection.doc(productID);

        selectedProduct
        .get()
        .then((response)=>{
        setProduct({...response.data(), id: response.id})
    })}, [productID]);

    const [busqueda, setBusqueda] = useState("");
    const [usuarios, setUsuarios] = useState([])
    const { productID } = useParams();

    const handleChange = e =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }
    
    const filtrar = (terminoBusqueda)=>{
        var resultadosBusqueda = product.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setUsuarios(resultadosBusqueda)
    }


    const [dropdown, setDropdown] = useState(false);

    const abriCerrarDrop = ()=>{
        setDropdown(!dropdown)
    }

    return(
        <div className="flexbox py-2 bg-dark" >
            <div className="row"> 
                <div className="col-sm-1" style={{marginRight:"8vh", marginLeft:"7vh"}}>
                    <Link to="/" style={{textDecoration:"none"}}><h1 style={nombreH1}>Ruca</h1></Link>
                </div>
                <div className="col-sm my-auto">
                    <Link to="/" activeClassName="active" style={vinculo}>Inicio</Link>
                </div>
                    <Dropdown isOpen={dropdown} toggle={abriCerrarDrop} className="col-sm my-auto" style={{marginLeft:"-45px"}}>
                        <Dropdown.Toggle className="bg-dark border-dark" caret >
                            <span style={vinculo}>Categorias</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="categorias">Mates</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                <div className="col-sm my-auto" >
                    <Link to="sobre-nosotros" activeClassName="active" style={vinculo}>Sobre nosotros</Link>
                </div>
                <div className="col-sm my-auto" >
                    <Link to="contacto" activeClassName="active" style={vinculo}>Contacto</Link>
                </div>
                <div className="col-sm-2 my-auto">
                    <Form className="d-flex">
                        <InputGroup>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" value={busqueda} onChange={handleChange}/>
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