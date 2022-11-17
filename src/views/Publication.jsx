import { React, useState, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';
import Context from '../Context';
import Modal from '../components/Modal';




const Publication = () => {
  const navigate = useNavigate();
  const { agree, setAgree, isDisabled, setIsDisabled, publication, setPublication, type, category } = useContext(Context);
  // const inputRef = useRef(null);


// const captureInput = (e) =>{
//   setPublication(e.target.value);
//   console.log(e.target.value)
// }

  const canSubmit = () => {
    return agree ? setIsDisabled(true) : setIsDisabled(false);
  }

  const onCheckboxClick = () => {
      setAgree(!agree);
      return canSubmit();
    }
    
    let newType = document.getElementById("inputType").value;
    let newProductName = document.getElementById("inputProductName").value;
    let newBrand = document.getElementById("inputBrand").value;
    let newDesc = document.getElementById("inputDesc").value;
    let newPrice = document.getElementById("inputPrice").value;
    let newCategory = document.getElementById("inputCategory").value;
    let newImg = document.getElementById("inputImg").value;
    let i = 100;
    
    const sendForm = (e) => {
      e.preventDefault()

      {publication !== "" ? setPublication([...publication, {type: newType, productName: newProductName, id: i++, brand: newBrand, desc: newDesc, price: newPrice, category: newCategory, img: newImg}]) : alert("Debes rellenar todos los campos") }
      console.log(publication);
    }

    console.log(publication);


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
          

      <Form >
          <Form.Select className="mb-3" aria-label="Default select example" id="inputType" required>
            <option >Seleccionar tipo de producto</option>
            <option id="alfombra">Alfombras</option>
            <option id="textil">Textil</option>
            <option id="deco">Decoración</option>
            <option id="muebles">Muebles</option>
            </Form.Select>
          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Nombre del producto" id="inputProductName" required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Marca" id="inputBrand" required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Descripción" id="inputDesc" required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Precio" id="inputPrice" required/>
          </Form.Group>
          
          <Form.Group className='mb-3'>
          <p>¿A qué categoría pertenece el producto que quieres vender?</p>
      {['checkbox'].map((category) => (
        <div key={`inline-${category}`} id="inputCategory">
          <Form.Check
            required
            inline
            label="Living"
            value="living"
            name="group1"
            type={category}
            id={category}
            // id={`inline-${category}-Living`}
          />
          <Form.Check
            inline
            label="Dormitorio"
            value="dormitorio"
            name="group1"
            type={category}
            id={category}
            // id={`inline-${category}-Dormitorio`}
          />
          <Form.Check
            inline
            label="Entrada"
            value="entrada"
            type={category}
            id={category}
            // id={`inline-${category}-Entrada`}
          />
        </div>
      ))}
    </Form.Group>

        <Form.Group className="my-4">
            <Form.Label>Sube una foto del producto</Form.Label>
            <Form.Control type="file" id="inputImg"/>
        </Form.Group>

    </Form>
    
          <Form.Group className="mt-5 mb-2">
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