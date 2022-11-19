import { React, useContext } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, Button, Badge } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faList} from '@fortawesome/free-solid-svg-icons';
import cozy from '../assets/img/cozy.png';
import Context from '../Context';
import { useAuth0 } from '@auth0/auth0-react';


function MyNavbar() {

  /*Estados que provee el Context */
  const {totalProducts, search, handleChange} = useContext(Context);

/*Estados que provee el Auth0 */
  const {user, logout} = useAuth0();

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
              <NavLink end className={setActiveClass} to="/categorias">
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
                        <div className={`${setActiveClass} d-flex justify-content-center align-items-center mx-2`}>
                        <FontAwesomeIcon icon={faUser} className={`nav-item ms-3 p-0 ${setActiveClass}`}/>
                        <NavDropdown className={`my-dropdown-menu miperfil ${setActiveClass}`} to="/miperfil" title="Mi Perfil" id="collasible-nav-dropdown">
                        
                            <div className="new-dropdown cstm-navlink--perfil">
                              <Link className="cstm-navlink mx-3" to="/miperfil">Datos personales</Link>
                              <Link className="cstm-navlink mx-3" to="/miperfil/favoritos">Mis favoritos</Link>
                              <Link className="cstm-navlink mx-3" to="/miperfil/publicacion">Quiero vender</Link>
                              <Link className="cstm-navlink mx-3" to="/miperfil">Mis publicaciones</Link>
                              <Button variant="link" className="cstm-btn" onClick={()=>logout({returnTo: window.location.origin})}>Cerrar sesión</Button>
                            </div>

                        </NavDropdown>

                </div>


                        <NavLink className={`cstm-navlink mx-2 ${setActiveClass}`} to="/carrito">
                        <FontAwesomeIcon icon={faShoppingCart} className="me-1"/>
                          Carrito de compras

                          {/* Si el total de productos es distinto a 0, muestra una badge con el número de productos */}

                          {totalProducts > 0 ? <Badge pill> {totalProducts} </Badge> : null}

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