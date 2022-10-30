import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

function CstmCard() {
  const {productList} = useContext(Context);
  const navigate = useNavigate();

  return (
    <MDBCard className="item-card mx-3 my-2 pe-3">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className="item-card__img" src='https://redigital.cl/wp-content/uploads/2022/10/alfombra-1.jpg' fluid alt='...' />
        <a onClick={() => navigate(`./detalle`)}>
          <div className='mask item-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='item-card__body'>
        <MDBCardTitle className="item-card__title">Alfombra yute</MDBCardTitle>
        <MDBCardText className="item-card__price">$199.990</MDBCardText>
        <div className='item-card__align-icons'>
         <Button onClick={() => navigate(`./detalle`)} className="item-card__btn" variant="outline-dark">Ver más</Button>
          <FontAwesomeIcon icon={faCartShopping} className="icon item-card__align-icons__mb"/>
           <FontAwesomeIcon icon={faHeart} className="me-1 icon item-card__align-icons__mb"/>
       </div>
      </MDBCardBody>
    </MDBCard>

  );
}

export default CstmCard;