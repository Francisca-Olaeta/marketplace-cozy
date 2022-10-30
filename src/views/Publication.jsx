import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';




const Publication = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-lg-8 col-xl-4">
        <Back />
          <h2 className="my-5">Quiero vender</h2>
          <h4 className="my-3">Ingresa la información del producto</h4>
          <p>¿Qué tipo de producto que quieres vender?</p>
          

          <Form >
          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Seleccionar tipo de producto</option>
            <option value="1">Alfombras</option>
            <option value="2">Textil</option>
            <option value="3">Decoración</option>
            <option value="3">Muebles</option>
            </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Nombre del producto" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Marca" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Descripción" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="number" placeholder="Precio" />
          </Form.Group>
          
          <Form className='mb-3'>
          <p>¿A qué categoría pertenece el producto que quieres vender?</p>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} >
          <Form.Check
            inline
            label="Living"
            name="group1"
            type={type}
            id={`inline-${type}-Living`}
          />
          <Form.Check
            inline
            label="Dormitorio"
            name="group1"
            type={type}
            id={`inline-${type}-Dormitorio`}
          />
          <Form.Check
            inline
            label="Entrada"
            type={type}
            id={`inline-${type}-Entrada`}
          />
        </div>
      ))}
    </Form>

    <Form.Group controlId="formFile" className="my-4">
        <Form.Label>Sube una foto del producto</Form.Label>
        <Form.Control type="file"/>
        
      </Form.Group>

          

          <Form.Group className="mt-5 mb-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
          <Button variant="dark" type="submit" className='my-1'>
              Publicar
          </Button>
         
        </div>
          </Form>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Publication;