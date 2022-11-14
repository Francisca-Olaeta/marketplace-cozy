import {React, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Container, Button, Table, Nav } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from '../components/Header';
import PublicationCard from '../components/PublicationCard';
import Back from '../components/Back';
import Context from '../Context';

const MyCart = () => {
  const { cart, increment, decrement, total, remove, getPartialTotal } = useContext(Context);
  console.log(cart)

  return (

    <div>
        <Header />
        <Container className="cat-container my-5">
          <Back />

          <h2 className="my-5">Mi carrito de compras</h2>
          {cart.length < 1 ? <p className='empty-cart-msg'>Tu carrito está vacío</p> :
        
          cart.map((p, i) =>(
            <div className='mb-3 row' key={i}>
               <Table borderless className='cart-table col-8'>
                  <tbody className='cart-table__body col-8'>
                    <tr className='cart-table__row'>
                      <td className='cart-table__cell--img'> <img className='cart-table__img' src={p.img} alt={p.name}/></td>
                      <td className='cart-table__cell--name'>{p.name}</td>
                      <td className='cart-table__cell--chev-left'>
                        <MDBBtn onClick={()=>decrement(i)} className='text-center p-0' floating color="light" tag='a'>
                        <MDBIcon fas icon="chevron-left" />
                        </MDBBtn></td>
                      <td className='cart-table__cell--qty'>{p.qty}</td>
                      <td className='cart-table__cell--chev-right'>
                        <MDBBtn onClick={()=>increment(i)} className='text-center p-0' floating color="light" tag='a'>
                        <MDBIcon fas icon="chevron-right" />
                        </MDBBtn></td>
                      <td className='cart-table__price'>${getPartialTotal(p).toLocaleString("es-CL")}</td>
                      <td className='cart-table__cell--icon'>
                        <MDBBtn onClick={()=>remove(p.id)} className='text-center p-0' floating color="dark" tag='a'>
                        <MDBIcon fas icon="times" />
                        </MDBBtn> </td>
                    </tr>
                  </tbody>
                </Table>



            </div>
            ))}

            {total !== 0 ? 
            <h4 className='d-flex align-items-center m-0 p-0'>Total: ${total.toLocaleString("es-CL")}</h4>
            : null }
                

            <hr />
     
             <div className='d-flex align-items-center mt-4 p-0 justify-content-start'>
              {total !== 0 ? 
                    <Button onClick={()=>alert("Tu compra ha sido exitosa")} variant="dark">
                        Hacer pedido
                    </Button> 
              : null }
            </div>  
                
                 
             
        </Container>
    </div>
  )
}

export default MyCart;