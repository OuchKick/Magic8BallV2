import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import  Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { twistedJosefin } from '../../utilities/CSSUtilities/CSSUtil';



function NavbarTop() {
    return (
        <Navbar bg="dark"  variant="dark" expand="lg" style={{fontFamily: `${twistedJosefin}`, fontSize: '20px'}}>
            <Container>
                <Navbar.Brand>Magic 8Ball</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/Magic8BallV2/home'>
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to ='/Magic8BallV2/history'>
                        <Nav.Link>History</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavbarTop;