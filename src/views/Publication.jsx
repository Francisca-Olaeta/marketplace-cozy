import { React, useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Back from '../components/Back';
import Context from '../Context';
import { nanoid } from 'nanoid'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';



const Publication = () => {
  const navigate = useNavigate();
  const { category, publication, setPublication, handleCheck } = useContext(Context);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [disable, setDisable] = useState(true);
  const [agree, setAgree] = useState(false);

  
 

  /*Referencias */
  const productNameRef = useRef(null);
  const brandRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const typeRef = useRef(null);
  const imgRef = useRef(null);
  const agreeCheckRef = useRef(null);
  const btnRef = useRef(null);


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
    console.log(agreeCheckRef.current?.value || console.log("uy"));
    console.log(btnRef.current?.value || console.log("ey"));
    
  }, [publication]);
  
  
  /*Función global que envía publicación----------------------------------------------------------------------------------------- */
  const sendForm = (e) => {
    e.preventDefault()
    
    let productName = productNameRef.current;
    let brand = brandRef.current;
    let desc = descRef.current;
    let price = priceRef.current;
    let type = typeRef.current;
    let img = imgRef.current;
    
    let agreeCheck = agreeCheckRef.current;
    let btn = btnRef.current;
    console.log(type.value )

  
//Condición de que todos los campos estén llenos
    if (productName.value !== '' && brand.value !== '' && desc.value !== '' && price.value !== '' && type.value !== 'Seleccionar tipo de producto' && img.value !== '' && category.length !== 0 && agreeCheck.checked === true){
      
      // Función que setea la publicación
      setPublication([
        ...publication, 
        { productName: productName.value,
          brand: brand.value,
          desc: desc.value,
          price: price.value,
          img: img.value,
          type: type.value,
          category: category,
          id: nanoid()}
        ]);

        // Función que despliega el modal
        toggleShow();
    }

    else{
      alert("Debes rellenar todos los campos");
    }
}

// Función que permite la activación del botón para publicar
const canSubmit = () => {
return agree ? setDisable(true):
setDisable(false)
}

const onCheckboxClick = () => {
  setAgree(!agree);
  return canSubmit();
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
          ref={typeRef}
          className="mb-3" 
          aria-label="Default select example" 
          name="type"
          required>
            <option defaultValue=''>Seleccionar tipo de producto</option>
            <option id="alfombra">Alfombras</option>
            <option id="textil">Textil</option>
            <option id="deco">Decoración</option>
            <option id="muebles">Muebles</option>
            </Form.Select>

          <Form.Group className="mb-3" defaultValue=''>
              <Form.Control 
              ref={productNameRef}
              type="text" 
              placeholder="Nombre del producto" 
              id="inputProductName" 
              name="productName"
              required/>
          </Form.Group>

          <Form.Group className="mb-3" defaultValue=''>
              <Form.Control 
              ref={brandRef}
              type="text" 
              placeholder="Marca" 
              id="inputBrand" 
              name="brand"
              required/>
          </Form.Group>

          <Form.Group className="mb-3" defaultValue=''>
              <Form.Control 
              ref={descRef}
              type="text" 
              placeholder="Descripción" 
              id="inputDesc" 
              name="desc"
              required/>
          </Form.Group>

          <Form.Group className="mb-3" defaultValue=''>
              <Form.Control 
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
                onChange={handleCheck}
                inline
                label="Living"
                name="living"
                type= "checkbox"
                id="living"
                value="living"
                
              />
              <Form.Check
                onChange={handleCheck}
                inline
                label="Dormitorio"
                name="dormitorio"
                type="checkbox"
                value="dormitorio"
                id="dormitorio"
              />

              <Form.Check
                onChange={handleCheck}
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
            defaultValue=''
            ref={imgRef}
            type="url" 
            id="basic-url" 
            aria-describedby="basic-addon3" 
            placeholder='Ingresa url' 
            name="img"
           />
       

          <Form.Group className="mt-5 mb-2">
              <Form.Check
              onChange={onCheckboxClick}
              value="agree"
              ref={agreeCheckRef} 
              type="checkbox" 
              label="Acepto los términos y condiciones" 
              required/>
          </Form.Group>


    

        <div className="login_container">

      
          <Button 
          ref={btnRef}
          disabled={disable}
          onClick={sendForm} 
          variant="dark" 
          type="submit" 
          className='my-3' 
          > 
              Publicar
          </Button>
       

        </div>
   
    </Form>

        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>¡Tu publicación fue realizada con éxito!</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>Recuerda ponerte en contacto con tu comprador para concretar la venta.</MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color='outline-dark' onClick={toggleShow}>
                    Cerrar
                  </MDBBtn>
                  <MDBBtn color='dark' onClick={()=>navigate(`/miperfil`)}>Ver publicación</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </>


        </div>
        </Container>
    </div>
    </>
  )
}

export default Publication;