import {React, useContext} from 'react';
import {Container, Nav, Button} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Select from '../components/Select';
import Back from '../components/Back';



const Favourites = () => {
  const {productList, setProductList} = useContext(Context)
  const navigate = useNavigate();

  

  return (
    <div>
      <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Mis favoritos</h2>
            {/* <Select /> */}

            <div className="row justify-content-start fav-container">
              {productList.length === 0 ?
              <>
              <h4 className='my-5'>No tienes ningún favorito :(</h4>
              <Button className='mb-5' variant='outline-dark' onClick={()=>navigate(`/categorias`)}>Ir a vitrinear</Button>

              </> 
               :
              productList.filter((e)=>e.liked).map((e, i)=>(
                <CstmCard  key={i} product={e} />

              ))}
              
            </div>
            
        </Container>
    </div>
  )
}

export default Favourites