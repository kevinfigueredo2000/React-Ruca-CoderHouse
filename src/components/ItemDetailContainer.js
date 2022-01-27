import React from "react";
import App from "../App";
import {Navbar} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "./ItemDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function ItemDetailContainer(){
    return(
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/Detalles"/>
                        <ItemDetail/>
                    <Route/>
                    <Route exact path="/"/>
                        <App/>
                    <Route/>
                </Switch>
            </Router>
        </React.Fragment>
    );
    }

export default ItemDetailContainer;