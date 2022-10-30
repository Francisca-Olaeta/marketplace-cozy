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

export default function DetailsCard() {
  return (
    <MDBCard className="det-card mx-3 my-2 pe-3">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay hover-zoom'>
        <MDBCardImage className="det-card__img" src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask det-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className="det-card__title">Card title</MDBCardTitle>
        <MDBCardText className="det-card__desc">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className='d-flex justify-content-between align-items-center'>
        <Button className="det-card__btn" variant="outline-dark">Añadir al carro</Button>
        <FontAwesomeIcon icon={faHeart} className="me-1 icon"/>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}