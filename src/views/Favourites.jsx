import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Select from '../components/Select';
import Back from '../components/Back';



const Favourites = () => {
  const {productList, setProductList} = useContext(Context)

  

  return (
    <div>
      <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Mis favoritos</h2>
            <Select />

            <div className="row justify-content-between align-items-center">
              {productList.filter((e)=>e.liked).map((e, i)=>(
                <CstmCard  key={i} product={e} />

              ))}
              
            </div>
            
        </Container>
    </div>
  )
}

export default Favourites