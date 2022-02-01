import React from "react"
import './App.css';
import {Route, Routes } from "react-router";
import {BrowserRouter as Router} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from "./components/ItemDetail";
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<ItemListContainer/>}/>
            <Route path="productos">
              <Route index element={<ItemDetailContainer/>} />
              <Route path=":productID" element={<ItemDetail/>} />
            </Route>
          <Route/>
          <Route index element={<Categories/>}/>
            <Route path="categories">
              <Route index element={<Categories/>} />
            </Route>
          <Route/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
