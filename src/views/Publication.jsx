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

   /*No poner value acá !!!!!!! */
   const validarInputs = () => {
    if (productNameRef.current.value === null){
      console.log("productName está nulo")
    }
    else if (typeRef.current.value === null){
      console.log("typeRef está nulo")
    }
    else if (brandRef.current.value === null){
      console.log("brandRef está nulo")
    }
    else if (descRef.current.value === null){
      console.log("descRef está nulo")
    }
    else if (imgRef.current.value === null){
      console.log("imgRef está nulo")
    }
    else{
      console.log("vaaamoooooo")
    }
  }

  /*Poner current.value en useEffect */
  useEffect(()=> {
    validarInputs();
    
    console.log(newProductNameRef);
    console.log(newBrandRef);
    console.log(newDescRef);
    console.log(newPriceRef);
    console.log(newTypeRef);
    console.log(newImgRef);
    
    console.log(productNameRef.current?.value || console.log("ay"));
    console.log(typeRef.current?.value || console.log("ay"));
    console.log(brandRef.current?.value || console.log("ay"));
    console.log(descRef.current?.value || console.log("ay"));
    console.log(priceRef.current?.value || console.log("ay"));
    console.log(imgRef.current?.value || console.log("ay"));
    setPublication();
  }, []);
  
  const productNameRef = useRef(null);
  const brandRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const categoryRef = useRef(null);
  const typeRef = useRef(null);
  const imgRef = useRef(null);
  
 
  let newProductNameRef = productNameRef.current;
  let newBrandRef = brandRef.current;
  let newDescRef = descRef.current;
  let newPriceRef = priceRef.current;
  let newCategoryRef = categoryRef.current;
  let newTypeRef = typeRef.current;
  let newImgRef = imgRef.current;
  


  // const canSubmit = () => {
  //   return agree ? setIsDisabled(true) : setIsDisabled(false);
  // }



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
    

  //   
  //   }


  /*No poner value acá */
const sendForm = (e) => {
  e.preventDefault()
  const newValues = 
  [
    ...publication, {
      productName: newProductNameRef,
      brand: newBrandRef,
      desc: newDescRef,
      price: newPriceRef,
      img: newImgRef,
      type: newTypeRef,
      category: newCategoryRef,
      id: nanoid()
    }
  ] 

  
  // if (newProductNameRef === null && newBrandRef === null && newDescRef === null && newPriceRef === null && newImgRef === null && newTypeRef === null) {
  //  // alert("Recargar el DOM")
  // }
  // else if (newProductNameRef !== "" && newBrandRef !== "" && newDescRef !== "" && newPriceRef !== "" && newImgRef !== "" && newTypeRef !== "Seleccionar tipo de producto"){
    console.log(newValues)
    setPublication(newValues)
  // }
  // else{
  //   alert("Debes rellenar todos los campos")
  // }
  
  //console.log(productNameRef.current.value)
  
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
          
         
          <Form.Group className='my-4' required name="category" ref={categoryRef}>
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