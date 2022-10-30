import { React, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function PublicNavbar() {

    /*Clases activas e inactivas */
  const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");

  return (
    <Navbar>
      <Container>
        <NavLink end className={setActiveClass} to="/">COZY</NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavLink className={`mx-2 ${setActiveClass}`} to="/login">Inicia sesión</NavLink>
        <NavLink className={`mx-2 ${setActiveClass}`} to="/registro">Crea tu cuenta</NavLink>
        <NavLink className={`mx-2 ${setActiveClass}`} to="/categorias">Ir a vista privada</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PublicNavbar;