import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import DetailsCard from '../components/DetailsCardAnterior';

import Back from '../components/Back';

const Details = () => {
    const {productList} = useContext(Context);

const { id } = useParams();
const { category } = useParams();

    const navigate = useNavigate();

  const selectedProduct = productList.filter((e)=>e.id===id);

  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />
         

            <h2 className="my-5">Detalles</h2>
       

            <div className="row justify-content-between align-items-center">
              {selectedProduct.length > 0 ? selectedProduct.map((e, i)=>(
                <DetailsCard selectedProduct={e} key={i} />

              )) : null
            }
            </div>
            
        </Container>



    </div>
  )
}

export default Details;