import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/Nav/NavBar';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFoundPage from "./components/notFoundPage";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import { SNosotros } from "./components/SNosotros/SNosotros";
import { Contacto } from "./components/Contacto/Contacto";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import { AlturaPaginaProvider } from "./context/AlturaPag";
import { TiendaContextProvider } from "./context/TiendaContext";
import TiendaContainer from "./components/Tienda/TiendaContainer";
import Index from "./components/Index/Index";

function App() {
  return (
    <AlturaPaginaProvider>
      <CartProvider>
        <TiendaContextProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
                <Route path="tienda">
                  <Route index element={<TiendaContainer />} />
                </Route>
                <Route path="productos">
                  {/* <Route index element={<ItemDetailContainer />} /> */}
                  <Route path=":productID" element={<ItemDetailContainer />} />
                </Route>
                <Route path="sobre-nosotros" element={<SNosotros />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="thanks/:orderId" element={<ThankYouPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
            <Footer id="footer" />
          </Router>
        </TiendaContextProvider>
      </CartProvider>
    </AlturaPaginaProvider>
  );
}

export default App;