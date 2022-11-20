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



const CategoryGrid = () => {
  const { category } = useParams();

  

  /*Paso variables a través del Context */
  const {productList, setProductList, categories, type, types, setType, handleChange, search, setSearch} = useContext(Context);

  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada para el título*/
  const eachCategory = categories.filter((e) => e.category === category);


  /*Funciones para filtrar por tipo de productos */
  const mappedArr = selectedCategory.map((e, i) => {
    return { index: i, value: e };
  })
  mappedArr.sort((a, b)=>a.type > b.type ? 1 : -1);

  const result = mappedArr.map(function(e) {
    return selectedCategory[e.index]
  })
//  console.log(result);

  /*Variable guarda array de muebles */
  const mueblesArr = result.slice(0, 6);
 // console.log(mueblesArr) 

  /*Variable guarda array de textil */
  const mantasArr = result.slice(6, 10);
  //console.log(mantasArr) 

  /*Variable guarda array de textil */
  const decoArr = result.slice(10, 16);
 // console.log(decoArr) 

  /*Variable guarda array de textil */
  const textilArr = result.slice(16, 29);
 // console.log(textilArr) 

  /*Variable guarda array de textil */
  const alfombrasArr = result.slice(29, 32);
 // console.log(alfombrasArr) 

  const concatTextilArr = mantasArr.concat(textilArr);
 // console.log(concatTextilArr)
 



const arreglosPorTipo = (type) => {
  let arrayTipo 
  // if(type===""){
  //   console.log("nada");
  //   console.log(type)
  //   setProductList(...productList)
  // }
   if (type === "alfombra"){
    arrayTipo = alfombrasArr;
    setProductList(...arrayTipo);
    console.log(arrayTipo);
  }
  else if (type === "textil"){
    arrayTipo = concatTextilArr;
    setProductList(...concatTextilArr);
    console.log(arrayTipo);
  }
  else if (type === "deco"){
    arrayTipo = decoArr;
    setProductList(...arrayTipo);
    console.log(arrayTipo);
  }
  else if (type === "muebles"){
    arrayTipo = mueblesArr;
    setProductList(...arrayTipo);
    console.log(mueblesArr);
  }
  console.log(arrayTipo);
}


  /*Estado para los filtros con checkbox */
  const [isChecked, setIsChecked] = useState(
    new Array(types.length).fill(false)
    );
 //   console.log(isChecked);

/*Función para filtrar con checkbox------------------------------ */
const handleChangeCheck = (position) => {
  const updatedIsChecked = isChecked.map((e, index) => index === position ? !e : e);

  setIsChecked(updatedIsChecked);
}

/*Handle checkboxes por tipo */
const handleCheckTypes = (e) => {
  const value = e.target.value;
  const checked = e.target.checked;
//  console.log(value, checked);
  if(checked){
    setType([
      ...type, value
    ])
  }else{ //Filtra los elementos repetidos
    setType(type.filter( (e) => (e !== value) ));
  }
  return arreglosPorTipo(e);
}
console.log(arreglosPorTipo);
console.log(selectedCategory);






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
            {/* <MDBBtn onClick={arreglosPorTipo}>Buscar</MDBBtn> */}

            </div>

            {search ? null : 
//Si no hay nada en la barra de búsqueda, retorna el array por categoría
            <div className='filters-container'>

              {/* // Filtros por checkbox, por desarrollar */}
                {/* <div className='panel' width={45}>
                  <h4 className='panel__title'>Filtrar por tipo de productos:</h4>
                    <Form.Group controlId="formBasicCheckbox">
                      {types.map((e, i)=>(
                        <Form.Check key={i} className='panel__checks caps' type="checkbox" label={e} value={e} id={e} name={e} onChange={handleCheckTypes} />
                      ))}
                    </Form.Group>
                </div> */}

                
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
                
                {/* {selectedCategory ? */}
               { selectedCategory.filter((e)=> {
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

                //   :

                //   arrayByType.map((e, i)=>(
                //     <CstmCard key={i} product={e} />
                //   ))

                 } 
                  

                  
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