import {React, useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropDown() {

 
   

  return (

    <DropdownButton className="mb-3 dropdown padding-0" variant="light" id="dropdown-basic-button" title="Buscar por tipo">
        <Dropdown.Item className='dropdown__item' href="#/action-1">Alfombras</Dropdown.Item>
        <Dropdown.Item className='dropdown__item' href="#/action-2">Textil</Dropdown.Item>
        <Dropdown.Item className='dropdown__item' href="#/action-3">Decoración</Dropdown.Item>
        <Dropdown.Item className='dropdown__item' href="#/action-4">Muebles</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;