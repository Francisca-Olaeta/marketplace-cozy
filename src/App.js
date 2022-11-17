import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/*Hooks */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

/*Context provider */
import { ContextProvider } from './Context';

/*Components */
import MyNavbar from "./components/PrivateNavbar";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";

/*Views */
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Categories from "./views/Categories";
import CategoryGrid from "./views/CategoryGrid";
import Favourites from "./views/Favourites";
import MyProfile from "./views/MyProfile";
import Details from "./views/Details";
import Publication from "./views/Publication";
import MyCart from "./views/MyCart";
import NotFound from "./views/NotFound";
import Results from "./views/Results";
import NotRegistered from "./views/NotRegistered";



function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
    
        {isAuthenticated ? <MyNavbar /> : <PublicNavbar />}
            
           
            
          <Routes>
        
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registro" element={<Register />}/>

            {isAuthenticated ? <Route path="/categorias" element={<Categories />}/> : <Route path="/categorias" element={<NotRegistered />}/>}

            {isAuthenticated ? <Route path="/categorias" element={<Results />}/> : <Route path="/resultados" element={<NotRegistered />}/>}
            
            {isAuthenticated ? <Route path="/categorias/:category" element={<CategoryGrid />}/> : <Route path="/categorias/:category" element={<NotRegistered />}/> }
   
            {isAuthenticated ? <Route path="/categorias/:category/:id" element={<Details />}/> : <Route path="/categorias/:category/:id" element={<NotRegistered />}/> }

            {isAuthenticated ? <Route path="/miperfil" element={<MyProfile />}/> : <Route path="/miperfil" element={<MyProfile />}/> }

            {isAuthenticated ? <Route path="/miperfil/publicacion" element={<Publication />}/> : <Route path="/miperfil/publicacion" element={<NotRegistered />}/> }

            {isAuthenticated ? <Route path="/miperfil/favoritos" element={<Favourites />}/> : <Route path="/miperfil/favoritos" element={<Favourites />}/> }

            {isAuthenticated ? <Route path="/carrito" element={<MyCart />}/> : <Route path="/carrito" element={<NotRegistered />}/> }
            
            <Route path="*" element={<NotFound />}/>

          </Routes>

          <Footer className=""/>
        </BrowserRouter>
      </ContextProvider>
      
    </div>
  );
}

export default App;
