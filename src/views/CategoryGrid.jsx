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
  const { type } = useParams();
  

  /*Paso variables a través del Context */
  const {productList, setProductList, categories, setCategories, setCategory, setType, types, handleChange, search, setSearch} = useContext(Context);

  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada para el título*/
  const eachCategory = categories.filter((e) => e.category === category);

  /*Variable que guardará los productos filtrados por tipo */
  const selectedType = productList.filter((e) => e.type.includes(type));





  /*Estado para los filtros con checkbox */
  const [isChecked, setIsChecked] = useState(
    new Array(types.length).fill(false)
    );
    console.log(isChecked);

/*Función para filtrar con checkbox------------------------------ */
const handleChangeCheck = (position) => {
  const updatedIsChecked = isChecked.map((e, index) => index === position ? !e : e);

  setIsChecked(updatedIsChecked);
}

// const filterCheck = (e, value) => {
//   let arrayByType
//   if((e.value)===""){
//     console.log("nada");
//   }
//   else if ((e.value) === "alfombra"){
//     arrayByType=[...selectedType].filter((e)=>e.type.includes(type));
//     console.log("alfombras");
//   }
//   else if ((e.value) === "textil"){
//     arrayByType=[...selectedType].filter((e)=>e.type.includes(type));
//     console.log("textil");
//   }
//   else if ((e.value) === "deco"){
//     arrayByType=[...selectedType].filter((e)=>e.type.includes(type));
//     console.log("deco");
//   }
//   else if ((e.value) === "muebles"){
//     arrayByType=[...selectedType].filter((e)=>e.type.includes(type));
//     console.log("muebles");
//   }

// }

  
 
  

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



        <Container className="cat-container my-5 d-flex">
            <Back />
            
            {/* /*Título */ }
            {eachCategory.map((e, i) => (
              <h2 key={i} className="mt-5 mb-3 caps">{e.category}</h2>
              ))}

            {search ? null : 

            <div className='filters-container'>
                <div className='panel' width={45}>
                  <h4 className='panel__title'>Filtrar por tipo de productos:</h4>
                    <Form.Group controlId="formBasicCheckbox">
                      {types.map((e, index)=>(
                        <Form.Check className='panel__checks caps' type="checkbox" label={e} value={e} onChange={()=>handleChangeCheck(index)} checked={isChecked[index]} key={index}/>
                      ))}
                    </Form.Group>

                </div>
                <Form.Select className='select' defaultValue={""} onChange={sortArray} aria-label="Default select example">
                  <option value="">Ordenar por:</option>
                  <option value="ascend">Precio, de menor a mayor</option>
                  <option value="descend">Precio, de mayor a menor</option>
                  <option value="az">Nombre, ascendente</option>
                  <option value="za">Nombre, descendente</option>
                </Form.Select>

            </div>
            

}
{/* ------------------------------------------------------------------------------------------------------------ */}
   
            

            

            
{/* 

/*----------------------------------Filtrado y renderización de los productos---------------------------------------- */ }
            <div>
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
                  
                }).map((e, i)=>(
                    <CstmCard key={i} product={e} />
                  ))
                  }  

                  {/* {selectedType.map((e, i)=>(
                    <CstmCard key={i} product={e} />
                  ))} */}

                  
                </div>

                <div className='my-3'>
                  <MDBBtn floating outline rounded size='lg' color='dark' onClick={()=>setSearch('')}>
                  <FontAwesomeIcon icon={faX}/>
                  </MDBBtn>
                  <MDBBtn outline color='link' onClick={()=>setSearch('')}>Limpiar</MDBBtn>
                </div>

            </div>
             
        </Container>




    </div>
  )
}

export default CategoryGrid;