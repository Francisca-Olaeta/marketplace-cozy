import {React, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Context from '../Context';


function Select() {

  /*Hook para cambiar la url según elemento seleccionado */
  const navigate = useNavigate();

  const {setProductList, productList, category, type, setType} = useContext(Context);


  /*Reducir la lista de tipos*/
  const types = productList.reduce((acc,item) => {
    if(!acc.includes(item.type)){
      acc.push(item.type)
    }
    return acc;
  },[])

  /*Variable que guardará los productos filtrados por tipo */
  const selectedType = productList.filter((e) => e.type.includes(type));

  /*Función goToCategory */
  const goToType = () => {
    if(type){
      /*Si es que hay algo en "category", ejecuta el useNavigate y agrega al fenal de la url el category */
      navigate(`/categorias/${category}`);
      setType('');
    }
    else console.log("selecciona un tipo")
  }

  useEffect(()=>{
    /*Callback */
    goToType(type);
  }, []);

  console.log(type);

  // /*Función para filtrar */
  // let filterByType = (e) => {
  //   let filteredArray
  //   if ((e.target.value) === ""){
  //     setProductList(productList);
  //   }
  //   else if ((e.target.value) === "alfombra") {
  //     filteredArray = [...productList].filter((e) => e.type.includes("alfombra"));
  //     setProductList(filteredArray);
  //   }
  //   else if ((e.target.value) === "textil") {
  //     filteredArray = [...productList].filter((e) => e.type.includes("textil"));
  //     setProductList(filteredArray);
  //   }
  //   else if ((e.target.value) === "deco") {
  //     filteredArray = [...productList].filter((e) => e.type.includes("deco"));
  //     setProductList(filteredArray);
  //   }
  //   else if ((e.target.value) === "muebles") {
  //     filteredArray = [...productList].filter((e) => e.type.includes("muebles"));
  //     setProductList(filteredArray);

  //   }else {
  //     setProductList(productList);
  //   }
  // }

  return (
    <Form.Select 
    defaultValue={""}
    variant="light" 
    title="Buscar por tipo" 
    aria-label="Default select example">
      <option value="">Selecciona por tipo</option>
      {types.map((t, i) => (
        <option key={i} value={t}>{t}</option> 
        ))}
      
      
    </Form.Select>
  );
}

export default Select;