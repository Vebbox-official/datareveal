import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import feature_one from './img/feature-one.png'
import feature_two from './img/feature-two.png'
import feature_three from './img/feature-three.png'
import feature_four from './img/feature-four.png'
import feature_five from './img/feature-five.png'


var title = {
    textAlign: `center`,
    textTransform: `uppercase`,
    color: '#000'
}

var feature_h5 = {
    color: `#000`,
    fontSize: `1.2em`,
    fontWeight: `600`,
    textTransform: `uppercase`
}

var feature_p = {
    color: `#000`,
    fontSize: `1em`
}

export default function Features() {
    return (
        <div>
            <Container>
                <h2 style={title} className="mt-3 p-2">Features</h2>
                <Row>
                    <Col lg={6} className="text-center p-3">
                        <img src={feature_one} alt="features datareveal" height="100%" width="12%" className="img-fluid mb-2" />
                        <h5 style={feature_h5}>
                            Modular and Configurable
                        </h5>
                        <p style={feature_p}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                    <Col lg={6} className="text-center p-3">
                        <img src={feature_two} alt="features datareveal" height="100%" width="12%" className="img-fluid mb-2" />
                        <h5 style={feature_h5}>
                            Rapid Implementation
                        </h5>
                        <p style={feature_p}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} className="text-center p-3">
                        <img src={feature_three} alt="features datareveal" height="100%" width="12%" className="img-fluid mb-2" />
                        <h5 style={feature_h5}>
                            Self Learning
                        </h5>
                        <p style={feature_p}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                    <Col lg={6} className="text-center p-3">
                        <img src={feature_four} alt="features datareveal" height="100%" width="12%" className="img-fluid mb-2" />
                        <h5 style={feature_h5}>
                            Augmented Intelligence
                        </h5>
                        <p style={feature_p}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12} className="text-center p-3">
                        <img src={feature_five} alt="features datareveal" height="100%" width="12%" className="img-fluid mb-2" />
                        <h5 style={feature_h5}>
                            Best in Class Data Security
                        </h5>
                        <p style={feature_p}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

