import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from './Context';

import MyNavbar from "./components/PrivateNavbar";

import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";

/*Import views */
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Categories from "./views/Categories";
import CategoryGrid from "./views/CategoryGrid";
import Dormitorio from "./views/Dormitorio";
import Entrada from "./views/Entrada";
import Favourites from "./views/Favourites";
import MyProfile from "./views/MyProfile";
import Details from "./views/Details";
import Publication from "./views/Publication";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";



function App() {

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
        {/* <PublicNavbar /> */}
            <MyNavbar />
           
            
          <Routes>
        
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registro" element={<Register />}/>
            <Route path="/categorias" element={<Categories />}/>
            <Route path="/categorias/:category" element={<CategoryGrid />}/>
            {/* <Route path="/categorias/living/detalle" element={<Details />}/>
            <Route path="/categorias/dormitorio" element={<Dormitorio />}/>
            <Route path="/categorias/dormitorio/detalle" element={<Details />}/>
            <Route path="/categorias/entrada" element={<Entrada />}/>
            <Route path="/categorias/entrada/detalle" element={<Details />}/> */}
            <Route path="/miperfil" element={<MyProfile />}/>
            <Route path="/miperfil/publicacion" element={<Publication />}/>
            <Route path="/miperfil/favoritos" element={<Favourites />}/>
            <Route path="/carrito" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>

          </Routes>

          <Footer className=""/>
        </BrowserRouter>
      </ContextProvider>
      
    </div>
  );
}

export default App;
