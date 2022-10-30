import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Container, Button, Table, Nav } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from '../components/Header';
import PublicationCard from '../components/PublicationCard';
import Back from '../components/Back';

const Cart = () => {
  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
          <Back />

          <h2 className="my-5">Mi carrito de compras</h2>
          <div className='cart mb-3 row'>
                <img className='cart__img col-md-12 col-lg-auto' src='https://redigital.cl/wp-content/uploads/2022/10/alfombra-1.jpg' alt=''/>
                <div className='cart__name col-sm-4 col-lg-auto'>Alfombra yute</div>
                <div width='50' className='cart__icons col-sm-4 col-lg-auto'>
                    <MDBBtn className='text-center mx-3 p-0' floating color="light" tag='a'>
                    <MDBIcon fas icon="chevron-left" />
                    </MDBBtn>       
                    1        
                    <MDBBtn className='text-center mx-3 p-0' floating color="light" tag='a'>
                    <MDBIcon fas icon="chevron-right" />
                    </MDBBtn>               
                </div>    
                <div className='cart__price col-sm-4 col-lg-auto'>$199.990</div>

                <div className='text-center cart__icons p-0 col-sm-4 col-lg-auto'>
                    <MDBBtn className='text-center p-0' floating color="dark" tag='a'>
                    <MDBIcon fas icon="times" />
                    </MDBBtn> 
                </div>

            </div>
            <hr />
     
            <h4 className='d-flex align-items-center m-0 p-0'>Total: $199.990</h4>
             <div className='d-flex align-items-center mt-4 p-0 justify-content-start'>
                    <Button variant="dark">
                        Hacer pedido
                    </Button>
            </div>  
                
                 
             
        </Container>
    </div>
  )
}

export default Cart