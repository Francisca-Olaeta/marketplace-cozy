import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import cozyBlanco from '../assets/img/cozy-blanco.png';
import {
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

function TextLinkExample() {
  return (
    <footer className="footer d-block">

{/* -----------------------------------Logo------------------------------------ */}
      <Navbar className='d-flex justify-content-center' variant="dark" bg="dark">
        <Container className='justify-content-center flex-column'>
          <Navbar.Brand href="#home"><img height="70" src={cozyBlanco}/></Navbar.Brand>

{/* -----------------------------------Social media------------------------------------ */}
          <div className="d-flex justify-content-center mt-3">
          <MDBBtn tag='a' color='none' className='me-4' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon--dark' icon={faFacebook}/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='me-4' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon--dark' icon={faInstagram}/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='me-4' style={{ color: '#1266f1' }}>
                <FontAwesomeIcon className='socialmedia-icon--dark' icon={faTwitter}/>
          </MDBBtn>   
        </div>

{/* -----------------------------------Disclaimer fotos------------------------------------ */}
          <Navbar.Text className='footer__text'>Las fotos fueron sacadas referencialmente de Pinterest y Unsplash con fines educacionales</Navbar.Text>
        </Container>

        

      </Navbar>
    </footer>
  );
}

export default TextLinkExample;