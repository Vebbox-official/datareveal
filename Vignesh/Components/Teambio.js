import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
// import maria from '../Components/img/maria.jpeg'
function Teambio(props) {
   
    return (
        <>
            <Container >
                <Row>
                    <Col xxl xl lg md sm className="p-5" style={{lineHeight:"35px"}}>
                        <h3>{props.post}</h3>
                       
                        {/* <Media object src={maria} style={imgStyle} alt="alt" /> */}
                       
                    </Col>
                </Row>
                <Row>
                    <Col xxl={4} xl={4} lg={4} md={4}>
                    <img src={props.person} alt="" className="mt-3 ps-lg-5 ps-ms-5 ps-sm-3 img-fluid"/>
                    </Col>
                </Row>
                <Row>
                    <Col xxl xl lg md sm className="p-5" style={{lineHeight:"35px"}}>
                        <h3 className="mt-3">{props.name}</h3>
                        <h5>{props.role}</h5>
                        <p>{props.details}</p>
                        </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Teambio
