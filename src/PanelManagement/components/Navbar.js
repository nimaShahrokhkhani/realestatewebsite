import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    const pathname = props.location.pathname;
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/PanelManagement" active={pathname.endsWith('/PanelManagement')}>مقادیر</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default withRouter(Navigation);
