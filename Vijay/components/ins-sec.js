import React from 'react';
import './css/ins-sec.css';
import {Container,Row,Col} from 'react-bootstrap';
import imgsec from './assets/carousel.webp';
function Inssec() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={9}>
                        <p> Underwriters must quickly gather and analyze information across disparate sources to appropriately price risk and write new business. Critical information spread across submission documents must be manually keyed and then rekeyed into multiple downstream systems to rate and generate quotes. By the time carriers complete this labor-intensive task, the customer may have taken their business elsewhere. Most carriers rely on outsourced labor to gain efficiency, but, with the cost of outsourced labor steadily increasing and the quality of output continuing to decline, many are realizing that outsourcing is no longer an effective solution. Unfortunately, because traditional OCR cannot handle the multitude of document types and formats necessary to write new business, most automation initiatives have failed to remove the data entry bottleneck, and carriers have been left with little alternative to manual labor.</p>
                    </Col>
                    <Col lg={3}>
                        <img src={imgsec} height="250"/>
                    </Col>
                </Row>
            </Container>                    
        </div>
    )
}

export default Inssec
