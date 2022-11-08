import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import NotFound from './NotFound';


const Results = () => {
    const {productList, setProductList, handleChange, setSearch} = useContext(Context);

    const navigate = useNavigate();
    const { search } = useParams();


  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Resultados</h2>
            
            <div className="row justify-content-between align-items-center">
              {productList.filter((e)=>{
                if(search===''){
                  console.log("sin filtro");
                  return e;
                }
                else if ((e.name).toLocaleLowerCase().includes(search.toLocaleLowerCase()) || (e.category).toLocaleLowerCase().includes(search.toLocaleLowerCase()) || (e.type).toLocaleLowerCase().includes(search.toLocaleLowerCase()) || (e.id).toLocaleLowerCase().includes(search.toLocaleLowerCase()) || (e.seller).toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                  console.log('con buscador');
                  return e;
                }
                else{
                  console.log("cueck")
                }
              }).map((e)=>(
                <CstmCard key={e.id} product={e} />
              ))}
               
            </div>
            
        </Container>



    </div>
  )
}

export default Results;