import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element=""/>
                        <Route path="" element={<ItemListContainer/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
  );
}

export default App;
