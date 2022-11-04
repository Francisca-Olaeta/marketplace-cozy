import {React, useState, useContext, useEffect} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import Select from '../components/Select';

const CategoryGrid = () => {
    const {productList, setProductList, categories, setCategories, setCategory} = useContext(Context);

    /*Estado que guardará los productos filtrados por categoría */
    

    const { category } = useParams();

 
  

    //  /*Función para filtrar por categoría */
    //  let filterByCat = (e) => {
    //   let filteredCategory
    //       if ((e.target.value) === "") {
    //           setProductList(productList);
    //       }
    //       else if ((e.target.value) === "living") {
    //           filteredCategory = [...productList].filter((e) => e.category.includes("living"));
    //           setProductList(filteredCategory);
    //       }
    //       else if ((e.target.value) === "dormitorio") {
    //           filteredCategory=[...productList].filter((e) => e.category.includes("dormitorio"));
    //           setProductList(filteredCategory);
    //       }
    //       else if ((e.target.value) === "entrada") {
    //           filteredCategory=[...productList].filter((e) => e.category.includes("entrada"));
    //           setProductList(filteredCategory);
    //       }else {
    //           setProductList(productList);
    //       }
          
    //       }



    if (productList === undefined){
      return (
        <div>
          <h3>Está cargando</h3>
        </div>
      )
    }


  


  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />
            
            {/* {categories.map((e) => (
              e.category

            ))} */}
            <h2 className="mt-5 mb-3">Living</h2>
            <Select />

            <div className="row justify-content-between align-items-center">
            

              {category.filter((e) => {
               if (e.category === ''){
                return e;
               }
               else if (e.category === category){
                return e;
               }
               else{
                console.log(e.category);
               }
              }).map((e) => (
                  <CstmCard key={e.id} product={e} />
                ))
              }
              

                
                
            </div>
            
        </Container>



    </div>
  )
}

export default CategoryGrid;