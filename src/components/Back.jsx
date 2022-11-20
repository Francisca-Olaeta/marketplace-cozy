import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

const Back = () => {

  const { isAuthenticated } = useAuth0();
  return (
    <div>
         <Nav>
                <Nav.Item>
                    <NavLink className="back me-2" to={isAuthenticated ? "/categorias" : "/"}><FontAwesomeIcon icon={faChevronLeft} className="me-1"/>Volver</NavLink>
                </Nav.Item>
        </Nav>
    </div>
  )
}

export default Back;