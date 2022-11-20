import { React, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Context from '../Context';

const PublicationCard = ({publicationInfo}) => {

  const { removePublication } = useContext(Context);
  return (
    <div>
       
           <Table borderless className='publication-table'>         
            <tbody>
              <tr className='publication-table__row'>
                <td className='publication-table__cell--img'> <img className='cart-table__img' src={publicationInfo.img} alt={publicationInfo.name}/></td>
                <td className='publication-table__cell--body'><span className='publication-text'>Nombre producto: </span>{publicationInfo.productName}</td>
                <td className='publication-table__cell--body'><span className='publication-text'>Marca: </span>{publicationInfo.brand}</td>
                <td className='publication-table__cell--body'><span className='publication-text'>Precio: </span>${publicationInfo.price.toLocaleString("es-CL")}</td>
                <td className='publication-table__cell--body'><span className='publication-text'>Categoría: </span>
                {publicationInfo.category.map((e, i) => (
                  <p key={i} className="caps m-0 p-0">{e}</p>

                ))}</td>
                <td className='publication-table__cell--body'><span className='publication-text'>ID producto: </span>{publicationInfo.id}</td>
                <td className='publication-table__cell--body'>
                        <MDBBtn onClick={()=>removePublication(publicationInfo)} className='text-center p-0' floating color="dark" tag='a'>
                        <MDBIcon fas icon="times" />
                        </MDBBtn> </td>
              </tr>
            </tbody>
          </Table>

                      {/* <img className='publications-container__img me-5 col-auto' src='https://redigital.cl/wp-content/uploads/2022/10/alfombra-1.jpg' alt=''/>
                      <div className='publications-container__name me-5 col-auto'>{publicationInfo.productName}</div>                  
                      <div className='publications-container__name me-5 col-auto'>{publicationInfo.brand}</div>                  
                      <div className='publications-container__price me-5 col-auto'>${publicationInfo.price.toLocaleString("es-CL")}</div>
                      <div className='publications-container__date me-5 col-auto'>Publicado el 29 de octubre 2022</div> */}
       
    </div>
  )
}

export default PublicationCard