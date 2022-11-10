import {React, useContext} from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import Context from '../Context';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import NoCoincidence from '../components/NoCoincidence';

const Results = () => {
    const {productList, setProductList, handleChange, search, setSearch} = useContext(Context);

    const navigate = useNavigate();


  return (
    <div>
  
        <div className="row justify-content-start align-items-center">

        {productList.filter((results)=> {
          if (results.name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').includes(search.toLocaleLowerCase())
          || results.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          || results.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          || results.seller.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return results;
          }
        }).map((results)=>(
          <CstmCard key={results.id} product={results} />
          ))
        }
        <div>
          <MDBBtn floating outline rounded size='lg' color='dark' onClick={()=>setSearch('')}>
          <FontAwesomeIcon icon={faX}/>
          </MDBBtn>
          <MDBBtn outline color='link' onClick={()=>setSearch('')}>Limpiar</MDBBtn>
        
        </div>
            
        </div>



    </div>
  )
}

export default Results;