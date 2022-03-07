import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link } from "react-router-dom";
import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import React, { useEffect, useState }  from 'react';
import { getFirestore } from "../firebase";

function NavBar(){
    let nombreH1={
        color: "white",
        fontSize: "30px"
    }
    let vinculo={
        color: "white",
        textDecorationLine: "none",
    }
    
//
    const [data, setData] =useState([]);

    useEffect(() => {
        const db = getFirestore() 
        const productsCollection = db.collection("items");
        const getDataFromFirestore = async ()=>{
            const response = await productsCollection.get();
            setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        }
        getDataFromFirestore();
    }, []);
    
    const nombreCategorias = [];
    
    data.forEach(element => {
        nombreCategorias.push({name: element.category, id: element.categoryID});
    });

    const nombreCategoriasMap = nombreCategorias.map(elemento=>{
        return [elemento.name, elemento]
    })
    const nombreCategoriasArr = new Map(nombreCategoriasMap);
    const unicos = [...nombreCategoriasArr.values()];


    //drop
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
                        {unicos.map((product)=>(
                            <Dropdown.Item>
                                <Link to={"categorias/"+product.id} style={{textDecoration:"none", color:"black"}}>{product.name}</Link>
                            </Dropdown.Item>
                           )
                        )}
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
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar"/>
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