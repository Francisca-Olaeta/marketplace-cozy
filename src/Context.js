import { createContext } from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { rcompareIdentifiers } from "semver";


/*Creo el contexto*/
const Context = createContext({});

/*Provider a los hijos */
const ContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [search, setSearch] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const [cart, setCart] = useState([]);
    const [agree, setAgree] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [publication, setPublication] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const {user, isAuthenticated} = useAuth0();
   




    /*Función para acceder a la información de productos desde el archivo json --------------------------------------------------------*/
    
    const getInfoProducts = async() => {
      
        try{
            const res = await fetch('http://localhost:3000/cozy.json');
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

    /*Función para acceder al listado de las categorías de productos ------------------------------------------------------------------*/
    const getCategories = async() => {
        const response = await fetch('http://localhost:3000/categories.json');
        const datas = await response.json();

        setCategories(datas);
    }
    

  /*Función para reducir la lista de tipos ---------------------------------------------------------------------------------------*/
  const types = productList.reduce((acc,item) => {
    if(!acc.includes(item.type)){
      acc.push(item.type)
    }
    return acc;
  },[])


/*Función para acceder a los usuarios --------------------------------------------------------------------------------------- */
const getUsers = async() => {
  const res = await fetch('http://localhost:3000/users.json');
  const data = await res.json();
  setUserInfo(data);
};

useEffect(()=>{
  getInfoProducts();
    getCategories();
    getUsers();
}, []);



// /*Función para registrarse ----------------------------------------------------------------------------------------*/
// const register = () => {
//   let i = 2;
//   let name = document.getElementById("name").value;
//   let lastname = document.getElementById("lastname").value;
//   let username = document.getElementById("username").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let rut = document.getElementById("rut").value;
//   let password = document.getElementById("password").value;
//   let passwordrep = document.getElementById("passwordrep").value;
//   let checkterms = document.getElementById("checkterms").value;

// if (name !== "" && lastname !== "" && username !== "" && email !== "" && phone !== "" && rut !== "" && password !== "" && passwordrep !== ""){
//   setUserInfo([...userInfo, { id: i++, name: name, lastname: lastname, username: username, email: email, phone: phone, rut: rut }] );
//   console.log(userInfo)
//   alert("usuario registrado")

// }
// else{
//   alert("debes completar tu registro")
// }
// console.log(email)




  // if (name !== "" && lastname !== "" && username !== "" && email !== "" && phone !== "" && rut !== "" && password !== "" && passwordrep !== ""){
  //   /*Si todos los campos están llenos, guarda en isUser*/
  //   if (password !== passwordrep) {
  //     alert("Contraseñas distintas")
  //   }
  //   else{
  //     if(user.email === email){
  //       let isUser = userInfo.filter((e) => e.email === email);
  //       if (isUser.length === 0){
  //         setUserInfo([...userInfo, {id: i++, name: name, lastname: lastname, username: username, email: email, phone: phone, rut: rut }]);
  //         setIsRegistered(true);
  //         alert("Registro exitoso");
  //       }else {
  //         alert("Este email ya está registrado");
  //       }
  //     }
  //     else{
  //       alert("Usuario no registrado")
  //     }
      
  //   }
  // }
  // else{
  //   alert("Debes rellenar todos los campos");
  // }
  // console.log(userInfo)
// }



/*Función para añadir a favoritos --------------------------------------------------------------------------------------------------*/
  const addToFav = (id) => {
    const index = productList.findIndex((e) => e.id === id);
    productList[index].liked = !productList[index].liked
    setProductList([...productList]);
  }




/*Función para capturar el input de la barra de búsqueda -------------------------------------------------------------------------- */
    const handleChange= (e) => {
      setSearch('');
      setSearch(e.target.value);
    };





/*Función is in cart --------------------------------------------------------------------------------------------------------------*/
// const findInCart = (id) => {
//   const index = productList.findIndex((e) => e.id === id);
//   productList[index] = !productList[index]
//   setIsInCart(!isInCart);
// }




/*Función add to cart ----------------------------------------------------------------------------------------------------------- */
const addToCart = ({ name, id, img, price, category, type}) => {
  const foundItem = cart.findIndex((p)=>p.id===id);
  const product = { name, id, img, price, category, type, qty: 1, isInCart: false};
  setIsInCart(!isInCart);
  
  // Si encuentra el mismo id, le digo que agregue 1 al índice
  if(foundItem >= 0) {
    cart[foundItem].qty++;
    setCart([...cart]);
  
  // Si no encuentra el mismo id, agrega el producto tal cual
  }else {
    setCart([...cart, product]);
  }
}




/*Función para incrementar la cantidad -------------------------------------------------------------------------------------------*/
const increment = (i) => {
  cart[i].qty++;
  setCart([...cart]);
}





/*Función para decrementar la cantidad ------------------------------------------------------------------------------------------*/
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




/*Función que muestra el total del carro de compras ---------------------------------------------------------------------------*/
const initialValue = 0;
const total = cart.reduce(
  (previousValue, { qty, price }) => previousValue + (qty*price),
  initialValue
);




/* Función para obtener el total parcial por producto------------------------------------------------------------------------ */
const getPartialTotal = (i) => {
  const productTotal = i.price * i.qty;
  return productTotal
}



/*Función para eliminar producto del carro---------------------------------------------------------------------------------- */
const remove = (id) => {
  const index = cart.findIndex((p)=>p.id===id);
  const removedFromCart = cart.splice(index, 1);
  
  setCart([...cart])
}





return (
    <Context.Provider value={{productList, setProductList, categories, category, setCategory, type, setType, search, setSearch, types, addToFav, handleChange, userInfo, setUserInfo, cart, setCart, addToCart, increment, decrement, total, remove, getPartialTotal, agree, setAgree, isDisabled, setIsDisabled, publication, setPublication, isRegistered, setIsRegistered, isInCart, setIsInCart}}>
        {children}
    </Context.Provider>

);


};


export { ContextProvider };
export default Context;