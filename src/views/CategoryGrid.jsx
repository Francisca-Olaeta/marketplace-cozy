import {React, useState, useContext, useEffect} from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';

import Select from '../components/Select';
import NotFound from './NotFound';


const CategoryGrid = () => {
  const { category } = useParams();
  const { type } = useParams();
  

  /*Paso variables a través del Context */
  const {productList, setProductList, categories, setCategories, setCategory, setType, isChecked, setIsChecked, types, handleChange, search, setSearch} = useContext(Context);

  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada para el título*/
  const eachCategory = categories.filter((e) => e.category === category);

  /*Variable que guardará los productos filtrados por tipo */
  const selectedType = selectedCategory.filter((e) => e.type.includes(type));

  const navigate = useNavigate();

  /*Función goToType */
  // const goToType = () => {
  //   if(type){
  //     /*Si es que hay algo en "type", ejecuta el useNavigate y agrega al fenal de la url el type */
  //     navigate(`/categorias/${category}/${type}`);
  //     setType('');
  //   }
  //   else console.log("selecciona un tipo")
  // }

  // useEffect(()=>{
  //   /*Callback */
  //   goToType(type);
  // }, []);

  // console.log(type);



    if (productList === undefined){
      return (
        <div>
          <h3>Está cargando</h3>
        </div>
      )
    }
/*Función para filtrar con checkbox------------------------------ */

// const handleOnChange = (e) => {
//   const currentIndex = isChecked.indexOf(e);
//   const newChecked = [...isChecked];
//   if(currentIndex === -1){
//     newChecked.push(e)
//   }else{
//     newChecked.splice(currentIndex, 1)
//   }

//  setIsChecked(newChecked);
// }

  // const filterResult = (type) => {
  //   const resultOfFilter = selectedType.filter((e)=>{
  //     return e.type===type
  //   });
  //   setProductList(resultOfFilter);

  // };

    /*Función para ordenar de mayor a menor */
    const sortArray = (e) => {
     let arrayOrdenado
     if ((e.target.value) === ""){
      setProductList(selectedCategory);
     }
     else if ((e.target.value) === "ascend"){
      arrayOrdenado=[...selectedCategory].sort((a, b)=>a.price > b.price ? 1 : -1);
      setProductList(arrayOrdenado);
     }
     else if ((e.target.value) === "descend"){
      arrayOrdenado=[...selectedCategory].sort((a, b)=>a.price > b.price ? -1 : 1);
      setProductList(arrayOrdenado);
    }
    else if ((e.target.value) === "az"){
      arrayOrdenado=[...selectedCategory].sort((a, b)=>a.name > b.name ? 1 : -1);
      setProductList(arrayOrdenado);
    }
    else if ((e.target.value) === "za"){
      arrayOrdenado=[...selectedCategory].sort((a, b)=>a.name > b.name ? -1 : 1);
      setProductList(arrayOrdenado);
    }
  }


  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />
            
            {/* /*Título */ }
            {eachCategory.map((e, i) => (
            <h2 key={i} className="mt-5 mb-3">{e.category}</h2>
            ))}

            {/* <Select type={type} /> */}

            <Form.Select defaultValue={""} onChange={sortArray} aria-label="Default select example">
              <option value="">Ordenar por:</option>
              <option value="ascend">Precio, de menor a mayor</option>
              <option value="descend">Precio, de mayor a menor</option>
              <option value="az">Nombre, ascendente</option>
              <option value="za">Nombre, descendente</option>
            </Form.Select>

            <h3>{type}</h3>
{/* 
            /*Intento de hacer filtros con checkbox -------------------------------------------------*/
            // <Container>
            // <Form  value={type}>
            // <Form.Group 
            // className="mb-3" 
            // controlId="formBasicCheckbox">
             
            //      <Form.Check onChange={()=>filterResult({type})} value="" type="checkbox" label="Alfombras" />
            
            //   </Form.Group>
            // </Form>

            // </Container>
/*-------------------------------------------------------------------------------------------------- */ }
            <div className="row justify-content-between align-items-center">
            {selectedCategory.filter((e)=> {
              if(search===""){
                return e;
              }
              else if (e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || e.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || e.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || e.seller.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return e;
              }
            }).map((e)=>(
                <CstmCard key={e.id} product={e} />
              ))}
    
           
        
        {/* {selectedType.map((e, i) => (
            
           <CstmCard key={i} product={e} />
         )) 
            
       }   */}
      
          
           
              

                
                
            </div>
            
        </Container>



    </div>
  )
}

export default CategoryGrid;