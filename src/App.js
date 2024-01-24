// Needed imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styleRA.css";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

// React Fragment with <>
function App() {
  return (
    <>
      <div className="App">
        {/* Navbar  */}
        <div className='navDiv'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

        {/* The cards */}
        <div className="cardsDiv">
          {/* Cards No1 */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/dolphins.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Header>Featured</Card.Header>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          {/* Cards No2 */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/penguin.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Header>Featured</Card.Header>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          {/* Cards No3 */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/whale.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Header>Featured</Card.Header>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        </div>
      </>
      );
}

      export default App;
