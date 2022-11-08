import { React, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import cozy from '../assets/img/cozy.png';

function PublicNavbar() {

    /*Clases activas e inactivas */
  const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");

  return (
    <Navbar variant="primary" bg="light" expand="lg" className='justify-content-between align-items-center no-shadow'>
      <Container>
        <NavLink end className={setActiveClass} to="/">
                <img 
                height="60" 
                src={cozy}
                className="d-flex align-top" 
                />
        </NavLink>
        {/* <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavLink className={`mx-2 ${setActiveClass}`} to="/login">Inicia sesión</NavLink>
        <NavLink className={`mx-2 ${setActiveClass}`} to="/registro">Crea tu cuenta</NavLink>
        <NavLink className={`mx-2 ${setActiveClass}`} to="/categorias">Ir a vista privada</NavLink>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default PublicNavbar;