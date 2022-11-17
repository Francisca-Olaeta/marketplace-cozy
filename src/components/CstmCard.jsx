import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';

function CstmCard({product}) {
  const { addToFav, addToCart, cart, total, isInCart } = useContext(Context);
  const navigate = useNavigate();
  const { category } = useParams();

  /*Función para agregar a la url el nombre o id del producto con useNavigate. En este caso, {product} retorna todo, por lo que deno asufnar un "id" o "name" dentro de la función onClick con (product.name) o (product.id)*/
  const getDetails = (product) => {
    navigate(`/categorias/${category}/${product}`)
  };

  
console.log(isInCart)
   

  return (
    <MDBCard className="item-card mx-4 my-5 pe-3">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className="item-card__img" src={product.img} fluid alt={product.name} />
        <a onClick={() => getDetails(product.id)}>
          <div className='mask item-card__img' style={{ backgroundColor: '#e6b9ad8f' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='item-card__body'>
        <MDBCardTitle className="item-card__title">{product.name}</MDBCardTitle>
        <MDBCardText className="item-card__price">${product.price.toLocaleString("es-CL")}</MDBCardText>
        <div className='item-card__align-icons'>
         <Button onClick={() => getDetails(product.id)} className="item-card__btn" variant="outline-dark">Ver más
         </Button>

{/* /*Contador de productos en badge 
className="btn-rounded icon item-card__align-icons__mb not-liked d-flex align-items-center"
*/ }
         <div >
          <FontAwesomeIcon onClick={ () => addToCart(product)} icon={faCartShopping} 
           className= { isInCart ? "btn me-1 icon item-card__align-icons__mb liked" : "btn-rounded me-1 icon item-card__align-icons__mb not-liked"}
          />
          {/* {product.qty !== 0 ? 
         <h5><Badge className="notification mx-1" pill variant="success">{product.id}</Badge></h5>
         : null
        } */}
         </div>

        

           <FontAwesomeIcon onClick={()=>addToFav(product.id)} icon={faHeart} 
           className= { product.liked ? "btn me-1 icon item-card__align-icons__mb liked" : "btn-rounded me-1 icon item-card__align-icons__mb not-liked"}/>
       </div>
      </MDBCardBody>
    </MDBCard>

  );
}

export default CstmCard;