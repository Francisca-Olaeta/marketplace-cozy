import { createContext } from "react";
import { useState, useEffect } from "react";

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
            console.log(data);
            setProductList(data);
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


    

return (
    <Context.Provider value={{productList, setProductList, categories}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;