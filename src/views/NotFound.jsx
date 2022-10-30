import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';

import Context from '../Context';
import Header from '../components/Header';

import Back from '../components/Back';


const NotFound = () => {
    // const {productList} = useContext(Context);

    // const navigate = useNavigate();

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">No hay resultados para tu búsqueda</h2>
            
            <div className="row justify-content-between align-items-center">
              
            </div>
            
        </Container>



    </div>
  )
}

export default NotFound;