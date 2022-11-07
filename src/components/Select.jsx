import {React, useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Context from '../Context';
import { Button } from 'react-bootstrap';


function Select() {

  
  const {setProductList, productList, category, setType, type, types} = useContext(Context);

  






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
  const navigate=useNavigate();

  return (
    <div>
      <Form.Select 
      value={type}
      // defaultValue={""}
      onChange={({target}) => setType(target.value)}
      variant="light" 
      title="Buscar por tipo" 
      aria-label="Default select example">
        <option value="">Selecciona por tipo</option>
        {types.map((t, i) => (
          <option key={i} value={t}>{t}</option> 
          ))}
      </Form.Select>
      <Button onClick={()=>navigate(`./${type}`)}>Ir</Button>


    </div>
  );
}

export default Select;