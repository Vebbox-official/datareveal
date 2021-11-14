import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Parallax(props) {
    return (
        <div>
             <Row id="parallax-row">
                    <Col>
                        <h2 className="p-5 text-uppercase text-center text-white">{props.parallax_content}</h2>
                    </Col>
                </Row>
        </div>
    )
}

