import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import Context from '../Context';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function DetailsCard() {
  const {productList} = useContext(Context);

  return (
    <div> 
    <Card className="det-card mx-3 my-2 pe-3">
    <Card.Img className="det-card__img" variant="top" src="https://redigital.cl/wp-content/uploads/2022/10/alfombra-1.jpg" />
      <Card.Body>
        <Card.Title className="det-card__title">Alfombra yute</Card.Title>
        <Card.Text className="det-card__desc">
          Alfombra de alto tráfico, ideal para living comedor, de 160 x 230 cm. Material: 100% yute.
        </Card.Text>
        <Card.Text className="det-card__desc">
          Vendido por Cozy
        </Card.Text>
        <Card.Text className="det-card__price">
          $199.990
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
        <Button className="det-card__btn" variant="outline-dark">Añadir al carro</Button>
        <FontAwesomeIcon icon={faHeart} className="me-1 icon"/>
        </div>
      </Card.Body>
    </Card> 
    </div>
    
  );
}

export default DetailsCard;