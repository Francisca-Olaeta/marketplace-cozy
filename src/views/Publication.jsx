import { React, useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';
import Context from '../Context';
import Modal from '../components/Modal';
import { nanoid } from 'nanoid'



const Publication = () => {
  const navigate = useNavigate();
  const { agree, setAgree, isDisabled, setIsDisabled, type, category, publication, setPublication } = useContext(Context);

  /*Referencias */
  const productNameRef = useRef(null);
  const brandRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const typeRef = useRef(null);
  const imgRef = useRef(null);


  /*Poner current.value en useEffect */
  useEffect(()=> {

    // productNameRef.current.focus();
    // brandRef.current;
    // descRef.current;
    // typeRef.current;
    // priceRef.current;
    // imgRef.current;

    console.log(productNameRef.current?.value || console.log("ay"));
    console.log(typeRef.current?.value || console.log("ay"));
    console.log(brandRef.current?.value || console.log("ay"));
    console.log(descRef.current?.value || console.log("ay"));
    console.log(priceRef.current?.value || console.log("ay"));
    console.log(imgRef.current?.value || console.log("ay"));
    
  }, [publication]);
  
  /*No poner value acá !!!!!!! */
  
  
  
  /*No poner value acá */
  const sendForm = (e) => {
    e.preventDefault()
    
    let productName = productNameRef.current;
    let brand = brandRef.current;
    let desc = descRef.current;
    let price = priceRef.current;
    let type = typeRef.current;
    let img = imgRef.current;
  

    setPublication([
      ...publication, 
      { productName: productName.value,
        brand: brand.value,
        desc: desc.value,
        price: price.value,
        img: img.value,
        type: type.value,
        id: nanoid()}
      ])

    console.log(productName.value)

  
}
console.log(publication)
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
          <Form.Select 
          //onChange={handleInputChange}
          ref={typeRef}
          className="mb-3" 
          aria-label="Default select example" 
          name="type"
          required>
            <option >Seleccionar tipo de producto</option>
            <option id="alfombra">Alfombras</option>
            <option id="textil">Textil</option>
            <option id="deco">Decoración</option>
            <option id="muebles">Muebles</option>
            </Form.Select>

          <Form.Group className="mb-3">
              <Form.Control 
           //   onChange={handleInputChange}
              ref={productNameRef}
              type="text" 
              placeholder="Nombre del producto" 
              id="inputProductName" 
              name="productName"
              required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control 
      //        onChange={handleInputChange}
              ref={brandRef}
              type="text" 
              placeholder="Marca" 
              id="inputBrand" 
              name="brand"
              required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control 
         //     onChange={handleInputChange}
              ref={descRef}
              type="text" 
              placeholder="Descripción" 
              id="inputDesc" 
              name="desc"
              required/>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Control 
          //    onChange={handleInputChange}
             ref={priceRef}
              type="number" 
              placeholder="Precio" 
              id="inputPrice" 
              name="price"
              required/>
          </Form.Group>
          
         
          <Form.Group className='my-4' required name="category">
          <p>¿A qué categoría pertenece el producto que quieres vender? </p>
              <Form.Check
            //    onChange={handleInputChange}
                inline
                label="Living"
                name="living"
                type= "checkbox"
                id="living"
                value="living"
                
              />
              <Form.Check
        //        onChange={handleInputChange}
                inline
                label="Dormitorio"
                name="dormitorio"
                type="checkbox"
                value="dormitorio"
                id="dormitorio"
              />

              <Form.Check
         //       onChange={handleInputChange}
                inline
                label="Entrada"
                name="entrada"
                type="checkbox"
                value="entrada"
                id="entrada"
              />  
         </Form.Group>
     
         <Form.Label htmlFor="basic-url">Sube una foto del producto</Form.Label>
            <Form.Control 
      //      onChange={handleInputChange}
            ref={imgRef}
            type="url" 
            id="basic-url" 
            aria-describedby="basic-addon3" 
            placeholder='Ingresa url' 
            name="img"
           />
       

    
          <Form.Group className="mt-5 mb-2">
              <Form.Check  type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>

        <div className="login_container">
          <Button onClick={sendForm} variant="dark" type="submit" className='my-1'>
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