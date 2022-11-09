import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';


const Register = () => {

  const { user, setUser } = useContext;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  console.log(rut);

  const getRegister = (e, i) => {
    e.preventDefault()
    { name === "" || lastName === "" || !mail.includes("@") || phone.length < 9 || password.length < 8 || rut.length < 8 ||  check === false ? alert("Debes llenar todos los campos")  : alert("Tu cuenta fue creada exitosamente")}
    //  && setUser[{name: name, mail: mail, rut: rut}];
    setName('');
    setLastName('');
    setMail('');
    setPassword('');
    setRut('');
    setPhone('');
    setCheck(false);
  } 


  const capturarInputName = (e) => {
    setName(e.target.value)
  };
  const capturarInputLastName = (e) => {
    setLastName(e.target.value)
  };
  const capturarInputMail = (e) => {
    setMail(e.target.value)
  };
  const capturarInputPassword = (e) => {
    setPassword(e.target.value)
  };
  const capturarInputPhone = (e) => {
    setPhone(e.target.value)
  };
  const capturarInputRut = (e) => {
    setRut(e.target.value)
  };



  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-xl-4">
          <h2>Crea tu cuenta</h2>
          <Form onSubmit={getRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail" onChange={capturarInputName}>
              <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={capturarInputLastName}>
              <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={capturarInputMail}>
              <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={capturarInputPhone}>
              <Form.Control type="phone" placeholder="Teléfono" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={capturarInputRut}>
              <Form.Control type="text" placeholder="Rut" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" onChange={capturarInputPassword}>
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