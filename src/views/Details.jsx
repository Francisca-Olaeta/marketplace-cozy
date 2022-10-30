import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import DetailsCard from '../components/DetailsCardAnterior';

import Back from '../components/Back';

const Details = () => {
    const {productList} = useContext(Context);

    const navigate = useNavigate();

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />
         

            <h2 className="my-5">Detalles</h2>
       

            <div className="row justify-content-between align-items-center">
                <DetailsCard />
            </div>
            
        </Container>



    </div>
  )
}

export default Details;