import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import { useAuth0 } from '@auth0/auth0-react';


const Register = () => {

  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-xl-4">
          <h2>Crea tu cuenta</h2>
          <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="phone" placeholder="Teléfono" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Rut" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
          <Button variant="dark" type="submit" className='my-1'>
              Crear cuenta
          </Button>
         <p>¿Ya tienes cuenta? <Button variant="link" onClick={ () => loginWithRedirect()}> Inicia sesión </Button></p>
        </div>
          </Form>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Register;