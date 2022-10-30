import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Back = () => {
  return (
    <div>
         <Nav>
                <Nav.Item>
                    <NavLink className="me-2" to="/categorias"><FontAwesomeIcon icon={faChevronLeft} className="me-1"/>Volver</NavLink>
                </Nav.Item>
        </Nav>
    </div>
  )
}

export default Back;