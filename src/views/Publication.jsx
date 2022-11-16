import { React, useState, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';
import Context from '../Context';
import Modal from '../components/Modal';




const Publication = () => {
  const navigate = useNavigate();
  const { agree, setAgree, isDisabled, setIsDisabled, publication, setPublication } = useContext(Context);
  const inputRef = useRef(null);


const captureInput = (e) =>{
  setPublication(e.target.value);
  console.log(e.target.value)
}

  const canSubmit = () => {
    return agree ? setIsDisabled(true) : setIsDisabled(false);
  }

  const onCheckboxClick = () => {
      setAgree(!agree);
      return canSubmit();
    }
  
    const sendForm = (e) => {
      e.preventDefault()
      {publication === "" ? alert("Debes rellenar todos los campos") : <Modal /> }
    }

  return (
    <>
    <div>
        <Header />

        <Container fluid className="row login_main_container d-flex justify-content-center">
        <div className="col-lg-8 col-xl-4">
        <Back />
          <h2 className="my-5">Quiero vender</h2>
          <h4 className="mt-3 mb-5">Ingresa la información del producto</h4>
          <p>¿Qué tipo de producto que quieres vender?</p>
          

      <Form onSubmit={sendForm} onChange={captureInput}>
          <Form.Select className="mb-3" aria-label="Default select example">
            <option >Seleccionar tipo de producto</option>
            <option value="alfombra">Alfombras</option>
            <option value="textil">Textil</option>
            <option value="deco">Decoración</option>
            <option value="muebles">Muebles</option>
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
          
          <Form.Group className='mb-3'>
          <p>¿A qué categoría pertenece el producto que quieres vender?</p>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} >
          <Form.Check
            inline
            label="Living"
            value="living"
            name="group1"
            type={type}
            id={`inline-${type}-Living`}
          />
          <Form.Check
            inline
            label="Dormitorio"
            value={"dormitorio"}
            name="group1"
            type={type}
            id={`inline-${type}-Dormitorio`}
          />
          <Form.Check
            inline
            label="Entrada"
            value="entrada"
            type={type}
            id={`inline-${type}-Entrada`}
          />
        </div>
      ))}
    </Form.Group>

        <Form.Group controlId="formFile" className="my-4">
            <Form.Label>Sube una foto del producto</Form.Label>
            <Form.Control type="file"/>
        </Form.Group>

    </Form>
    
          <Form.Group className="mt-5 mb-2" controlId="formBasicCheckbox">
              <Form.Check onClick={onCheckboxClick} type="checkbox" value="agree" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
          <Button onClick={sendForm} disabled={isDisabled} variant="dark" type="submit" className='my-1'>
              Publicar
          </Button>
        </div>
   


        </div>
        </Container>
    </div>
    </>
  )
}

export default Publication;