import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemDetail } from "./components/itemDetail/ItemDetail";
import NotFoundPage from "./components/notFoundPage";
import Categories from "./components/Categories";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import { SNosotros } from "./components/SNosotros/SNosotros";
import { Contacto } from "./components/Contacto/Contacto";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import { AlturaPaginaProvider } from "./context/AlturaPag";
import { TiendaContextProvider } from "./context/TiendaContext";

function App() {
  return (
    <TiendaContextProvider>
      <CartProvider>
        <AlturaPaginaProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/">
                <Route index element={<ItemListContainer />} />
                <Route path="productos">
                  <Route index element={<ItemDetailContainer />} />
                  <Route path=":productID" element={<ItemDetail />} />
                </Route>
                <Route />
                <Route index element={<Categories />} />
                <Route path="categorias/:categoryID">
                  <Route index element={<Categories />} />
                </Route>
                <Route />
                <Route path="sobre-nosotros" element={<SNosotros />} />
                <Route index element={<Categories />} path="categories" />
                <Route path="contacto" element={<Contacto />} />

                <Route path="thanks/:orderId" element={<ThankYouPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Footer id="footer" />
          </Router>
        </AlturaPaginaProvider>
      </CartProvider>
    </TiendaContextProvider>
  );
}

export default App;