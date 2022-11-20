import { React, useContext } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

const DetailsCard = ({selectedProduct}) => {

  const { addToFav, addToCart } = useContext(Context);
  const navigate = useNavigate();

 
    
    

  return (
    <MDBCard className="det-card mx-3 my-2 pe-3" key={selectedProduct.id}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay hover-zoom'>
        <MDBCardImage className="det-card__img" src={selectedProduct.img} fluid alt={selectedProduct.name}/>
        <a>
          <div className='mask det-card__img bg-image hover-overlay hover-zoom' style={{ backgroundColor: '#e6b9ad8f' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className="det-card__title">{selectedProduct.name}</MDBCardTitle>
        <MDBCardText className="det-card__desc">
          {selectedProduct.desc}
        </MDBCardText>

        <MDBCardText className='det-card__seller'>Vendido por {selectedProduct.seller}</MDBCardText>

        <MDBCardText className="det-card__price">
          ${selectedProduct.price.toLocaleString("es-CL")}
        </MDBCardText>
        <div className='det-card__btns-container'>
 
        <MDBBtn onClick={()=>addToCart(selectedProduct)} className="det-card__btn" color="outline-dark">Añadir al carro</MDBBtn>
      
        
        <MDBBtn onClick={()=>navigate(`/categorias`)} className= "det-card__btn" color="outline-dark">Volver</MDBBtn>
       
        <FontAwesomeIcon onClick={()=>addToFav(selectedProduct.id)} icon={faHeart} 
           className= { selectedProduct.liked ? "btn me-1 icon item-card__align-icons__mb liked" : "btn-rounded me-1 icon item-card__align-icons__mb not-liked"}/>
        
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default DetailsCard;