import { React, useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faList} from '@fortawesome/free-solid-svg-icons';
import cozy from '../assets/img/cozy.png';
import Context from '../Context';

function MyNavbar() {

  /*Estados que provee el Context */
  const {productList, setProductList, setSearch, search, handleChange} = useContext(Context);

  /*Clases activas e inactivas */
  const setActiveClass = ({isActive}) => (isActive ? "active" : "inactive");





  return (
    <div>

   {/* /*----------------------Contenedor que contiene a ambas navbars----------------------------------- */  }
<Container fluid className='navbar-main-container'>

  {/* --------------------------------Navbar principal------------------------------------------------ */}
          <Navbar variant="primary" bg="light" expand="lg" className='justify-content-between align-items-center no-shadow'>
            
            <Container fluid>
              <Navbar.Brand>
              <NavLink end className={setActiveClass} to="/">
                <img 
                height="60" 
                src={cozy}
                className="d-flex align-top" 
                />
              </NavLink>
              </Navbar.Brand>
        
                <div className={`toggle-cstm-container ${setActiveClass}`}>
                    <Navbar.Toggle className={`toggle-cstm ${setActiveClass}`} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className={`toggle-cstm__collapse ${setActiveClass}`} id="basic-navbar-nav">
                      
                      <Nav className={`${setActiveClass} toggle-cstm__collapse__nav me-auto`}>
                        <NavLink className={`cstm-navlink toggle-cstm__collapse__nav__navlink mx-3 ${setActiveClass}`} to="/categorias">
                        <FontAwesomeIcon icon={faList} className={`{${setActiveClass} me-1`}/>
                          Categorías
                        </NavLink>
                        <div className={`${setActiveClass} d-flex justify-content-center align-items-center`}>
                        <FontAwesomeIcon icon={faUser} className={`nav-item ms-3 p-0 ${setActiveClass}`}/>
                        <NavDropdown className={`${setActiveClass}`} to="/miperfil" title="Mi Perfil" id="collasible-nav-dropdown">
                        
                            <NavDropdown.Item>
                              <Link className="cstm-navlink mx-3" to="/miperfil">Datos personales</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                              <Link className="cstm-navlink mx-3" to="/miperfil/favoritos">Mis favoritos</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                              <Link className="cstm-navlink mx-3" to="/miperfil/publicacion">Hacer una publicación</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                              <Link className="cstm-navlink mx-3" to="/miperfil">Mis publicaciones</Link>
                            </NavDropdown.Item>

                        </NavDropdown>

                </div>


                        <NavLink className={`cstm-navlink mx-3 ${setActiveClass}`} to="/carrito">
                        <FontAwesomeIcon icon={faShoppingCart} className="me-1"/>
                          Carrito de compras
                        </NavLink>

                      </Nav>
                    </Navbar.Collapse>
                </div>
          
            </Container>
          </Navbar>

          <hr />

    {/* /*------------------------------------Barra de búsqueda--------------------------------------------------- */ }
    <Container className='search-nav-main'>
          <Navbar expand="lg" className="no-shadow search-nav" bg="light">
            <Container fluid className='search-nav__container'>
                    <Form className="search-nav__container__form">
                      <Form.Control
                      onChange={handleChange}
                      value={search}
                        type="search"
                        placeholder="¿Qué estás buscando?"
                        className=" search-nav__container__form__control"
                        aria-label="Search"
                      />
                    </Form>
            </Container>
          </Navbar>
    </Container>

</Container>
    </div>
  );
}

export default MyNavbar;