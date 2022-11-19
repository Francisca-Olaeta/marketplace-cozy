import { React, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import CarruselHome from '../components/CarruselHome';
import Categories from './Categories';
import { useAuth0 } from '@auth0/auth0-react';




const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
 
  const {productList} = useContext(Context);
 
  return (
    <div>
     <Container className="py-5">
      <h1 className='pt-4 pb-2'>Te damos la bienvenida a Cozy</h1>
      <p className='logline'>Encontrarás muebles y artículos de decoración para crear esos espacios de tranquilidad y comodidad en tu hogar.</p>
      <CarruselHome />
      

      {/* /*Sección login */}
      <Container className='login'>
        {isAuthenticated ?
        navigate(`/categorias`)
        :
          <Button onClick={ () => loginWithRedirect()} variant="dark" type="submit" className='my-2'>Ingresa o Regístrate</Button>

        }
      </Container>
     </Container>


    </div>
  );
}

export default Home;