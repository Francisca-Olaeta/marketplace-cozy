import {React, useContext} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Context from '../Context';
import Header from '../components/Header';
import CstmCard from '../components/CstmCard';
import Back from '../components/Back';
import Select from '../components/Select';

const Living = () => {
    const {productList, setProductList} = useContext(Context);

    const navigate = useNavigate();

    if (productList === undefined){
      return (
        <div>
          <h3>Está cargando</h3>
        </div>
      )
    }


  


  return (
    <div>
        <Header />
        <Container className="cat-container my-5">
            <Back />

            <h2 className="mt-5 mb-3">Living</h2>
            <Select />

            <div className="row justify-content-between align-items-center">
            

              {/* {productList.filter((p)=>{
                if((p.category) === "living") {
                  return p;
                }else{
                 return;
                }
                }).map((e) => (
                  <CstmCard key={e.id} product={e} />
                ))
              } */}
              

                
                
            </div>
            
        </Container>



    </div>
  )
}

export default Living;