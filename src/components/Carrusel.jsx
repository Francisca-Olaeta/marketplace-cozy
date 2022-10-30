import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function Carrusel() {
  return (
    <>
    <div>
      <Container >
        <Carousel pauseonhover={'true'} className='cstm_carrusel'>
          <Carousel.Item className='cstm_carrusel__item' interval={10000}>
            <img
              src="https://redigital.cl/wp-content/uploads/2022/10/carrusel-1.jpg"
              alt="First slide"
            />
          <Carousel.Caption className='h-100 d-flex justify-content-center align-items-center'>
              <h3>Crea un espacio de relajo en tu hogar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item className='cstm_carrusel__item' interval={10000}>
            <img
              src="https://redigital.cl/wp-content/uploads/2022/10/carrusel-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='h-100 d-flex justify-content-center align-items-center'>
              <h3>Revisa los nuevos productos</h3>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item className='cstm_carrusel__item' interval={10000}>
            <img
              src="https://redigital.cl/wp-content/uploads/2022/10/carrusel-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='h-100 d-flex justify-content-center align-items-center'>
              <h3>Descubre lo nuevo en deco</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    </div>
    </>
    
   
  );
}

export default Carrusel;