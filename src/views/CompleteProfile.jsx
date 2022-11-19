import { React, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';


const CompleteProfile = () => {

  const { userInfo, setUserInfo, isRegistered, setIsRegistered } = useContext;
  const inputRef = useRef(null);


  /*Función para completer el perfil de usuario ----------------------------------------------------------------------------------------*/
const getRegistered = () => {
  let i = 2;
  let newName = document.getElementById("inputName").value;
  let newLastname = document.getElementById("inputLastname").value;
  let newUsername = document.getElementById("inputUsername").value;
  let newEmail = document.getElementById("inputEmail").value;
  let newPhone = document.getElementById("inputPhone").value;
  let newRut = document.getElementById("inputRut").value;
  let newPassword = document.getElementById("inputPassword").value;
  let newPasswordRep = document.getElementById("inputPasswordRep").value;
  let checkterms = document.getElementById("checkterms").value;

if (newName !== "" || newLastname !== "" || newUsername !== "" || newEmail !== "" || newPhone !== "" || newRut !== "" || newPassword !== "" || newPasswordRep !== ""){
  if(newPassword ===  newPasswordRep) {
    let isFound = userInfo.find((e) => e.email === newEmail);
    if (!isFound){
      setUserInfo([...userInfo, {id: i++, name: newName, lastname: newLastname, username: newUsername, email: newEmail, phone: newPhone, rut: newRut}]);
      console.log(userInfo)
    }
else{
  alert("debes completar tu registro")
  console.log(userInfo);
  }
  }
}
};


  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-xl-4">
          <h2>Crea tu cuenta</h2>
          <Form >
          <Form.Group >
              
              <Form.Control className="mb-3" type="phone" placeholder="Teléfono" id="phone" name="inputPhone" required/>
              <Form.Control className="mb-3" type="text" placeholder="Rut" id="rut" name="inputRut" required/>
              <Form.Control className="mb-3" type="password" placeholder="Contraseña" id="inputPassword" name="password" required/>
              <Form.Control className="mb-3" type="password" placeholder="Repite contraseña" id="inputPasswordRep" name="passwordrep"/>
          </Form.Group>
      
          <Form.Group className="mb-3" id="checkterms" name="checkterms" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
         
          <Button onClick={getRegistered} variant="dark" type="submit" className='my-1'>
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

export default CompleteProfile;