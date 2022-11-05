import {React, useState, useContext, useEffect} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import Select from '../components/Select';

const CategoryGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  /*Paso variables a través del Context */
  const {productList, setProductList, categories, setCategories, setCategory} = useContext(Context);

  /*Variable que guardará los productos filtrados por categoría */
  const selectedCategory = productList.filter((e) => e.category.includes(category));

  /*Variable que guardará la categoría seleccionada */
  const eachCategory = categories.filter((e) => e.category === category);






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
            
            {eachCategory.map((e, i) => (
            <h2 key={i} className="mt-5 mb-3">{e.category}</h2>

            ))}
            <Select />

            <div className="row justify-content-between align-items-center">
           {selectedCategory.map((e, i) => (
            
                  <CstmCard key={i} product={e} />
                ))
              }
            {/* {selectedType.map((e) => (
            
                  <CstmCard key={e.id} product={e} />
                ))
              }
               */}

                
                
            </div>
            
        </Container>



    </div>
  )
}

export default CategoryGrid;