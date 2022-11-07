import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function DetailsCard({selectedProduct}) {

  const { addToFav } = useContext(Context);
  const navigate = useNavigate();

  return (
    <MDBCard className="det-card mx-3 my-2 pe-3" key={selectedProduct.id}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay hover-zoom'>
        <MDBCardImage className="det-card__img" src={selectedProduct.img} fluid alt={selectedProduct.name}/>
        <a>
          <div className='mask det-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className="det-card__title">{selectedProduct.name}</MDBCardTitle>
        <MDBCardText className="det-card__desc">
          {selectedProduct.desc}
        </MDBCardText>
        <MDBCardText className="det-card__price">
          ${selectedProduct.price.toLocaleString("es-CL")}
        </MDBCardText>
        <div className='d-flex justify-content-between align-items-center'>
        <Button className="det-card__btn" variant="outline-dark">Añadir al carro</Button>
        <Button onClick={()=>navigate(`/categorias`)} className= "det-card__btn" variant="outline-dark">Volver</Button>
        <FontAwesomeIcon onCLick={()=>addToFav(selectedProduct.id)} icon={faHeart} className={selectedProduct.liked ? "me-1 icon liked" : "me-1 icon not-liked"}/>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}