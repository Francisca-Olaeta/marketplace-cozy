import {React, useState, useContext, useEffect} from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';

import Select from '../components/Select';
import NotFound from './NotFound';
import NoCoincidence from '../components/NoCoincidence';



const CategoryGrid = () => {
  const { category } = useParams();
  

  /*Paso variables a través del Context */
  const {productList, setProductList, categories, setCategories, setCategory, type, setType, isChecked, setIsChecked, types, handleChange, search, setSearch} = useContext(Context);

  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada para el título*/
  const eachCategory = categories.filter((e) => e.category === category);

  /*Variable que guardará los productos filtrados por tipo */
  const selectedType = selectedCategory.filter((e) => e.type.includes(type));

  const navigate = useNavigate();




    if (productList === undefined){
      return (
        <div>
          <h3>Está cargando</h3>
        </div>
      )
    }
/*Función para filtrar con checkbox------------------------------ */

const filterType = (e) => {
  if(e.type===type){
    return !isChecked
  }
  }
 
  

/*Función para ordenar de mayor a menor------------------------ */
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

            {search ? null : 
            
            <Form.Select defaultValue={""} onChange={sortArray} aria-label="Default select example">
              <option value="">Ordenar por:</option>
              <option value="ascend">Precio, de menor a mayor</option>
              <option value="descend">Precio, de mayor a menor</option>
              <option value="az">Nombre, ascendente</option>
              <option value="za">Nombre, descendente</option>
            </Form.Select>
            
            }

            

            <h3>{type}</h3>
{/* 

/*-------------------------------------------------------------------------------------------------- */ }
            <div className="row justify-content-start align-items-center">
            {selectedCategory.filter((e)=> {
              if(search===""){
                return e;
              }
              else if (e.name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').includes(search.toLocaleLowerCase())
              || e.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || e.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              || e.seller.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return e;
              }
              else if (isChecked=true){
                return e;
              }

            }).map((e)=>(
                <CstmCard key={e.id} product={e} />
              ))

              }

              <div>
                <Form.Group controlId="formBasicCheckbox" onChange={()=>filterType()}>
                  {types.map((e)=>(
                    <Form.Check type="checkbox" label={e} value={isChecked} />
                  ))}
                </Form.Group>
              </div>
    
                
                
            </div>

            <div className='my-3'>
              <MDBBtn floating outline rounded size='lg' color='dark' onClick={()=>setSearch('')}>
              <FontAwesomeIcon icon={faX}/>
              </MDBBtn>
              <MDBBtn outline color='link' onClick={()=>setSearch('')}>Limpiar</MDBBtn>
            
            </div>
            
        </Container>



    </div>
  )
}

export default CategoryGrid;