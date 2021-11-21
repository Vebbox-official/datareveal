import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './css/getintouch.css'
export default class Getintouch extends Component {
    render() {
        return (
            <div>
                <Row id="get-in-touch-row" className="p-4">
                    <Col className="text-center">
                        <h2 className="text-white text-capitalize">Get started with Data Reveal Today</h2>
                        <button className="btn btn-outline-warning mt-2">Get in touch</button>
                    </Col>
                </Row>
            </div>
        )
    }
}
