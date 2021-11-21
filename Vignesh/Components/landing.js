import React from 'react'
import { Row, Col } from 'react-bootstrap'
import background from './img/vision-bg.jpg'
var vision_title = {
    fontSize: `2em`,
    fontWeight: `100`,
    color: `#fff`
}

var sub_title = {
    color: `#fff`
}

function Landing(props) {
    return (
        <div id="landing" style={{backgroundImage: `url(${background})`}}>

            <Row style={{ margin: 0, padding: 0 }}>
                <Col xxl={6} xl={6} lg={6} md={5} className="p-lg-5 p-2">
                    <img src={props.landing_img} alt={props.landing_img_alt} className="img-fluid" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={7} className="my-auto">
                    <h2 style={vision_title}>{props.landing_h2}</h2>
                    <h3 style={sub_title}>{props.landing_h3}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default Landing

