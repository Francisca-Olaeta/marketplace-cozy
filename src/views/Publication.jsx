import { React, useState, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';
import Context from '../Context';
import Modal from '../components/Modal';
import { useEffect } from 'react';




const Publication = () => {
  const navigate = useNavigate();
  const { agree, setAgree, isDisabled, setIsDisabled, publication, setPublication, type, category } = useContext(Context);

  const typeRef = useRef(null);
  const productNameRef = useRef(null);
  const brandRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const categoryRef = useRef(null);
  const imgRef = useRef(null);




let newType = typeRef.current;
let newProductName = productNameRef.current;
let newBrand = brandRef.current;
let newDesc = descRef.current;
let newPrice = priceRef.current;
let newCategory = categoryRef.current;
// let newCategoryL = categoryRefL.current;
// let newCategoryD = categoryRefD.current;
// let newCategoryE = categoryRefE.current;
let newImg = imgRef.current;
let i = 100;

console.log(newDesc)

  const canSubmit = () => {
    return agree ? setIsDisabled(true) : setIsDisabled(false);
  }



  // const onCheckboxClick = () => {
  //   if (newType.value !== "" && newProductName.value !== "" && newBrand.value !== "" && newDesc.value !== "" && newPrice.value !== "") {
  //     setIsDisabled(false);
  //     setAgree(true);
  //     return canSubmit();
  //   }
  //   else {
  //     alert("Debes llenar los campos")
  //   }
  //   }

  // const ifCategoryCheck = (e) => {
  //   // console.log(e.target.checked, e.target.name)
  //   if (e.target.checked = true){
  //     setPublication([...publication, {category: e.target.name}])
  //   }
  // }
    
    
    const sendForm = (e) => {
      e.preventDefault()
  
      if (newType !== "" && newProductName !== "" && newBrand !== "" && newDesc !== "" && newPrice !== "" && newImg !== ""){
        setPublication([...publication, {type: newType.value, productName: newProductName.value, id: i++, brand: newBrand.value, desc: newDesc.value, price: newPrice.value, img: newImg.value }]) 
      }
      else {
        alert("rellena los campos")
      }
     console.log(publication)
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
          

      <Form onSubmit={sendForm}>
          <Form.Select className="mb-3" aria-label="Default select example" ref={typeRef} required>
            <option >Seleccionar tipo de producto</option>
            <option id="alfombra">Alfombras</option>
            <option id="textil">Textil</option>
            <option id="deco">Decoración</option>
            <option id="muebles">Muebles</option>
            </Form.Select>

          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Nombre del producto" id="inputProductName" ref={productNameRef} required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Marca" id="inputBrand" ref={brandRef} required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Descripción" id="inputDesc" ref={descRef} required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Precio" id="inputPrice" ref={priceRef} required/>
          </Form.Group>
          
         
          <Form.Group className='my-4' required ref={categoryRef} >
          <p>¿A qué categoría pertenece el producto que quieres vender? </p>
              <Form.Check

               // ref={categoryRefL}
                inline
                label="Living"
                name="living"
                type= "checkbox"
                id="living"
                value="living"
                
              />
              <Form.Check
            //   ref={categoryRefD}
                inline
                label="Dormitorio"
                name="dormitorio"
                type="checkbox"
                value="dormitorio"
                id="dormitorio"
              />

              <Form.Check
           //    ref={categoryRefE}
                inline
                label="Entrada"
                name="entrada"
                type="checkbox"
                value="entrada"
                id="entrada"
              />  
         </Form.Group>
     
         <Form.Label htmlFor="basic-url">Sube una foto del producto</Form.Label>
            <Form.Control type="url" id="basic-url" aria-describedby="basic-addon3" placeholder='Ingresa url' ref={imgRef}/>
       

    
          <Form.Group className="mt-5 mb-2">
              <Form.Check  type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
          <Button disabled={false} variant="dark" type="submit" className='my-1'>
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