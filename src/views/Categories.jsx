import {React, useContext, useEffect} from 'react';
import {Card, Button, Container, Form} from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Results from './Results';
import Back from '../components/Back';


const Categories = () => {
    const {productList, setProductList, categories, setCategories, category, setCategory, search, setSearch} = useContext(Context);

    /*Hook para cambiar la url según elemento seleccionado */
    const navigate = useNavigate();

       /*Función goToCategory*/ 
       const goToCategory = (category) => {
        if(category){
           /*Si es que hay algo en "category", ejecuta el useNavigate y agrega al final de la url el category */
           navigate(`/categorias/${category}`);
           setCategory('');
         }
         else console.log("selecciona una categoria")
       }
   
       useEffect(()=>{
         /*Callback */
         goToCategory(category);
       }, []);
   

   

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
        {/* {search ? <Back /> : null} */}
          {search ? <h2 className="my-5">Resultados de la búsqueda</h2> : <h2 className="my-5">Categorías</h2>}
            
            <div className="row justify-content-between align-items-center">

              {search ? 
                <Results results={search}/>
              :
              categories.map((c)=>(
                <Card className="category-card mx-3 my-2 pe-3" key={c.id}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage className="category-card__img" src={c.img} fluid alt='...' />
                    <a onClick={() => goToCategory(c.category)}>
                    <div className='mask category-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
                    </a>
                    </MDBRipple>
                
                    <Card.Body className="category-card__body">
                    <Card.Title className="category-card__title">{c.category}</Card.Title>
                    <Card.Text>
                        {c.desc}
                    </Card.Text>
                    <Button variant="outline-dark" onClick={() => goToCategory(c.category)}> Ir a <span className="category-card__btn">{c.category}</span></Button>
                    </Card.Body>
                </Card>
                ))
                }

             
            </div>
        </Container>



    </div>
  )
}

export default Categories