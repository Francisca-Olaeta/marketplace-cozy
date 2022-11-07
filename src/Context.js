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
    const [search, setSearch] = useState("");
    const [isChecked, setIsChecked] = useState(false);



    /*Función para acceder a la información de productos desde el archivo json */
    
    const getInfoProducts = async() => {
        try{
            const res = await fetch('./cozy.json');
            const data = await res.json();
            const dataConLiked = data.map((e)=>({
                name: e.name,
                id: e.id,
                category: e.category,
                desc: e.desc,
                img: e.img,
                category: e.category,
                type: e.type,
                seller: e.seller,
                price: e.price,
                liked: false
            }))
            console.log(data);
            setProductList(dataConLiked);
            // setProductList(data, {liked: false});
       
          
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

    /*Función para reducir la lista de tipos*/
  const types = productList.reduce((acc,item) => {
    if(!acc.includes(item.type)){
      acc.push(item.type)
    }
    console.log(acc)
    return acc;
  },[])

/*Función para añadir a favoritos */
  const addToFav = (id) => {
    const index = productList.findIndex((e) => e.id === id);
    productList[index].liked = !productList[index].liked
    setProductList([...productList]);
  }
    

return (
    <Context.Provider value={{productList, setProductList, categories, category, setCategory, type, setType, search, setSearch, isChecked, setIsChecked, types, addToFav}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;