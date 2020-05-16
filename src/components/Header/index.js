import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">All</Nav.Link>
                            <Nav.Link href="/manage-types">Manage Types</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}