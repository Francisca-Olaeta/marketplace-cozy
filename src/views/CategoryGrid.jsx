import {React, useState, useContext} from 'react';
import {Container, Form} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import { useEffect } from 'react';



const CategoryGrid = () => {
  const { category } = useParams();


  /*Paso variables a través del Context */
  const {productList, setProductList, categories, type, types, setType, handleChange, search, setSearch, filteredProduct, setFilteredProduct} = useContext(Context);


  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada para el título*/
  const eachCategory = categories.filter((e) => e.category === category);


  /*Funciones para filtrar por tipo de productos con checkboxes */
 
 /*Handle checkboxes por tipo */
const handleCheckTypes = (ele) => {
  const value = ele.target.value;
  const checked = ele.target.checked;
//  console.log(value, checked);
  if(checked){
    setType([
      ...type, value
    ])
  }else{ //Filtra los elementos repetidos
    setType(type.filter( (ele) => (ele !== value) ));
  }
}


/*Función que hace el filtrado a través de los checkboxes */
useEffect(()=>{
  
  if (type.length === 0){
    setFilteredProduct('');
    setType('');
  } else {
    setFilteredProduct('');
    setFilteredProduct(
      selectedCategory.filter(e => 
        type.some(cat => [e.type].flat().includes(cat))
        ))
  }
}, [type])


console.log(filteredProduct)
console.log(type)


/*Función para limpiar la barra de búsqueda */
const clear = () => {
  setSearch('');
  setFilteredProduct('')
}

/*Función para limpiar filtros */
const clearFilters = () => {
  setType([]);
  setSearch('');
  setFilteredProduct('')
  
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
    <div className='margin-0 padding-0'>
        <Header />

        <Container className="cat-container my-5 d-flex">
            <Back />
            
            {/* /*Título */ }
            <div>
            {eachCategory.map((e, i) => (
              <h2 key={i} className="mt-5 mb-3 caps">{e.category}</h2>
              ))
              }
            </div>

            {search ? 
            
            <div className='my-3'>
                  <MDBBtn floating outline rounded size='lg' color='dark' onClick={clear}>
                  <FontAwesomeIcon icon={faX}/>
                  </MDBBtn>
                  <MDBBtn outline color='link' onClick={clear}>Limpiar</MDBBtn>
            </div>
                
            : 
//Si no hay nada en la barra de búsqueda, retorna el array por categoría
            <div className='filters-container'>

              {/* // Filtros con checkboxes */}
                <div className='panel' width={45}>
                  <h4 className='panel__title'>Filtrar por tipo de productos:</h4>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                      label="Alfombras"
                      value="alfombra"
                      onChange={handleCheckTypes}
                      className="mb-2"
                      />
                      <Form.Check
                      label="Decoración"
                      value="deco"
                      onChange={handleCheckTypes}
                      className="mb-2"
                      />
                      <Form.Check
                      label="Muebles"
                      value="muebles"
                      onChange={handleCheckTypes}
                      className="mb-2"
                      />
                      <Form.Check
                      label="Textil"
                      value="textil"
                      onChange={handleCheckTypes}
                      className="mb-2"
                      />
                    </Form.Group>
                    <MDBBtn color='link' onClick={clearFilters} className='clearFilters'>Borrar filtros</MDBBtn>
         


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

            
{/* 

/*----------------------------------Filtrado y renderización de los productos---------------------------------------- */ }
            <div>
                <div className="row justify-content-start align-items-center mx-1">
                
                
                { filteredProduct.length > 0 ? 
                    <>
                      {/* setProductList(filters); */}
                      {filteredProduct.map((e, i)=>(
                            <CstmCard key={i} product={e} />
                          ))}
                    </>

                    :

                    <>
                     {selectedCategory.filter((e)=> {
                    if(search===""){
                      return e;
                    }
                    else if (
                    e.name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').includes(search.toLocaleLowerCase())
                    || e.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    || e.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    || e.seller.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                      setFilteredProduct('')
                      return e;
                    }
                  }).map((e, i)=>(
                      <CstmCard key={i} product={e} />
                    ))
                  }
                    

                  </>

                } 
              

                
                  

                  
                </div>

               

            </div>
             
        </Container>




    </div>
  )
}

export default CategoryGrid;