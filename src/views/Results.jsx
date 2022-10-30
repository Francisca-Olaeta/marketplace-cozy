import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import DropDown from '../components/DropDown';
import Back from '../components/Back';


const Results = () => {
    const {productList} = useContext(Context);

    const navigate = useNavigate();

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Resultados</h2>
            
            <div className="row justify-content-between align-items-center">
                <CstmCard />
                <CstmCard />
                <CstmCard />
                <CstmCard />
            </div>
            
        </Container>



    </div>
  )
}

export default Results;