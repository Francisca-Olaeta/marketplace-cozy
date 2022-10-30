import { React, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Carrusel from '../components/Carrusel';
import Context from '../Context';
import CarruselSlick from '../components/CarruselSlick';




const Home = () => {
  const navigate = useNavigate();
 
  const {productList} = useContext(Context);
  return (
    <div>
     <Container className="py-5">
      <h1>Te damos la bienvenida a Cozy</h1>
      <Carrusel />
      

      {/* /*Sección login */}
      <Container className='login'>
          <Button onClick={ () => navigate(`/login`)} variant='dark' className='my-1'>Ingresa</Button>
          <Button onClick={ () => navigate(`/registro`)}variant='outline-dark' className='my-1'>Crear cuenta</Button>
      </Container>
     </Container>


    </div>
  );
}

export default Home;