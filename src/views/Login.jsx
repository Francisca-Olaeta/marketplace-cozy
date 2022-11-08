import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import {
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-xl-4">
          <h2>Inicia sesión</h2>
          <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuérdame" />
            <a>¿Olvidaste tu contraseña?</a>
           </Form.Group>


        <div className="login_container my-4">
          <Button onClick={ () => loginWithRedirect()} variant="dark" type="submit" className='mt-1 mb-3'>
              Iniciar sesión
          </Button>
          <Button onClick={ () => navigate(`/registro`)} variant="outline-dark" type="submit">
              Crear cuenta
          </Button>
        </div>

        <p>O regístrate con:</p>
        <div className="d-flex justify-content-center mx-auto">
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon' icon={faFacebook}/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon' icon={faGoogle}/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon' icon={faTwitter}/>
          </MDBBtn>
          
              
        </div>


          </Form>
        </div>
        </Container>


    </div>
    </>
  )
}

export default Login