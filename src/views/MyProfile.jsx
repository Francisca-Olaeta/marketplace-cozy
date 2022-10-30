import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Container, Button, Table, Nav } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';
import Header from '../components/Header';
import PublicationCard from '../components/PublicationCard';
import Back from '../components/Back';



const MyProfile = () => {

  const navigate=useNavigate();

  return (
    <>
    <div>
        <Header />
        <Container className="cat-container my-5">
          <Back />

          <h2 className="mt-5 mb-3">Mi perfil</h2>

{/* /*------------------------Sección Datos Personales --------------------------------------------------------------------*/ }

          <div className='profile-container'>
            <div>
              <h3 className="my-3">Datos personales</h3>
              <Table borderless>
              <tbody>
                <tr>
                  <td className='userinfo-tag'>Nombre:</td>
                  <td className='userinfo'>Francisca Olaeta</td>
                </tr>
                <tr>
                  <td className='userinfo-tag'>Correo electrónico:</td>
                  <td className='userinfo'>francisca@gmail.com</td>
                </tr>
                <tr>
                  <td className='userinfo-tag'>Teléfono:</td>
                  <td className='userinfo'>5691234567</td>
                </tr>
                <tr>
                  <td className='userinfo-tag'>Rut:</td>
                  <td className='userinfo'>12345678-9</td>
                </tr>
                <tr>
                  <td className='userinfo-tag'>Dirección:</td>
                  <td className='userinfo'>Acá va la dirección</td>
                </tr>
              </tbody>
              </Table>
              <Button variant="outline-dark">Editar datos personales</Button>
             
            </div>
            <hr className='my-5'/>
{/* /*------------------------Sección Mis favoritos -----------------------------------------------------------------------*/ }
            <div className=''>
            <h3 className="my-3">Mis favoritos</h3>
            <MDBBtn onClick={() => navigate(`./favoritos`)} className='m-0 p-0 d-flex justify-content-center align-items-center' floating rounded color="primary" size='lg' tag='a'>
            <FontAwesomeIcon className='socialmedia-icon m-0 p-0' icon={faHeart}/>
            </MDBBtn>
            </div>
            <hr className='my-5'/>
{/* /*------------------------Sección Quieres Vender un Producto ----------------------------------------------------------*/ }
            <div className=''>
            <h3 className="my-3">¿Quieres vender un producto?</h3>
            <p>Publica y vende fácilmente. </p>
            <Button onClick={() => navigate(`./publicacion`)} variant="outline-dark">Quiero vender</Button>
            </div>
            <hr className='my-5'/>

{/* /*------------------------Sección Mis Publicaciones -------------------------------------------------------------------*/ }
            <div className="publications">
                  <h3 className="my-3">Mis publicaciones</h3>
                  <PublicationCard />
                  
            </div>
        </div>
        </Container>
    </div>
    </>

  )
}

export default MyProfile;