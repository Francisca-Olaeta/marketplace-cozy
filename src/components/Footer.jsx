import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <footer className="footer d-block">
      <Navbar variant="dark" bg="dark">
        <Container className='justify-content-center flex-column'>
          <Navbar.Brand href="#home">Cozy</Navbar.Brand>
          <Navbar.Text className='footer__text'>Las fotos fueron sacadas referencialmente de Pinterest con fines educacionales</Navbar.Text>
        </Container>
      </Navbar>
    </footer>
  );
}

export default TextLinkExample;