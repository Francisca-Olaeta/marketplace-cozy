import { createContext } from "react";
import { useState, useEffect } from "react";


/*Creo el contexto*/
const Context = createContext({});

/*Provider a los hijos */
const ContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");



    /*Función para acceder a la información de productos desde el archivo json */
    
    const getInfoProducts = async() => {
        try{
            const res = await fetch('./cozy.json');
            const data = await res.json();
            setProductList(data);
       
          
        } catch (e) {
            console.log("problema en fetch")

        }
}
    useEffect(()=>{
        getInfoProducts();
    }, []);



    /*Función para acceder al listado de las categorías de productos */
    const getCategories = async() => {
        const response = await fetch('./categories.json');
        const datas = await response.json();

   
        setCategories(datas);
    }
    useEffect(()=>{
        getCategories();
    }, []);

   
    console.log("prueba")
    

return (
    <Context.Provider value={{productList, setProductList, categories, category, setCategory, type, setType}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;