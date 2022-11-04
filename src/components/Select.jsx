import {React, useContext, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Context from '../Context';


function Select() {

  const {setProductList, productList} = useContext(Context);


  /*Reducir la lista de tipos*/
  const types = productList.reduce((acc,item) => {
    if(!acc.includes(item.type)){
      acc.push(item.type)
    }
    return acc;
  },[])

  /*Función para filtrar */
  let filterByType = (e) => {
    let filteredArray
    if ((e.target.value) === ""){
      setProductList(productList);
    }
    else if ((e.target.value) === "alfombra") {
      filteredArray = [...productList].filter((e) => e.type.includes("alfombra"));
      setProductList(filteredArray);
    }
    else if ((e.target.value) === "textil") {
      filteredArray = [...productList].filter((e) => e.type.includes("textil"));
      setProductList(filteredArray);
    }
    else if ((e.target.value) === "deco") {
      filteredArray = [...productList].filter((e) => e.type.includes("deco"));
      setProductList(filteredArray);
    }
    else if ((e.target.value) === "muebles") {
      filteredArray = [...productList].filter((e) => e.type.includes("muebles"));
      setProductList(filteredArray);

    }else {
      setProductList(productList);
    }
  }

  return (
    <Form.Select 
    defaultValue={""}
    onChange={filterByType}
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