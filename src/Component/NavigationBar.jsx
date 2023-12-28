import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const NavigationBar = () => {
  return (
    <>
    <Row>
        <Col className='navBar'>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand>APP LOGO</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">DASHBOARD</Nav.Link>
            <Nav.Link href="/createAdPage">CREATE ADS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Col>
      </Row>
    </>
  );
}

export default NavigationBar;