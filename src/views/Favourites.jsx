import {React, useContext} from 'react';
import {Container, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeartBroken} from '@fortawesome/free-solid-svg-icons';



const Favourites = () => {
  const {productList} = useContext(Context)
  const navigate = useNavigate();
  const favs = productList.filter((e)=>e.liked);
console.log(favs.length)


 

  return (
    <div>
      <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Mis favoritos</h2>
            

            <div className="row justify-content-start fav-container">
              {(favs.length > 0) ? favs.map((e, i)=>(
                <CstmCard  key={i} product={e} />

              ))
              :
              <>
              <p className='empty-cart-msg mt-5'>No tienes ningún favorito </p>
              <div className="lock">
                <FontAwesomeIcon icon={faHeartBroken} className="lock__icon"/>
              </div>
              <Button className='mb-5' variant='outline-dark' onClick={()=>navigate(`/categorias`)}>Ir a vitrinear</Button>

              </> 
               
              
              }
              
            </div>
            
        </Container>
    </div>
  )
}

export default Favourites