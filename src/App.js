import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route} from 'react-router';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
            <Router>
                    <Route path="/" element={<Layout/>}>
                        <Route index element=""/>
                        <Route path="" element={<ItemListContainer/>}/>
                    </Route>
            </Router>
  );
}

export default App;
