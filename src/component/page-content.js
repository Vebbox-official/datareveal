import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'


var page_content_h6 = {
    fontSize: `1.05em`,
    fontWeight: `400`,
    color: `#0984e3`,
    lineHeight: `0`
}

var page_content_h3 = {
    fontSize: `1.8em`,
    fontWeight: `500`,
    color: `#000`
}

var page_content_p = {
    fontSize: `1.1em`,
    fontWeight: `400`,
    color: `#000`
}

var general_page_div = {
    boxShadow: `0 0 10px 0 rgb(64 64 64 / 20%)`,
    textAlign: `center`,
    minHeight: `250px`,
    borderRadius: `5px`
}

var general_div_content = {
    fontWeight: `600`,
    fontSize: `1em`,
    textTransform: `uppercase`
}

export default function Pagecontent(props) {
    return (
        <div className="mt-3 p-1">
            <Container>
                <Row>
                    <Col>
                        <h6 style={page_content_h6} className="mb-3">{props.vision_content_h6}</h6>
                        <h3 style={page_content_h3}>{props.vision_content_h3}</h3>
                        <p style={page_content_p}>{props.vision_page_content_p}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} md={4}>
                        <div style={general_page_div} className="p-4 mb-2">
                            <img src={props.page_content_img_one} alt={props.page_content_img_alt_one} className="img-fluid mb-2" height="100%" width="40%" />
                            <p style={general_div_content}>
                                {props.general_page_one}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} md={4}>
                        <div style={general_page_div} className="p-4 mb-2">
                            <img src={props.page_content_img_two} alt={props.page_content_img_alt_two} className="img-fluid mb-2" height="100%" width="40%" />
                            <p style={general_div_content}>
                                {props.general_page_two}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} md={4}>
                        <div style={general_page_div} className="p-4 mb-2">
                            <img src={props.page_content_img_three} alt={props.page_content_img_alt_three} className="img-fluid mb-2" height="100%" width="40%" />
                            <p style={general_div_content}>
                                {props.general_page_three}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
