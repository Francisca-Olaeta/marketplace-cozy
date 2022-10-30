import { React, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faList} from '@fortawesome/free-solid-svg-icons';
import Context from '../Context';

function MyNavbar() {

  /*Estados que provee el Context */
  const {productList, setProductList} = useContext(Context);

  /*Clases activas e inactivas */
  const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");

  return (
    <Navbar bg="light" expand="lg" className='justify-content-between'>
      <Container>
        
        <NavLink end className={setActiveClass} to="/">COZY</NavLink>
     

        
        <Form>
            <Form.Control
              type="search"
              placeholder="¿Qué estás buscando?"
              className="me-2 search-bar"
              aria-label="Search"
            />
          </Form>
     

          <div>
              <Navbar.Toggle className="align-items-center" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="align-items-center" id="basic-navbar-nav">
                <Nav className="me-auto align-items-center">

                  <NavLink className={`mx-3 ${setActiveClass}`} to="/categorias">
                  <FontAwesomeIcon icon={faList} className="me-1"/>
                    Categorías
                  </NavLink>

                  <FontAwesomeIcon icon={faUser} className={`ms-3 p-0 ${setActiveClass}`}/>
                  <NavDropdown className={`me-3 ${setActiveClass}`} to="/miperfil" title="Mi Perfil" id="collasible-nav-dropdown">
                  
                      <NavDropdown.Item>
                        <Link className="mx-3" to="/miperfil">Datos personales</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link className="mx-3" to="/miperfil/favoritos">Mis favoritos</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link className="mx-3" to="/miperfil/publicacion">Hacer una publicación</Link>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <Link className="mx-3" to="/miperfil">Mis publicaciones</Link>
                      </NavDropdown.Item>

                </NavDropdown>


                  <NavLink className={`mx-3 ${setActiveClass}`} to="/carrito">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1"/>
                    Carrito de compras
                  </NavLink>

                </Nav>
              </Navbar.Collapse>

          </div>
     
     
      </Container>
    </Navbar>
  );
}

export default MyNavbar;