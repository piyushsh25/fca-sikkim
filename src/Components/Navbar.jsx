import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"
export function Header() {
    return (
        <nav className='nav-container'>
            {['xl'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <div className='header-img-container'>
                            <img alt='Consumer' className='header-img' src={require('./logo192.jpg')}/>
                        </div>
                        <Navbar.Brand href="#" className='header-title'>FCA SIKKIM</Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='navbar-cta-container'
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    More
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end pe-3 navbar-cta">
                                    <Nav.Link href="#action1">Events and News</Nav.Link>
                                    <Nav.Link href="#action3">About us</Nav.Link>
                                    <Nav.Link href="#action2">Get Involved</Nav.Link>
                                    <Button variant="warning" className='navbar-cta-button'>FCAS</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </nav>
    );
}
