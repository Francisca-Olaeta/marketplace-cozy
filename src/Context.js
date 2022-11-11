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
    const [user, setUser] = useState("");
    const [cart, setCart] = ([]);




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

  /*Función para reducir la lista de tipos*/
  const types = productList.reduce((acc,item) => {
    if(!acc.includes(item.type)){
      acc.push(item.type)
    }
    return acc;
  },[])

/*Función para añadir a favoritos */
  const addToFav = (id) => {
    const index = productList.findIndex((e) => e.id === id);
    productList[index].liked = !productList[index].liked
    setProductList([...productList]);
  }

/*Función para capturar el input de la barra de búsqueda */
    const handleChange= (e) => {
      setSearch('');
      setSearch(e.target.value);
      console.log(search);
    };

/*Función add to cart */
const addToCart = ({ name, id, img, price, category, type}) => {
  const foundItem = cart.findIndex((p)=>p.id===id);
  const product = { name, id, img, price, category, type, qty: 1};
  
  // Si encuentra el mimo id, le digo que agregue 1 al índice
  if(foundItem >= 0) {
    cart[foundItem].qty++;
    setCart([...cart])
  // Si no encuentra el mismo id, agrega el producto tal cual
  }else {
    setCart([...cart, product]);
  }
}

/*Función para incrementar la cantidad */
const increment = (i) => {
  cart[i].qty++;
  setCart([...cart]);
}


/*Función para decrementar la cantidad */
const decrement = (i) => {
  const { qty } = cart[i];
  if(qty === 1){
    cart.splice(i, 1);
    setCart([...cart]);
  }
  else{
    cart[i].qty--;
    setCart([...cart])
  }
}

/*Función que muestra el tital del carro de compras */
// const initialValue = 0;
// const totalProducts = cart.reduce(
//   (previousValue, { qty }) => previousValue + qty,
//   initialValue
// );




return (
    <Context.Provider value={{productList, setProductList, categories, category, setCategory, type, setType, search, setSearch, types, addToFav, handleChange, user, setUser, addToCart, increment, decrement}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;