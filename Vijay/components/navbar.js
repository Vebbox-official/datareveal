import React, { Component } from 'react'
import './css/navbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './assets/logo.png'
import Legal from '../components/legal';

export default class Navigationbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand="lg" id="navbar">
                        <Container fluid>
                            <Navbar.Brand href="#"> <img
                                src={logo}
                                width="100"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="mx-auto">
                                    <Nav.Link as={Link} to="/home">home</Nav.Link>
                                    <NavDropdown title="Extract Platform" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={Link} to="/vision">vision</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/learning">learning</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/language">language</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/api_development">api development</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/product_development">product development</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="industries" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={Link} to="/healthcare">healthcare</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/insurance">insurancre</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/legal">legal</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/data">data</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/banking">banking</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/cybersecurity">cybersecurity</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="products" id="navbarScrollingDropdown">
                                        <NavDropdown.Item as={Link} to="/product_one">fl-7 fhir api adapter</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/product_two">genomics dna api</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/about">about us</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">contact us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/legal">
                            <Legal />
                        </Route>
                        {/* <Route path="/">
                            <Visionpage />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}
