import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link } from "react-router-dom";
import { Dropdown, Form, FormControl, InputGroup, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Search } from 'react-bootstrap-icons';
import React, { useEffect, useState }  from 'react';
import { getFirestore } from "../firebase";
import "./NavBar.css"

function NavBar(){
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

    //abrir cerrar smooth
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function(){
        let Desplazamiento_Actual = window.pageYOffset;
        if(ubicacionPrincipal >= Desplazamiento_Actual){
            document.getElementById('nav').classList = 'py-2 bg-dark';
            document.getElementById('nav').style.top = '0';
        }else{
            document.getElementById('nav').classList = 'py-2 bg-dark';
            document.getElementById('nav').style.top = '-100px';
        }
        ubicacionPrincipal = Desplazamiento_Actual;
    }
    //boton hamburger
    function clickearCerrar(){
        document.getElementById("ulNav").classList.toggle("show")
        document.getElementById("ulNav").classList.remove("d-none");
    }

    return(
        <div className="py-2 bg-dark" id="nav">
                <Navbar>
                    <button className="hamburger" id="hamburger" onClick={()=>{
                                document.getElementById("ulNav").classList.toggle("show")
                                document.getElementById("ulNav").classList.remove("d-none");
                            }}>
                        <FontAwesomeIcon className="fas fa-bars" icon={faBars}/>
                    </button>
                    <h1 className="nombreH1 col-sm rucaNav">Ruca</h1>
                    <ul className="ulNav" id="ulNav">
                        <li className="nav-item col-sm my-auto inicioNav">
                            <Link to="/" activeClassName="active" className="vinculo" id="inicio" onClick={clickearCerrar}>Inicio</Link>
                        </li>
                        <li className="nav-item col-sm my-auto">
                            <Dropdown isOpen={dropdown} toggle={abriCerrarDrop} className="col-sm my-auto" id="categorias">
                                <Dropdown.Toggle className="bg-dark border-dark" >
                                    <span className="vinculo">Categorias</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {unicos.map((product)=>(
                                        <Dropdown.Item>
                                            <Link to={"categorias/"+product.id} style={{textDecoration:"none", color:"black", paddingRight:100}} onClick={clickearCerrar}>{product.name}</Link>
                                        </Dropdown.Item>
                                    )
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item col-sm my-auto" onClick={clickearCerrar}>
                            <Link to="sobre-nosotros" activeClassName="active" className="vinculo">Sobre nosotros</Link>
                        </li>
                        <li className="nav-item col-sm m-auto" onClick={clickearCerrar}>
                            <Link to="contacto" activeClassName="active" className="vinculo">Contacto</Link>
                        </li>
                        <div className="nav-item col-sm-3 m-auto" id="busqueda">
                            <Form className="d-flex">
                                <InputGroup>
                                    <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar"/>
                                    <InputGroup.Text><Search/></InputGroup.Text>
                                </InputGroup>                  
                            </Form> 
                        </div>
                    </ul>   
                    <li className="nav-item col-sm cartNav" id="cart"><Link to="/cart"><CartWidget Cart={Cart}/></Link></li>
                </Navbar>
        </div>
    );
}
export default NavBar;