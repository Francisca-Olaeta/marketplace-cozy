import {React, useContext} from 'react';
import {Button, Container, Nav} from 'react-bootstrap';
import {

  MDBIcon,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import Context from '../Context';
import Header from '../components/Header';
import Back from '../components/Back';
import { useAuth0 } from '@auth0/auth0-react';


const NotRegistered = () => {

  const { isAuthenticated, loginWithRedirect } = useAuth0();


  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Debes hacer inicio de sesión</h2>
            
            <div className="row justify-content-center align-items-center">

              <div className="lock">
                <FontAwesomeIcon icon={faLock} className="lock__icon"/>
              </div>
          
    
            
              <Button onClick={ () => loginWithRedirect()} width={40} variant='outline-dark' className='my-5'>Iniciar sesión </Button>
              
            </div>
            
        </Container>



    </div>
  )
}

export default NotRegistered;