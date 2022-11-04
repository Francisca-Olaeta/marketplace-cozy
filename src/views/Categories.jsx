import {React, useContext} from 'react';
import {Card, Button, Container} from 'react-bootstrap';
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


const Categories = () => {
    const {productList, setProductList, categories, filterByCat} = useContext(Context);
    const navigate = useNavigate();


    // /*Función para filtrar por categoría */
    // let filterByCat = (e) => {
    //   // let filteredCategory
    //   //     if ((e.target.value) === "") {
    //   //         setProductList(productList);
    //   //     }
    //   //     else if ((e.target.value) === "living") {
    //   //         filteredCategory = [...productList].filter((e) => e.category.includes("living"));
    //   //         setProductList(filteredCategory);
    //   //     }
    //   //     else if ((e.target.value) === "dormitorio") {
    //   //         filteredCategory=[...productList].filter((e) => e.category.includes("dormitorio"));
    //   //         setProductList(filteredCategory);
    //   //     }
    //   //     else if ((e.target.value) === "entrada") {
    //   //         filteredCategory=[...productList].filter((e) => e.category.includes("entrada"));
    //   //         setProductList(filteredCategory);
    //   //     }else {
    //   //         setProductList(productList);
    //   //     }
          
    //       }

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <h2 className="my-5">Categorías</h2>
            <div className="row justify-content-between align-items-center">
                {categories.map((c)=>(
                <Card className="category-card mx-3 my-2 pe-3" key={c.id}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage className="category-card__img" src={c.img} fluid alt='...' />
                    <a onClick={() => navigate(`./${c.category}`)}>
                    <div className='mask category-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
                    </a>
                    </MDBRipple>
                 
                    <Card.Body className="category-card__body">
                    <Card.Title className="category-card__title">{c.category}</Card.Title>
                    <Card.Text>
                        {c.desc}
                    </Card.Text>
                    <Button variant="outline-dark" onClick={() => navigate(`./${c.category}`)}>Ir a <span className="category-card__btn">{c.category}</span></Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </Container>



    </div>
  )
}

export default Categories