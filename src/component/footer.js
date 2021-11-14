import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import logo from './img/logo.png'

var list = {
    listStyleType: `none`
}

var list_heading = {
    fontSize: `1.05em`,
    textTransform: `uppercase`,
    color: `#0984e3`
}

var list_item = {
    fontSize: `1em`,
    fontWeight: `400`,
    lineHeight: `2em`,
    color: `#000`,
    cursor: `pointer`
}

var about_footer = {
    margin: `0`,
    padding: `0`,
    backgroundColor: `#0984e3`,
    color: `#fff`
}

var about = {
    fontSize: `1.1em`,
    fontWeight: `500`
}

var copyright = {
    fontSize: `1.1em`,
    fontWeight: `500`,
    textTransform: `uppercase`
}

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container className="mt-2">
                    <Row>
                        <Col xs={12} lg={3}>
                            <ul style={list}>
                                <li><img src={logo} alt="datareveal" className="img-fluid mb-3" height="100%" width="50%" /></li>
                                <li>
                                    <address>
                                        5050 Quorum Drive, Suite 700, Dallas, TX 75254, USA
                                    </address>
                                </li>
                                <li>
                                    <address>
                                        Suite 207, 4430 Bathurst Street, North York, Toronto, ON M3H3S3, Canada
                                    </address>
                                </li>
                                <li style={list_item}>info@datareavel.ai</li>
                                <li style={list_item}>704-206-9793</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={2}>
                            <ul style={list}>
                                <li><h5 style={list_heading}>company</h5></li>
                                <li style={list_item}>Home</li>
                                <li style={list_item}>About Us</li>
                                <li style={list_item}>Contact Us</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={3}>
                            <ul style={list}>
                                <li><h5 style={list_heading}>extract platform</h5></li>
                                <li style={list_item}>Vision</li>
                                <li style={list_item}>Language</li>
                                <li style={list_item}>Learning</li>
                                <li style={list_item}>API Development</li>
                                <li style={list_item}>Product Development</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={2}>
                            <ul style={list}>
                                <li><h5 style={list_heading}>industries</h5></li>
                                <li style={list_item}>Healthcare</li>
                                <li style={list_item}>Insurance</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={2}>
                            <ul style={list}>
                                <li><h5 style={list_heading}>products</h5></li>
                                <li style={list_item}>FL7-FHIR API</li>
                                <li style={list_item}>GENOMICS DNA API</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Row className="p-2" style={about_footer}>
                    <Col lg={6}>
                        <p className="text-start mt-3" style={about}>Developed By Vebbox Software Solutions</p>
                    </Col>
                    <Col lg={6}>
                        <p className="text-end mt-3" style={copyright}>All right Reserved ©Datareveal AI</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
