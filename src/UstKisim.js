import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UstKisim() {
    return (
        <Navbar bg="light" expand="lg" className='mb-3'>
            <Container>
                <Navbar.Brand as={Link} to="/">Örnek Routing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
                        <Nav.Link as={Link} to="/hakkinda">Hakkında</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UstKisim;


// https://react-bootstrap.netlify.app/components/navbar/#rb-docs-content