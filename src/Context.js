import { createContext } from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MySpinner from "./components/MySpinner";

/*Creo el contexto*/
const Context = createContext({});

/*Provider a los hijos */
const ContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);



    /*Función para acceder a la información de productos desde el archivo json */
    const getInfoProducts = async() => {
        try{
            const res = await fetch('./cozy.json');
            const data = await res.json();
            setProductList(data);
            console.log(data);
        } catch (e) {
            alert("error")

        }
}
    useEffect(()=>{
        getInfoProducts();
    }, []);



    /*Función para acceder al listado de las categorías de productos */
    const getCategories = async() => {
        const res = await fetch('./categories.json');
        const data = await res.json();

        console.log(data)
        setCategories(data);
    }
    useEffect(()=>{
        getCategories();
    }, []);

   
    /*Función para filtrar array por categoría*/
    let filterByCat = (e) => {
    let filteredCatArray
    if ((e.target.value) === ""){
      setProductList(productList);
    }
    else if ((e.target.value) === "living") {
      filteredCatArray = [...productList].filter((e) => e.category.includes("living"));
      setProductList(filteredCatArray);

    }else {
      setProductList(filteredCatArray);
    }
  }
        
    
    

return (
    <Context.Provider value={{productList, setProductList, categories, filterByCat}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;