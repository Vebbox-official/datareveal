import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'


var content_h2 = {
    textTransform: `uppercase`,
    color: `#000`
}

var content_p = {
    textAlign: `justify`,
    color: `#000`,
    fontSize: `1.1em`,
    fontWeight: `400`
}

export default function Content(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} md={5} sm={12} xs={12} className="p-3">
                        <img src={props.content_img_one} alt={props.content_img_one_alt} className="img-fluid" />
                    </Col>
                    <Col lg={6} md={7} sm={12} xs={12} className="my-auto">
                        <h2 style={content_h2}>
                            {props.vision_head_one}
                        </h2>
                        <p style={content_p}>
                            {props.vision_content_one}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span:6, order:0}} md={{span:7, order:0}} sm={12} xs={{span:12, order:1}} className="my-auto">
                        <h2 style={content_h2}>
                            {props.vision_head_two}
                        </h2>
                        <p style={content_p}>
                            {props.vision_content_two}
                        </p>
                    </Col>
                    <Col lg={{span:6, order:1}} md={{span:5, order:1}} sm={12} xs={{span:12, order:0}} className="p-3">
                        <img src={props.content_img_two} alt={props.content_img_two_alt} className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={5} sm={12} xs={12} className="p-3">
                        <img src={props.content_img_three} alt={props.content_img_three_alt} className="img-fluid" />
                    </Col>
                    <Col lg={6} md={7} sm={12} xs={12} className="my-auto">
                        <h2 style={content_h2}>
                            {props.vision_head_three}
                        </h2>
                        <p style={content_p}>
                            {props.vision_content_three}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


