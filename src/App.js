import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import NotFoundPage from "./components/notFoundPage";
import Categories from "./components/Categories";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";


function App() {
  return (
    <CartProvider>
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
            <Route path="cart" element={<Cart/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;